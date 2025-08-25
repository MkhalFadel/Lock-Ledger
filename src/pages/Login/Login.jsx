import styles from './login.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
export default function Login()
{
   return (
      <div className={styles.bodyContainer}>
         <form>
            <div className={styles.container}>
               <img className={styles.logo} src="src/assets/lockLedgerLogo.png" alt="LockLedgerLogo" />
               <h1>Welcome to LockLedger</h1>
               <div className={styles.emailContainer}>
                  <label htmlFor="Email">Email</label>
                  <input placeholder='example@gmail.com' id="Email" type="email" className={styles.email} />
               </div>

               <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password</label>
                  <input placeholder='password123' id="password" type="password" className={styles.password} />
               </div>

               <Link to="/Lock-Ledger/signup" className={styles.signUpLink}>Don't Have an account? <span>Signup</span></Link>

               <button className={styles.loginBtn}>Login</button>
            </div>
         </form>
      </div>
   )
}