import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      © Copyright by <strong>Hubert Radziwonka</strong>
      <i class="fab fa-linkedin">
        <a
          href="https://www.linkedin.com/in/hubert-radziwonka-4549461b8/"
          target="_blank"
        >
          Linkedin
        </a>
      </i>
      <i class="fab fa-facebook-square">
        <a href="https://www.facebook.com/hubert.Rrrr/" target="_blank">
          Facebook
        </a>
      </i>
      <i class="fab fa-github-square">
        <a href="https://github.com/hubr33" target="_blank">
          GitHub
        </a>
      </i>
    </footer>
  );
};

export default Footer;
