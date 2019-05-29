import React, {Component} from 'react';
import Ninjas from './Ninjas'; 
import AddNinja from './AddNinja'


class App extends Component{
  state ={
    ninjas:[
      // {name:"Tom",age:25,belt:"black",id:1},
      // {name:"Simpson",age:26,belt:"green",id:2},
      // {name:"Andrew",age:24,belt:"pink",id:3}
    ]
  }

  addNinja = (newNinja) =>{
    console.log(newNinja);

    newNinja.id= Math.random();
    let newNinjaList = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas:newNinjaList
    })
   
  }

  deleteNinja = (id) =>{
      console.log(id);
      let newNinjaList = this.state.ninjas.filter(ninja =>{
        return ninja.id !== id
      });
      this.setState({
      ninjas:newNinjaList
        
      })
    }

  render(){
    return (
      <div className="App">
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas ={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      
      <AddNinja addNinja= {this.addNinja}/>
      </div>

    );
  }
}

export default App;
