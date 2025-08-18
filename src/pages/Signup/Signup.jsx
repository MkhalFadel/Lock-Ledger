import styles from './signup.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
export default function Signup()
{
   return (
      <div className={styles.bodyContainer}>
         <form>
            <div className={styles.container}>
               <img className={styles.logo} src="/src/assets/lockLedgerLogo.png" alt="LockLedgerLogo" />
               <h1>Welcome to LockLedger</h1>
               <div className={styles.emailContainer}>
                  <label htmlFor="Email">Email</label>
                  <input placeholder='example@gmail.com' id="Email" type="email" className={styles.email} />
               </div>

               <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password</label>
                  <input placeholder='password123' id="password" type="password" className={styles.password} />
               </div>

               <div className={styles.userNameContainer}>
                  <label htmlFor="username">Username</label>
                  <input placeholder='Username' id="username" type="text" className={styles.username} />
               </div>

               <div className={styles.pinContainer}>
                  <label htmlFor="pin">Pin</label>
                  <input placeholder='Pin' id="pin" type="text" className={styles.pin} />
               </div>

               <Link to="/login">Have an account? Login</Link>

               <button className={styles.loginBtn}>Signup</button>
            </div>
         </form>
      </div>
   )
}