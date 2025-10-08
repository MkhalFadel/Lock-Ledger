import styles from "./formBox.module.css";
import { useState, useEffect, useRef } from "react";
import showIcon from '../../assets/icons/showIcon.webp'
import hideIcon from '../../assets/icons/hideIcon.webp'
import { validateForm, validatePasswordChanges } from "../../utils/validationMessages";
import { updateLocalStorage } from "../../utils/localStorage";
import { updateInfo } from "../../API/users";
import bcrypt from "bcryptjs";

export default function FormBox({page, 
                                 setAddingNote, 
                                 addNote, 
                                 addTransaction, 
                                 setAddingTransaction, 
                                 transaction, 
                                 isEditing, 
                                 editTransaction,
                                 isDeleting,
                                 setIsDeleting,
                                 deleteNote,
                                 deleteTransaction,
                                 currentUser,
                                 setCurrentUser,
                                 isChangingPassword,
                                 setIsChangingPassword})
{

   // getting today's date
   const today = new Date().toISOString().split("T")[0];
   
   // state variables for the Pages
   const [date, setDate] = useState(isEditing ? transaction.date: today);
   const [title, setTitle] = useState(isEditing ? transaction.title : "");
   // only used in the Ledger page
   const [type, setType] = useState(isEditing ? transaction.type : "");
   const [amount, setAmount] = useState(isEditing ? transaction.amount : 0.00);
   
   const [errors, setErrors] = useState({});

   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [isShowingCurrent, setIsShowingCurrent] = useState(false);
   const [isShowingNew, setIsShowingNew] = useState(false);


   const titleRef = useRef(null);

   useEffect(() => {
      if(titleRef.current)
         titleRef.current.focus();
   }, [])

   useEffect(() => {
      if(Object.keys(errors).length > 0)
      {
         const timer = setTimeout(() => {
            setErrors({});
         }, 3000)

         return () => clearTimeout(timer);
      }
   }, [errors])

   function handleAdding()
   {
      if(page === 'notes')
      {
         const validationErrors = validateForm({title});
         if(Object.keys(validationErrors).length > 0)
            setErrors(validationErrors);
         else
            addNote(currentUser.id, title, "This is a New Note", today, "", "")
      }
      else{
         const validationErrors = validateForm({date, title, type, amount});
         if(Object.keys(validationErrors).length > 0)
            setErrors(validationErrors)
         else
            isEditing ? editTransaction(date, title, type, amount) : addTransaction(date, title, type, amount)
      }
   }

   function showPassword(e, type)
   {
      e.preventDefault();
      type === 'current' ? setIsShowingCurrent(prev => !prev) : setIsShowingNew(prev => !prev)
   }

   async function handleChangingPassword()
   {
      const validationErrors = validatePasswordChanges(currentPassword, newPassword)
      
      if(Object.keys(validationErrors).length > 0)
      {
         setErrors(validationErrors);
      }
      else{
         const isMatch = bcrypt.compareSync(currentPassword, currentUser.hashedPassword)
         if(!isMatch) 
         {
            setErrors(prev => ({...prev, currentPassword: "Invalid Password"}))
            return;
         }
         else if(currentPassword === newPassword)
         {
            setErrors(prev => ({...prev, newPassword: "This is the current Password"}))
            return;
         }
         else{
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(newPassword, salt)
            setIsChangingPassword(false)
            await updateInfo(currentUser.id, {hashedPassword: hashedPassword})
            updateLocalStorage("currentUser", {hashedPassword: hashedPassword})
            setCurrentUser(prevInfo => ({...prevInfo, hashedPassword: hashedPassword}))
         }
         
      }

   }

   return (
      <div className={styles.container}>
         <div className={styles.inputBox}>
               {/* appears when a new note is being added */}
            {page === "notes" && !isDeleting &&  (<form onSubmit={e => {e.preventDefault(); handleAdding();}}>
               <h4>Add New Note</h4>
               <input onChange={e => setTitle(e.target.value)} ref={titleRef} placeholder="Add Title" value={title} type="text" className={errors.title ? styles.invalid : ""} />
               {errors.title && <p className={styles.errorMsg}>*{errors.title}*</p>}
               <div className={styles.btns}>
                  <button type="submit" className={`${styles.formBtn} ${styles.addBtn}`}>Add Note</button>
                  <button onClick={() => setAddingNote(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </form>)}

               {/* appears when a note is being Deleted */}
            {page === "notes" && isDeleting && (
               <form onSubmit={e => {e.preventDefault(); deleteNote();}}>
                  <h4>Delete Note</h4>
                  <div className={styles.btns}>
                     <button type="submit" className={`${styles.formBtn} ${styles.deleteBtn}`}>Confirm Delete</button>
                     <button onClick={() => setIsDeleting(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
                  </div>
               </form>
               )}

               {/* appears when a new transaction is being added */}
            {page === "ledger" && !isDeleting && (<form onSubmit={e => {e.preventDefault(); handleAdding();}} className={styles.ledgerForm}>
               <h4>Update Ledger</h4>
               <input onChange={e => setDate(e.target.value)} value={date} type="date" />
               <input onChange={e => setTitle(e.target.value)} ref={titleRef} placeholder="Add Title" value={title} type="text" className={errors.title && styles.invalid} />
               {errors.title && <p className={styles.errorMsg}>*{errors.title}*</p>}
               <select value={type} onChange={e => setType(e.target.value)} className={`${styles.typeBox} ${errors.type && styles.invalid}`} name="type" id="type" >
                  <option value="" disabled>Select Type</option>
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
               </select>
               {errors.type && <p className={styles.errorMsg}>*{errors.type}*</p>}
               <input value={amount} onChange={e => setAmount(e.target.value)} type="number" placeholder="$0.00" className={errors.amount && styles.invalid} />
               {errors.amount && <p className={styles.errorMsg}>*{errors.amount}*</p>}
               <div className={styles.btns}>
                  <button type="submit" className={`${styles.formBtn} ${styles.addBtn}`}>Update</button>
                  <button onClick={() => setAddingTransaction(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
               </div>
            </form>)}

               {/* appears when a transaction is being Deleted */}
            {page === "ledger" && isDeleting && (
               <form onSubmit={e => {e.preventDefault(); deleteTransaction();}}>
                  <h4>Delete Transaction</h4>
                  <div className={styles.btns}>
                     <button type="submit" className={`${styles.formBtn} ${styles.deleteBtn}`}>Confirm Delete</button>
                     <button onClick={() => {setIsDeleting(false); setAddingTransaction(false)}} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
                  </div>
               </form>
               )}

            {page === "profile" && isChangingPassword && (<form onSubmit={e => {e.preventDefault(); handleChangingPassword();} }>
               <h4>Change Password</h4>
                  <div> 
                     <label style={{marginLeft: "5px"}} htmlFor="currentPassword">Current Password</label>
                     <div className={styles.passwordContainer}>
                        {!isShowingCurrent && <input id='currentPassword' className={errors.currentPassword ? styles.invalid : ""} placeholder="Current Password" type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />}
                        {isShowingCurrent && <input id='currentPassword' className={errors.currentPassword ? styles.invalid : ""} placeholder="Current Password" type="text" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />}
                        {errors.currentPassword && <p className={styles.errorMsg}>*{errors.currentPassword}*</p>}
                        <button type="button" onClick={e => showPassword(e, "current")} className={styles.showBtn}>
                           {!isShowingCurrent && <img className={styles.showIcon} src={showIcon} alt="showIcon" />}
                           {isShowingCurrent && <img className={styles.hideIcon} src={hideIcon} alt="showIcon" />}
                        </button>
                     </div>
                  </div>

                  <div> 
                     <label style={{marginLeft: "5px"}} htmlFor="newPassword">New Password</label>
                     <div className={styles.passwordContainer}>
                        {!isShowingNew && <input id='newPassword' className={errors.newPassword ? styles.invalid : ""} placeholder="New Password" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />}
                        {isShowingNew && <input id='newPassword' className={errors.newPassword ? styles.invalid : ""} placeholder="New Password" type="text" value={newPassword} onChange={e => setNewPassword(e.target.value)} />}
                        {errors.newPassword && <p className={styles.errorMsg}>*{errors.newPassword}*</p>}
                        <button type="button" onClick={e => showPassword(e, "new")} className={styles.showBtn}>
                           {!isShowingNew && <img className={styles.showIcon} src={showIcon} alt="showIcon" />}
                           {isShowingNew && <img className={styles.hideIcon} src={hideIcon} alt="showIcon" />}
                        </button>
                     </div>
                  </div>
                  <div className={styles.btns}>
                     <button type="submit" className={`${styles.formBtn} ${styles.deleteBtn}`}>Change</button>
                     <button onClick={() => setIsChangingPassword(false)} className={`${styles.formBtn} ${styles.cancelBtn}`}>Cancel</button>
                  </div>
            </form>)}
         </div>
      </div>
   )
}