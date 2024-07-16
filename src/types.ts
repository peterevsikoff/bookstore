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
    cart: ICart[]
    // per_page: number,
    // total: number,
    // currentPage: number,
    // favorites: IPost[],
}

interface IStoreState {
    books: IBooksState,
    // ui: IUiState,
    // user: IUserState
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

export type {
    IBook,
    IStoreState,
    IBooksResponse,
    IBookSelectedResponse,
    ICart
}