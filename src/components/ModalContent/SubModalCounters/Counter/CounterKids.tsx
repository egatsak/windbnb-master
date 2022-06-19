import { FC } from "react";

import { ICardProps } from "../../../../types/types";
import styles from "./counter.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
};

const CounterKids: FC<Props> = ({ filters, setFilters }) => {
  const { guests, kids } = filters;

  const minusClickHandler = (): void => {
    if (kids > 0) {
      setFilters((filters) => ({ ...filters, kids: kids - 1 }));
    }
  };

  const plusClickHandler = (): void => {
    if (guests > 0) {
      setFilters((filters) => ({ ...filters, kids: kids + 1 }));
    } else {
      setFilters((filters) => ({
        ...filters,
        guests: guests + 1,
        kids: kids + 1,
      }));
    }
  };
  return (
    <div className={styles.counterWrapper}>
      <button className={styles.button} onClick={minusClickHandler}>
        {"\u2013"}
      </button>
      <span className={styles.count}>{kids}</span>
      <button className={styles.button} onClick={plusClickHandler}>
        +
      </button>
    </div>
  );
};

export default CounterKids;
