import { IBook, IBookSelectedResponse, ICart } from "../../types";
import { ADD_CART, ADD_COUNT_CART, DELETE_CART, SET_BOOKS, SET_SELECTED_BOOK, SUBTRACTION_COUNT_CART, TOGGLE_FAVORITES } from "../action-types";

const cartBooksLocal = localStorage.getItem("cartBooks");
const favoritesBooksLocal = localStorage.getItem("favoritesBooks");

const initialState = {
    books: [] as IBook[],
    selectedBook: {} as IBookSelectedResponse,
    cart: (cartBooksLocal && cartBooksLocal !== "undefined") ? JSON.parse(cartBooksLocal ? cartBooksLocal : "") : [] as ICart[],
    favorites: (favoritesBooksLocal && favoritesBooksLocal !== "undefined") ? JSON.parse(favoritesBooksLocal ? favoritesBooksLocal : "") : [] as IBook[]
    // per_page: 15,
    // total: 0,
    // currentPage: 1,
    
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
        case TOGGLE_FAVORITES: {
            const { book } = action;
            const alredyFavorite = state.favorites.some((x: IBookSelectedResponse) => x.isbn13 === book.isbn13);
            return ({
                ...state,
                favorites: alredyFavorite ? state.favorites.filter((x: IBookSelectedResponse) => x.isbn13 !== book.isbn13) : [...state.favorites, book]
            })
        }
        default: {
            return state;
        }
    }
}

export { booksReducer };