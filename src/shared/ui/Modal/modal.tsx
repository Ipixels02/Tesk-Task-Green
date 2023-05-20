import React, {FC, JSX} from "react";

import cls from "./modal.module.scss";

import closeI from "../../../assets/close.svg"

type TModal = {
    heading: string;
    children: JSX.Element;
    onClose: () => void;
};

export const Modal: FC<TModal> = ({heading, children, onClose}) => {
    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <img className={cls.close} src={closeI} alt="" onClick={onClose}/>
                <h1 className={cls.title}>{heading}</h1>
                {children}
            </div>
        </section>
    );
};
