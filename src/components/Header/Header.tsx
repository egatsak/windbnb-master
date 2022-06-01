import React from "react";
import Logo from '../../assets/logo.svg'
import styles from './header.module.css'

function Header() {
  return (<div className = {styles.header}>
    <span><img src={Logo} alt = 'Logo'/></span>
    <form className = {styles.inputForm}>
      <input type="text" placeholder="Helsinki" />
      <input type="text" placeholder="Add guests" />
      <input type="submit" />{" "}
    </form>
    </div>
  );
}
export default Header;
