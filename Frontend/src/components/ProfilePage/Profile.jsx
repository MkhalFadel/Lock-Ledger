import styles from './profile.module.css'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/icons/profileIcon.webp';
import EditIcon from '../../assets/icons/EditIcon.webp'
import saveIcon from '../../assets/icons/saveIcon.webp'
import xIcon from '../../assets/icons/xIcon.webp'
import { updateInfo } from '../../API/users';
import { removeLocalStorage } from '../../utils/localStorage';
import { updateLocalStorage } from '../../utils/localStorage';
import FormBox from '../formBox/FormBox';
import { validateForm } from '../../utils/validationMessages';

export default function ProfileInfo({isOpen, currentUser, setCurrentUser, page})
{
   useEffect(() => {
      document.title = "LockLedger - Profile"   

   }, [])

   const navigate = useNavigate();

   //const [isEditingImg, setIsEditingImg] = useState(false);

   const [name, setName] = useState(currentUser.username);
   const [email, setEmail] = useState(currentUser.email);

   const nameRef = useRef(null);
   const emailRef = useRef(null);

   const [isEditingName , setIsEditingName] = useState(false);
   const [isEditingEmail, setIsEditingEmail] = useState(false);

   const [infoEdited, setInfoEdited] = useState("");
   const [isChangingPassword, setIsChangingPassword] = useState(false);

   const [errors, setErrors] = useState({});

   useEffect(() => {
      const timer = setTimeout(() => {
         setErrors({});
      }, 3000)

      return () => clearTimeout(timer); 
   }, [errors])


   async function handleInfoChange(newInfo, type)
   {
      const validationErrors = validateForm({email, name});
      if(Object.keys(validationErrors).length > 0)
      {
         setErrors(validationErrors);
         return;
      }

      await updateInfo(currentUser.id, newInfo)
      if(type === 'username')
      {
         setCurrentUser(prevInfo => ({...prevInfo, username: name}))
         updateLocalStorage("currentUser", {username: name})
         setIsEditingName(false)
      }
      else if(type === 'email')
      {
         setCurrentUser(prevInfo => ({...prevInfo, email: email}))
         updateLocalStorage("currentUser", {email: email})
         setIsEditingEmail(false);
      }
   }

   function logout()
   {
      setCurrentUser(0);
      removeLocalStorage("currentUser");
      navigate('/Lock-Ledger/login');
   }

   useEffect(() => {
   if (isEditingName && nameRef.current) {
      const input = nameRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
   }
   else if(isEditingEmail && emailRef.current)
   {
      const input = emailRef.current;
      input.focus();
   }

}, [isEditingName, isEditingEmail]);



   return (
      <div className={styles.profileContainer}>
         <div className={styles.head}>
            <h2>Profile & Settings</h2>
         </div>
         <div className={styles.profile}>
            <div className={styles.accountInfo}>
               <div className={styles.profilePicContainer}>
                  <img src={currentUser.image_url || profileIcon} alt="ProfilePicture" className={styles.profilePic} loading='lazy' />
                  { /* <button className={`${styles.editPicBtn} ${!isOpen ? styles.sideBarClose : ""}`}>
                     <img src={EditIcon} alt="editBtn" loading='lazy' />
                  </button> */}
               </div>
               <div className={styles.info}>
                  <div className={styles.userInfo}>
                     <label htmlFor="UserName">Username</label>
                     <div className={styles.editInfo}>
                        <input id='UserName' placeholder='Username' className={errors.name && styles.invalid} ref={nameRef} type="text" value={name} onChange={e => setName(e.target.value)} disabled={!isEditingName} />
                        <button onClick={() => {setIsEditingName(true); setInfoEdited(name)}}>
                           {!isEditingName && <img src={EditIcon} alt="editBtn" loading='lazy' />}
                        </button>
                        {isEditingName && <div className={styles.changesBtns}>
                              <button onClick={() => handleInfoChange({username: name}, "username")}>
                                 <img src={saveIcon} alt="editBtn" loading='lazy' />  
                              </button>
                              <button onClick={() => {setIsEditingName(false); setName(infoEdited)}}>
                                 <img src={xIcon} alt="discardBtn" loading='lazy' />
                              </button>
                           </div>}
                     </div>
                     {errors.name && <p className={styles.errorMsg}>*{errors.name}*</p>}
                  </div>

                  <div className={styles.userInfo}>
                     <label htmlFor="email">Email</label>
                     <div className={styles.editInfo}>
                        <input id='email' placeholder='example@gmail.com' className={errors.email && styles.invalid} ref={emailRef} type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={!isEditingEmail} />
                        <button onClick={() => {setIsEditingEmail(true); setInfoEdited(email)}}>
                           {!isEditingEmail && <img src={EditIcon} alt="editBtn" loading='lazy' />}
                        </button>
                        {isEditingEmail && <div className={styles.changesBtns}>
                              <button onClick={() => handleInfoChange({email: email}, "email")}>
                                 <img src={saveIcon} alt="editBtn" loading='lazy' />  
                              </button>
                              <button onClick={() => {setIsEditingEmail(false); setEmail(infoEdited)}}>
                                 <img src={xIcon} alt="discardBtn" loading='lazy' />
                              </button>
                           </div>}
                     </div>
                     {errors.email && <p className={styles.errorMsg}>*{errors.email}*</p>}
                  </div>

                  {<div className={styles.userInfo}>
                     <label style={{marginBottom: "5px"}} htmlFor="password">Password</label>
                     <button onClick={() => setIsChangingPassword(true)} className={styles.changePassBtn}>Change Password</button>
                  </div>}

               </div>
            </div>

            {isChangingPassword && <FormBox isChangingPassword={isChangingPassword} currentUser={currentUser} setCurrentUser={setCurrentUser} setIsChangingPassword={setIsChangingPassword}page={page} />}

            <div className={styles.settings}>
               <div>Notifications</div>
               <div>Report A Bug</div>
               <div onClick={logout}>Log out</div>
            </div>
         </div>
      </div>
   )
}