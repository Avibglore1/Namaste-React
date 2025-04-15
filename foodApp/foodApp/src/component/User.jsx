import React, { useState } from 'react'

function User({name,location}) {
    const [count,setCount] = useState(0);
    const [sum,setSum] = useState(100);
  return (
    <div className='border-4 border-cyan-200 text-center m-2'>
        <h2>{name}</h2>
        <h3>Count: {count}</h3>
        <h3>Sum: {sum}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: avinash@gmail.com</h3>
    </div>
  )
}

export default User