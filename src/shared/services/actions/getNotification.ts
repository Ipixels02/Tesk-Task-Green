import { getNotificationApi } from "../../../utils/api/message-api";

import { AppDispatch, AppThunk } from "../Types";
import { TGetNotif, TUser } from "../Types/data";

const GET_NOTIFICATION_REQUEST = "GET_NOTIFICATION_REQUEST";
const GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS";
const GET_NOTIFICATION_ERROR = "GET_NOTIFICATION_ERROR";

export interface IGetNotificationRequestAction {
  readonly type: typeof GET_NOTIFICATION_REQUEST;
}

export interface IGetNotificationSuccessAction {
  readonly type: typeof GET_NOTIFICATION_SUCCESS;
  payload: TGetNotif;
}

export interface IGetNotificationErrorAction {
  readonly type: typeof GET_NOTIFICATION_ERROR;
}

export type TGetNotificationActions =
  | IGetNotificationRequestAction
  | IGetNotificationSuccessAction
  | IGetNotificationErrorAction;

//action полученя уведомления
const getNotificationAction: AppThunk = (userInfo: TUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_NOTIFICATION_REQUEST,
    });

    getNotificationApi(userInfo)
      .then((res) => {
        if (res.receiptId) {
          dispatch({
            type: GET_NOTIFICATION_SUCCESS,
            payload: { receiptId: res.receiptId, body: res.body },
          });
        } else {
          console.log(res.receiptId);
          dispatch({
            type: GET_NOTIFICATION_ERROR,
          });
        }
      })
      .catch((err: { message: string }) => {
        dispatch({
          type: GET_NOTIFICATION_ERROR,
        });
      });
  };
};

export {
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_ERROR,
  getNotificationAction,
};
