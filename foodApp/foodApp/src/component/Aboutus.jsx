import React from 'react'
import User from './User'
import UserClass from "./UserClass"
function Aboutus() {
  return (
    <>
      <div>Aboutus
        <User name={'Avinash function'} location={'Jamshedpur'}></User>
        <UserClass name={'Avinash class'} location={'Jamshedpur'}/>
      </div>
    </>
    
  )
}

export default Aboutus