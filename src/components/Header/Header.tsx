import React, { FC } from "react";

import { ICard } from "../../types/types";

import Logo from "../../assets/logo.svg";

import styles from "./header.module.css";

type HeaderProps = {
  filters: ICard;
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({ filters, isModalOpen, setModalOpen }) => {
  const { city, guests, kids } = filters;

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
          value={(city.length > 0 ? city : "Helsinki") + ", Finland"}
          type="text"
          placeholder="Helsinki, Finland"
          readOnly
        />
        <input
          className={styles.inputGuests}
          value={
            guests + kids === 0
              ? "Add guests"
              : guests + kids === 1
              ? `1 guest`
              : `${guests + kids} guests`
          }
          onChange={() => {}}
          type="text"
          placeholder="Add guests"
          readOnly
        />
        <button
          className={styles.inputButton}
          onSubmit={(e) => e.preventDefault()}
        />{" "}
      </div>
    </div>
  );
};

export default Header;
