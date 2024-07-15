import { IBook, IBookSelectedResponse } from "../../types";
import { SET_BOOKS, SET_SELECTED_BOOK } from "../action-types";

const initialState = {
    books: [] as IBook[],
    selectedBook: {} as IBookSelectedResponse,
    // per_page: 15,
    // total: 0,
    // currentPage: 1,
    // favorites: favoritesLocal !== "undefined" ? JSON.parse(favoritesLocal ? favoritesLocal : "") : [] as IPost[]
}

const booksReducer = (state: any = initialState, action: any) => {
    switch(action.type) {
        case SET_BOOKS: {
            const { books } = action;
            return ({
                ...state,
                books,
            })
        }
        case SET_SELECTED_BOOK: {
            const { selectedBook } = action;
            return ({
                ...state,
                selectedBook,
            })
        }
        default: {
            return state;
        }
    }
}

export { booksReducer };