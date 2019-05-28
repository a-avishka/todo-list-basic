import React, {Component} from 'react';

class Ninjas extends Component{
    render(){
        // console.log(this.props);
        const{ ninjas } = this.props;
        const ninjaList= ninjas.map(ninjas =>{
            return (
                <div className="ninjas" key={ninjas.id}>
                    <div>Name: {ninjas.name}</div>
                    <div>Age: {ninjas.age}</div>
                    <div>Belt: {ninjas.belt}</div>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas;