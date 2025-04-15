import React from 'react'

function User({name,location}) {
  return (
    <div className='border-4 border-cyan-200 text-center'>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: avinash@gmail.com</h3>
    </div>
  )
}

export default User