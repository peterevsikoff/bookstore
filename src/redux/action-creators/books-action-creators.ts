import { IBook, IBookSelectedResponse, IBooksResponse, ICart } from "../../types";
import { ADD_CART, ADD_COUNT_CART, DELETE_CART, LOAD_BOOKS, LOAD_SEARCH_BOOKS, LOAD_SELECTED_BOOK, SET_BOOKS, SET_CURRENT_PAGE, SET_SELECTED_BOOK, SET_TOTAL, SUBTRACTION_COUNT_CART, TOGGLE_FAVORITES } from "../action-types";
import { takeEvery, put } from "redux-saga/effects";

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books
})

const loadBooks = () => ({
    type: LOAD_BOOKS,
    
})

function* fetchLoadBooks(action: any) {
    const response: Response = yield fetch(`https://api.itbook.store/1.0/new`);
    const { books }: IBooksResponse = yield response.json();
    yield put(setBooks(books));
}

const setSelectedBook = (selectedBook: IBookSelectedResponse) => ({
    type: SET_SELECTED_BOOK,
    selectedBook
})

const loadSelectedBook = (id: string) => ({
    type: LOAD_SELECTED_BOOK,
    id
})

function* fetchSelectedBook(action: any) {
    const { id } = action;
    const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${id}`);
    const book: IBookSelectedResponse = yield response.json();
    yield put(setSelectedBook(book));
}

const loadSearchBooks = (searchValue: string, currentPage: number) => ({
    type: LOAD_SEARCH_BOOKS,
    searchValue,
    currentPage
})

function* fetchLoadSearchBooks(action: any) {
    //выдает по 10 на странице
    const { searchValue, currentPage } = action;
    const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${searchValue}/${currentPage}`);
    const { books, total, page }: IBooksResponse = yield response.json();
    
    yield put(setTotal(+total));
    yield put(setCurrentPage(+page));
    yield put(setBooks(books));
}

const addCart = (book: IBook) => ({
    type: ADD_CART,
    book
})

const addCountCart = (cart: ICart) => ({
    type: ADD_COUNT_CART,
    cart
})

const subCountCart = (cart: ICart) => ({
    type: SUBTRACTION_COUNT_CART,
    cart
})

const deleteCart = (cart: ICart) => ({
    type: DELETE_CART,
    cart
})

const toggleFavorites = (book: IBook) => ({
    type: TOGGLE_FAVORITES,
    book
})

const setTotal = (total: number) => ({
    type: SET_TOTAL,
    total
})

const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

function* watcherBooks(){
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks);
    yield takeEvery(LOAD_SELECTED_BOOK, fetchSelectedBook);
    yield takeEvery(LOAD_SEARCH_BOOKS, fetchLoadSearchBooks);
}

export {
    setBooks,
    loadBooks,
    watcherBooks,
    loadSelectedBook,
    loadSearchBooks,
    addCart,
    addCountCart,
    subCountCart,
    deleteCart,
    toggleFavorites,
    setTotal,
    setCurrentPage
}