import styles from "./ledger.module.css"
import { useEffect, useState } from "react"
import FormBox from "../formBox/FormBox"
import EditIcon from '../../assets/icons/EditIcon.webp'
import Trash from '../../assets/icons/Trash.webp'
import noTransactions from '../../assets/icons/noTransaction.webp'
import { addTransaction, fetchLedger, editLedger, deleteLedger } from "../../API/ledger"
import { OrbitProgress } from "react-loading-indicators"

export default function({transactions, setTransactions, search ,page, isDeleting, setIsDeleting, currentUser, isOpen})
{
   useEffect(() => {
      document.title = "LockLedger - Ledger"
   },[])

   useEffect(() => {
      async function loadLedgerData()
      {
         try
         {
            const userLedger = await fetchLedger(currentUser.id);
            userLedger ? setTransactions(userLedger.sort((a, b) => b.date.localeCompare(a.date))) : setTransactions([]);
         }
         catch(err)
         {
            console.log(err);
         }
         finally{
            setLoading(false);
         }
      }

      loadLedgerData();
   }, [])

   const [addingTransaction, setAddingTransaction] = useState(false); // checking if a new transaction is being added
   const [transactionToEdit, setTransactionToEdit] = useState(""); // storing a transaction temporarly to edit
   const [isEditing, setIsEditing] = useState(false); // checking if a transaction is being edited or added
   const [transactionToDelete, setTransactionToDelete] = useState(null);
   const [loading, setLoading] = useState(true);

   async function handleAddTransaction(date, title, type, amount)
   {
      const newTransaction = await addTransaction(currentUser.id, date, title, type, amount);
      setTransactions(prevActions => [newTransaction, ...prevActions].sort((a, b) => b.date.localeCompare(a.date)))
      setAddingTransaction(false);
      setIsEditing(false);
      setTransactionToEdit("");
   }

   async function editTransaction(date, title, type, amount)
   {
      // looping through the original state changing only the one matching the id 
      const editedData = await editLedger(transactionToEdit.id, date, title, type, amount) 
      setTransactions(prev => 
         prev.map(t => t.id === transactionToEdit.id ? {...t, date: editedData.date, title: editedData.title, type: editedData.type, amount: editedData.amount} : t) 
      );
      setAddingTransaction(false)
      setIsEditing(false)
      setTransactionToEdit("");
      console.log(transactionToEdit);
   }

   async function deleteTransaction()
   {
      setIsDeleting(false)
      setTransactionToDelete(null);
      setTransactions(prev => prev.filter(transaction => transaction.id != transactionToDelete.id));
      await deleteLedger(transactionToDelete.id)
   }

   function displayTransactions()
   {
      const filteredTransactions = search ? 
         transactions.filter(t => t.title.toLowerCase().includes(search.toLowerCase())) : transactions;

      if(transactions) return filteredTransactions.map(transaction => (
         <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.title}</td>
                  <td>{transaction.type}</td>
                  <td>${transaction.amount}</td>
                  <td>
                     <button onClick={() => {
                        setTransactionToEdit(transactions.find(t => t.id === transaction.id))
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
                                 addTransaction={handleAddTransaction} 
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

            {loading && <div className={styles.loading}>
               <OrbitProgress color="cyan" size="large" text="" textColor="" />  
            </div>}

            {!loading && !transactions.length  && (<img src={noTransactions} className={`${styles.noTransactionsImg} ${!isOpen && styles.notOpen}`} alt="No Current Transactions" />)}
      
      </section>
   )
}