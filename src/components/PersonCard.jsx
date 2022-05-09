import React, {Component} from 'react'

class PersonCard extends Component {
constructor(props){
    super(props);
    this.state={
        age:this.props.age
    }
}
    increaseAge=()=>this.setState({age:this.state.age+1})


    render(){
        let {fname, lname,age,hairColor}=this.props;


        return <div>
            <h2>{lname}, {fname} </h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.increaseAge}>Birthday Button for {fname} {lname}</button>
        </div>
    }
}

export default PersonCard