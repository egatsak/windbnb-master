import { FC } from "react";

import styles from "./modal.module.css";

type Props = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

const Modal: FC<Props> = ({ isModalOpen, setModalOpen, children }) => {
  return (
    <div
      className={
        isModalOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setModalOpen(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
