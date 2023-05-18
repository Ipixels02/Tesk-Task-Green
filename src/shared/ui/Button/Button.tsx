import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cls.Button}
            {...otherProps}
        >
            {children}
        </button>
    );
};
