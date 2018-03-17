import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="link-list">
        <div>
          {" "}
          <a
            className="contact-info"
            href="https://github.com/coreyladovsky"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>{" "}
        </div>
        <div>
          <a
            className="contact-info"
            href="https://www.linkedin.com/in/corey-ladovsky/"
            target="_blank"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
        </div>
        <div>
          {" "}
          <a
            className="contact-info"
            href="https://angel.co/corey-ladovsky"
            target="_blank"
          >
            {" "}
            <i className="fab fa-angellist" />
          </a>
        </div>
        <div>
          {" "}
          <a
            className="contact-info"
            href="https://coreyladovsky.com"
            target="_blank"
          >
            {" "}
            Corey Ladovsky
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
