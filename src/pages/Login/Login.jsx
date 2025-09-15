import styles from './login.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import lockLedgerLogo from '../../assets/lockLedgerLogo.png'
import showIcon from '../../assets/icons/showIcon.png'
import hideIcon from '../../assets/icons/hideIcon.png'
import { getUserInfo } from '../../API/users'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../utils/localStorage'

export default function Login({currentUser, setCurrentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Login"
   },[])

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [isShowing, setIsShowing] = useState(false);

   const navigate = useNavigate();

   async function login(email, password)
   {
      const userInfo = await getUserInfo(email)

      if(userInfo && userInfo.password === password)
      {
         setCurrentUser(userInfo)
         setLocalStorage("currentUser", userInfo);
         navigate("/Lock-Ledger/"); 
      } 

   }

   function showPassword(e)
   {
      e.preventDefault();
      setIsShowing(prev => !prev)
   }

   return (
      <div className={styles.bodyContainer}>
         <form onSubmit={e => {e.preventDefault(); login(email);}}>
            <div className={styles.container}>
               <img className={styles.logo} src={lockLedgerLogo} alt="LockLedgerLogo" loading='lazy'/>
               <h1>Welcome to LockLedger</h1>
               <div className={styles.emailContainer}>
                  <label htmlFor="Email">Email</label>
                  <input onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' id="Email" type="email" className={styles.email} />
               </div>

               <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password</label>
                  <div>
                     {!isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="password" className={styles.password} />}
                     {isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="text" className={styles.password} />}
                     <button type='button' onClick={e => showPassword(e)} className={styles.showBtn}>
                        {!isShowing && <img src={showIcon} alt="showIcon" />}
                        {isShowing && <img src={hideIcon} alt="showIcon" />}
                     </button>
                  </div>
               </div>

               <Link to="/Lock-Ledger/signup" className={styles.signUpLink}>Don't Have an account? <span>Signup</span></Link>

               <button type='submit' className={styles.loginBtn}>Login</button>
            </div>
         </form>
      </div>
   )
}