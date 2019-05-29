import React from 'react';
import AddNinja from './AddNinja';


const Ninjas = ({ninjas,deleteNinja})=>{
    
    
        // console.log(this.props);
        const ninjaList= ninjas.map(ninjas =>{
            return (
                <div className="ninjas" key={ninjas.id}>
                    <div>Name: {ninjas.name}</div>
                    <div>Age: {ninjas.age}</div>
                    <div>Belt: {ninjas.belt}</div>
                    <button onClick={() =>{deleteNinja(ninjas.id)}}>Delete ninja</button>
                </div>
            )
        })
        return(
            <div className="ninja-list">
                {ninjaList}          
            </div>
        )
    
}

export default Ninjas;