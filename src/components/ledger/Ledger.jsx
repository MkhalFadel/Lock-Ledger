import styles from "./ledger.module.css"
import { useEffect, useState } from "react"
import FormBox from "../formBox/FormBox"
import { nanoid } from "nanoid"

export default function({page})
{
   useEffect(() => {
      document.title = "LockLedger - Ledger"
   },[])

   const [transactions, setTransactions] = useState([]); // storing all the transactions
   const [addingTransaction, setAddingTransaction] = useState(false); // checking if a new transaction is being added
   const [transactionToEdit, setTransaction] = useState(""); // storing a transaction temporarly to edit
   const [isEditing, setIsEditing] = useState(false); // checking if a transaction is being edited or added

   function addTransaction(date, title, type, amount)
   {
      setTransactions(prevActions => [...prevActions, {
         id: nanoid(),
         date: date,
         title: title,
         type: type,
         amount: amount
      }])
      setAddingTransaction(false);
      setIsEditing(false);
      setTransaction("");
      console.log(transactions)
   }

   function editTransaction(date, title, type, amount)
   {
      // looping through the original state changing only the one matching the id 
      setTransactions(prev => 
         prev.map(t => t.id === transactionToEdit.id ? {...t, date, title, type, amount} : t) 
      );
      setAddingTransaction(false)
      setIsEditing(false)
      setTransaction("");
      console.log(transactionToEdit);
   }

   function deleteTransaction(id)
   {
      setTransactions(prev => prev.filter(transaction => transaction.id != id));
   }
   
   const transactionsEl = transactions.map(transaction => {
      return(
            <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.title}</td>
                  <td>{transaction.type}</td>
                  <td>${transaction.amount}</td>
                  <td>
                     <button onClick={() => {
                        setTransaction(transactions.find(t => t.id === transaction.id))
                        setAddingTransaction(true)
                        setIsEditing(true)
                     }} className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                     <button onClick={() => deleteTransaction(transaction.id)} className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                  </td>
            </tr>
      )
   } )

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>Ledger</h2>
            <button onClick={() => setAddingTransaction(true)} className={styles.addBtn}>Update Ledger</button>
         </div>

         {addingTransaction && <FormBox 
                                 page={page} 
                                 setAddingTransaction={setAddingTransaction} 
                                 addTransaction={addTransaction} 
                                 transaction={transactionToEdit}
                                 isEditing={isEditing}
                                 editTransaction={editTransaction}
                                 />}

         <div className={styles.tableContainer}>
            <table className={styles.table}>
               <thead>
                  <tr>
                     <th>Date</th>   
                     <th>Title</th>  
                     <th>Type</th> 
                     <th>Amount</th>   
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {transactionsEl}
               </tbody>
            </table>
         </div>

      </section>
   )
}