import React, {useEffect} from "react";

import cls from './Messanger.module.scss';

import file from "../../assets/file.svg";
import send from "../../assets/send.svg";
import {initialSendMessageState, useForm} from "../../shared/services/hooks/useForm";
import {useAppDispatch, useAppSelector} from "../../shared/services/hooks/hooks";
import {TFormStateType, TUser} from "../../shared/services/Types/data";
import {chatSel, getNotifSel} from "../../utils/selectorData";
import {sendMessageAction} from "../../shared/services/actions/sendMessage";
import {getHistoryChatAction} from "../../shared/services/actions/chatHistory";
import {delNotificationAction} from "../../shared/services/actions/delNotification";
import {getNotificationAction} from "../../shared/services/actions/getNotification";
import {Message} from "../Message/Message";

export const Messanger = () => {
    const dispatch = useAppDispatch();
    const {chatHistory} = useAppSelector(chatSel);
    const {values, handleChange, setValues} = useForm<TFormStateType>(
        initialSendMessageState
    );
    const {data} = useAppSelector(getNotifSel);

    //fake server user data
    const user: TUser = {
        id: localStorage.getItem("id")!,
        token: localStorage.getItem("token")!,
    };

    //fake server contact
    const contactNum = {number: localStorage.getItem("newContact")};

    const handleSendMessage = (
        evt: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) => {
        evt.preventDefault();

        if (values.message.length > 1) {
            dispatch(sendMessageAction(user, contactNum, values.message));

            setValues({message: ""});

            dispatch(getHistoryChatAction(user, contactNum));
        }

        return;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getNotificationAction(user));
            dispatch(getHistoryChatAction(user, contactNum));

            if (data?.receiptId) {
                dispatch(delNotificationAction(user, data?.receiptId!));
            }
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [contactNum, user, chatHistory]);

    return (
        <section className={cls.section}>
            <div className={cls.messagesSection}>
                <ul className={cls.messagesList}>
                    {chatHistory
                        ? chatHistory.map((message) => {
                            if (message.idMessage) {
                                return (
                                    <li
                                        key={message.idMessage}
                                    >
                                        <Message
                                            text={message.textMessage}
                                            date={message.timestamp}
                                        />
                                    </li>
                                );
                            }
                            return null;
                        })
                        : null}
                </ul>
            </div>
            <div className={cls.inputSection}>
                <input type="file" id="file"/>
                <label htmlFor="file">
                    <img src={file} alt=""/>
                </label>
                <textarea
                    className={cls.inputMessage}
                    name="message"
                    id="message"
                    maxLength={10000}
                    value={values.message || ""}
                    onChange={handleChange}
                />
                <img src={send} alt="" onClick={handleSendMessage}/>
            </div>
        </section>
    );
};
