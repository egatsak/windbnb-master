import React from "react";

import { ICardProps } from "../../../types/types";
import { citiesSet } from "../../Main/Main";
import styles from "./submodalcity.module.css";

type Props = {
  filters: ICardProps;
  isCityTabOpen: boolean;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
  setCityTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGuestsTabOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubModalCity: React.FC<Props> = ({
  isCityTabOpen,
  filters,
  setFilters,
  setCityTabOpen,
  setGuestsTabOpen,
}) => {
  /*   const liClickHandler = ():void => {
    )
  }
   */
  return (
    <div
      className={
        isCityTabOpen
          ? `${styles.wrapper} ${styles.active}`
          : `${styles.wrapper}`
      }
    >
      <ul className={styles.ul}>
        {filters.city.length === 0 &&
          Array.from(citiesSet).map((city) => (
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
          ))}
        {filters.city.length > 0 &&
          Array.from(citiesSet)
            .filter((city) =>
              city.toLowerCase().startsWith(filters.city.toLowerCase())
            )
            .map((city) => (
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
            ))}
      </ul>
    </div>
  );
};

export default SubModalCity;
