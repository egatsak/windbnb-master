import React, { useState } from "react";
import { IApart } from "../../types/types";
import jsonData from "../../constants/stays.json";
import { uuid } from "uuidv4";
import ApartList from "./ApartList/ApartList";
import styles from "./main.module.css";

export default function Main() {
  const [city, setCity] = useState("Helsinki");
  const [guests, setGuests] = useState("1");
  const [kids, setKids] = useState("0");

  console.log(jsonData);
  const aparts: IApart[] = [...jsonData];

  return (
    <main className={styles.main}>
      <ApartList aparts={aparts} />
    </main>
  );
}
