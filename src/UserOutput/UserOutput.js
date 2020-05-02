import React from 'react';
const userOutput = (props) => {
    return (
        <div className="paragraph">
            <p >My Name is {props.name} and my Hobbies are {props.hobbies}</p>
            <p>Details :: {props.children}</p>
        </div>
    )
};

export default userOutput;