import styles from './search.module.css'
import humMenu from '../../assets/icons/humMenu.webp'
import { useEffect } from 'react'

export default function Search({isMobile, search, setSearch, isOpen, setIsOpen})
{

   useEffect(() => {
      isMobile ? setIsOpen(true) : setIsOpen(false)

   }, [])

   return(
      <div className={`${styles.searchContainer} ${isOpen ? styles.open : ""}`}>
         {!isOpen && <button onClick={() => {setIsOpen(true)}} className={styles.humMenuBtn}>
            <img className={styles.humMenu} src={humMenu} alt="Menu" loading='lazy' />
         </button>}
         <input value={search} type="search" onChange={e => setSearch(e.target.value)} className={styles.searchInput} placeholder='Search...' />
      </div>
   )
}
