import React, { FC , useState} from "react";
import {IApart} from "../../../types/types";
import Card from './Card/Card'
import styles from './apartlist.module.css'

interface ApartListProps {
  aparts: IApart[]
}

const ApartList: FC<ApartListProps> = ({ aparts }) => {
    const [city, setCity] = useState("Helsinki");
    const [guests, setGuests] = useState("1");
    const [kids, setKids] = useState("0");
    
    return (
    <ul className = {styles.list}>
      {aparts.map(apart => 
      <li className={styles.li} key={apart.title}><Card apart={apart} /></li>
      )}
    </ul>
  );
};

export default ApartList;
