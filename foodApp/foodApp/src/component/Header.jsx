import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constant'

function Header() {
  const [login,setLogin] = useState('LogIn')
  return (
    <div className='flex flex-row justify-between items-center border-2'>
        <div>
            <img src={LOGO_URL}
            alt="" className='w-20' />
        </div>
        <div className='flex gap-3 mr-5'>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Cart</a>
            <button className='border-2 bg-slate-300'
            onClick={()=>{
              login === "LogIn"?setLogin('Logout'):setLogin('LogIn');
            }}>{login}</button>
        </div> 
    </div>
    
  )
}

export default Header

