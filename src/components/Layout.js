import React from "react";

import Footer from "./Footer";
import NavbarAdmin from "./NavbarAdmin";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
