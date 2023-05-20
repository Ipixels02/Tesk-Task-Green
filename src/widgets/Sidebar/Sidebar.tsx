import cls from './Sidebar.module.scss';
import {Button} from "../../shared/ui/Button/Button";
import React, {useState} from "react";
import {Modal} from "../../shared/ui/Modal/modal";
import {InputForm} from "../../shared/ui/InputForm/inputForm";
import {addContactAction} from "../../shared/services/actions/contacts";
import {getHistoryChatAction} from "../../shared/services/actions/chatHistory";
import {initialContactState, useForm} from "../../shared/services/hooks/useForm";
import {TFormStateType, TUser} from "../../shared/services/Types/data";
import {useAppDispatch} from "../../shared/services/hooks/hooks";
import {Contacts} from "../Contacts/Contacts";

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { values, handleChange, setValues } =
        useForm<TFormStateType>(initialContactState);


    //fake server user data
    const user: TUser = {
        id: localStorage.getItem("id")!,
        token: localStorage.getItem("token")!,
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleAddContact = async (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        evt.preventDefault();

        dispatch(addContactAction(values));

        //fake server add new contact
        localStorage.setItem("newContact", values.number);
        const contactNum = { number: localStorage.getItem("newContact") };

        setOpenModal(false);

        setValues({ number: "" });

        dispatch(getHistoryChatAction(user, contactNum));
    };

    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <div className={cls.Sidebar}>
                <div className={cls.titleContainer}>
                    <h2 className={cls.title}>Контакты</h2>
                    <Button onClick={handleOpenModal}>Новый чат</Button>
                </div>
                <div className={cls.Chats}>
                    <Contacts />
                    {/*{isLoading && <h3>Идет загрузка...</h3>}*/}
                    {/*{error && <h3>Произошла ошибка при загрузке</h3>}*/}
                    {/*{chats && chats.map(chat =>*/}
                    {/*    <Button key={chat.id}>*/}
                    {/*        <img src={img} alt=""/>*/}
                    {/*        <div className={cls.userChatInfo}>*/}
                    {/*            <span>{chat.title}</span>*/}
                    {/*        </div>*/}
                    {/*    </Button>*/}
                    {/*)}*/}
                </div>
            </div>
            {openModal ? (
                <Modal
                    onClose={handleCloseModal}
                    heading={"Введите номер телефона в формате '+7(XXX)-XXX-XX-XX'"}
                    children={
                        <>
                            <InputForm
                                type="number"
                                id="number"
                                name="number"
                                placeholder="номер"
                                value={values.number || ""}
                                onChange={handleChange}
                            />
                            <Button onClick={handleAddContact}>Добавить</Button>
                        </>
                    }
                />
            ) : null}
        </>
    );
};
