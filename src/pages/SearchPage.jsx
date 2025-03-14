import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../components/products";

export default function SearchPage() {
  const [items, setItems] = useState(products);
  const navigate = useNavigate();
  const handleClick = (item) => {
    console.log(item);
    setCurrentProduct(item);
    navigate(`products/${item.id}`, { state: { product: item } });
  };
  return (
    <div className="search-page">
      {/* Filter Section */}
      <div className="filters-container">
        <div className="filters-wrapper">
          <select className="filter-select">
            <option>Category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <select className="filter-select">
            <option>Price Range</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>Over $100</option>
          </select>

          <select className="filter-select">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-content">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">${item.price}</p>
              <p className="product-description">{item.description}</p>
              <button
                className="view-product-btn"
                onClick={() => handleClick(item)}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
