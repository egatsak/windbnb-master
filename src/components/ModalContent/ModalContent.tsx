import React, { useState } from "react";

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
    if (
      !Array.from(citiesSet).some(
        (city) =>
          city.slice(0, filters.city.length).toLowerCase() ===
          filters.city.toLowerCase()
      )
    ) {
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
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="inputCity" className={styles.labelcity}>
            Location
          </label>
          <input
            className={styles.cityInput}
            id="inputCity"
            value={filters.city}
            type="text"
            placeholder="Add location"
            onFocus={() => {
              setCityTabOpen(true);
              setGuestsTabOpen(false);
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setFilters((prev) => ({ ...prev, city: e.target.value }));
            }}
          />
          <div className={styles.guestInputWrapper}>
          <label htmlFor="inputGuests" className={styles.labelguests}>
            Guests
          </label>
          <input
            id="inputGuests"
            className={styles.guestInput}
            type="text"
            onChange={() => {}}
            placeholder="Add guests"
            value={
              filters.guests + filters.kids > 0
                ? `${filters.guests + filters.kids} guests`
                : "Add guests"
            }
            onFocus={() => {
              setCityTabOpen(false);
              setGuestsTabOpen(true);
            }}
          />
          </div>
          <input className={styles.buttonWrapper} type="submit" />
        </form>
      </div>
      {isCityTabOpen && (
        <SubModalCity
          filters={filters}
          setFilters={setFilters}
          isCityTabOpen={isCityTabOpen}
          setCityTabOpen={setCityTabOpen}
          setGuestsTabOpen={setGuestsTabOpen}
        />
      )}
      {isGuestsTabOpen && (
        <SubModalCounters
          isGuestsTabOpen={isGuestsTabOpen}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </div>
  );
};

export default ModalContent;
