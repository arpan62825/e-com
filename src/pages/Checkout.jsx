import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../components/firebase";

const Checkout = ({ cartItems }) => {
  // Calculate the total

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

  // Form state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("name");
    const address = formData.get("address");
    const email = formData.get("email");
    try {
      const docRef = addDoc(collection(database, "detail"), {
        name,
        address,
        email,
      });
      console.log("Data added to the database.");
    } catch (error) {
      console.error("An error occurred while performing the task: " + error);
    }
    formElement.reset();
  };
  return (
    <div className="checkout-container">
      <div className="checkout-grid">
        {/* Left Column - Cart Items */}
        <div className="checkout-items-column">
          <h1 className="checkout-title">Checkout</h1>
          <div className="overflow-container">
            <section className="carted-products checkout-carted-products">
              {/* Each carted product goes here */}
              {cartItems.map((item) => {
                return (
                  <div
                    className="carted-product checkout-carted-product"
                    id={item.id}
                    key={item.id}
                  >
                    <div className="checkout-product-detail product-detail">
                      <h2>{item.title}</h2>
                      <p>${item.price}</p>
                      <p>Quantity: {item.productCount}</p>
                    </div>
                    <div className="product-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                );
              })}
            </section>
          </div>

          <div className="checkout-summary">
            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="checkout-summary-row">
              <span>Postage</span>
              <span>${postage}</span>
            </div>
            <div className="checkout-summary-row total">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Checkout Form */}
        <div className="checkout-form-column">
          <h2 className="checkout-form-title">Shipping Details</h2>
          <form
            onSubmit={handleSubmit}
            name="checkout-form"
            className="checkout-form"
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                required
                placeholder="Enter your shipping address"
                rows="4"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your Email here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select id="paymentMethod" name="paymentMethod">
                <option value="COD">Cash on Delivery (COD)</option>
              </select>
            </div>
            <button type="submit" className="checkout-submit-button">
              Complete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
