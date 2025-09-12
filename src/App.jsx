import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import MainSection from "./pages/mainSection/PrimarySection"
import { useState } from "react"

export default function App()
{
  const [currentUser, setCurrentUser] = useState();

  return (
    <Routes>
      <Route path="/Lock-Ledger/" element={<MainSection currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/Lock-Ledger/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      <Route path="/Lock-Ledger/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
    </Routes>
  )
}