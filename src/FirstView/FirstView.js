import React from "react";
import "./firstview.css";
import { NavLink } from "react-router-dom";

const FirstView = () => {
  const handleAboutMe = () => {
    const js = document.querySelector(".myAbility");
    const xxx = document.querySelector(".skillsAnimeContainer");
    const about = document.querySelector("section");
    js.classList.add("belt");
    xxx.classList.add("belt");
    about.classList.add("belt");
    const main = document.querySelector("main");
    main.scrollIntoView();
  };
  return (
    <div className="firstWrapper">
      <div className="firstView">
        <p>Hubert Radziwonka</p>
        <span>Student & front-end developer</span>
      </div>
      <NavLink className="navArrow" to="/me">
        <i class="fas fa-arrow-down" onClick={handleAboutMe}></i>
      </NavLink>
    </div>
  );
};

export default FirstView;
