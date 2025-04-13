import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Resources from "./pages/Resources";
import Cursor from "./components/Cursor";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/Terms&Conditions";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import Signup from "./pages/Signup";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const handleAddToCart = (product, currentProductCount) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, productCount: item.productCount + currentProductCount }
            : item
        );
      } else {
        return [
          ...prevItems,
          { ...product, productCount: currentProductCount },
        ];
      }
    });
  };

  const removeProductHandler = (e) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter((item) => {
        return item.id !== e.target.parentElement.parentElement.id;
      });
      return newCartItems;
    });
    console.log(cartItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <ReactLenis root>
        <Cursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="resources" element={<Resources />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route path="search-page" element={<SearchPage />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route
              path="search-page/products/:id"
              element={<Product handleAddToCart={handleAddToCart} />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeProductHandler={removeProductHandler}
                />
              }
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </>
  );
}
