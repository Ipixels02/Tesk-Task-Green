import React from 'react';
import cls from './Chat.module.scss';
import {Header} from "../Header/Header";
import {Messanger} from "../Messanger/Messanger";

export const Chat = () => {
    return (
        <div className={cls.Chat}>
            <div className="App-header">
                <Header/>
            </div>
            <Messanger />
        </div>
    );
};