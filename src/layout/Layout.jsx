import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Layout({ isSeller }) {
  return (
    <>
      <Header isSeller={isSeller} />
      <Outlet />
    </>
  );
}
