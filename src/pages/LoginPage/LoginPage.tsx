import React, {useEffect, useState} from "react";

import cls from "./LoginPage.module.scss";

import {Button, ButtonSizes} from "../../shared/ui/Button/Button";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../shared/services/hooks/hooks";
import {authSel} from "../../utils/selectorData";
import {initialFormState, useForm} from "../../shared/services/hooks/useForm";
import {TFormStateType} from "../../shared/services/Types/data";
import {loginAction} from "../../shared/services/actions/authorization";
import {AppRoutes} from "../../shared/config/routeConfig/routeConfig";


export const LoginPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const [error, setError] = useState<boolean>(false);
    const { loginSuccess } = useAppSelector(authSel);

    const { values, handleChange } = useForm<TFormStateType>(initialFormState);

    const handleSubmitLogin = (
        evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        evt.preventDefault();

        if (values.idInstance!.length < 1 && values.apiTokenInstance!.length < 1) {
            setError(true);
        } else {
            setError(false);

            dispatch(loginAction(values));
            //fake server authorization
            localStorage.setItem("id", values.idInstance);
            localStorage.setItem("token", values.apiTokenInstance!);
        }
    };

    useEffect(() => {
        if (loginSuccess) {
            navigate(AppRoutes.MAIN);
        }
    }, [loginSuccess, navigate]);

    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <h1 className={cls.auth}>Авторизация</h1>
                {error ? (
                    <h3 className={cls.authError}>
                        Проверьте правильность введенных данных
                    </h3>
                ) : null}
                <h2 className={cls.inputName}>idInstance</h2>
                <input
                    id="idInstance"
                    name="idInstance"
                    type="text"
                    placeholder="Введите свой idInstance"
                    className={cls.input}
                    value={values.idInstance || ""}
                    onChange={handleChange}
                />
                <h2 className={cls.inputName}>apiTokenInstance</h2>
                <input
                    id="apiTokenInstance"
                    name="apiTokenInstance"
                    type="text"
                    placeholder="Введите свой apiTokenInstance"
                    className={cls.input}
                    value={values.apiTokenInstance || ""}
                    onChange={handleChange}
                />
                <Button type="submit" size={ButtonSizes.large} onClick={handleSubmitLogin}>Войти</Button>
            </div>
        </section>
    );
};
