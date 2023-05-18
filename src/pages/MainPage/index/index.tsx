import React, {FC} from "react";
import {IPage} from "../../../interface/page";
import {Sidebar} from "../../../widgets/Sidebar/Sidebar";
import {Chat} from "../../../widgets/Chat/Chat";
import cls from './mainPage.module.scss';
import {Header} from "../../../widgets/Header/Header";

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <>
            <div className={cls.Page}>
                <Sidebar/>
                {/*<Header/>*/}
                <Chat/>
            </div>
        </>
    )
}