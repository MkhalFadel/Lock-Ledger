import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import NotesPage from "./pages/NotesPage/Notes"

export default function App()
{
  return (
    <Routes>
      <Route path="/Lock-Ledger/" element={<NotesPage />} />
      <Route path="/Lock-Ledger/login" element={<Login />} />
      <Route path="/Lock-Ledger/signup" element={<Signup />} />
    </Routes>
  )
}