import Header from "./Header";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import useModalContext from "../hooks/useModalContext";
import Modal from "./Modal";
import Offline from "./Offline";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Container = () => {
  const { isOpen } = useModalContext();
  const isOnline = useOnlineStatus();
  return (
    <div className="grid ">
      {isOnline ? (
        <>
          <ScrollRestoration />
          <Header />
          {isOpen && <Modal />}
          <Outlet />
          <Footer />
        </>
      ) : (
        <Offline />
      )}
    </div>
  );
};

export default Container;
