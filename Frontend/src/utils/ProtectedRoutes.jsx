import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({currentUser})
{
   return currentUser ? <Outlet /> : <Navigate to="/Lock-Ledger/login" />  
}