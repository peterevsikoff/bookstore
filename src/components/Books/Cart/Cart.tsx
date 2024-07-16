import { Link } from "react-router-dom";
import "./cart.scss";
import { ArrowLeft } from "../../media";
import { useSelector } from "react-redux";
import { IStoreState } from "../../../types";
import { CartBook } from "../CartBook";

const Cart = () => {
    const cart = useSelector((state: IStoreState) => state.books.cart);
    //console.log("cart", cart);
    const vat = 0; // не знаем мы сколько у них налог
    const sumTotal = cart.reduce((a, c) => a + +c.book.price.replace("$", "") * c.count, 0);

    return(
        <section className="cart">
            <div className="container">
                <div className="cart__link">
                    <Link to="/books">
                        <ArrowLeft/>
                    </Link>
                </div>
                <h1>Your cart</h1>
                {
                    cart.map(x => <CartBook key={x.book.isbn13} cart={x}/>)
                }
                {
                    cart.length === 0 &&
                    <div className="empty">Your cart is empty</div>
                }
                <div className="cart-total">
                    <div className="cart-total-wrap">
                        <div className="cart-total__row">
                            <div>Sum total</div>
                            <div>{new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(sumTotal)}</div>
                        </div>
                        <div className="cart-total__row">
                            <div>VAT</div>
                            <div>{new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(vat)}</div>
                        </div>
                        <div className="cart-total__row main-row">
                            <div>TOTAL</div>
                            <div>{new Intl.NumberFormat("en", {style: "currency", currency: "USD"}).format(vat + sumTotal)}</div>
                        </div>
                        <button disabled={cart.length === 0}>Check out</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Cart };