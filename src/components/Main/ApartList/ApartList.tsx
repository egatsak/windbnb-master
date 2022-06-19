import { FC } from "react";

import Card from "./Card/Card";

import { IApart } from "../../../types/types";

import styles from "./apartlist.module.css";

type Props = {
  aparts: IApart[];
};

const ApartList: FC<Props> = ({ aparts }) => {
  return (
    <ul className={styles.list}>
      {aparts.map((apart) => (
        <Card key={apart.id} apart={apart} />
      ))}
    </ul>
  );
};

export default ApartList;
