import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/Notes';
import FormBox from '../formBox/FormBox';
import emptyStarIcon from '../../assets/icons/emptyStarIcon.webp'
import starIcon from '../../assets/icons/starIcon.webp'
import restoreIcon from '../../assets/icons/restoreIcon.webp'
import notesNotFound from '../../assets/icons/noNotesFound.webp';
import { createNote, fetchNotes, updateNote, deleteAll, cleanupNotes } from '../../API/notes'; 
import { OrbitProgress } from 'react-loading-indicators';  
import { formatDate } from '../../utils/utility';

export default function NotesSection({inNote, setInNote, view, search, isOpen, page, isDeleting, setIsDeleting, currentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])
   
   const [notes, setNotes] = useState([]) // store the notes
   const [noteId, setNoteId] = useState(null); // setting the id to open the correct note
   const [addingNote, setAddingNote] = useState(false); // check if a note is being added
   const [loading, setLoading] = useState(true);

   const notesExist = (notes.length <= 0 || notes.every(n => n.is_deleted)) && view === 'all' && !loading;
   const notesFavoriteExist = notes.every(n => !n.is_favorite) && view === 'favorites' && !loading || (notes.every(n => n.is_deleted && n.is_favorite) && view === 'favorites');
   const notesDeletedExist = notes.every(n => !n.is_deleted) && view === 'trash' && !loading;


   useEffect(() => {
      async function loadNotes()
      {
         try
         {
            const userNotes = await fetchNotes();
            const notes = userNotes || [];
            notes && setNotes(notes.sort((a, b) => b.created_at.localeCompare(a.created_at)));
            cleanupTrash(notes);
         }
         catch(err)
         {
            console.log(err)
         }
         finally{
            setLoading(false)
         }
      }

      async function cleanupTrash(notes)
      {
         const now = Date.now();
         const twoWeeks = 14 * 24 * 60 * 60 * 1000;

         if(!notes) return;

         for (let n of notes)
         {
            if(n.is_deleted && n.deletedAt && now - n.deletedAt > twoWeeks) 
               await cleanupNotes(n.id)   
         }
      }

      loadNotes();
   }, [])
   
   function openNote(noteId)
   {
      setInNote(true);
      setNoteId(noteId)
   }
   
   async function addNote(userId, title, content, date, lastEdit, deletedAt)
   {
      setAddingNote(false)
      const newNote = await createNote(userId, title, content, date, lastEdit, deletedAt)
      setNotes(prevNotes => [newNote ,...prevNotes]);
   }

   function getFilteredNotes()
   {
      if (view === 'all' && notes) return notes.filter(n => (!n.is_deleted))
      if (view === 'favorites' && notes) return notes.filter(n => (n.is_favorite && !n.is_deleted))
      if (view === 'trash' && notes) return notes.filter(n => n.is_deleted)
   }
   
   async function addFavorite(note)
   {
      setNotes(prev => 
         prev.map(n => n.id === note.id ? {...n, is_favorite: !n.is_favorite} : n)
      )
      await updateNote(note.id, {is_favorite: !note.is_favorite})
   }

   async function recoverNote(id)
   {
      setNotes(prevNotes => prevNotes.map(n => n.id === id ? {...n, is_deleted: false} : n))
      await updateNote(id, {is_deleted: false})
   }

   async function handleDeleteAll()
   {
      try{
         setNotes(prevNotes => prevNotes.filter(n => !n.is_deleted))
         await deleteAll(notes)
      }catch(err){
         console.error("Failed to delete all notes: ", err)
      }
   }

   function displayNotes() {
      
      let filteredNotes = getFilteredNotes() || [];

      if (search) {
         filteredNotes = filteredNotes.filter(note =>
            note.title.toLowerCase().includes(search.toLowerCase())
         );
      }
      
      return filteredNotes.map(note => (
         <div onClick={() => openNote(note.id)} key={note.id} className={styles.notesContent}>
            <div>
               <h4>{note.title}</h4>
               <button onClick={e => { e.stopPropagation(); view !== 'trash' ? addFavorite(note) : recoverNote(note.id) }}>
                  {(!note.is_favorite && view !== 'trash') && (<img src={emptyStarIcon} alt="notFavorite" loading='lazy' />)}
                  {(note.is_favorite && view !== 'trash') && (<img src={starIcon} alt="Favorite" loading='lazy' />)}
                  {view === 'trash' && <img src={restoreIcon} alt="restoreBtn" />}   
               </button>
            </div>
            <p>{formatDate(note.created_at)}</p>
         </div>

   ));
   }

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>{view === 'all' ? "All Notes" : view === 'favorites' ? "Favorites" : "Trash"}</h2>
            <div>
               {view === 'trash' && <button onClick={handleDeleteAll} className={styles.deleteAllBtn}>Delete All</button>}

               {!inNote && view !== 'trash' && (<button onClick={() => setAddingNote(true)} className={`${styles.addBtn} ${view !== 'all' ? styles.disable : ''}`} disabled={view !== 'all'}>
                  Add Note +
               </button>)}

               {inNote && <button onClick={() => setInNote(false) } className={styles.addBtn}>
                  Return to Notes
               </button>}
            </div>
         </div>

         {notesExist && <img id='1' src={notesNotFound} alt="notesNotFound" className={styles.noNotesImg} />}
         {notesFavoriteExist && <img id='2' src={notesNotFound} alt="notesNotFound" className={styles.noNotesImg} />}
         {notesDeletedExist && <img id='3' src={notesNotFound} alt="notesNotFound" className={styles.noNotesImg} />}


         {addingNote && <FormBox currentUser={currentUser} addNote={addNote} page={page} setAddingNote={setAddingNote} />}

         {!inNote && <div className={styles.notes}>
            {displayNotes()}
         </div>}

         {loading && <div className={styles.loading}>
            <OrbitProgress color="cyan" size="large" text="" textColor="" />  
         </div>}
         
         {inNote && <Notes 
                           isOpen={isOpen}
                           setInNote={setInNote}
                           noteId={noteId}  
                           page={page} 
                           notes={notes} 
                           setNotes={setNotes}
                           isDeleting={isDeleting} 
                           setIsDeleting={setIsDeleting} 
                           view={view} />}
      </section>
   )
}