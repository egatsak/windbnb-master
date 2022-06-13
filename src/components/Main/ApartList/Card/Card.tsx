import { FC } from "react";

import { shortenText } from "../../../../helpers/helpers";

import { IApart } from "../../../../types/types";

import styles from "./card.module.css";
interface ApartItemProps {
  apart: IApart;
}

const Card: FC<ApartItemProps> = ({ apart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        {" "}
        <img src={apart.photo} alt="foto" className={styles.image} />{" "}
      </div>
      <div className={styles.infoWrapper}>
        {apart.superHost && (
          <div className={styles.superHost}>
            <span className={styles.superHostText}>Super Host</span>
          </div>
        )}
        <span className={styles.type}>
          {apart.type}
          {apart.beds &&
            ". " + apart.beds + (apart.beds > 1 ? " beds" : " bed")}
        </span>
        <span className={styles.rating}>{apart.rating}</span>
      </div>
      <p className={styles.title}>{shortenText(apart.title, 41)}</p>
    </div>
  );
};

export default Card;
