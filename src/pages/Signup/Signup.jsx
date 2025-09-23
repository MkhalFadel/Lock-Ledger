import styles from './signup.module.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import lockLedgerLogo from '../../assets/lockLedgerLogo.webp'
import showIcon from '../../assets/icons/showIcon.webp'
import hideIcon from '../../assets/icons/hideIcon.webp'
import  createUser from '../../API/users'
import { useNavigate } from 'react-router-dom'
import { setLocalStorage } from '../../utils/localStorage'
import { validateForm } from '../../utils/validationMessages'

export default function Signup({currentUser, setCurrentUser})
{
   useEffect(() => {
      document.title = "LockLedger - Signup"
   },[])

   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [pin, setPin] = useState("");
   const [errors, setErrors] = useState({});

   const [isShowing, setIsShowing] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      if(Object.keys(errors).length > 0)
      {
         const timer = setTimeout(() => {
            setErrors({});
         }, 3000)
      
         return () => clearTimeout(timer);
      }
   }, [errors])

      async function signUp()
      {
         try
         {
            setCurrentUser([]);

            const newUser = await createUser(username, email, password, pin)

            if(!newUser)
            {
               setErrors(prev => ({...prev, signup: "Username/Email Already Taken"}));
               return;
            }   
            
            console.log([newUser])
            setCurrentUser(newUser)

            if(newUser) navigate("/Lock-Ledger/Pin");
            setLocalStorage("currentUser", newUser)
         
         }
         catch(err){
            console.log(err)
         }
      }

   function handleValidation()
   {
      const validationErrors = validateForm({username, email, password, pin});

      if(Object.keys(validationErrors).length > 0)
         setErrors(validationErrors);
      else 
         signUp();
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
                  <input onChange={e => setEmail(e.target.value)} placeholder='example@gmail.com' id="Email" type="email" className={`${styles.email} ${errors.email ? styles.invalid : ""}`} />
                  {errors.email && <p className={styles.errorMsg}>*{errors.email}*</p>}
                  {errors.signup && <p className={styles.errorMsg}>*{errors.signup}*</p>}
               </div>

               <div className={styles.passwordContainer}>
                  <label htmlFor="password">Password</label>
                  <div>
                     {!isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="password" className={`${styles.password} ${errors.password ? styles.invalid : ""}`} />}
                     {isShowing && <input onChange={e => setPassword(e.target.value)} value={password} placeholder='password123' id="password" type="text" className={styles.password} />}
                     <button type='button' onClick={e => showPassword(e)} className={styles.showBtn}>
                        {!isShowing && <img src={showIcon} alt="showIcon" />}
                        {isShowing && <img src={hideIcon} alt="showIcon" />}
                     </button>
                  </div>
                  {errors.password && <p className={styles.errorMsg}>*{errors.password}*</p>}
               </div>

               <div className={styles.userNameContainer}>
                  <label htmlFor="username">Username</label>
                  <input onChange={e => setUsername(e.target.value)} placeholder='Username' id="username" type="text" className={`${styles.username} ${errors.username ? styles.invalid : ""}`} />
                  {errors.username && <p className={styles.errorMsg}>*{errors.username}*</p>}
                  {errors.signup && <p className={styles.errorMsg}>*{errors.signup}*</p>}
               </div>

               <div className={styles.pinContainer}>
                  <label htmlFor="pin">Pin</label>
                  <input onChange={e => setPin(e.target.value)} placeholder='Pin' id="pin" type="text" className={`${styles.pin} ${errors.pin ? styles.invalid : ""}`} />
                  {errors.pin && <p className={styles.errorMsg}>*{errors.pin}*</p>}
               </div>

               <Link to="/Lock-Ledger/login" className={styles.signUpLink}>Have an account? <span>Login</span></Link>

               <button type='submit' className={styles.loginBtn}>Signup</button>
            </div>
         </form>
      </div>
   )
}