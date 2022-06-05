import React, { useState } from "react";

import Counter from "./SubModalCounters/Counter/CounterAdults";
import CounterKids from "./SubModalCounters/Counter/CounterKids";
import SubModalCounters from "./SubModalCounters/SubModalCounters";
import SubModalCity from "./SubModalCity/SubModalCity";

import { citiesSet } from "../Main/Main";
import { ICardProps } from "../../types/types";
import styles from "./modalcontent.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent: React.FC<Props> = ({
  filters,
  setFilters,
  isModalOpen,
  setModalOpen,
}) => {
  const [isCityTabOpen, setCityTabOpen] = useState<boolean>(true);
  const [isGuestsTabOpen, setGuestsTabOpen] = useState<boolean>(false);
  
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!citiesSet.has(filters.city + new RegExp(`/+[a-z]*/`,`gi`))) {
      console.log("incorrect city!");
    } else if (filters.city === "" || filters.guests === 0) {
      console.log("empty input!");
    } else {
      setModalOpen(false);
    }
  };

  return (
    <div>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmitHandler}>
          <input
            id="inputCity"
            value={filters.city}
            type="text"
            placeholder="Add location"
            onFocus={() => {
              setCityTabOpen(/* (isCityTabOpen) => */ true);
              setGuestsTabOpen(/* (isGuestsTabOpen) =>  */ false);
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setFilters((prev) => ({ ...prev, city: e.target.value }));
            }}
          />
          <input
            id="inputGuests"
            type="text"
            placeholder="Add guests"
            value={
              filters.guests + filters.kids > 0
                ? `${filters.guests + filters.kids} guests`
                : "Add guests"
            }
            onFocus={() => {
              setCityTabOpen(/* (isCityTabOpen) =>  */ false);
              setGuestsTabOpen(/* (isGuestsTabOpen) =>  */ true);
            }}
          />
          <input type="submit" />
        </form>
      </div>
      <SubModalCity isCityTabOpen={isCityTabOpen} />
      <SubModalCounters isGuestsTabOpen={isGuestsTabOpen}>
        <Counter filters={filters} setFilters={setFilters} />
        <CounterKids filters={filters} setFilters={setFilters} />
      </SubModalCounters>
    </div>
  );
};

export default ModalContent;
