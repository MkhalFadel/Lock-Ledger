import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/Notes';
import FormBox from '../formBox/FormBox';
import { nanoid } from 'nanoid';
import emptyStarIcon from '../../assets/icons/emptyStarIcon.png'
import starIcon from '../../assets/icons/starIcon.png'
import restoreIcon from '../../assets/icons/restoreIcon.png'

export default function NotesSection({inNote, setInNote, view, search, isOpen, page, isDeleting, setIsDeleting})
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])
   
   const [notes, setNotes] = useState([]) // store the notes
   const [noteId, setNoteId] = useState(null); // setting the id to open the correct note
   const [addingNote, setAddingNote] = useState(false); // check if a note is being added
   
   function openNote(noteId)
   {
      setInNote(true);
      setNoteId(noteId)
   }

   function getFilteredNotes()
   {
      if (view === 'all') return notes.filter(n => (!n.isDeleted))
      if (view === 'favorites') return notes.filter(n => (n.isFavorite && !n.isDeleted))
      if (view === 'trash') return notes.filter(n => n.isDeleted)
   }

   function addNotes(noteTitle, date)
   {
      setNotes(prevNotes => [...prevNotes,{
         id: nanoid(),
         title: noteTitle,
         content: "testing",
         date: date,
         isFavorite: false,
         isDeleted: false,
      }])
      console.log(notes)
      setAddingNote(false);
   }

   function addFavorite(note)
   {
      setNotes(prev => 
         prev.map(n => n.id === note.id ? {...n, isFavorite: !n.isFavorite} : n)
      )
   }

   function recoverNote(id)
   {
      setNotes(prevNotes => prevNotes.map(n => n.id === id ? {...n, isDeleted: false} : n))
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
            <h2>All Notes</h2>
            {!inNote && <button onClick={() => setAddingNote(true)} className={`${styles.addBtn} ${view !== 'all' ? styles.disable : ''}`} disabled={view !== 'all'}>
               Add Note +
            </button>}

            {inNote && <button onClick={() => setInNote(false) } className={styles.addBtn}>
               Return to Notes
            </button>}
         </div>

         {addingNote && <FormBox addNotes={addNotes} page={page} setAddingNote={setAddingNote} />}

         {!inNote && <div className={styles.notes}>
            {displayNotes()}
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