import React from "react";
import Earn from "../icons/Earn.svg";
import UpArrow from "../icons/UpArrow.svg"
import DownArrow from "../icons/DownArrow.svg"
import { useState } from "react";

const Main = () => {


  const boxes = [
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
    { logo: Earn, title: "Total Earning", price: "$512021" },
  ];

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };




  return (
    <div style={{ backgroundColor: "#F5F5F5", fontFamily: "Proxima Nova" }}>
      <div
        style={{
          width: "1200px",
          marginLeft: "5%",

          display: "flex",
          flexFlow: "wrap",
          gap: "20px",
        }}
      >
        {boxes.map((e) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-evenly",
                border: "2px solid #E3E9ED",
                width: "250px",
                borderRadius: "10px",
                marginTop: "30px",
                backgroundColor: "white",
              }}
            >
              <img src={e.logo} alt="logo" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>{e.title}</p>
                <h3>{e.price}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ width: "1200px", marginTop: "50px", height: "300px" }}>
        <div
          style={{
            width: "90%",
            border: "1px solid #E3E9ED",
            margin: "auto",
            backgroundColor: "white",
            marginBottom: "30px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px" }}
          >
            New Booking Request
          </p>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <img src={UpArrow} alt="btn" />
          </button>
        </div>
        <div
          style={{
            width: "90%",
            border: "1px solid #E3E9ED",
            margin: "auto",
            backgroundColor: "white",
            marginBottom: "30px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px" }}
          >
            Analytics
            {isOpen && (
              <div
                style={{
                  width: "90%",
                  border: "1px solid #E3E9ED",
                  margin: "auto",
                  backgroundColor: "white",
                  marginBottom: "30px",
                  marginTop: "0px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p> Chart here</p>
              </div>
            )}
          </p>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={toggleDropdown}
          >
            <img src={UpArrow} alt="btn" />
          </button>
        </div>

        <div
          style={{
            width: "90%",
            border: "1px solid #E3E9ED",
            margin: "auto",
            backgroundColor: "white",
            marginBottom: "30px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "500", marginLeft: "20px" }}
          >
            Latest Reviews
          </p>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <img src={UpArrow} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
