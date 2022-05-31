import React, { FC } from "react";
import {IApart} from "../../../types/types";
import Card from './Card/Card'
import styles from './apartlist.module.css'

interface ApartListProps {
  aparts: IApart[]
}

const ApartList: FC<ApartListProps> = ({ aparts }) => {

    return (
    <ul className = {styles.list}>
      {aparts.map(apart => 
      <li className={styles.li}><Card key={apart.title} apart={apart} /></li>
      )}
    </ul>
  );
};

export default ApartList;
