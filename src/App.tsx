import React, { useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";

import { ICardProps } from "./types/types";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [filters, setFilters] = useState<ICardProps>({
    city: "",
    guests: 0,
    kids: 0,
  });
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      >
        <ModalContent filters={filters} setFilters={setFilters} isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <Main filters={filters}/>
      <Footer />
    </div>
  );
};

export default App;
