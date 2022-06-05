import React from "react";
/* import { ICardProps } from "../../../../types/types"; */

import styles from './submodalcounters.module.css'

type Props = {
  isGuestsTabOpen: boolean;
  children?: React.ReactChild | React.ReactNode;
};

const SubModalCounters: React.FC<Props> = ({ isGuestsTabOpen, children }) => {
  return (
    <div className={isGuestsTabOpen ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`}>
      SubModalCounters
      {children}
    </div>
  );
};

export default SubModalCounters;
