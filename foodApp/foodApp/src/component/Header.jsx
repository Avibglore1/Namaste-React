import React from 'react'
import { LOGO_URL } from '../utils/constant'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center border-2'>
        <div>
            <img src={LOGO_URL}
            alt="" className='w-32' />
        </div>
        <div className='flex gap-3 mr-5'>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Cart</a>
        </div> 
    </div>
    
  )
}

export default Header