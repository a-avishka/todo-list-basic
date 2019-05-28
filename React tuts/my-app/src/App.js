import React, {Component} from 'react';
import Ninjas from './Ninjas'; 


class App extends Component{
  state ={
    ninjas:[
      {name:"Tom",age:25,belt:"black",id:1},
      {name:"Simpson",age:26,belt:"green",id:2},
      {name:"Andrew",age:24,belt:"pink",id:3}
    ]

  }
  render(){
    return (
      <div className="App">
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas ={this.state.ninjas}/>
      
      </div>
    );
  }
}

export default App;
