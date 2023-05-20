import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

import { AppDispatch, AppThunk } from "../Types";
import {RootState} from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useAppDispatch = () => dispatchHook<AppDispatch & AppThunk>();
