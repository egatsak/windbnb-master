import { FC, useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ModalContent from "./components/ModalContent/ModalContent";

import { ICard } from "./types/types";

import styles from "./App.module.css";

const App: FC = () => {
  const [filters, setFilters] = useState<ICard>({
    city: "",
    guests: 0,
    kids: 0,
  });
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        <ModalContent
          filters={filters}
          setFilters={setFilters}
          setModalOpen={setModalOpen}
        />
      </Modal>
      <Header
        filters={filters}
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <Main filters={filters} />
      <Footer />
    </div>
  );
};

export default App;
