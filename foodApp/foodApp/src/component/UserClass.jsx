import React from "react"

class Userclass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name,location} = this.props;
        return(
            <div className='border-4 border-cyan-200 text-center'>
            <h2>{name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: avinash@gmail.com</h3>
            </div> 
        )
    }
}

export default Userclass