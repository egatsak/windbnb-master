import React from "react";
import Logo from '../../assets/logo.svg'
function Header() {
  return (<>
    <span><img src={Logo} alt = 'Logo'/></span>
    <form>
      <input type="text" placeholder="Helsinki" />
      <input type="text" placeholder="Add guests" />
      <input type="submit" />{" "}
    </form>
    </>
  );
}
export default Header;
