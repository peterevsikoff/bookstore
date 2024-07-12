import { SET_BOOKS } from "../action-types";

const initialState = {
    // posts: [] as IPost[],
    // selectedPost: {} as IPost,
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
        default: {
            return state;
        }
    }
}

export { booksReducer };