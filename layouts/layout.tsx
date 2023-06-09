import React from "react";
import Header from "../pages/components/layout/Header";
import Footer from "../pages/components/layout/footer";

function Layout({ children }: any) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
