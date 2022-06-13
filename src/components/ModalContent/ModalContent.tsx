import React, { useState } from "react";

import SubModalCounters from "./SubModalCounters/SubModalCounters";
import SubModalCity from "./SubModalCity/SubModalCity";

import { citiesSet } from "../Main/Main";
import { ICardProps } from "../../types/types";
import styles from "./modalcontent.module.css";

type Props = {
  filters: ICardProps;
  setFilters: React.Dispatch<React.SetStateAction<ICardProps>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent: React.FC<Props> = ({
  filters,
  setFilters,
  setModalOpen,
}) => {
  const [isCityTabOpen, setCityTabOpen] = useState<boolean>(true);
  const [isGuestsTabOpen, setGuestsTabOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      !Array.from(citiesSet).some(
        (city) => city.toLowerCase() === filters.city.toLowerCase()
      )
    ) {
      setErrorMessage("Incorrect city!");
    } else if (filters.city === "" || filters.guests === 0) {
      setErrorMessage("Please select city and number of guests!");
      console.log(errorMessage);
    } else {
      console.log(errorMessage);
      setErrorMessage("");
      setModalOpen(false);
    }
  };

  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="inputCity" className={styles.labelcity}>
            Location
          </label>
          <input
            className={
              isCityTabOpen
                ? `${styles.cityInput} ${styles.active}`
                : styles.cityInput
            }
            id="inputCity"
            value={filters.city}
            type="text"
            placeholder="Add location"
            onFocus={() => {
              setCityTabOpen(true);
              setGuestsTabOpen(false);
              setErrorMessage("");
            }}
            autoComplete="off"
            onChange={(e) => {
              setFilters((prev) => ({ ...prev, city: e.target.value }));
              setErrorMessage("");
            }}
          />
          <div className={styles.guestInputWrapper}>
            <label htmlFor="inputGuests" className={styles.labelguests}>
              Guests
            </label>
            <input
              id="inputGuests"
              className={
                isGuestsTabOpen
                  ? `${styles.guestInput} ${styles.active}`
                  : filters.guests + filters.kids === 0
                  ? `${styles.guestInput} ${styles.zeroGuests}`
                  : styles.guestInput
              }
              type="text"
              onChange={() => {}}
              placeholder="Add guests"
              value={
                filters.guests + filters.kids === 0
                  ? "Add guests"
                  : filters.guests + filters.kids === 1
                  ? `1 guest`
                  : `${filters.guests + filters.kids} guests`
              }
              readOnly
              onFocus={() => {
                setCityTabOpen(false);
                setGuestsTabOpen(true);
              }}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <input
              className={styles.buttonSubmit}
              type="submit"
              value="🔍︎ Search"
            />
          </div>
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
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default ModalContent;
