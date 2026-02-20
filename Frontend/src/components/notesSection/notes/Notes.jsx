import styles from "./notes.module.css"
import FormBox from "../../formBox/FormBox";
import { useState, useEffect, useRef } from "react"
import { DAYS, MONTHS, formatTime } from "../../../utils/utility";
import EditIcon from '../../../assets/icons/EditIcon.webp'
import saveIcon from '../../../assets/icons/saveIcon.webp'
import Trash from '../../../assets/icons/Trash.webp'
import xIcon from '../../../assets/icons/xIcon.webp'
import { updateNote, updateNotesContent } from "../../../API/notes";

export default function Notes({isOpen, setInNote, page, noteId, notes, setNotes, isDeleting, setIsDeleting, view})

{
   // searching for the clicked note via ID
   const note = notes.find(note => note.id === noteId );
   const textareaRef = useRef(null);

   const [isEditing, setIsEditing] = useState(false)  ;
   const [text, setText] = useState("");
   const [editedText,setEditedText] = useState("");
   const [lastEdit, setLastEdit] = useState(note.lastEdit);

   // setting the text variable to the notes content if found
   useEffect(() => {
      if (note) setText(note.content)
   },[note])

   useEffect(() => {
   document.body.style.overflow = "hidden";
   return () => {
         document.body.style.overflow = "";
      };
   }, []);

   useEffect(() => {
      if(isEditing && textareaRef.current)
      {
         const input = textareaRef.current;
         input.focus();
         input.setSelectionRange(input.value.length, input.value.length);
      }
   }, [isEditing])
   
   async function lastEditTime()
   {
         if(text !== editedText)
         {
            const date = new Date();
            const month = MONTHS[date.getMonth()];
            const day = date.getDate();
            let hour = date.getHours();
            hour = hour % 12 || 12; 
            const minutes = date.getMinutes();
            const amOrPm = hour > 12 ? "AM" : "PM";
            const lastSavedEdit = `${month} ${day} ${formatTime(hour)}:${formatTime(minutes)} ${amOrPm}`
            setLastEdit(lastSavedEdit);
            note.lastEdit = lastSavedEdit;
            console.log(lastSavedEdit);
            await updateNote(note.id, {lastEdit: lastSavedEdit})
         }
   }
   

   async function handleDeleteNote()
   {
      setNotes(prevNotes => prevNotes.map(n => n.id === note.id ? {...n, is_deleted: true} : n))
      setIsDeleting(false);
      setInNote(false);
      await updateNote(note.id, {is_deleted: true})
   }
   
   async function saveChanges()
   {
      if(isEditing){
         setText(editedText || text);
         note.content = editedText ?? text;  
         lastEditTime();   
         setIsEditing(prev => !prev)
         await updateNotesContent(note.id, (editedText ?? text))
      }else{
         setEditedText(text)
         setIsEditing(prev => !prev)
      }
   }

   function discardChanges()
   {
      if(isEditing) setEditedText(text);
      setIsEditing(prev => !prev)
   }
   
   return (
      <div className={styles.container}>
         <div className={styles.toolbar}>
            <div className={styles.leftSide}>
               <h3>{note.title}</h3>
               <p>{lastEdit}</p>
            </div>

            <div className={styles.rightSide}>
               <button 
                  onClick={saveChanges} 
                  className={styles.editBtn}
                  disabled={view === 'trash'}
                  >
                     <img src={isEditing ? saveIcon : EditIcon} alt={isEditing ? "saveBtn" : "editBtn"} />
               </button>
               
               {!isEditing && <button onClick={() => setIsDeleting(true)} className={styles.deleteBtn} disabled={view === 'trash'}>
                  <img src={Trash} alt="DeleteBtn" />
               </button>}

               {isEditing  && <button 
                  onClick={discardChanges}
                  className={styles.discardBtn}>
                     <img src={xIcon} alt="Discard changes" />      
               </button>}
            </div>
         </div>
         
         {isEditing && <textarea 
            ref={textareaRef}
            value={isEditing ? editedText : text}
            onChange={(event) => setEditedText(event.target.value)} 
            className={`${styles.textEdit} ${!isOpen ? styles.sideBarClose : ""}`} 
            name="notesContent" id="0">
            {text}
         </textarea> }
         
         {!isEditing && <div className={`${styles.notesContent} ${!isOpen ? styles.sideBarClose : ""}`}>
            {text}
         </div>}

         {isDeleting && <FormBox 
                                 deleteNote={handleDeleteNote} 
                                 page={page} 
                                 isDeleting={isDeleting} 
                                 setIsDeleting={setIsDeleting} />}
      </div>
   )
}