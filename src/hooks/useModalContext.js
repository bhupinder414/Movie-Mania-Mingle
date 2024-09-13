import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export default useModalContext;
