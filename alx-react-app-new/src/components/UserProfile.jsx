import React from "react";

export default function UserProfile(props){
    return (
        <div style={{border: '5px solid gray', padding: '10px', margin: '10px'}}>
            <h2 style={{color: 'lightblue'}}>{props.name}</h2>
            <p>Age: <span style={{fontWeight:'bold'}}> {props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}