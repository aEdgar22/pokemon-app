import { createSlice } from "@reduxjs/toolkit";
import { IUserInfo } from "../../models/user.model";

export const emptyUser:IUserInfo = {
    id:0,
    email:'',
    name: ''

}

export const userSlice = createSlice({
    name: "user",
    initialState: emptyUser,
    reducers: {
        setUser:(state, action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.name = action.payload.name
        },
        resetUser:() => {
            return emptyUser
        }
    }
})

export const {setUser, resetUser} = userSlice.actions;

export default userSlice.reducer;