export interface IMessage<T> {
    response: T[];
}

export interface IChat {
    response: [];
    id: number;
    title: string;
    avatar: string;
    last_message: []
    users: []
}