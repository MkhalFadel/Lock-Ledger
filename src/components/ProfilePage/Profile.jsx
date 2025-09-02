import styles from './profile.module.css'
import { use, useEffect, useState } from 'react'
import profileIcon from '../../assets/icons/profileIcon.png';

export default function ProfileInfo()
{
   useEffect(() => {
      document.title = "LockLedger - Profile"

   }, [])

   return (
      <div className={styles.profileContainer}>
         <div className={styles.head}>
            <h2>Profile & Settings</h2>
         </div>
         <div className={styles.profile}>
            <div className={styles.accountInfo}>
               <img src={profileIcon} alt="" />
               <div className={styles.info}>
                  <div>
                     <label htmlFor="UserName">Username</label>
                     <input id='UserName' type="text" value="MkhalFadel" disabled />
                  </div>
                  <div>
                     <label htmlFor="email">Email</label>
                     <input id='email' type="email" value="fadel.mokahal@gmail.com" disabled />
                  </div>
                  <div>
                     <label htmlFor="password">Password</label>
                     <input id='password' type="password" value="fadel5000" disabled />
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