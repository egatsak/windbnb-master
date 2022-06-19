import { FC, useState } from "react";

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

const ModalContent: FC<Props> = ({ filters, setFilters, setModalOpen }) => {
  const { city, guests, kids } = filters;
  const [isCityTabOpen, setCityTabOpen] = useState<boolean>(true);
  const [isGuestsTabOpen, setGuestsTabOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (city === "" || guests === 0) {
      setErrorMessage("Please select city and number of guests!");
    } else if (
      !Array.from(citiesSet).some(
        (item) => item.toLowerCase() === city.toLowerCase()
      )
    ) {
      setErrorMessage("Incorrect city!");
    } else {
      setErrorMessage("");
      setModalOpen(false);
    }
  };

  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmitHandler} className={styles.form}>
          <label htmlFor="inputCity" className={styles.labelcity}>
            LOCATION
          </label>
          <input
            className={
              isCityTabOpen
                ? `${styles.cityInput} ${styles.active}`
                : styles.cityInput
            }
            id="inputCity"
            value={city}
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
              GUESTS
            </label>
            <input
              id="inputGuests"
              className={
                isGuestsTabOpen
                  ? `${styles.guestInput} ${styles.active}`
                  : guests + kids === 0
                  ? `${styles.guestInput} ${styles.zeroGuests}`
                  : styles.guestInput
              }
              type="text"
              placeholder="Add guests"
              value={
                guests + kids === 0
                  ? "Add guests"
                  : guests + kids === 1
                  ? `1 guest`
                  : `${guests + kids} guests`
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
          setCityTabOpen={setCityTabOpen}
          setGuestsTabOpen={setGuestsTabOpen}
        />
      )}
      {isGuestsTabOpen && (
        <SubModalCounters
          filters={filters}
          setFilters={setFilters}
          isGuestsTabOpen={isGuestsTabOpen}
        />
      )}
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default ModalContent;
