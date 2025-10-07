import styles from './Primary.module.css'
import '/src/App.css'
import '../../App.css'
import SideBar from '../../components/sidebar/SideBar'
import Search from '../../components/search/Search'
import NotesSection from '../../components/notesSection/NotesSection'
import { useState } from 'react'
import Ledger from '../../components/ledger/Ledger'
import ProfileInfo from '../../components/ProfilePage/Profile'
import History from '../../components/ledgerHistory/History'

export default function NotesPage({currentUser, setCurrentUser})
{
   const [view, setView] = useState("all"); // check view of page to display intended notes
   const [search, setSearch] = useState(""); // passing search value to notes/ledger pages
   const [inNote, setInNote] = useState(false) // check if a note is opened to display the note content
   const [isOpen, setIsOpen] = useState(true); // checking if sidebar is open to change layout
   const [page, setPage] = useState("notes"); // check page
   const [isDeleting, setIsDeleting] = useState(false); // check if a user is deleting a note or transaction to display a message
   const [isMobile, setIsMobile] = useState(window.innerWidth > 768)
   const [transactions, setTransactions] = useState([]); // storing all the transactions
   

   function changePage(page)
   {
      setPage(page);
   }

   return (
      <div className={`${styles.bodyContainer} ${isOpen ? styles.sidebarOpen : ""}`}>
         <Search isOpen ={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} isMobile={isMobile} />
         <SideBar isMobile={isMobile} setIsMobile={setIsMobile} currentUser={currentUser} setInNote={setInNote} view={view} setView={setView} isOpen ={isOpen} setIsOpen={setIsOpen} changePage={changePage} page={page} />
         {page === "notes" && <NotesSection currentUser={currentUser} inNote={inNote} setInNote={setInNote} view={view} search={search} isOpen={isOpen} page={page} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />}
         {page === "ledger" && <Ledger transactions={transactions} setTransactions={setTransactions} currentUser={currentUser} isOpen={isOpen} search={search} page={page} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />}
         {page === "history" && <History isMobile={isMobile} transactions={transactions} setTransactions={setTransactions} currentUser={currentUser} />}
         {page === "profile" && <ProfileInfo isOpen={isOpen} currentUser={currentUser} setCurrentUser={setCurrentUser} page={page}/>}
      </div>
   )
}