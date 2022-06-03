import React, { FC } from "react";

import Logo from "../../assets/logo.svg";
import styles from "./header.module.css";
interface IHeaderProps {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ isModalOpen, setModalOpen }) => {
  return (
    <div className={styles.header}>
      <span>
        <img src={Logo} alt="Logo" />
      </span>
      <form
        className={styles.inputForm}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <input
          className={styles.inputCity}
          type="text"
          placeholder="Helsinki, Finland"
        />
        <input
          className={styles.inputGuests}
          type="text"
          placeholder="Add guests"
        />
        <input className={styles.inputButton} type="button" onSubmit={(e) => e.preventDefault()} />{" "}
      </form>
    </div>
  );
};
export default Header;
