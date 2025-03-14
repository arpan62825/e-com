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

export default function App() {
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
              <Route path="cart" element={<Cart />} />
              <Route path="search-page" element={<SearchPage />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="search-page/products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </>
  );
}
