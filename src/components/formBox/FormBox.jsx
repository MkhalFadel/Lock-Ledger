import styles from "./formBox.module.css";
import { useState } from "react";

export default function FormBox({page, 
                                 setAddingNote, 
                                 addNotes, 
                                 addTransaction, 
                                 setAddingTransaction, 
                                 transaction, 
                                 isEditing, 
                                 editTransaction,
                                 isDeleting,
                                 setIsDeleting,
                                 deleteNote,
                                 deleteTransaction})
{

   // getting today's date
   const today = new Date().toISOString().split("T")[0];
   
   // state variables for the Pages
   const [date, setDate] = useState(isEditing ? transaction.date: today);
   const [title, setTitle] = useState(isEditing ? transaction.title : "");
   // only used in the Ledger page
   const [type, setType] = useState(isEditing ? transaction.type : "");
   const [amount, setAmount] = useState(isEditing ? transaction.amount : 0.00);
   
   return (
      <div className={styles.container}>
         <div className={styles.inputBox}>
               {/* appears when a new note is being added */}
            {page === "notes" && !isDeleting &&  (<div>
               <h4>Add New Note</h4>
               <input onChange={e => setTitle(e.target.value)} placeholder="Add Title" value={title} type="text" />
               <div className={styles.btns}>
                  <button onClick={() => addNotes(title, date)} className={`${styles.formBtn} ${styles.addBtn}`}>Add Note</button>
                  <button onClick={() => setAddingNote(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </div>)}

               {/* appears when a note is being Deleted */}
            {page === "notes" && isDeleting && (
               <div>
                  <h4>Delete Note</h4>
                  <div className={styles.btns}>
                     <button onClick={deleteNote} className={`${styles.formBtn} ${styles.deleteBtn}`}>Confirm Delete</button>
                     <button onClick={() => setIsDeleting(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
                  </div>
               </div>
               )}

               {/* appears when a new transaction is being added */}
            {page === "ledger" && !isDeleting && (<div>
               <h4>Update Ledger</h4>
               <input onChange={e => setDate(e.target.value)} value={date} type="date" />
               <input onChange={e => setTitle(e.target.value)} placeholder="Add Title" value={title} type="text" />
               <select value={type} onChange={e => setType(e.target.value)} className={styles.typeBox} name="type" id="type" >
                  <option value="" disabled>Select Type</option>
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
               </select>
               <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="$0.00" />
               
               <div className={styles.btns}>
                  <button onClick={() => { {/*change the function used either editing or adding*/}
                     isEditing ? editTransaction(date, title, type, amount) : addTransaction(date, title, type, amount)}} 
                     className={`${styles.formBtn} ${styles.addBtn}`}>Update</button>
                  
                  <button onClick={() => setAddingTransaction(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </div>)}

               {/* appears when a transaction is being Deleted */}
            {page === "ledger" && isDeleting && (
               <div>
                  <h4>Delete Transaction</h4>
                  <div className={styles.btns}>
                     <button onClick={deleteTransaction} className={`${styles.formBtn} ${styles.deleteBtn}`}>Confirm Delete</button>
                     <button onClick={() => {setIsDeleting(false); setAddingTransaction(false)}} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
                  </div>
               </div>
               )}
         </div>
      </div>
   )
}