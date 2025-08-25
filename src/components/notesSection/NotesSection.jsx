import styles from './notesSection.module.css';
import { useEffect } from 'react';

export default function NotesSection()
{
   useEffect(() => {
      document.title = "LockLedger - Notes"
   },[])

   return (
      <section className={styles.content}>
         <div className={styles.head}>
            <h2>All Notes</h2>
            <button className={styles.addBtn}>Add Note +</button>
         </div>

         <div className={styles.notes}>
            <div className={styles.notesContent}>
               <h4>Groceries</h4>
               <p>Firday, June 19</p>
            </div>

            <div className={styles.notesContent}>
               <h4>Groceries</h4>
               <p>Firday, June 19</p>
            </div>

            <div className={styles.notesContent}>
               <h4>Groceries</h4>
               <p>Firday, June 19</p>
            </div>

            <div className={styles.notesContent}>
               <h4>Groceries</h4>
               <p>Firday, June 19</p>
            </div>

            <div className={styles.notesContent}>
               <h4>Groceries</h4>
               <p>Firday, June 19</p>
            </div>
         </div>
      </section>
   )
}