import styles from './Primary.module.css'
import '/src/App.css'
import '../../App.css'
import SideBar from '../../components/sidebar/SideBar'
import Search from '../../components/search/Search'
import NotesSection from '../../components/notesSection/NotesSection'
import { useState } from 'react'
import Ledger from '../../components/ledger/Ledger'
import ProfileInfo from '../../components/ProfilePage/Profile'

export default function NotesPage()
{
   const [view, setView] = useState("all"); // check view of page to display intended notes
   const [search, setSearch] = useState(""); // passing search value to notes/ledger pages
   const [inNote, setInNote] = useState(false) // check if a note is opened to display the note content
   const [isOpen, setIsOpen] = useState(true); // checking if sidebar is open to change layout
   const [page, setPage] = useState("notes"); // check page
   const [isDeleting, setIsDeleting] = useState(false); // check if a user is deleting a note or transaction to display a message
   

   function changePage(page)
   {
      setPage(page);
   }

   return (
      <div className={`${styles.bodyContainer} ${isOpen ? styles.sidebarOpen : ""}`}>
         <Search isOpen ={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} />
         <SideBar setInNote={setInNote} view={view} setView={setView} isOpen ={isOpen} setIsOpen={setIsOpen} changePage={changePage} page={page} />
         {page === "notes" && <NotesSection inNote={inNote} setInNote={setInNote} view={view} search={search} isOpen={isOpen} page={page} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />}
         {page === "ledger" && <Ledger search={search} page={page} isDeleting={isDeleting} setIsDeleting={setIsDeleting} />}
         {page === "profile" && <ProfileInfo isOpen={isOpen} />}
      </div>
   )
}