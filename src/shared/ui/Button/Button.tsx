import {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';

export enum ButtonSizes {
    default = "default",
    small = "small",
    large = "large"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset" | undefined;
    negative?: boolean;
    className?: string;
    size?: ButtonSizes;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        type,
        negative,
        className,
        size = ButtonSizes.default,
        children,
        ...otherProps
    } = props;

    const color = negative ? cls.redButton : null;

    return (
        <button
            type={type}
            className={`${cls.Button} ${color} ${cls[size]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};
