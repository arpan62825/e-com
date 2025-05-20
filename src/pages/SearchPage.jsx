import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../components/products";
import { v4 as uuidv4 } from "uuid";

export default function SearchPage({}) {
  const [items, setItems] = useState(products);
  const navigate = useNavigate();
  useEffect(() => {
    import("../components/products").then((module) => {
      setItems(module.default.map((item) => ({ ...item, id: uuidv4() })));
    });
  }, []);

  const handleClick = (item) => {
    navigate(`products/${item.id}`, { state: { product: item } });
  };

  // SETTING AND USING SEARCH QUERIES ->
  const [searchParam, setSearchParam] = useSearchParams();
  function changeParam(key, value) {
    const currentParams = Object.fromEntries([...searchParam]);
    if (value) {
      currentParams[key] = value;
    } else {
      delete currentParams[key];
    }
    setSearchParam(currentParams);
  }

  useEffect(() => {
    const price = searchParam.get("price");
    const sort = searchParam.get("sort");

    // Fresh copy of products to avoid mutation
    let filteredItems = [];

    if (price === "under-100") {
      filteredItems = products.filter((item) => item.price < 100);
    } else if (price === "100-150") {
      filteredItems = products.filter(
        (item) => item.price >= 100 && item.price < 150
      );
    } else if (price === "over-150") {
      filteredItems = products.filter((item) => item.price >= 150);
    }

    if (sort === "low-to-high") {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      filteredItems.sort((a, b) => b.price - a.price);
    }

    setItems(filteredItems);
  }, [searchParam]);

  return (
    <div className="search-page">
      {/* Filter Section */}
      <div className="filters-container">
        <div className="filters-wrapper">
          <select
            onChange={(e) => changeParam("price", e.target.value)}
            className="filter-select"
          >
            <option value="">Price Range</option>
            <option value="under-100">Under $100</option>
            <option value="100-150">$100 - $150</option>
            <option value="over-150">Over $150</option>
          </select>

          <select
            onChange={(e) => changeParam("sort", e.target.value)}
            className="filter-select"
          >
            <option value="">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="product-card"
              onClick={() => handleClick(item)}
            >
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
          );
        })}
      </div>
    </div>
  );
}
