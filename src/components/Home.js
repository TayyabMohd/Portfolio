import React from "react";
import tayyab2 from "./tayyab2.jpg"; // Adjust the import path if needed

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black", // Set the background color to black
        paddingTop: "100px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img
            src={tayyab2}
            style={{
              height: "300px",
              borderRadius: "15px",
              border: "solid 3px purple",
              transition: "box-shadow 0.3s, transform 0.3s", // Add transitions for smooth effects
            }}
            alt="Insert here"
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = "0px 0px 10px 5px purple";
              e.currentTarget.style.transform = "scale(1.1)"; // Apply scaling transformation on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)"; // Reset the transformation when not hovered
            }}
          />
        </div>
        <div style={{ marginLeft: "50px" }}>
          <h1 style={{ color: "mediumpurple" }}>
            Hello, I am Tayyab. Welcome aboard
          </h1>
          <p style={{ color: "slateblue" }}>
            I am a practising MERN Stack Developer. I am an organised,
            <br /> efficient and hardworking person and am willing to discover
            and accept
            <br /> new ideas which can be put into practice effectively. I am a
            good
            <br /> listener and learner, able to communicate well with a group
            and on
            <br /> an individual level. I am able to motivate and direct my
            talents <br />
            and skills to meet objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
