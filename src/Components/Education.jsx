import React from "react";

import image from "../images/university.png";

const Education = () => {
  return (
    <section
      className="light"
      id="education"
      style={{
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Add your education information here */}
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", gap: "20px" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
              width: "150px",
              height: "150px",
            }}
            alt="Education"
          />
        </div>
        <div style={{ maxWidth: "60%", alignSelf: "center" }}>
          <h3>New LJ Institute of Engineering and Technology.</h3>
          <h4>
            Bachelors in Computer Science with Specialization in Artificial Intelligence and Machine
            Learning - 9.46/10 CPI
          </h4>
          <p>2021-2025</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
