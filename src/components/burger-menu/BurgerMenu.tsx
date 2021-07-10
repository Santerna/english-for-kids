/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./burger-menu.scss";
import SidebarItems from "./SidebarItems";

function Sidebar(): JSX.Element {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const [activeLink] = useState(false);
  return (
    <div className="navigation">
      <Link to="#" className="menu-bars">
        <div className="burger-btn" onClick={showSideBar}>
          <span />
        </div>
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-list" onClick={showSideBar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              X
            </Link>
          </li>
          {SidebarItems.map((item) => {
            return (
              <NavLink
                to={item.route}
                activeClassName={activeLink ? " " : "selected"}
              >
                {" "}
                <li className="navbar-toggle" key={item.name}>
                  {item.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
