import styles from './search.module.css'
import humMenu from '../../assets/icons/humMenu.png'

export default function Search(props)
{

   return(
      <div className={`${styles.searchContainer} ${props.isOpen ? styles.open : ""}`}>
         {!props.isOpen && <button onClick={() => {props.setIsOpen(true)}} className={styles.humMenuBtn}>
            <img className={styles.humMenu} src={humMenu} alt="Menu" />
         </button>}
         <input type="search" className={styles.searchInput} placeholder='Search...' />
      </div>
   )
}
