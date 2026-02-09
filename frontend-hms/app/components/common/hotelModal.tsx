"use client"

import { useState, useEffect } from "react";
import Modal from "./modal";
import { useModal } from "../../context/modalContext";

const HotelModal = () => {
  const { isOpen, closeModal } = useModal();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
     }, []);

  if (!mounted || !isOpen) return null;


  const handleSubmit = () => {
    console.log({ name, address });
    closeModal();
  };

  return (
    <Modal
      title="Hotel Details"
      buttonLabel="Save"
      onAction={handleSubmit}
      onClose={closeModal}
      disabled={name === ""}
    >
      <input
        className="border p-2 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border p-2 w-full mb-2"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
    </Modal>
  );
};

export default HotelModal;
