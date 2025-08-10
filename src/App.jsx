import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import NotesPage from "./pages/NotesPage/Notes"

export default function App()
{
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}