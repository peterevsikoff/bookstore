import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { booksReducer } from './reducers';
import { watcherBooks } from './action-creators';

const middleWare = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherBooks(),
        // watcherUser()
    ]);
}

const store = createStore(combineReducers({
    books: booksReducer,
    // ui: uiReducer,
    // user: userReducer
}), {}, applyMiddleware(middleWare));

middleWare.run(rootSaga);

// store.subscribe(() => {
//     //console.log("subscribe", store.getState());
//     const favorites = store.getState().posts.favorites;
//     if(favorites)
//         localStorage.setItem("favorites", JSON.stringify(favorites));
// })

export { store };