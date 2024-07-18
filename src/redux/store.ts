import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { booksReducer, userReducer } from './reducers';
import { watcherBooks, watcherUser } from './action-creators';

const middleWare = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherBooks(),
        watcherUser()
    ]);
}

const store = createStore(combineReducers({
    books: booksReducer,
    user: userReducer
}), {}, applyMiddleware(middleWare));

middleWare.run(rootSaga);

store.subscribe(() => {
    const cart = store.getState().books.cart;
    if(cart)
        localStorage.setItem("cartBooks", JSON.stringify(cart));
    const favorites = store.getState().books.favorites;
    if(favorites)
        localStorage.setItem("favoritesBooks", JSON.stringify(favorites));


    // const user = store.getState().user.user;
    // console.log(user);
})

export { store };