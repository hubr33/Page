import React from "react";
import { NavLink } from "react-router-dom";
import "./panel.css";

const panelList = [
  { name: "O mnie", path: "/me", exact: true },
  { name: "Co potrafię", path: "/skills", exact: false },
  { name: "Doświadczenie", path: "/experience", exact: false },
  { name: "Zainteresowania", path: "/hobby", exact: false },
  // { name: "Kontakt", path: "/contact" },
];

const Panel = () => {
  const handleOn = () => {
    const js = document.querySelector(".myAbility");
    const xxx = document.querySelector(".skillsAnimeContainer");
    const about = document.querySelector("section");
    js.classList.add("belt");
    xxx.classList.add("belt");
    about.classList.add("belt");
  };
  const menu = panelList.map((item) => (
    <NavLink
      key={item.name}
      className="panelLi"
      to={item.path}
      exact={item.exact ? item.exact : false}
      onClick={handleOn}
    >
      {item.name}
    </NavLink>
  ));
  return <div className="panel">{menu}</div>;
};

export default Panel;
