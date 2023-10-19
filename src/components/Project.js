import React from "react";
import tayyab2 from "./tayyab2.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Project() {
  return (
    <div
      id="project"
      style={{
        backgroundColor: "black",
        padding: "10px",
        paddingBottom: "100px",
        paddingTop: "150px",
      }}
    >
      <p className="section__text__p1" style={{ color: "royalblue" }}>
        My
      </p>
      <h1 className="title" style={{ color: "royalblue" }}>
        Projects
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          class="card"
          style={{
            width: "18rem",
            backgroundColor: "black",
            color: "slateblue",
            border: "3px solid royalblue",
            marginLeft: "20px",
            marginRight: "20rem",
          }}
        >
          <div class="card-body">
            <img
              src={tayyab2}
              class="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2" style={{ color: "mediumpurple" }}>
              Card subtitle
            </h6>
            <p class="card-text">Project1</p>
            <a href="#" class="card-link">
              Repository link
            </a>
            <a href="#" class="card-link">
              Deployment link
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "18rem",
            backgroundColor: "black",
            color: "slateblue",
            border: "3px solid royalblue",
            marginRight: "20rem",
          }}
        >
          <div class="card-body">
            <img
              src={tayyab2}
              class="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2" style={{ color: "mediumpurple" }}>
              Card subtitle
            </h6>
            <p class="card-text">Project1</p>
            <a href="#" class="card-link">
              Repository link
            </a>
            <a href="#" class="card-link">
              Deployment link
            </a>
          </div>
        </div>
        <div
          class="card"
          style={{
            width: "18rem",
            backgroundColor: "black",
            color: "slateblue",
            border: "3px solid royalblue",
          }}
        >
          <div class="card-body">
            <img
              src={tayyab2}
              class="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2" style={{ color: "mediumpurple" }}>
              Card subtitle
            </h6>
            <p class="card-text">Project1</p>
            <a href="#" class="card-link">
              Repository link
            </a>
            <a href="#" class="card-link">
              Deployment link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
