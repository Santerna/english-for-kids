import React from "react";
import "./footer.scss";
import RSLogo from "../../assets/img/rs_school_js.svg";
import GithubLogo from "../../assets/img/github.png";

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="rs-logo">
        <a href="https://rs.school/js/">
          <img src={RSLogo} alt="rs school" />
        </a>
      </div>
      <div className="edition-year">2021</div>
      <div className="git-logo">
        <a href="https://github.com/Santerna">
          <img src={GithubLogo} alt="github school" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
