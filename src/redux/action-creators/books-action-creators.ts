import { SET_BOOKS } from "../action-types";

const setBooks = (books: any) => ({
    type: SET_BOOKS,
    books
})

export {
    setBooks,
}