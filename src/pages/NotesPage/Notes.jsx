import styles from './notes.module.css'
import '/src/App.css'
import '../../App.css'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import NotesSection from '../../components/notesSection/NotesSection'
import Expenses from '../../components/ledger/Ledger'
import { useState } from 'react'
import Ledger from '../../components/ledger/Ledger'

export default function NotesPage()
{

   const [isOpen, setIsOpen] = useState(false);
   const [page, setPage] = useState("notes");

   function changePage(page)
   {
      setPage(page);
   }

   return (
      <div className={`${styles.bodyContainer} ${isOpen ? styles.sidebarOpen : ""}`}>
         <Search isOpen ={isOpen} setIsOpen={setIsOpen} />
         <Header isOpen ={isOpen} setIsOpen={setIsOpen} changePage={changePage} />
         {page === "notes" && <NotesSection />}
         {page === "ledger" && <Ledger />}
      </div>
   )
}