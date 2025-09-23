import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import MainSection from "./pages/mainSection/PrimarySection"
import Pin from "./pages/Pin /Pin"
import { useState } from "react"
import ProtectedRoutes from "./utils/ProtectedRoutes"
import { getLocalStorage } from "./utils/localStorage"

export default function App()
{
  const [currentUser, setCurrentUser] = useState(() => {
    const item = getLocalStorage("currentUser");
    return item || 0;
  });

  return (
    <Routes>
      <Route element={<ProtectedRoutes currentUser={currentUser} />}>
        <Route path="/Lock-Ledger/" element={<MainSection currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/Lock-ledger/Pin" element={<Pin currentUser={currentUser} />} />
      </Route>
      <Route path="/Lock-Ledger/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/Lock-Ledger/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
    </Routes>
  )
}