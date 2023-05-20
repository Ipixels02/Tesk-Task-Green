import React, {FC} from "react";
import {Sidebar} from "../../../widgets/Sidebar/Sidebar";
import {Chat} from "../../../widgets/Chat/Chat";
import cls from './mainPage.module.scss';

export const PageIndex: FC = () => {

    return (
        <>
            <div className={cls.Page}>
                <Sidebar/>
                <Chat/>
            </div>
        </>
    )
}