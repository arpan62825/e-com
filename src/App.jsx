import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Resources from "./pages/resources";
import Cursor from "./components/cursor";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/Terms&Conditions";

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
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </>
  );
}
