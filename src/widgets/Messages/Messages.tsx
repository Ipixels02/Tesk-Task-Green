import React from 'react';
import {Message} from "../Message/Message";
import cls from './Messages.module.scss';

export const Messages = () => {
    return (
        <div className={cls.Messages}>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
};
