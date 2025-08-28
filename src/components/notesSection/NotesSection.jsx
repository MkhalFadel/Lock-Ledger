import styles from './notesSection.module.css';
import { useEffect, useState } from 'react';
import Notes from './notes/notes';
import FormBox from '../formBox/FormBox';

export default function NotesSection({page})
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])
   
   const [notes, setNotes] = useState([])
   const [inNote, setInNote] = useState(false)
   const [noteId, setNoteId] = useState(null);
   const [addingNote, setAddingNote] = useState(false);
   const [title, setTitle] = useState("New Note");

   function openNote(noteId)
   {
      setInNote(true);
      setNoteId(noteId)
   }

   function addNotes(noteTitle)
   {
      setNotes(prevNotes => [...prevNotes,{
         id: Date.now(),
         title: noteTitle,
         content: "testing",
         date: "1/1//2025"
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

         {addingNote && <FormBox addNotes={addNotes} title={title} setTitle={setTitle} page={page} setAddingNote={setAddingNote} />}

         {!inNote && <div className={styles.notes}>
            {notesEl}
         </div>}

         {inNote && <Notes noteId={noteId} notes={notes} />}
      </section>
   )
}