import React from "react";

import Counter from "./Counter/CounterAdults";
import CounterKids from "./Counter/CounterKids";

import { ICardProps } from "../../../types/types";

import styles from "./submodalcounters.module.css";

type Props = {
  isGuestsTabOpen: boolean;
  children?: React.ReactChild | React.ReactNode;
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
};

const SubModalCounters: React.FC<Props> = ({
  isGuestsTabOpen,
  filters,
  setFilters,
}) => {
  return (
    <div
      className={
        isGuestsTabOpen
          ? `${styles.wrapper} ${styles.active}`
          : `${styles.wrapper}`
      }
    >
      <div className={styles.counterWrapper}>
        <div>
          <p className={styles.boldLabel}>Adults</p>
          <p className={styles.smallLabel}>Ages 13 or above</p>
        </div>
        <Counter filters={filters} setFilters={setFilters} />
      </div>
      <div className={styles.counterWrapper}>
        <div>
          <p className={styles.boldLabel}>Children</p>
          <p className={styles.smallLabel}>Ages 2-12</p>
        </div>
        <CounterKids filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default SubModalCounters;
