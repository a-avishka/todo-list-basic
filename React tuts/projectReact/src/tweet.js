import React from 'react';


function Tweet(props){ //Tweets({name,messsage,likes}) also works (ES6) so no need to say props each time 

    return(
        <div className="tweet">
            <h3>{props.name}</h3> 
            <p>{props.message}</p>
            <h4>{props.likes}</h4>
        </div>
    )
}


export default Tweet;