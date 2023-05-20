import { Dispatch } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "../store/store";

import { TAuthorizationActions } from "../actions/authorization";
import { TAddContactActions } from "../actions/contacts";
import { TChatHistoryActions } from "../actions/chatHistory";
import { TSendMessageActions } from "../actions/sendMessage";
import { TGetNotificationActions } from "../actions/getNotification";
import { TDelNotificationActions } from "../actions/delNotification";

import { TAuthState } from "../store/reducers/Authorization";
import { TContactsState } from "../store/reducers/Contacts";
import { TSendMessageState } from "../store/reducers/SendMessage";
import { TChatHistoryState } from "../store/reducers/ChatHistory";
import { TGetNotificationState } from "../store/reducers/GetNotification";
import { TDelNotificationState } from "../store/reducers/DelNotification";


export type TStore = {
  auth: TAuthState;
  contact: TContactsState;
  chat: TChatHistoryState;
  sendMsg: TSendMessageState;
  getNotif: TGetNotificationState;
  delNotif: TDelNotificationState;
};


export type TApplicationActions =
  | TAuthorizationActions
  | TAddContactActions
  | TChatHistoryActions
  | TSendMessageActions
  | TGetNotificationActions
  | TDelNotificationActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
