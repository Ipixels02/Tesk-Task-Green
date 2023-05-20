import { TStore } from "../shared/services/Types";

const authSel = (store: TStore) => store.auth;
const contactSel = (store: TStore) => store.contact;
const chatSel = (store: TStore) => store.chat;
const getNotifSel = (store: TStore) => store.getNotif;

export { authSel, contactSel, chatSel, getNotifSel };
