import cls from "./LoginPage.scss";

interface LoginPageProps {
    className?: string
}

export const LoginPage = ({ className }: LoginPageProps) => {
    return (
        <div className={cls.NotFoundPage}>
            'Страница не найдена'
        </div>
    );
};
