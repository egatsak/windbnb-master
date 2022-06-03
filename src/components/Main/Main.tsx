import React, { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import ApartList from "./ApartList/ApartList";

import { IApart, ICardProps } from "../../types/types";
import jsonData from "../../constants/stays.json";

import styles from "./main.module.css";
import { Set } from "typescript";

type Props = {
  filters: ICardProps;
};

const Main: FC<Props> = ({ filters }) => {
    const apartsMainArray: IApart[] = [...jsonData];
    const citiesSet = new Set<string>();
    apartsMainArray.forEach((apart) => {
      apart.id = uuidv4();
      citiesSet.add(apart.city);
    });

  const aparts = apartsMainArray.filter((apart) => {
    if (filters.city === "") {
      return apart;
    }
    if (
      apart.city.toLowerCase() === filters.city.toLowerCase() &&
      apart.maxGuests >= filters.guests + filters.kids
    ) {
      return apart;
    }
    return null;
  });
  // console.log(aparts);
  return (
    <main className={styles.main}>
      <ApartList aparts={aparts} filters={filters} />
    </main>
  );
};
export default Main;
