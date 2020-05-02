import React from 'react';

const userInput = (props) => {
    return (
       
            <input  className="inputtext" type="text" onChange={props.change} value={props.name}/>
    
    )
};

export default userInput;