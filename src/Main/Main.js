import React from "react";
import Page from "./Page";
import Panel from "./Panel";
import "./main.css";

const Main = () => {
  return (
    <main>
      <div className="navAndSection">
        <aside>
          <Panel />
        </aside>
        <section>
          <Page />
        </section>
      </div>
      <div className="skillsAnime">
        <div className="skillsAnimeContainer">
          <div className="myAbility">
            <div className="js">
              <i class="fab fa-js-square"></i>
              <div>
                <span></span>
              </div>
            </div>
            <div className="react">
              <i class="fab fa-react"></i>
              <div>
                <span></span>
              </div>
            </div>
            <div className="html">
              <i class="fab fa-html5"></i>
              <div>
                <span></span>
              </div>
            </div>
            <div className="css">
              <i class="fab fa-css3-alt"></i>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
