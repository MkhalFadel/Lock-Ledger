import styles from "./notes.module.css"
import FormBox from "../../formBox/FormBox";
import { useState,useEffect } from "react"
import { DAYS, MONTHS, formatTime } from "../../../utils/utility";
import EditIcon from '../../../assets/icons/EditIcon.png'
import saveIcon from '../../../assets/icons/saveIcon.png'
import Trash from '../../../assets/icons/Trash.png'
import xIcon from '../../../assets/icons/xIcon.png'

export default function Notes({isOpen, setInNote, page, noteId, notes, setNotes, isDeleting, setIsDeleting, view})
{
   const [isEditing, setIsEditing] = useState(false)  ;
   const [text, setText] = useState("");
   const [editedText,setEditedText] = useState("");
   const [lastEdit, setLastEdit] = useState("");

   // searching for the clicked note via ID
   const note = notes.find(note => note.id === noteId );

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
   
   function lastEditTime()
   {
      if(isEditing)
      {
         const date = new Date();
         const month = MONTHS[date.getMonth()];
         const dayDate = date.getDate();
         let hour = date.getHours();
         hour = hour % 12 || 12; 
         const minutes = date.getMinutes();
         const amOrPm = hour > 12 ? "AM" : "PM";
         const dayName = DAYS[date.getDay()];  
         setLastEdit(`${month} ${dayDate} ${formatTime(hour)}:${formatTime(minutes)} ${amOrPm} `)
      }
   }

   function deleteNote()
   {
      setNotes(prevNotes => prevNotes.map(n => n.id === note.id ? {...n, isDeleted: true} : n))
      setIsDeleting(false);
      setInNote(false);
   }
   
   function saveChanges()
   {
      if(isEditing){
         setText(editedText || text);
         lastEditTime();   
      }else{
         setEditedText(text)
      }
      setIsEditing(prev => !prev)
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
            onChange={(event) => setEditedText(event.target.value)} 
            className={`${styles.textEdit} ${!isOpen ? styles.sideBarClose : ""}`} 
            name="notesContent" id="0">
            {text}
         </textarea> }
         
         {!isEditing && <div className={`${styles.notesContent} ${!isOpen ? styles.sideBarClose : ""}`}>
            {text}
         </div>}

         {isDeleting && <FormBox 
                                 deleteNote={deleteNote} 
                                 page={page} 
                                 isDeleting={isDeleting} 
                                 setIsDeleting={setIsDeleting} />}
      </div>
   )
}