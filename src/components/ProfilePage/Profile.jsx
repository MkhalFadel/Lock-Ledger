import styles from './profile.module.css'
import { useEffect, useState } from 'react'
import profileIcon from '../../assets/icons/profileIcon.png';
import EditIcon from '../../assets/icons/EditIcon.png'
import saveIcon from '../../assets/icons/saveIcon.png'
import xIcon from '../../assets/icons/xIcon.png'

export default function ProfileInfo({isOpen})
{
   useEffect(() => {
      document.title = "LockLedger - Profile"

   }, [])

   //const [isEditingImg, setIsEditingImg] = useState(false);
   const [isEditingName, setIsEditingName] = useState(false);
   const [isEditingEmail, setIsEditingEmail] = useState(false);
   const [isEditingPassword, setIsEditingPassword] = useState(false);

   return (
      <div className={styles.profileContainer}>
         <div className={styles.head}>
            <h2>Profile & Settings</h2>
         </div>
         <div className={styles.profile}>
            <div className={styles.accountInfo}>
               <div className={styles.profilePicContainer}>
                  <img src={profileIcon} alt="ProfilePicture" className={styles.profilePic} />
                  <button className={`${styles.editPicBtn} ${!isOpen ? styles.sideBarClose : ""}`}>
                     <img src={EditIcon} alt="editBtn" />
                  </button>
               </div>
               <div className={styles.info}>
                  <div className={styles.userInfo}>
                     <label htmlFor="UserName">Username</label>
                     <div className={styles.editInfo}>
                        <input id='UserName' type="text" value="MkhalFadel" disabled={!isEditingName} />
                        <button onClick={() => setIsEditingName(true)}>
                           {!isEditingName && <img src={EditIcon} alt="editBtn" />}
                        </button>
                        {isEditingName && <div className={styles.changesBtns}>
                              <button onClick={() => setIsEditingName(false)}>
                                 <img src={saveIcon} alt="editBtn" />  
                              </button>
                              <button onClick={() => setIsEditingName(false)}>
                                 <img src={xIcon} alt="discardBtn" />
                              </button>
                           </div>}
                     </div>
                  </div>

                  <div className={styles.userInfo}>
                     <label htmlFor="email">Email</label>
                     <div className={styles.editInfo}>
                        <input id='email' type="email" value="fadel.mokahal@gmail.com" disabled={!isEditingEmail} />
                        <button onClick={() => setIsEditingEmail(true)}>
                           {!isEditingEmail && <img src={EditIcon} alt="editBtn" />}
                        </button>
                        {isEditingEmail && <div className={styles.changesBtns}>
                              <button onClick={() => setIsEditingEmail(false)}>
                                 <img src={saveIcon} alt="editBtn" />  
                              </button>
                              <button onClick={() => setIsEditingEmail(false)}>
                                 <img src={xIcon} alt="discardBtn" />
                              </button>
                           </div>}
                     </div>
                  </div>

                  <div className={styles.userInfo}>
                     <label htmlFor="password">Password</label>
                     <div className={styles.editInfo}>
                        <input id='password' type="password" value="fadel5000" disabled={!isEditingPassword} />
                        <button onClick={() => setIsEditingPassword(true)}>
                           {!isEditingPassword && <img src={EditIcon} alt="editBtn" />}
                        </button>
                        {isEditingPassword && <div className={styles.changesBtns}>
                              <button onClick={() => setIsEditingPassword(false)}>
                                 <img src={saveIcon} alt="editBtn" />  
                              </button>
                              <button onClick={() => setIsEditingPassword(false)}>
                                 <img src={xIcon} alt="discardBtn" />
                              </button>
                           </div>}
                     </div>
                  </div>

               </div>
            </div>

            <div className={styles.settings}>
               <div>Notifications</div>
               <div>Report A Bug</div>
               <div>Log out</div>
            </div>
         </div>
      </div>
   )
}