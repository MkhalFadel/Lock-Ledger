import styles from "./pin.module.css"
import lockLedgerLogo from "../../assets/lockLedgerLogo.webp"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../utils/validationMessages";

export default function Pin({currentUser})
{
   const [errors, setErrors] = useState({});
   const [pin, setPin] = useState("");

   useEffect(() => {
      const timer = setTimeout(() => {
         setErrors({});
      }, 3000)

      return () => clearTimeout(timer);
   }, [errors])


   const navigate = useNavigate();

   function unlockPin()
   {
      const validationErrors = validateForm({pin});

      if(Object.keys(validationErrors).length > 0)
      {
         setErrors(validationErrors);
         return;
      }

      if(Number(pin) === currentUser.pin)
         navigate("/Lock-Ledger/");
      else 
         setErrors({pin: "Invalid PIN"});
   }

   return (
      <div className={styles.bodyContainer}>
         <form onSubmit={e => {e.preventDefault(); unlockPin();}}>
            <div className={styles.container}>
               <img className={styles.logo} src={lockLedgerLogo} alt="LockLedgerLogo" loading='lazy'/>
               <h1>Enter your PIN to Conitnue</h1>
               <div className={styles.pinContainer}>
                  <label htmlFor="pin">PIN</label>
                  <input onChange={e => setPin(e.target.value)} placeholder='PIN' id="pin" type="number" className={`${styles.pin} ${errors.pin && styles.invalid}`} />
                  {errors.pin && <p className={styles.errorMsg}>*{errors.pin}*</p>}
               </div>

               <button type='submit' className={styles.unlockBtn}>Unlock</button>
            </div>
         </form>
      </div>
   )
}