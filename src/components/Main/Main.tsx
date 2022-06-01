import React, { FC } from "react";
import { IApart } from "../../types/types";
import jsonData from "../../constants/stays.json";
import { uuid } from "uuidv4";
import ApartList from "./ApartList/ApartList";
import styles from "./main.module.css";

export default function Main() {

  console.log(jsonData);
  const aparts: IApart[] = [...jsonData];

  return (
    <main className={styles.main}>
      <ApartList aparts={aparts} />
    </main>
  );
}
