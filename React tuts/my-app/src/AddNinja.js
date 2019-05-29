import React, {Component} from 'react';

class AddNinja extends Component{

    state={
        name:null,
        age:null,
        belt:null
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="age">Age:</label>
                <input type="text" id="age" onChange={this.handleChange}/>
                <label htmlFor="belt">Belt:</label>
                <input type="text" id="belt" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add Ninja</button>
            </div>
        )
    }
}

export default AddNinja;