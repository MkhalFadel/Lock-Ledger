import styles from './header.module.css'

export default function Header(props)
{

   return (
      <nav className={`${styles.header} ${props.isOpen ? styles.open : ""}`}>
            <button onClick={() => props.setIsOpen(false)} className={styles.closeBtn}>
               <img src="src/assets/icons/xIcon.png" alt="Close Button" />
            </button>
            <img className={styles.logo} src="src/assets/lockLedgerLogo.png" alt="lockLedgerIcon" />
            <div className={styles.notesNav}>
               <h3>Notes:</h3>
               <p>All Notes</p>
               <p>Favorites</p>
               <p>Trash</p>
            </div>
            <div className={styles.expNav}>
               <h3>Expenses:</h3>
               <p>All Expenses</p>
               <p>History</p> 
            </div>
            <div className={styles.profile}>
               <img className={styles.profilePic} src="src/assets/icons/profileIcon.png" alt="profilePic" />
               <h3 className={styles.username}>MkhalFadel</h3>
            </div>
      </nav>
   )
}