import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const[authUser, setauthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setauthUser(null);
            localStorage.removeItem("Users");
            alert("logout successfull")
            
        } catch (error) {
console.error(error.message);        }
    }
  return (
    <div>
      <button className='text-white px-3 py-2 bg-red-500 rounded-md cursor-pointer'
      onClick={handleLogout}
      >
        Logout</button>
    </div>
  )
}

export default Logout
