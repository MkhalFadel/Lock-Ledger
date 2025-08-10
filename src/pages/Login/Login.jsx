import styles from './login.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
export default function Login()
{
   return (
      <form>
         <div className={styles.container}>
            <h1>Login</h1>
            <div className={styles.emailContainer}>
               <label htmlFor="Email">Email</label>
               <input placeholder='example@gmail.com' id="Email" type="email" className={styles.email} />
            </div>

            <div className={styles.passwordContainer}>
               <label htmlFor="password">Password</label>
               <input placeholder='password123' id="password" type="password" className={styles.password} />
            </div>

            <Link to="/signup">Don't Have an account? Signup</Link>

            <button className={styles.loginBtn}>Login</button>
         </div>
      </form>
   )
}