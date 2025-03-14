import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product() {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <>
      <div className="container">
        {/* Product Images Section */}
        <div className="product-images">
          <div className="preview-frame">preview-frame</div>
          <div className="thumbnail-container">
            <div className="thumbnail"></div>
            {/* More thumbnails would go here */}
          </div>
          <div className="main-image-container">
            <div className="main-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          {/* Title & SKU */}
          <h1 className="product-title">{product.title}</h1>
          <div className="product-sku">SKU: 671253175371</div>

          {/* Price */}
          <div className="product-price">
            <span className="original-price">₹{product.price}</span>
            <span className="sale-price">₹95.00</span>
          </div>

          {/* Description */}
          <p className="product-description">{product.description}</p>

          {/* Quantity Counter */}
          <div className="quantity-label">Quantity</div>
          <div className="quantity-selector">
            <button className="quantity-button" id="decrease-quantity">
              −
            </button>
            <input
              type="text"
              className="quantity-input"
              id="quantity"
              value={1}
            />
            <button className="quantity-button" id="increase-quantity">
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>

          {/* Accordion Sections */}
          <div className="accordion">
            <div className="accordion-header">
              <span>PRODUCT INFO</span>
              <span className="accordion-icon">−</span>
            </div>
            <div className="accordion-content">
              I'm a product detail. I'm a great place to add more information
              about your product such as sizing, material, care and cleaning
              instructions. This is also a great space to write what makes this
              product special and how your customers can benefit from this item.
            </div>
          </div>

          <div className="accordion closed">
            <div className="accordion-header">
              <span>RETURN & REFUND POLICY</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="accordion-content">
              Return & refund policy details go here.
            </div>
          </div>

          <div className="accordion closed">
            <div className="accordion-header">
              <span>SHIPPING INFO</span>
              <span className="accordion-icon">+</span>
            </div>
            <div className="accordion-content">
              Shipping information details go here.
            </div>
          </div>

          {/* Social Share Icons */}
          <div className="social-icons">
            <div className="social-icon">⟲</div>
            <div className="social-icon">f</div>
            <div className="social-icon">p</div>
            <div className="social-icon">𝕏</div>
          </div>
        </div>
      </div>
    </>
  );
}
