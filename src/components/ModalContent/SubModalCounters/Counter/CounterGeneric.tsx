/* import { FC } from "react";
import styles from "./counter.module.css";
const CounterGeneric: FC = ({ filters, setFilters }) => {
  const { guests } = filters;
  const minusClickHandler = (): void => {
    if (guests === 1) {
      setFilters((filters) => ({
        ...filters,
        guests: guests - 1,
      }));
      setFilters((filters) => ({ ...filters, kids: 0 }));
    }
    if (guests > 1) {
      setFilters((filters) => ({
        ...filters,
        guests: guests - 1,
      }));
    }
  };

  const plusClickHandler = (): void => {
    setFilters((filters) => ({ ...filters, guests: guests + 1 }));
  };

  return (
    <div className={styles.counterWrapper}>
      <button className={styles.button} onClick={minusClickHandler}>
        {"\u2013"}
      </button>
      <span className={styles.count}>{filters.guests}</span>
      <button className={styles.button} onClick={plusClickHandler}>
        +
      </button>
    </div>
  );/*  */
export {}