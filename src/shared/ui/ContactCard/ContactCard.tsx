import {FC} from "react";

import cls from "./ContactCard.module.scss";

import avatarDefault from "../../../assets/avatar_default.png";

interface ICard {
    avatar?: string;
    name: string;
    active?: boolean;
}

export const ContactCard: FC<ICard> = ({avatar = avatarDefault, name, active}) => {
    const activeStyle = active ? cls.active : null;

    return (
        <div className={`${cls.card} ${activeStyle}`}>
            <div className={cls.avatarContainer}>
                <img className={cls.avatar} src={avatar} alt="avatar"/>
            </div>
            <h2 className={cls.name}>{name}</h2>
        </div>
    );
};
