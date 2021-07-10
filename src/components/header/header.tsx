import React from "react";
import "./header.scss";
import Sidebar from "../burger-menu/BurgerMenu";
import Toggler from "../toggler/toggler";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Sidebar />
      <Toggler />
      <div className="logo">English4Kids</div>
    </div>
  );
};

export default Header;
