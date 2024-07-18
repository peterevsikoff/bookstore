import { IUser, IUserState } from "../../types";
import { LOG_OUT, SET_USER, SET_USER_NAME } from "../action-types";

const initialState = {
    user: {} as IUser
}

const userReducer = (state: IUserState = initialState, action: any) => {
    switch(action.type) {
        case SET_USER: {
            return({
                ...state,
                user: action.user
            })
        }
        case SET_USER_NAME: {
            const newUser = {...state.user, username: action.username}
            return({
                ...state,
                user: newUser
            })
        }
        case LOG_OUT: {
            return({
                ...state,
                user: {}
            })
        }
        default: {
            return state;
        }
    }
}

export { userReducer }