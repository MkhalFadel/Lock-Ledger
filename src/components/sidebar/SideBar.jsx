import styles from './sideBar.module.css'
import xIcon from '../../assets/icons/xIcon.png';
import logo from '../../assets/lockLedgerLogo.png';
import profileIcon from '../../assets/icons/profileIcon.png';
import { useEffect, useState } from 'react';


export default function SideBar({isMobile, setIsMobile, setInNote, view, setView, isOpen, setIsOpen, changePage, page, currentUser})
{
   
   useEffect(() => {
      function handleResize()
      {
         setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener("resize", handleResize)

      handleResize();
      return () => window.removeEventListener("resize", handleResize)
   }, [])

   return (
      <nav className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
               <img src={xIcon} alt="Close Button" loading='lazy' />
            </button>
            <img className={styles.logo} src={logo} alt="lockLedgerIcon" loading='lazy' />
            <div className={styles.notesNav}>
               <h3>Notes:</h3>
               <p className={`${(page === 'notes' && view === 'all') ? styles.selected : ""}`} onClick={() => {changePage("notes"); setView("all"); setInNote(false); isMobile ? setIsOpen(false) : ""}}>All Notes</p>
               <p className={`${(page === 'notes' && view === 'favorites') ? styles.selected : ""}`} onClick={() => {changePage("notes"); setView("favorites"); setInNote(false); isMobile ? setIsOpen(false) : ""}}>Favorites</p>
               <p className={`${(page === 'notes' && view === 'trash') ? styles.selected : ""}`} onClick={() => {changePage("notes"); setView("trash"); setInNote(false); isMobile ? setIsOpen(false) : ""}}>Trash</p>
            </div>
            <div className={styles.expNav}>
               <h3>Ledger:</h3>
               <p className={`${page === 'ledger' ? styles.selected : ""}`} onClick={() => {changePage("ledger"); isMobile ? setIsOpen(false) : ""}}>All Entries</p>
               <p>History</p> 
            </div>
            <div onClick={() => {changePage("profile"); isMobile ? setIsOpen(false) : ""}} className={styles.profile}>
               <img className={styles.profilePic} src={profileIcon} alt="profilePic" loading='lazy' />
               <h3 className={styles.username}>{currentUser.username}</h3>
            </div>
      </nav>
   )
}