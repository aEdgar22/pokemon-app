import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setUser } from "../slices/userSlice";

export const setUserThunk = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch) => {
      try {
        const userData = localStorage.getItem("user");
        const {email, name, id} = userData !== null && JSON.parse(userData);
        dispatch(setUser({
            id,
            email,
            name
        }))
      } catch (error) {
        console.log(error)
      }
    }
}