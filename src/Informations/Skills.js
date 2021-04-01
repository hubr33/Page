import React from "react";
import "../InformationsStyles/Skills.css";

const skillsList = [
  "JavaScript",
  "HTML5",
  "CSS3/SASS",
  "jQuery",
  "React",
  "Node.js",
  "soapUI",
  "SOAP",
  "SQL/NoSQL",
  "Git",
  "REST API",
];

const Skills = () => {
  const lists = skillsList.map((list) => <li>{list}</li>);
  return (
    <React.Fragment>
      <div className="skillsBackground">
        <div className="skillsPanel">
          <h5>Poznane technologie:</h5> {lists}
        </div>
        <div className="extraSkills">
          <h5>Umiejętności:</h5>
          <li>
            Język angielski: <strong>B2/C1</strong>
          </li>
          <li>Znajomość środowiska VSC</li>
          <li>Umiejętność pracy w grupie</li>
          <li>Rozwiązywanie problemów</li>
          <li>Naprawa sprzętu elektronicznego</li>
          <li>Znajomość programów graficznych </li>
          <li>Tworzenie aplikacji JS/React</li>
        </div>
        <div className="extraInfo">
          <h5>Dodatkowe informacje:</h5>
          <li>Szybkość uczenia się</li>
          <li>Chęć rozwijania umiejętności</li>
          <li>Punktualność</li>
          <li>Sumienność i staranność</li>
          <li>Latwość w nawiązywaniu kontaktów</li>
          <li>Prawo jazdy B</li>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
