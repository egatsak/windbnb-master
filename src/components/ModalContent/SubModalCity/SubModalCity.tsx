import React from "react";

import { ICardProps } from "../../../types/types";
import { citiesSet } from "../../Main/Main";
import styles from "./submodalcity.module.css";

type Props = {
  filters: ICardProps;
  isCityTabOpen: boolean;
};

const SubModalCity: React.FC<Props> = ({ isCityTabOpen, filters }) => {
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
            <li className={styles.li}>{city}, Finland</li>
          ))}
        {filters.city.length > 0 &&
          Array.from(citiesSet)
            .filter((city) =>
              city.toLowerCase().startsWith(filters.city.toLowerCase())
            )
            .map((city) => <li className={styles.li}>{city}, Finland</li>)}
      </ul>
    </div>
  );
};

export default SubModalCity;
