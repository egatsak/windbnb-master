import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import ApartList from "./ApartList/ApartList";

import { IApart, ICardProps } from "../../types/types";
import jsonData from "../../constants/stays.json";

import styles from "./main.module.css";

type Props = {
  filters: ICardProps;
};

const apartsMainArray: IApart[] = [...jsonData];
export const citiesSet = new Set<string>();
apartsMainArray.forEach((apart) => {
  apart.id = uuidv4();
  citiesSet.add(apart.city);
});

const Main: FC<Props> = ({ filters }) => {
  const aparts: IApart[] = apartsMainArray.filter((apart) => {
    if (filters.city === "") {
      return apart;
    }
    if (
      apart.city.toLowerCase().startsWith(filters.city.toLowerCase()) &&
      apart.maxGuests >= filters.guests + filters.kids
    ) {
      return apart;
    }
    return null;
  });

  return (
    <main className={styles.main}>
      <ApartList aparts={aparts} />
    </main>
  );
};
export default Main;
