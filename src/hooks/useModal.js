import { useState } from "react";

// export const useModal = ({initialState=false}) => {
export const useModal = () => {
  // const [isOpen, setIsOpen] = useState(initialState)
  // const [isOpen, setIsOpen] = useState(initialState||false)

  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
