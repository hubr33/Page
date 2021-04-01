import React, { Component } from "react";
import "../InformationsStyles/Contact.css";

class Contact extends Component {
  state = {
    showNumber: false,
    fullName: "",
    subject: "",
    messageText: "",
  };

  handleShow = () => {
    this.setState({ showNumber: !this.state.showNumber });
  };

  handleFullName = (e) => {
    this.setState({ fullName: e.target.value });
  };

  handleSubject = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleText = (e) => {
    this.setState({ messageText: e.target.value });
  };

  hideMessage = () => {
    const sentMsg = document.querySelector(".sentMsg");
    sentMsg.classList.remove("done");
  };

  handleCheck = () => {
    const error = document.querySelector(".errorMessage");
    const sentMsg = document.querySelector(".sentMsg");
    const customerName = document.getElementById("customerName");
    const customerSubject = document.getElementById("customerSubject");
    const customerText = document.getElementById("customerText");
    if (
      this.state.fullName !== "" &&
      this.state.subject !== "" &&
      this.state.messageText !== ""
    ) {
      error.classList.remove("open");
      sentMsg.classList.add("done");
      this.setState({ fullName: "", subject: "", messageText: "" });
      customerName.value = "";
      customerSubject.value = "";
      customerText.value = "";
      setTimeout(this.hideMessage, 5000);
    } else {
      error.classList.add("open");
    }
  };

  render() {
    return (
      <div className="area">
        <div className="contact">
          <div className="facebook">
            <i class="fab fa-facebook-square"></i>
            <a href="https://www.facebook.com/hubert.Rrrr/" target="_blank">
              Facebook
            </a>
          </div>
          <div className="gitHub">
            <i class="fab fa-github-square"></i>
            <a href="https://github.com/hubr33" target="_blank">
              GitHub
            </a>
          </div>
          <div className="linkedin">
            <i class="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/hubert-radziwonka-4549461b8/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
          <div className="email">
            <i class="fas fa-at"></i>
            <p>hubert.radziwonka33@gmail.com</p>
          </div>
          <div className="phone">
            <i class="fas fa-mobile"></i>
            <p>{this.state.showNumber ? "694-224-869" : "***-***-***"}</p>
            <button onClick={this.handleShow} className="showButton">
              {this.state.showNumber ? "Ukryj numer" : "Pokaż numer"}
            </button>
          </div>
        </div>
        <div className="walidator">
          <div className="sentMsg">Wiadomość została pomyślnie wysłana!</div>
          <div className="waliWrapper">
            <h2>Skontaktuj się ze mną</h2>
            <input
              id="customerName"
              onChange={this.handleFullName}
              type="text"
              placeholder="Imię i nazwisko"
              maxLength="30"
            ></input>
            <input
              id="customerSubject"
              onChange={this.handleSubject}
              type="text"
              placeholder="Temat"
              maxLength="30"
            ></input>
            <textarea
              id="customerText"
              onChange={this.handleText}
              placeholder="Treść"
              maxLength="250"
            ></textarea>
            <p className="errorMessage">Uzupełnij wszystkie pola</p>
            <button onClick={this.handleCheck} className="sendMessage">
              <span>Wyślij</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
