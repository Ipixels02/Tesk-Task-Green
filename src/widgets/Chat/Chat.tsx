import React from 'react';
import cls from './Chat.module.scss';
import {Input} from "../../shared/ui/Input/Input";
import message from "../../assets/message.svg";
import {Messages} from "../Messages/Messages";

export const Chat = () => {
    return (
        <div className={cls.Chat}>
            <div className="App-header">
                <img src={message} alt=""/>
                <h4>Great Project</h4>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
};