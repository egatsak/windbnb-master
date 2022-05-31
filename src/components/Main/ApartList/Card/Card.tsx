import React, { FC } from "react";
import styles from "./card.module.css";
import { IApart } from "../../../../types/types";

interface ApartItemProps {
  apart: IApart;
}

/* interface CardProps {
  city: string;
  guests: string;
  kids: string;
  children?: React.ReactChild | React.ReactNode;
} */

const shortenText = (text:string, limit:number) => {
  if (text.length<=limit) {
    return text;
    
  }
  text= text.slice(0,limit);
  const lastSpaceIndex = text.lastIndexOf(' ');
  if (lastSpaceIndex > 0) {
    text = text.slice(0,lastSpaceIndex);
  }
  return text + '...'
}

const Card: FC<ApartItemProps> = ({ apart }) => {
  return (
    <div className={styles.card}>
      <img src={apart.photo} alt="foto" className={styles.image} />
      {apart.superHost && <div className={styles.superHost}><span className = {styles.superHostText}>Super Host</span></div>}
      <span className={styles.type}>{apart.type} {apart.beds&&'. '+apart.beds+' beds'}</span>
      <span className={styles.rating}>{apart.rating}</span>
      <p className={styles.title}>{shortenText(apart.title,45)}</p>
    </div>
  );
};

export default Card;
