import React from 'react'
import Question from "../icons/Question.svg"
import Bell from "../icons/Bell.svg"

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid #E3E9ED",
        width: "1200px",
        height: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "auto",
        }}
      >
        <div>
          <p style={{ fontSize: "18px", lineHeight: "27px" }}>Dashboard</p>
          <p style={{ fontSize: "14px", lineHeight: "0px" }}>Dashboard</p>
        </div>

        <div style={{ display: "flex" }}>
          <img src={Bell} alt="logo1" />
          <img src={Question} alt="logo1" />
        </div>
      </div>
    </div>
  );
}

export default Navbar