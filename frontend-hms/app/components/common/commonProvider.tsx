"use client";

import { ModalProvider } from "../../context/modalContext";
import Header from "../header";
import HotelModal from "./hotelModal";

interface CommonProviderProps {
  children: React.ReactNode
}


const CommonProvider = ({ children }: CommonProviderProps) => {
  return (
    <ModalProvider>
      <Header />
      <HotelModal />
      {children}
    </ModalProvider>
  );
}

export default CommonProvider
