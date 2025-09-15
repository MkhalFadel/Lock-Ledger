import styles from './signup.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import lockLedgerLogo from '../../assets/lockLedgerLogo.png'
import showIcon from '../../assets/icons/showIcon.png'
import hideIcon from '../../assets/icons/hideIcon.png'
import  createUser from '../../API/users'
import { getUserInfo } from '../../API/users'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../utils/localStorage'

export default function Signup({setCurrentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Signup"
   },[])

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [pin, setPin] = useState("");

   const [isShowing, setIsShowing] = useState(false);

   const navigate = useNavigate();

   async function signUp()
   {
      setCurrentUser([]);

      const newUser = await createUser(username, email, password, pin)
      const userInfo = await getUserInfo(email);

      setCurrentUser(userInfo)

      if(userInfo) navigate("/Lock-Ledger");
      setLocalStorage("currentUser", userInfo)
   }

   function showPassword(e)
   {
      e.preventDefault();
      setIsShowing(prev => !prev)
   }

   return (
      <div className={styles.bodyContainer}>
         <form onSubmit={e => {e.preventDefault(); signUp()}}>
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

               <div className={styles.userNameContainer}>
                  <label htmlFor="username">Username</label>
                  <input onChange={e => setUsername(e.target.value)} placeholder='Username' id="username" type="text" className={styles.username} />
               </div>

               <div className={styles.pinContainer}>
                  <label htmlFor="pin">Pin</label>
                  <input onChange={e => setPin(e.target.value)} placeholder='Pin' id="pin" type="text" className={styles.pin} />
               </div>

               <Link to="/Lock-Ledger/login" className={styles.signUpLink}>Have an account? <span>Login</span></Link>

               <button type='submit' className={styles.loginBtn}>Signup</button>
            </div>
         </form>
      </div>
   )
}