import React from 'react'
import { BASE_URL } from '../service/api';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/logout`, {
        method: "POST",
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }
      // Redirect after successful logout
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error); 
    }
  };



  return (
    <>

      <button className='bg-red-500 ' onClick={handleLogout}>Logout</button>
    </>
  )
}
