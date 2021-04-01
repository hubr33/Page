import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 280) {
      const js = document.querySelector(".myAbility");
      const xxx = document.querySelector(".skillsAnimeContainer");
      const about = document.querySelector("section");
      js.classList.add("belt");
      xxx.classList.add("belt");
      about.classList.add("belt");
    } else {
      return;
    }
  };
  window.addEventListener("scroll", handleScroll);

  const hadleAnimation = () => {
    const js = document.querySelector(".myAbility");
    const xxx = document.querySelector(".skillsAnimeContainer");
    const about = document.querySelector("section");
    js.classList.add("belt");
    xxx.classList.add("belt");
    about.classList.add("belt");
  };

  const handleAboutMe = () => {
    hadleAnimation();
    const main = document.querySelector("main");
    main.scrollIntoView();
  };

  const handlePortfolio = () => {
    hadleAnimation();
    const port = document.querySelector(".portfolioWrapper");
    port.scrollIntoView();
  };
  return (
    <header>
      <p className="name">
        Hubert Radziwonka <span>Front-end developer</span>
      </p>
      <ul>
        <li>
          <button onClick={handleAboutMe}>
            <NavLink className="nav" key="oneConnector" to="/me">
              O mnie
            </NavLink>
          </button>
        </li>
        <li>
          <button onClick={handlePortfolio}>
            <NavLink className="nav" key="oneConnector" to="/me">
              Portolio
            </NavLink>
          </button>
        </li>
        <li>
          {/* <button onClick={handleAboutMe}>
            <NavLink className="nav" key="threeConnector" to="/contact">
              Kontakt
            </NavLink>
          </button> */}
        </li>
      </ul>
    </header>
  );
};

export default Header;
