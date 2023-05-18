import React from 'react';
import cls from './Input.module.scss';
import file from "../../../assets/file.svg";
import send from "../../../assets/send.svg";
export const Input = () => {
    return (
        <div className={cls.Input}>
            <input placeholder="Type message"></input>
            <div className={cls.Tools}>
                <input type="file" id="file"/>
                <label htmlFor="file">
                    <img src={file} alt=""/>
                </label>
                <img src={send} alt=""/>
            </div>
        </div>
    );
};
