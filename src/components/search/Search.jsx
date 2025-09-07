import styles from './search.module.css'
import humMenu from '../../assets/icons/humMenu.png'
//import { useState } from 'react'

export default function Search({search, setSearch, isOpen, setIsOpen})
{
   return(
      <div className={`${styles.searchContainer} ${isOpen ? styles.open : ""}`}>
         {!isOpen && <button onClick={() => {setIsOpen(true)}} className={styles.humMenuBtn}>
            <img className={styles.humMenu} src={humMenu} alt="Menu" loading='lazy' />
         </button>}
         <input value={search} type="search" onChange={e => setSearch(e.target.value)} className={styles.searchInput} placeholder='Search...' />
      </div>
   )
}
