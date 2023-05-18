import React from 'react';
import cls from "./Message.module.scss";
import img from "../../assets/Placeholder 48.svg";
import read from "../../assets/read.svg";

export const Message = () => {
    return (
        <div className={`${cls.Message} ${cls.owner}`}>
            <div className={cls.messageInfo}>
                <img src={img} alt=""/>

            </div>
            <div className={cls.messageContent}>
                <div className={cls.messageText}>
                    <p>Hey man. New movie is excellent</p>
                    <div className={cls.read}>
                        <span>13:34</span>
                        <img src={read} alt=""/>
                    </div>
                </div>
                <img src={img} alt=""/>

            </div>
        </div>
    );
};
