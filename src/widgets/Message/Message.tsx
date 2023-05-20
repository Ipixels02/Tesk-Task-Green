import React, {FC} from 'react';
import cls from "./Message.module.scss";
import img from "../../assets/Placeholder 48.svg";
import read from "../../assets/read.svg";

interface IMessage {
    text: string;
    date: number;
}

export const Message: FC<IMessage> = ({ text, date }) => {

    let time: string | null = null;

    const timeConverter = (timestamps: number) => {
        const currentDate = new Date(timestamps * 1000);
        time = currentDate.toLocaleTimeString("it-IT");
        return time;
    };

    timeConverter(date);

    return (
        <div className={`${cls.Message} ${cls.owner}`}>
            <div className={cls.messageInfo}>
                <img src={img} alt=""/>
            </div>
            <div className={cls.messageContent}>
                <div className={cls.messageText}>
                    <p>{text}</p>
                    <div className={cls.read}>
                        <span className={cls.time}>{time!.slice(0, -3)}</span>
                        <img src={read} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};
