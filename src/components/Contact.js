import React from "react";
import Call from "./call2-removebg-preview.png";
import linkedin from "./linkedin-removebg-preview.png";
import gmail from "./gmail2-removebg-preview.png";
import github from "./github-removebg-preview.png";
function Contact() {
  return (
    <div id="contact" style={{ backgroundColor: "black", color: "royalblue" }}>
      <p className="section__text__p1" style={{ color: "royalblue" }}>
        My
      </p>
      <h1 className="title" style={{ color: "royalblue" }}>
        Contacts
      </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "18rem" }}>
          <img src={Call} />
          +91 9161302752
        </div>
        <div style={{ marginRight: "18rem" }}>
          <img src={linkedin} />
          <a
            href="https://www.linkedin.com/in/mohd-tayyab-765128250/"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>
        <div style={{ marginRight: "18rem" }}>
          <img src={gmail} />
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCJFQlSWGkkKSQCjxBDJZwptBGSnvnsRFpVZGLqFnGPPBSpJRwmzHSLtkXvcTMtRdKJmQV"
            style={{ textDecoration: "none" }}
          >
            G-Mail: mohd12.tayyab@gmail.com
          </a>
        </div>
        <div>
          <img src={github} />
          <a
            href="https://github.com/TayyabMohd"
            style={{ textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
