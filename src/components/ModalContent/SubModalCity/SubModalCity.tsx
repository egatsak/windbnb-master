import { FC } from "react";

import { ICard } from "../../../types/types";
import { citiesSet } from "../../Main/Main";

import styles from "./submodalcity.module.css";

type Props = {
  filters: ICard;
  setFilters: React.Dispatch<React.SetStateAction<ICard>>;
  setCityTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGuestsTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubModalCity: FC<Props> = ({
  filters,
  setFilters,
  setCityTabOpen,
  setGuestsTabOpen,
}) => {
  const { city } = filters;

  const mapCallback = (city: string): React.ReactNode => {
    return (
      <li
        key={city}
        className={styles.li}
        onClick={() => {
          setFilters((prev) => ({ ...prev, city: city }));
          setCityTabOpen(false);
          setGuestsTabOpen(true);
        }}
      >
        {city}, Finland
      </li>
    );
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {city.length === 0 && Array.from(citiesSet).map(mapCallback)}
        {city.length > 0 &&
          Array.from(citiesSet)
            .filter((item) => item.toLowerCase().startsWith(city.toLowerCase()))
            .map(mapCallback)}
      </ul>
    </div>
  );
};

export default SubModalCity;
