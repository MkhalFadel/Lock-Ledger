import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/Notes';
import FormBox from '../formBox/FormBox';
import { nanoid } from 'nanoid';
import emptyStarIcon from '../../assets/icons/emptyStarIcon.png'
import starIcon from '../../assets/icons/starIcon.png'

export default function NotesSection({isOpen, page, isDeleting, setIsDeleting})
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])
   
   const [notes, setNotes] = useState([]) // store the notes
   const [inNote, setInNote] = useState(false) // check if a note is opened to display the note content
   const [noteId, setNoteId] = useState(null); // setting the id to open the correct note
   const [addingNote, setAddingNote] = useState(false); // check if a note is being added
   
   function openNote(noteId)
   {
      setInNote(true);
      setNoteId(noteId)
   }

   function addNotes(noteTitle, date)
   {
      setNotes(prevNotes => [...prevNotes,{
         id: nanoid(),
         title: noteTitle,
         content: "testing",
         date: date,
         isFavorite: false
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

   const notesEl = notes.map(note => {
      return (
         <div onClick={() => openNote(note.id)} key={note.id} className={styles.notesContent}>
            <div>
               <h4>{note.title}</h4>
               <button onClick={e => {e.stopPropagation(); addFavorite(note)}}>
                  {!note.isFavorite && <img src={emptyStarIcon} alt="alt" />}
                  {note.isFavorite && <img src={starIcon} alt="alt1" />}
               </button>
            </div>
            <p>{note.date}</p>
         </div>
      )
   })
   

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>All Notes</h2>
            <button onClick={() => inNote ? setInNote(false) : setAddingNote(true)} className={styles.addBtn}>
               {inNote ? "Return to Notes" : "Add Note +"}
            </button>
         </div>

         {addingNote && <FormBox addNotes={addNotes} page={page} setAddingNote={setAddingNote} />}

         {!inNote && <div className={styles.notes}>
            {notesEl}
         </div>}

         {inNote && <Notes 
                           isOpen={isOpen}
                           setInNote={setInNote}
                           noteId={noteId}  
                           page={page} 
                           notes={notes} 
                           setNotes={setNotes}
                           isDeleting={isDeleting} 
                           setIsDeleting={setIsDeleting} />}
      </section>
   )
}