import cls from './Sidebar.module.scss';
import {Button} from "../../shared/ui/Button/Button";
import img from "../../assets/Placeholder 48.svg"
import {chatsAPI} from "../../api/ChatServies";

export const Sidebar = () => {
    const {data: chats, error, isLoading} = chatsAPI.useFetchAllChatsQuery(10)

    console.log(chats)
    return (
        <div className={cls.Sidebar}>
            <div className="Elem">
                <h4>All chats</h4>
            </div>
            <div className={cls.Chats}>
                {isLoading && <h3>Идет загрузка...</h3>}
                {error && <h3>Произошла ошибка при загрузке</h3>}
                {chats && chats.map(chat =>
                    <Button key={chat.id}>
                        <img src={img} alt=""/>
                        <div className={cls.userChatInfo}>
                            <span>{chat.title}</span>
                        </div>
                    </Button>
                )}
                <Button>
                    <img src={img} alt=""/>
                    <div className={cls.userChatInfo}>
                        <span>Jane</span>
                        <p>Message</p>
                    </div>
                </Button>
            </div>
        </div>
    );
};
