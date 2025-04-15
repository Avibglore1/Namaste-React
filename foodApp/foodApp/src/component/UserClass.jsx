import React from "react"

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            sum : 100
        };

        console.log('Child constructor called');
    }
    componentDidMount(){
        console.log('Child component did mount');
        
    }
    render(){
        const {name,location} = this.props;
        const {count,sum} = this.state;

        console.log('Child render called');
        
        return(
            <div className='border-4 border-cyan-200 text-center'>
            <h2>{name}</h2>
            <h3>Count: {count}</h3>
            <h3>Sum: {sum}</h3>
            <h3>Location: {location}</h3>
            <h3>Contact: avinash@gmail.com</h3>
            <button onClick={()=>{
                this.setState({
                    count:count + 1,
                    sum: sum - 10
                })
            }} className="border-4 px-1 py-1 cursor-pointer">Click</button>
            </div> 
        )
    }
}

export default Userclass