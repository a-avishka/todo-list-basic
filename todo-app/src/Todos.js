import React from'react';


const Todos = ({todos,deleteTodo}) =>{

    const todoList= (todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key = {todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className ="empty center">You have no todos left</p>))

   return(
       <div className="todos collection center">
{todoList}
       </div>
   ) 
}

export default Todos;