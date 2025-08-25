import styles from './Primary.module.css'
import '/src/App.css'
import '../../App.css'
import SideBar from '../../components/sidebar/SideBar'
import Search from '../../components/search/Search'
import NotesSection from '../../components/notesSection/NotesSection'
import { useState } from 'react'
import Ledger from '../../components/ledger/Ledger'

export default function NotesPage()
{

   const [isOpen, setIsOpen] = useState(true);
   const [page, setPage] = useState("notes");

   function changePage(page)
   {
      setPage(page);
   }

   return (
      <div className={`${styles.bodyContainer} ${isOpen ? styles.sidebarOpen : ""}`}>
         <Search isOpen ={isOpen} setIsOpen={setIsOpen} />
         <SideBar isOpen ={isOpen} setIsOpen={setIsOpen} changePage={changePage} page={page} />
         {page === "notes" && <NotesSection />}
         {page === "ledger" && <Ledger />}
      </div>
   )
}