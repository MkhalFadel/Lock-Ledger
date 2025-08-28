import styles from "./formBox.module.css";
import { useState } from "react";

export default function FormBox({title, setTitle, page, setAddingNote, addNotes})
{

   const today = new Date().toISOString().split("T")[0];
   const [date, setDate] = useState(today);
   
   return (
      <div className={styles.container}>
         <div className={styles.inputBox}>
            {page === "notes" && <div>
               <h4>Add New Note</h4>
               <input onChange={e => setTitle(e.target.value)} placeholder="Add Title" value={title} type="text" />
               <div className={styles.btns}>
                  <button onClick={() => addNotes(title)} className={`${styles.formBtn} ${styles.addBtn}`}>Add Note</button>
                  <button onClick={() => setAddingNote(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </div>}


            {page === "ledger" && <div>
               <h4>Update Ledger</h4>
               <input value={date} type="date" />
               <input onChange={e => setTitle(e.target.value)} placeholder="Add Title" value={title} type="text" />
               <select className={styles.typeBox} name="type" id="type" >
                  <option disabled>Select Type</option>
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
               </select>
               <input type="number" placeholder="$0.00" />
               
               <div className={styles.btns}>
                  <button className={`${styles.formBtn} ${styles.addBtn}`}>Update</button>
                  <button className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </div>}
         </div>
      </div>
   )
}