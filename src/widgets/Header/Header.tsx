import React from 'react';
import message from "../../assets/message.svg";
export const Header = () => {
    return (
        <div className="App-header">
            <img src={message} alt=""/>
            <h4>Great Project</h4>
        </div>
    );
};
