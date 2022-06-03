import React, { useState, useRef } from "react";

import Counter from "./SubModalCounters/Counter/Counter";
import CounterKids from "./SubModalCounters/Counter/CounterKids";
import SubModalCounters from "./SubModalCounters/SubModalCounters";
import SubModalCity from "./SubModalCity/SubModalCity";

import { ICardProps } from "../../../types/types";
import styles from "./modalcontent.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent: React.FC<Props> = ({ filters, setFilters, isModalOpen, setModalOpen }) => {
  const [isCityTabOpen, setCityTabOpen] = useState<boolean>(true);
  const [isGuestsTabOpen, setGuestsTabOpen] = useState<boolean>(false);
  const guestsInputRef = useRef<HTMLInputElement>(null);
  console.log(filters);
  const onClickHandler = () => {
    setModalOpen(false);
  }
  return (
    <div>
      <div className={styles.formWrapper}>
        <form>
          <input
            id="inputCity"
            value={filters.city}
            type="text"
            placeholder="Add location"
            onFocus={() => {
              setCityTabOpen((isCityTabOpen) => true);
              setGuestsTabOpen((isGuestsTabOpen) => false);
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
            ref={guestsInputRef}
            value={
              filters.guests + filters.kids > 0
                ? `${filters.guests + filters.kids} guests`
                : "Add guests"
            }
            onFocus={() => {
              setCityTabOpen((isCityTabOpen) => false);
              setGuestsTabOpen((isGuestsTabOpen) => true);
            }}
          />
          <input type="button" onClick={onClickHandler}/>
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
