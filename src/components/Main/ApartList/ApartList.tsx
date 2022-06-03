import React from "react";
import { IApart, ICardProps } from "../../../types/types";
import Card from "./Card/Card";
import styles from "./apartlist.module.css";

interface ApartListProps {
  aparts: IApart[];
  filters: ICardProps;
}

const ApartList: React.FC<ApartListProps> = ({ aparts, filters }) => {
  return ( <>
    <ul className={styles.list}>
        {aparts.map((apart) => (
        <li className={styles.li} key={apart.id}>
          <Card apart={apart} />
        </li>
      ))}</ul>
    </> );
};

export default ApartList;
