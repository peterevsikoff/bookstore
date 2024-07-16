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

store.subscribe(() => {
    //console.log("subscribe", store.getState().books.cart);
    const cart = store.getState().books.cart;
    if(cart)
        localStorage.setItem("cartBooks", JSON.stringify(cart));
    const favorites = store.getState().books.favorites;
    if(favorites)
        localStorage.setItem("favoritesBooks", JSON.stringify(favorites));
})

export { store };