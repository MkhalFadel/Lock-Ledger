import styles from './profile.module.css'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/icons/profileIcon.png';
import EditIcon from '../../assets/icons/EditIcon.png'
import saveIcon from '../../assets/icons/saveIcon.png'
import xIcon from '../../assets/icons/xIcon.png'
import showIcon from '../../assets/icons/showIcon.png'
import hideIcon from '../../assets/icons/hideIcon.png'
import { updateInfo } from '../../API/users';

export default function ProfileInfo({isOpen, currentUser, setCurrentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Profile"

   }, [])

   const navigate = useNavigate();

   //const [isEditingImg, setIsEditingImg] = useState(false);

   const [name, setName] = useState(currentUser[0].username);
   const [email, setEmail] = useState(currentUser[0].email);
   const [password, setPassword] = useState(currentUser[0].password);

   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const [isEditingName , setIsEditingName] = useState(false);
   const [isEditingEmail, setIsEditingEmail] = useState(false);
   const [isEditingPassword, setIsEditingPassword] = useState(false);

   const [infoEdited, setInfoEdited] = useState("");
   const [isShowing, setIsShowing] = useState(false);


   async function handleInfoChange(newInfo, type)
   {
      await updateInfo(currentUser[0].id, newInfo)
      if(type === 'username')
      {
         setCurrentUser(prevInfo => [{...prevInfo[0], username: name}])
         setIsEditingName(false)
      }
      else if(type === 'email')
      {
         setCurrentUser(prevInfo => [{...prevInfo[0], email: email}])
         setIsEditingEmail(false);
      }
      else{
         setCurrentUser(prevInfo => [{...prevInfo[0], password: password}])
         setIsEditingPassword(false)
      }
   }

   function logout()
   {
      setCurrentUser(null);
      navigate('/Lock-Ledger/login');
   }

   function showPassword(e)
   {
      e.preventDefault();
      setIsShowing(prev => !prev)
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
      input.setSelectionRange(input.value.length, input.value.length);
   }
   else{
      const input = passwordRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
   }


}, [isEditingName, isEditingEmail, isEditingPassword]);



   return (
      <div className={styles.profileContainer}>
         <div className={styles.head}>
            <h2>Profile & Settings</h2>
         </div>
         <div className={styles.profile}>
            <div className={styles.accountInfo}>
               <div className={styles.profilePicContainer}>
                  <img src={profileIcon} alt="ProfilePicture" className={styles.profilePic} loading='lazy' />
                  <button className={`${styles.editPicBtn} ${!isOpen ? styles.sideBarClose : ""}`}>
                     <img src={EditIcon} alt="editBtn" loading='lazy' />
                  </button>
               </div>
               <div className={styles.info}>
                  <div className={styles.userInfo}>
                     <label htmlFor="UserName">Username</label>
                     <div className={styles.editInfo}>
                        <input id='UserName' ref={nameRef} type="text" value={name} onChange={e => setName(e.target.value)} disabled={!isEditingName} />
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
                  </div>

                  <div className={styles.userInfo}>
                     <label htmlFor="email">Email</label>
                     <div className={styles.editInfo}>
                        <input id='email' ref={emailRef} type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={!isEditingEmail} />
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
                  </div>

                  <div className={styles.userInfo}>
                     <label htmlFor="password">Password</label>
                     <div className={styles.editInfo}>
                        <div>
                           {!isShowing && <input id='password' style={{marginLeft: "-5px"}} ref={passwordRef} type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={!isEditingPassword} />}
                           {isShowing && <input id='password' ref={passwordRef} type="text" value={password} onChange={e => setPassword(e.target.value)} disabled={!isEditingPassword} />}
                           <button onClick={e => showPassword(e)} className={styles.showBtn}>
                              {!isShowing && <img src={showIcon} alt="showIcon" />}
                              {isShowing && <img src={hideIcon} alt="showIcon" />}
                           </button>
                        </div>
                        <button onClick={() => {setIsEditingPassword(true); setInfoEdited(password)}}>
                           {!isEditingPassword && <img src={EditIcon} alt="editBtn" loading='lazy' />}
                        </button>
                        {isEditingPassword && <div className={styles.changesBtns}>
                              <button onClick={() => handleInfoChange({password: password}, "password")}>
                                 <img src={saveIcon} alt="editBtn" loading='lazy' />  
                              </button>
                              <button onClick={() => {setIsEditingPassword(false); setPassword(infoEdited)}}>
                                 <img src={xIcon} alt="discardBtn" loading='lazy' />
                              </button>
                           </div>}
                     </div>
                  </div>

               </div>
            </div>

            <div className={styles.settings}>
               <div>Notifications</div>
               <div>Report A Bug</div>
               <div onClick={logout}>Log out</div>
            </div>
         </div>
      </div>
   )
}