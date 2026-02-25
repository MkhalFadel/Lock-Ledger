import styles from './createPin.module.css'
import lockLedgerLogo from "../../../assets/lockLedgerLogo.webp"
import { useState, useEffect } from "react";
import {updateInfo} from "../../../API/users" 
import { validateForm } from "../../../utils/validationMessages";

export default function CreatePin({currentUser, setCurrentUser, setPinState})
{
   const [errors, setErrors] = useState({});
   const [pin, setPin] = useState("");

   useEffect(() => {
      const timer = setTimeout(() => {
         setErrors({});
      }, 3000)

      return () => clearTimeout(timer);
   }, [errors])

   async function createPin()
   {
      const res = await updateInfo(currentUser.id, {pin: Number(pin)})
      setCurrentUser(a => ({...a, pin: Number(pin)}))
      if(res.pin == pin)
         setPinState("unlock")
   }

   return (
         <form onSubmit={e => {e.preventDefault(); createPin()}}>
            <div className={styles.container}>
               <img className={styles.logo} src={lockLedgerLogo} alt="LockLedgerLogo" loading='lazy'/>
               <h1>Create a PIN</h1>
               <div className={styles.pinContainer}>
                  <label htmlFor="pin">PIN</label>
                  <input onChange={e => setPin(e.target.value)} placeholder='PIN' id="pin" type="number" className={`${styles.pin} ${errors.pin && styles.invalid}`} />
                  {errors.pin && <p className={styles.errorMsg}>*{errors.pin}*</p>}
               </div>

               <button type='submit' className={styles.unlockBtn}>Create</button>
            </div>
         </form>
   )
}