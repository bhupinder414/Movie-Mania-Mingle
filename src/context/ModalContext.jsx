import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [name, setName] = useState(null);
  const openModal = (name, videoId) => {
    setName(name);
    setVideoId(videoId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setName(null);
    setVideoId(null);
    setIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        name,
        isOpen,
        videoId,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
