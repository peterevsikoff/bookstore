import { put, takeEvery } from "redux-saga/effects";
import { ISignUpUser, IUser, IUserError } from "../../types";
import { GET_USER, LOG_OUT, SET_USER, SET_USER_ERROR, SET_USER_NAME, SIGN_IN_USER, SIGN_UP_ACTIVATE, SIGN_UP_USER, UPDATE_USER_NAME } from "../action-types";
import { getToken } from "../utils";

const signUpUser = (signUpInfo: ISignUpUser) => ({
    type: SIGN_UP_USER,
    signUpInfo
});

const signUpActivate = (activationInfo: {uid: string, token: string}) => ({
    type: SIGN_UP_ACTIVATE,
    activationInfo
});

const signInUser = (signInUser: {email: string, password: string}) => ({
    type: SIGN_IN_USER,
    signInUser
});

const getUser = () => ({
    type: GET_USER
});

const setUser = (user: IUser) => ({
    type: SET_USER,
    user
});

const setUserError = (error: IUserError) => ({
    type: SET_USER_ERROR,
    error
})

function* fetchSignUp(action: any) {
    const { signUpInfo } = action;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpInfo)
    });
    if (response.status === 201) {
        window.location.pathname = "/bookstore/registrationSuccess";
    }
    if(response.status >= 400){
        const error:IUserError = yield response.json();
        console.log(error);
        yield put(setUserError(error));
    }
    //KJ3h1EZyUghaR32BUDn2
    //http://studapi.teachmeskills.by//activate/ODU2MQ/caf0vu-1329c088d744c0441bef311506281108
}

function* fetchSignActivate(action: any) {
    const { activationInfo } = action;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activationInfo)
    });
    if (response.status === 204) {
        window.location.pathname = "/bookstore/registrationSuccess";
    }
}

function* fetchSignIn(action: any) {
    const { signInUser } = action;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/create/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signInUser)
    });
    if (response.status === 200) {
        const { refresh, access } = yield response.json();
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("access", access);
        yield fetchGetUser();
        window.location.pathname = "/bookstore/books";
    }
}

function* fetchGetUser(){
    const token: string = yield getToken();

    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if(response.status === 200){
        const user: IUser = yield response.json();
        //console.log("fetchUser", user);
        yield put(setUser(user));
    }
}

const updateUserName = (username: string) => ({
    type: UPDATE_USER_NAME,
    username
})

const setUserName = (username: string) => ({
    type: SET_USER_NAME,
    username
});

function* fetchUpdateUserName(action: any) {
    const { username } = action;
    const token: string = yield getToken();
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username})
    });
    
    if (response.status === 200) {
        const { username } = yield response.json();
        yield put(setUserName(username));
    }
}

const logOut = () => ({
    type: LOG_OUT
    
});


function* watcherUser() {
    yield takeEvery(SIGN_UP_USER, fetchSignUp);
    yield takeEvery(SIGN_UP_ACTIVATE, fetchSignActivate);
    yield takeEvery(SIGN_IN_USER, fetchSignIn);
    yield takeEvery(GET_USER, fetchGetUser);
    yield takeEvery(UPDATE_USER_NAME, fetchUpdateUserName);
}

export {
    signUpUser,
    watcherUser,
    signUpActivate,
    signInUser,
    getUser,
    updateUserName,
    logOut
}