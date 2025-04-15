import React from 'react'
import User from './User'
import UserClass from "./UserClass"

class Aboutus extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
        name:"Dummy",
        avatar_url:''
      }
    }
    // console.log('constructor called');
    
  }
  async componentDidMount(){
    // console.log("Component did mount");
    const data = await fetch('https://api.github.com/users/Avibglore1');
    const json = await data.json();
    this.setState({
      userInfo:json
    })
    console.log('data',json);
    
  }
  render(){
    // console.log('render is called');
    const {name,avatar_url} = this.state.userInfo
    return (
          <>
            <div>Aboutus
              {/* <User name={'Avinash function'} location={'Jamshedpur'}></User> */}
              <UserClass name={name} avatar_url={avatar_url}/>
            </div>
          </>
          
        )
  }
}



export default Aboutus