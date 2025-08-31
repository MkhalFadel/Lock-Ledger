import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/Notes';
import FormBox from '../formBox/FormBox';
import { nanoid } from 'nanoid';

export default function NotesSection({page})
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
         date: date
      }])
      console.log(notes)
      setAddingNote(false);
   }

   const notesEl = notes.map(note => {
      return (
         <button onClick={() => openNote(note.id)} key={note.id} className={styles.notesContent}>
            <h4>{note.title}</h4>
            <p>{note.date}</p>
         </button>
      )
   })

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>All Notes</h2>
            <button onClick={() => setAddingNote(true)} className={styles.addBtn}>Add Note +</button>
         </div>

         {addingNote && <FormBox addNotes={addNotes} page={page} setAddingNote={setAddingNote} />}

         {!inNote && <div className={styles.notes}>
            {notesEl}
         </div>}

         {inNote && <Notes noteId={noteId} notes={notes} />}
      </section>
   )
}