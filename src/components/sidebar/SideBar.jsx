import styles from './sideBar.module.css'

export default function Header(props)
{
   
   return (
      <nav className={`${styles.sideBar} ${props.isOpen ? styles.open : ""}`}>
            <button onClick={() => props.setIsOpen(false)} className={styles.closeBtn}>
               <img src="src/assets/icons/xIcon.png" alt="Close Button" />
            </button>
            <img className={styles.logo} src="src/assets/lockLedgerLogo.png" alt="lockLedgerIcon" />
            <div className={styles.notesNav}>
               <h3>Notes:</h3>
               <p className={`${props.page === 'notes' ? styles.selected : ""}`} onClick={() => props.changePage("notes")}>All Notes</p>
               <p>Favorites</p>
               <p>Trash</p>
            </div>
            <div className={styles.expNav}>
               <h3>Ledger:</h3>
               <p className={`${props.page === 'ledger' ? styles.selected : ""}`} onClick={() => props.changePage("ledger")}>All Entries</p>
               <p>History</p> 
            </div>
            <div className={styles.profile}>
               <img className={styles.profilePic} src="src/assets/icons/profileIcon.png" alt="profilePic" />
               <h3 className={styles.username}>MkhalFadel</h3>
            </div>
      </nav>
   )
}