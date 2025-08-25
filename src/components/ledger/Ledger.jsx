import styles from "./ledger.module.css"
import { useEffect } from "react"

export default function()
{
   useEffect(() => {
      document.title = "LockLedger - Ledger"
   },[])

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>Ledger</h2>
            <button className={styles.addBtn}>Update Ledger</button>
         </div>
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
                  <tr>
                     <td>30-11-2025</td>
                     <td>Birthday</td>
                     <td>Expenses</td>
                     <td>$100</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <td>1-1-2025</td>
                     <td>New Year's Eve</td>
                     <td>Expenses</td>
                     <td>$225</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <td>17-8-2025</td>
                     <td>EWC Finals</td>
                     <td>Expenses</td>
                     <td>$150</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <td>1-8-2025</td>
                     <td>PayCheck</td>
                     <td>Income</td>
                     <td>$1000</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <td>8-7-2025</td>
                     <td>Side Hustle</td>
                     <td>Expenses</td>
                     <td>$150</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
                  <tr>
                     <td>5-6-2025</td>
                     <td>Gas</td>
                     <td>Expenses</td>
                     <td>$45</td>
                     <td>
                        <button className={`${styles.tableBtn} ${styles.editBtn}`}>Edit</button>
                        <button className={`${styles.tableBtn} ${styles.deleteBtn}`}>Delete</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>

      </section>
   )
}