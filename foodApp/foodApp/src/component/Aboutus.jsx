import React from 'react'
import User from './User'
import UserClass from "./UserClass"

class Aboutus extends React.Component{
  constructor(props){
    super(props)
    console.log('constructor called');
    
  }
  componentDidMount(){
    console.log("Component did mount");
    
  }
  render(){
    console.log('render is called');
    
    return (
          <>
            <div>Aboutus
              {/* <User name={'Avinash function'} location={'Jamshedpur'}></User> */}
              <UserClass name={'Avinash class'} location={'Jamshedpur'}/>
            </div>
          </>
          
        )
  }
}



export default Aboutus