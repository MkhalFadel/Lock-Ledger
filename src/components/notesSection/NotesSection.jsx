import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/Notes';
import FormBox from '../formBox/FormBox';
import emptyStarIcon from '../../assets/icons/emptyStarIcon.webp'
import starIcon from '../../assets/icons/starIcon.webp'
import restoreIcon from '../../assets/icons/restoreIcon.webp'
import notesNotFound from '../../assets/icons/noNotesFound.webp';
import { createNote, fetchNotes, updateNote, deleteAll } from '../../API/notes'; 
import { OrbitProgress } from 'react-loading-indicators';  

export default function NotesSection({inNote, setInNote, view, search, isOpen, page, isDeleting, setIsDeleting, currentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])
   
   const [notes, setNotes] = useState([]) // store the notes
   const [noteId, setNoteId] = useState(null); // setting the id to open the correct note
   const [addingNote, setAddingNote] = useState(false); // check if a note is being added
   const [loading, setLoading] = useState(true);

   const notesExist = (notes.length <= 0 || notes.every(n => n.isDeleted)) && view === 'all' && !loading;
   const notesFavoriteExist = notes.every(n => !n.isFavorite) && view === 'favorites' && !loading || (notes.every(n => n.isDeleted && n.isFavorite) && view === 'favorites');
   const notesDeletedExist = notes.every(n => !n.isDeleted) && view === 'trash' && !loading;

   useEffect(() => {
      async function loadNotes()
      {
         try
         {
            const userNotes = await fetchNotes(currentUser.id);
            userNotes ? setNotes(userNotes) : setNotes([]);
         }
         catch(err)
         {
            console.log(err)
         }
         finally{
            setLoading(false)
         }
      }

      loadNotes();
   }, [])
   
   function openNote(noteId)
   {
      setInNote(true);
      setNoteId(noteId)
   }
   
   async function addNote(userId, title, content, date, lastEdit)
   {
      setAddingNote(false)
      const newNote = await createNote(userId, title, content, date, lastEdit)
      setNotes(prevNotes => [newNote ,...prevNotes]);
   }

   function getFilteredNotes()
   {
      if (view === 'all' && notes) return notes.filter(n => (!n.isDeleted))
      if (view === 'favorites' && notes) return notes.filter(n => (n.isFavorite && !n.isDeleted))
      if (view === 'trash' && notes) return notes.filter(n => n.isDeleted)
   }
   
   async function addFavorite(note)
   {
      setNotes(prev => 
         prev.map(n => n.id === note.id ? {...n, isFavorite: !n.isFavorite} : n)
      )
      await updateNote(note.id, {isFavorite: !note.isFavorite})
   }

   async function recoverNote(id)
   {
      setNotes(prevNotes => prevNotes.map(n => n.id === id ? {...n, isDeleted: false} : n))
      await updateNote(id, {isDeleted: false})
   }

   async function handleDeleteAll()
   {
      try{
         setNotes(prevNotes => prevNotes.filter(n => !n.isDeleted))
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
               <button onClick={e => { e.stopPropagation(); addFavorite(note); }}>
                  {(!note.isFavorite && view !== 'trash') && (<img src={emptyStarIcon} alt="notFavorite" loading='lazy' />)}
                  {(note.isFavorite && view !== 'trash') && (<img src={starIcon} alt="Favorite" loading='lazy' />)}
                  {view === 'trash' && <button className={styles.recoverBtn} onClick={e => {e.stopPropagation(); recoverNote(note.id);}}>
                     <img src={restoreIcon} alt="restoreBtn" />   
                  </button>}
               </button>
            </div>
            <p>{note.date}</p>
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