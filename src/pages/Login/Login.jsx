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
import { validateForm } from '../../utils/validationMessages'
import bcrypt from 'bcryptjs'

export default function Login({currentUser, setCurrentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Login"
   },[])

   
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({});
   const [isShowing, setIsShowing] = useState(false);
   
   useEffect(() => {
      if(Object.keys(errors).length > 0)
      {
         const timer = setTimeout(() => {
            setErrors({});
         }, 3000)
      
         return () => clearTimeout(timer);
      }
   }, [errors])
   

   const navigate = useNavigate();
   
   async function login()
   {
      const userInfo = await getUserInfo(email)

      const isMatch = bcrypt.compareSync(password, userInfo[0].hashedPassword)

      if(userInfo && isMatch)
      {
         setCurrentUser(userInfo[0])
         setLocalStorage("currentUser", userInfo[0]);
         navigate("/Lock-Ledger/"); 
      }
      else
         setErrors({login: "Invalid Email or Password"}) 

   }

   function handleValidation()
   {
      const validationErrors = validateForm({email, password});

      if(Object.keys(validationErrors).length > 0)
         setErrors(validationErrors)
      else
         login()
   }

   function showPassword(e)
   {
      e.preventDefault();
      setIsShowing(prev => !prev)
   }

   return (
      <div className={styles.bodyContainer}>
         <form onSubmit={e => {e.preventDefault(); handleValidation();}}>
            <div className={styles.container}>
               <img className={styles.logo} src={lockLedgerLogo} alt="LockLedgerLogo" loading='lazy'/>
               <h1>Welcome to LockLedger</h1>
               <div className={styles.emailContainer}>
                  <label htmlFor="Email">Email</label>
                  <input onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' id="Email" type="email" className={`${styles.email} ${(errors.email || errors.login) ? styles.invalid : ""}`} />
                  {errors.email && <p className={styles.errorMsg}>*{errors.email}*</p>}
                  {errors.login && <p className={styles.errorMsg}>*{errors.login}*</p>}
               </div>

               <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password</label>
                  <div>
                     {!isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="password" className={`${styles.password} ${(errors.password || errors.login) ? styles.invalid : ""}`} />}
                     {isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="text" className={styles.password} />}
                     <button type='button' onClick={e => showPassword(e)} className={styles.showBtn}>
                        {!isShowing && <img src={showIcon} alt="showIcon" />}
                        {isShowing && <img src={hideIcon} alt="showIcon" />}
                     </button>
                  </div>
                  {errors.password && <p className={styles.errorMsg}>*{errors.password}*</p>}
                  {errors.login && <p className={styles.errorMsg}>*{errors.login}*</p>}
               </div>

               <Link to="/Lock-Ledger/signup" className={styles.signUpLink}>Don't Have an account? <span>Signup</span></Link>

               <button type='submit' className={styles.loginBtn}>Login</button>
            </div>
         </form>
      </div>
   )
}