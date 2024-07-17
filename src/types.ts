interface IBook {
    image?: string,
    isbn13: string,
    price: string,
    subtitle: string,
    title: string,
    url: string
}

interface ICart {
    book: IBook,
    count: number
}

interface IBooksState {
    books: IBook[],
    selectedBook: IBookSelectedResponse,
    cart: ICart[],
    favorites: IBookSelectedResponse[],
    // per_page: number,
    // total: number,
    // currentPage: number,
    
}

interface IStoreState {
    books: IBooksState,
    user: IUserState
}

interface IBooksResponse {
    total: number,
    books: IBook[]
}

export enum TAB_SELECTED_BOOK_TYPES {
    DESC = "desc",
    AUTHORS = "authors",
}

interface IBookSelectedResponse {
    authors: string,
    desc: string,
    error: string,
    image: string,
    isbn10: string,
    isbn13: string,
    language: string,
    pages: string,
    pdf: {"Free eBook": string},
    price: string,
    publisher: string,
    rating: string,
    subtitle: string,
    title: string,
    url: string,
    year: string
}

interface IInput {
    type: INPUTTYPE,
    value: string | number,
    setValue: Function,
    errorText?: string,
    title: string,
    disabled?: boolean,
    placeholder?: string
}

interface IUser {
    id: number,
    email: string,
    username: string
}

interface IUserState {
    user: IUser
}

interface ISignUpUser {
    username: string,
    password: string,
    email: string
}

export type {
    IBook,
    IStoreState,
    IBooksResponse,
    IBookSelectedResponse,
    ICart,
    IInput,
    IUser,
    IUserState,
    ISignUpUser
}

//чтобы экспортировать не как тип, а значение
export const enum INPUTTYPE {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
}