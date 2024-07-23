import { IUser, IUserError, IUserState } from "../../types";
import { LOG_OUT, SET_USER, SET_USER_ERROR, SET_USER_NAME } from "../action-types";

const initialState = {
    user: {} as IUser,
    error: {} as IUserError
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
        case SET_USER_ERROR: {
            return({
                ...state,
                error: action.error
            })
        }
        default: {
            return state;
        }
    }
}

export { userReducer }