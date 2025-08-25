import styles from "./ledger.module.css"

export default function()
{
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
                     <td>17-8-2025</td>
                     <td>EWC Finals</td>
                     <td>Expenses</td>
                     <td>$150</td>
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