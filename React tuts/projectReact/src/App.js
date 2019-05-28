import React, {useState} from 'react';
import Tweet from './tweet';

function App(){

  const [isRed,setRed]= useState(false);
  const [count,setCount]= useState(0);

  const increment =()=>{
    setCount(count+1);
    setRed(!isRed);
  };

  const [users, setUser] = useState([
    {name:"Tom Anderson", message:"Carry an umbrella tomorrow, it'll rain.", likes:"100K"},
    {name:"Michael Jordan", message:"Brush your teeth twice a day.", likes:"205K"},
    {name:"Simpson Brusso", message:"Sleep early wake late", likes:"175K"},
    {name:"Brownie Jack", message:"I'm Batman", likes:"356K"}
  ]);
    

  return(
    <div className="app">
      {/* <Tweet name="Tom Anderson" message="Carry an umbrella tomorrow, it'll rain." likes="100K" />
      <Tweet name="Michael Jordan" message="Brush your teeth twice a day." likes="205K"/>
      <Tweet name="Simpson Brusso" message="Sleep early wake late" likes="175K"/>
      <Tweet name="Brownie Jack" message="I'm Batman" likes="356K"/> */}

        {users.map(user =>(
          <Tweet name={user.name} message={user.message} likes={user.likes} />
        ))}
      
      
        {/* <h1 className={isRed ? "red" : ""}>Toggle colors</h1>
        <button onClick={increment}>Just click</button>
        <h2>{count}</h2> */}
      
    </div>
  );

    }
export default App;