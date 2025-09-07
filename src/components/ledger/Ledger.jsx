import styles from "./ledger.module.css"
import { useEffect, useState } from "react"
import FormBox from "../formBox/FormBox"
import { nanoid } from "nanoid"
import EditIcon from '../../assets/icons/EditIcon.png'
import Trash from '../../assets/icons/Trash.png'

export default function({search ,page, isDeleting, setIsDeleting})
{
   useEffect(() => {
      document.title = "LockLedger - Ledger"
   },[])

   const [transactions, setTransactions] = useState([]); // storing all the transactions
   const [addingTransaction, setAddingTransaction] = useState(false); // checking if a new transaction is being added
   const [transactionToEdit, setTransaction] = useState(""); // storing a transaction temporarly to edit
   const [isEditing, setIsEditing] = useState(false); // checking if a transaction is being edited or added
   const [transactionToDelete, setTransactionToDelete] = useState(null);

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

   function deleteTransaction()
   {
      setTransactions(prev => prev.filter(transaction => transaction.id != transactionToDelete.id));
      setIsDeleting(false)
      setTransactionToDelete(null);
   }

   function displayTransactions()
   {
      const filteredTransactions = search ? 
         transactions.filter(t => t.title.toLowerCase().includes(search.toLowerCase())) : transactions;

      return filteredTransactions.map(transaction => (
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
                     }} className={styles.editBtn}>
                        <img src={EditIcon} alt="editBtn" loading='lazy' />
                     </button>
                     <button 
                        onClick={() => {setIsDeleting(true); setTransactionToDelete(transaction)}} 
                        className={styles.deleteBtn}>
                        <img src={Trash} alt="deletBtn" loading='lazy' />
                     </button>
                  </td>
            </tr>
         )
      )
   }
   

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>Ledger</h2>
            <button onClick={() => setAddingTransaction(true)} className={styles.addBtn}>Update Ledger</button>
         </div>

         {(addingTransaction || isDeleting )&& (<FormBox 
                                 page={page} 
                                 setAddingTransaction={setAddingTransaction} 
                                 addTransaction={addTransaction} 
                                 transaction={transactionToEdit}
                                 isEditing={isEditing}
                                 editTransaction={editTransaction}
                                 isDeleting={isDeleting}
                                 setIsDeleting={setIsDeleting}
                                 deleteTransaction={deleteTransaction}
                                 />)}

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
                  {displayTransactions()}
               </tbody>
            </table>
         </div>

      </section>
   )
}