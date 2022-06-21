import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import ApartList from "./ApartList/ApartList";

import { makeStaysBlob } from "../../helpers/helpers";

import { IApart, ICard } from "../../types/types";
import jsonData from "../../constants/stays.json";

import styles from "./main.module.css";

type Props = {
  filters: ICard;
};

const apartsMainArray: IApart[] = [...jsonData];

export const citiesSet = new Set<string>();

apartsMainArray.forEach((apart) => {
  apart.id = uuidv4();
  citiesSet.add(apart.city);
});

const Main: FC<Props> = ({ filters }) => {
  const { city, guests, kids } = filters;
  const aparts: IApart[] = apartsMainArray.filter((item) => {
    if (city === "") {
      return item;
    }
    if (
      item.city.toLowerCase().startsWith(city.toLowerCase()) &&
      item.maxGuests >= guests + kids
    ) {
      return item;
    }
    return null;
  });

  return (
    <main className={styles.main}>
      <div className={styles.staysWrapper}>
        <span className={styles.staysCountry}>Stays in Finland</span>
        <span className={styles.staysBlob}>{makeStaysBlob(aparts.length)}</span>
      </div>
      <ApartList aparts={aparts} />
    </main>
  );
};
export default Main;
