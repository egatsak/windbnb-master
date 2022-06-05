import React from "react";
import { ICardProps } from "../../../../types/types";
import styles from "./counter.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
};

const Counter: React.FC<Props> = ({ filters, setFilters }) => {
  return (
    <div className={styles.counterWrapper}>
      <button
        onClick={() => {
          if (filters.guests === 1) {
            setFilters((filters) => ({
              ...filters,
              guests: filters.guests - 1,
            }));
            setFilters((filters) => ({ ...filters, kids: 0 }));
          }
          if (filters.guests > 1) {
            setFilters((filters) => ({
              ...filters,
              guests: filters.guests - 1,
            }));
          }
        }}
      >
        -
      </button>
      {filters.guests}
      <button
        onClick={() => {
          setFilters((filters) => ({ ...filters, guests: filters.guests + 1 }));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
