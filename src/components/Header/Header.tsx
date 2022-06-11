import React, { FC } from "react";

import Logo from "../../assets/logo.svg";
import styles from "./header.module.css";

import { ICardProps } from "../../types/types";
interface IHeaderProps {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: ICardProps;
}

const Header: FC<IHeaderProps> = ({ isModalOpen, setModalOpen, filters }) => {
  return (
    <div className={styles.header}>
      <span>
        <img src={Logo} alt="Logo" />
      </span>
      <div
        className={styles.inputForm}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <input
          className={styles.inputCity}
          value={(filters.city.length>0?filters.city:"Helsinki") + ", Finland"}
          onChange={() => {}}
          type="text"
          placeholder="Helsinki, Finland"
        />
        <input
          className={styles.inputGuests}
          value={
            filters.guests + filters.kids > 0
              ? filters.guests + filters.kids + " guests"
              : "Add guests"
          }
          onChange={() => {}}
          type="text"
          placeholder="Add guests"
        />
        <input
          className={styles.inputButton}
          type="button"
          onSubmit={(e) => e.preventDefault()}
        />{" "}
      </div>
    </div>
  );
};
export default Header;
