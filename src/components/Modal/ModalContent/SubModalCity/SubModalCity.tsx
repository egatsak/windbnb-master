import React from "react";

import styles from './submodalcity.module.css'

type Props = {
  isCityTabOpen: boolean;
};

const SubModalCity: React.FC<Props> = ({ isCityTabOpen }) => {
  return <div className={isCityTabOpen ? `${styles.wrapper} ${styles.active}` : `${styles.wrapper}`}>
    Cities
    </div>
};

export default SubModalCity;
