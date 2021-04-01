import React from "react";
import "../InformationsStyles/AboutMe.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="aboutme">
        <p>
          <h1 className="about">Informacje o mnie</h1>
          Nazywam się Hubert Radziwonka. Mam 22 lata. Obecnie jestem studentem
          uczelni w Warszawie. <br /> Codziennie programuje przy tym się ucząc
          nowo poznanych technologii, przyjemnie oraz ciekawie spędzać czas,
          gdyż jestem zainteresowany rzeczami zwiazanymi z IT. <br /> Mój zakres
          programowania głównie opiera się na wykorzystaniu języka JavaScript
          oraz frameworka React za pomocą których tworze swoje projekty. <br />{" "}
          Jestem miłośnikiem języka angielskiego, który stale praktykuje. <br />{" "}
          Uwielbiam pisać kod, uczyć się nowo poznanych rzeczy, pracować w
          grupię oraz poszerzać wiedzę związaną z branżą IT, szczególnie w
          zakresie związanym z programowaniem.
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
