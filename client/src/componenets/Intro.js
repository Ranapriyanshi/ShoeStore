import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <div
      div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "50px",
          marginBottom: "0",
        }}
      >
        <Typewriter
          words={["Welcome to ShoeCompare", "Smarter Shoe Shopping"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
        <span role="img" aria-label="shoe">
          {" "}
          👟
        </span>
      </h1>
      <p style={{ textAlign: "center", fontSize: "25px", width: "60%" }}>
        Compare your favorite shoes side by side before you buy. Find the
        perfect fit, price, and style—without the hassle.
      </p>
    </div>
  );
};

export default Intro;
