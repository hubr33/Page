import React from "react";
import "./Portfolio.css";
import chatbox from "../ChatBox.jpg";
import exchanger from "../Exchanger.jpg";
import myNotes from "../MyNotes.jpg";
import oneHand from "../onehand.jpg";
import timer from "../timer.jpg";
import clock from "../clock.jpg";
import walidator from "../Walidator.jpg";
import ToDoList from "../ToDolist.jpg";
import scissors from "../scissors.jpg";

const Portofolio = () => {
  return (
    <div className="portfolioWrapper">
      <div className="leftBelt"></div>
      <div className="rightBelt"></div>
      <div className="container">
        <div className="projectInfo">
          <h1>Moje portofolio</h1>
          <p>
            Tworze projekty w oparciu o język{" "}
            <span className="jsSpan">JavaScript</span> oraz framework{" "}
            <span className="reactSpan">React</span>.
          </p>
          <p>
            Moje losowe projekty są dostępne na GitHubie oraz mojej stronie.{" "}
            <br />
            Mniejsze oraz większe projekty bedą na bieżąco dodawane.
          </p>
        </div>
        <div className="projectLink">
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a href="https://hubr33.github.io/ChatBox/" target="_blank">
                      Przejdź do projektu
                    </a>
                    <img src={chatbox} alt="" />
                  </div>
                </div>
              </div>
              <p>ChatBox</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro2">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro2">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro2">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/hubr33/Exchanger"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={exchanger} alt="" />
                  </div>
                </div>
              </div>
              <p>Exchanger</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro3">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro3">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro3">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://github.com/hubr33/MyNotes-in-React"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={myNotes} alt="" />
                  </div>
                </div>
              </div>
              <p>MyNotes(React)</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro4">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro4">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro4">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/OneHand-Bandit/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={oneHand} alt="" />
                  </div>
                </div>
              </div>
              <p>Bandit</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro5">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro5">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro5">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/Timer-JS/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={timer} alt="" />
                  </div>
                </div>
              </div>
              <p>Timer</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro6">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro6">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro6">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/Clock-JS/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={clock} alt="" />
                  </div>
                </div>
              </div>
              <p>Clock</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro7">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro7">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro7">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/HamburgerWalidator/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={walidator} alt="" />
                  </div>
                </div>
              </div>
              <p>Walidator</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro8">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro8">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro8">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/MyNotes-in-JS/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={myNotes} alt="" />
                  </div>
                </div>
              </div>
              <p>MyNotes</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro9">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro9">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro9">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/ScissorsGame/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={scissors} alt="" />
                  </div>
                </div>
              </div>
              <p>Scissors</p>
            </div>
          </div>
          <div className="projectPanel">
            <div class="card">
              <div class="content">
                <div class="image">
                  <div className="shadow">
                    <div className="jsPro10">
                      <i class="fab fa-js-square"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="htmlPro10">
                      <i class="fab fa-html5"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <div className="cssPro10">
                      <i class="fab fa-css3-alt"></i>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <a
                      href="https://hubr33.github.io/ToDo-List-Vanilla-JS/"
                      target="_blank"
                    >
                      Przejdź do projektu
                    </a>
                    <img src={ToDoList} alt="" />
                  </div>
                </div>
              </div>
              <p>ToDo App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
