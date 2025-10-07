import styles from './search.module.css'
import humMenu from '../../assets/icons/humMenu.webp'
import { useState, useEffect } from 'react'
import { initPWAInstallPrompt, triggerPWAInstall } from '../../utils/pwaInstall'

export default function Search({isMobile, search, setSearch, isOpen, setIsOpen})
{

   const [canInstall, setCanInstall] = useState(false);

   useEffect(() => {
      isMobile ? setIsOpen(true) : setIsOpen(false)
      initPWAInstallPrompt(setCanInstall)
   }, [])

   return(
      <div className={`${styles.searchContainer} ${isOpen ? styles.open : ""}`}>
         {!isOpen && <button onClick={() => {setIsOpen(true)}} className={styles.humMenuBtn}>
            <img className={styles.humMenu} src={humMenu} alt="Menu" loading='lazy' />
         </button>}
         <input value={search} type="search" onChange={e => setSearch(e.target.value)} className={styles.searchInput}  placeholder='Search...' />
         <button onClick={triggerPWAInstall} className={styles.installBtn}>Install App</button>
      </div>
   )
}