import React from "react";

import { ICardProps } from "../../../../../types/types";
import styles from "./counter.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
};

const CounterKids: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <div className={styles.counterWrapper}>
      <button
        onClick={() => {
          if (filters.kids > 0) {
            setFilters((filters) => ({ ...filters, kids: filters.kids - 1 }));
          }
        }}
      >
        -
      </button>
      {filters.kids}
      <button
        onClick={() => {
          if (filters.guests > 0) {
            setFilters((filters) => ({ ...filters, kids: filters.kids + 1 }));
          } else {
            setFilters((filters) => ({
              ...filters,
              guests: filters.guests + 1,
            }));
            setFilters((filters) => ({ ...filters, kids: filters.kids + 1 }));
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default CounterKids;
