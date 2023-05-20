import React from 'react';
import message from "../../assets/message.svg";
import cls from "./Header.module.scss"

import {Button} from "../../shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../shared/services/hooks/hooks";
import {logoutAction} from "../../shared/services/actions/authorization";

export const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        evt.preventDefault();

        dispatch(logoutAction());

        navigate("/");

        //fake server logout
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("newContact");
    };

    return (
        <header className={cls.header}>
            <img src={message} alt=""/>
            <Button negative onClick={handleLogout}>Выйти</Button>
        </header>
    );
};
