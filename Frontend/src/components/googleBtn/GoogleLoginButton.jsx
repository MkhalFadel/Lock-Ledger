import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utils/localStorage";

function GoogleLoginButton({currentUser, setCurrentUser}) {

   const navigate = useNavigate();

   const handleSuccess = async (credentialResponse) => {
      const credential = credentialResponse.credential
      try {
         const res = await fetch("http://localhost:5000/api/users/auth/google", {
         method: "POST",
         credentials: 'include',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            credential,
         }),
         });

         if (res.ok) {
            const user = await res.json();
            setCurrentUser(user)
            setLocalStorage('currentUser', user);
            navigate("/Lock-Ledger/Pin");
         } else {
            console.error("Google login failed");
         }

      } catch (err) {
         console.error("Error:", err);
      }
   };

   const handleError = () => {
      console.log("Google Login Failed");
   };

   return (
      <GoogleLogin
         onSuccess={handleSuccess}
         onError={handleError}
         useOneTap
      />
   );
}

export default GoogleLoginButton;