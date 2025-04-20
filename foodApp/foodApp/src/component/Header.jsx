import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utils/constant'
import { Link, useSearchParams } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux'


function Header() {
  const [login,setLogin] = useState('LogIn')
  const {loggedinUser} = useContext(UserContext)
  const watchListItems = useSelector((store) =>store.watchList)
  console.log(watchListItems);
  
  
  const onlineStatus = useOnlineStatus()
  return (
    <div className='flex flex-row justify-between items-center border-2'>
        <div>
            <img src={LOGO_URL}
            alt="" className='w-20' />
        </div>
        <div className='flex gap-3 mr-5'>
          <li className='list-none'>Online Status {onlineStatus ? '🟢' : '🔴'}</li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to ='/watchlist' className='font-bold'>Watchlist ({watchListItems.items.length} items)</Link>
            <div>{loggedinUser}</div>
            <button className='border-2 bg-slate-300'
            onClick={()=>{
              login === "LogIn"?setLogin('Logout'):setLogin('LogIn');
            }}>{login}</button>
        </div> 
    </div>
    
  )
}

export default Header

