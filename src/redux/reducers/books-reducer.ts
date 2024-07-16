import { IBook, IBookSelectedResponse, ICart } from "../../types";
import { ADD_CART, ADD_COUNT_CART, DELETE_CART, SET_BOOKS, SET_SELECTED_BOOK, SUBTRACTION_COUNT_CART } from "../action-types";

const cartBooksLocal = localStorage.getItem("cartBooks");

const initialState = {
    books: [] as IBook[],
    selectedBook: {} as IBookSelectedResponse,
    //cart: [] as ICart[]
    cart: (cartBooksLocal && cartBooksLocal !== "undefined") ? JSON.parse(cartBooksLocal ? cartBooksLocal : "") : [] as ICart[]
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
        case ADD_CART: {
            const { book } = action;
            return ({
                ...state,
                cart: [...state.cart, {book, count: 1}]
            })
        }
        case ADD_COUNT_CART: {
            const { cart } = action;
            const cartIndex = state.cart.findIndex((x: ICart) => x.book.isbn13 === cart.book.isbn13);
            return ({
                ...state,
                cart: [...state.cart.slice(0, cartIndex), {...cart, count: cart.count + 1}, ...state.cart.slice(cartIndex + 1)]
            })
        }
        case SUBTRACTION_COUNT_CART: {
            const { cart } = action;
            const cartIndex = state.cart.findIndex((x: ICart) => x.book.isbn13 === cart.book.isbn13);
            const cartArray = cart.count === 1 ? 
            [...state.cart.slice(0, cartIndex), ...state.cart.slice(cartIndex + 1)] : 
            [...state.cart.slice(0, cartIndex), {...cart, count: cart.count - 1}, ...state.cart.slice(cartIndex + 1)];
            return ({
                ...state,
                cart: cartArray
            })
        }
        case DELETE_CART: {
            const { cart } = action;
            
            return ({
                ...state,
                cart: state.cart.filter((x: ICart) => x.book.isbn13 !== cart.book.isbn13)
            })
        }
        default: {
            return state;
        }
    }
}

export { booksReducer };