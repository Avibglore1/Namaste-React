import React from "react"

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            sum : 100
        };
    }
    render(){
        const {name,location} = this.props;
        const {count,sum} = this.state;
        return(
            <div className='border-4 border-cyan-200 text-center'>
            <h2>{name}</h2>
            <h3>Count: {count}</h3>
            <h3>Sum: {sum}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: avinash@gmail.com</h3>
            </div> 
        )
    }
}

export default Userclass