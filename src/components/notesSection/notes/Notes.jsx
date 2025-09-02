import styles from "./notes.module.css"
import { useState,useEffect } from "react"
import { DAYS, MONTHS, formatTime } from "../../../utils/utility";

export default function Notes({noteId, notes})
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
         setLastEdit(`${month} ${dayDate} ${formatTime(hour)}:${formatTime(minutes)} ${amOrPm} ${dayName}`)
      }
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
               <p>Last Edit: {lastEdit}</p>
            </div>

            <div className={styles.rightSide}>
               {isEditing  && <button 
                  onClick={discardChanges}
                  className={`${styles.discardBtn} ${styles.tableBtn}`}>Discard Changes</button>}
               <button 
                  onClick={saveChanges} 
                  className={`${styles.editBtn} ${styles.tableBtn}`}
                  style={{ backgroundColor: isEditing ? "#00cc66" : "#00c4cc" }}
                  >
                     {isEditing ? "Save" : "Edit"}
               </button>
               <button className={`${styles.deleteBtn} ${styles.tableBtn}`}>Delete</button>
            </div>
         </div>
         
         {isEditing && <textarea 
            onChange={(event) => setEditedText(event.target.value)} 
            className={styles.textEdit} 
            name="notesContent" id="0">
            {text}
         </textarea> }
         
         {!isEditing && <div className={styles.notesContent}>
            {text}
         </div>}
      </div>
   )
}