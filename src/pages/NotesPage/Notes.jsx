import styles from './notes.module.css'
import '/src/App.css'
import '../../App.css'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import NotesSection from '../../components/notesSection/NotesSection'
import { useState } from 'react'

export default function NotesPage()
{

   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={`${styles.bodyContainer} ${isOpen ? styles.sidebarOpen : ""}`}>
         <Search isOpen ={isOpen} setIsOpen={setIsOpen} />
         <Header isOpen ={isOpen} setIsOpen={setIsOpen} />
         <NotesSection />
      </div>
   )
}