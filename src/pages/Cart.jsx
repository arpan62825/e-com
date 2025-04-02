import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems, removeProductHandler }) {
  const subTotal = Number(
    cartItems
      .reduce((previousPrice, currentPrice) => {
        return previousPrice + currentPrice.price * currentPrice.productCount;
      }, 0)
      .toFixed(2)
  );
  const shipping = Number((subTotal > 100 ? 0 : subTotal * 0.15).toFixed(2));
  const postage = Number((subTotal * 0.2).toFixed(2));
  const total = Number(subTotal + postage + shipping).toFixed(2);

  // Navigation
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h1 className="cart-heading">SHOPPING CART</h1>
      <main className="carted-products-container">
        <section className="carted-products">
          {/* Each carted product goes here */}
          {cartItems.map((item) => {
            return (
              <div className="carted-product" id={item.id} key={item.id}>
                <div className="product-detail">
                  <h2>{item.title}</h2>
                  <p>${item.price}</p>
                  <p>Quantity: {item.productCount}</p>
                  <button onClick={removeProductHandler} className="remove-btn">
                    Remove
                  </button>
                </div>
                <div className="product-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          })}
        </section>
        {/* Order Summary */}
        <section className="order-summary">
          <h2 className="order-title">ORDER SUMMARY</h2>
          <div className="order-detail">
            <div className="order-row">
              <span>SUBTOTAL</span>
              <span>${subTotal}</span>
            </div>
            <div className="order-row">
              <span>SHIPPING</span>
              <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
            </div>
            <div className="order-row">
              <span>POSTAGE</span>
              <span>${postage}</span>
            </div>
            <div className="order-row total">
              <span>TOTAL</span>
              <span>${total}</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="checkout-btn"
          >
            Check Out
          </button>
        </section>
      </main>
    </div>
  );
}
