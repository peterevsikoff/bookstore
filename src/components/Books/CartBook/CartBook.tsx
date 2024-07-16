import { useDispatch } from "react-redux";
import { ICart } from "../../../types";
import "./cart-book.scss";
import { addCountCart, deleteCart, subCountCart } from "../../../redux/action-creators";

const CartBook = ({cart}: {cart: ICart}) => {
    const dispatch = useDispatch();
    
    const handleClickAdd = () => {
        dispatch(addCountCart(cart));
    }
    const handleClickSub = () => {
        dispatch(subCountCart(cart));
    }
    const handleClickDelete = () => {
        dispatch(deleteCart(cart));
    }
    return(
        <div className="cart-book">
            <div className="book-card__image">
                <img alt="image_book" src={cart.book.image}/>
            </div>
            <div className="cart-book__main">
                <h3>{cart.book.title}</h3>
                <div className="cart-book__subtitle">
                    <p>{cart.book.subtitle}</p>
                </div>
                <div className="cart-book__main-count">
                    <button onClick={() => handleClickSub()}>-</button>
                    {cart.count}
                    <button onClick={() => handleClickAdd()}>+</button>
                </div>
            </div>
            <div className="cart-book__price">{cart.book.price}</div>
            <div className="cart-book__delete">
                <button onClick={() => handleClickDelete()}>x</button>
            </div>
        </div>
    )
}

export { CartBook };