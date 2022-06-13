import React from "react";

import Card from "./Card/Card";

import { IApart } from "../../../types/types";

import styles from "./apartlist.module.css";

type Props = {
  aparts: IApart[];
};

const ApartList: React.FC<Props> = ({ aparts }) => {
  return (
    <ul className={styles.list}>
      {aparts.map((apart) => (
        <li className={styles.li} key={apart.id}>
          <Card apart={apart} />
        </li>
      ))}
    </ul>
  );
};

export default ApartList;
