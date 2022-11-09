import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.scss";

let pages = [
  { name: "Home", path: "/" },
  "About",
  "Contact",
  "Team",
  "Gallery",
  "Sponsors",
];

const Navbar = () => {
  const [hamburgerState, changeHamburgerState] = useState(false);

  return (
    <div className="navbar">
      <div className="topbar">
        <div className="desktop links">
          <img src="../../logo192.png" alt="Laurel Heights Secondary School Electric Vehicle Club Logo" onClick = {
            () => {
              window.location.href = '/'
            }
          }/>
          {pages.map((value, index) => {
            if (typeof value === "object") {
              return <a href={`/`} key={value.name}>{value.name}</a>;
            }
            return (
              <a href={`/${value.toLowerCase().replace(" ", "")}`}>{value}</a>
            );
          })}
        </div>
        
        <img className="mobile" src="../../logo192.png" alt="Laurel Heights Secondary School Electric Vehicle Club Logo" />

        <div className="mobile hamburgerButton">
          <button
            onClick={() => {
              changeHamburgerState(!hamburgerState);
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      <div className={"mobile links " + (hamburgerState ? "on" : "off")}>
        {pages.map((value, index) => {
          if (typeof value === "object") {
            return <a href={`/`}>{value.name}</a>;
          }
          return (
            <a href={`/${value.toLowerCase().replace(" ", "")}`}>{value}</a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
