import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Container() {
  return (
    <div className="grid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;
