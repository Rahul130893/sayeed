import React from "react";
import Earn from "../icons/Earn.svg";
import UpArrow from "../icons/UpArrow.svg"
import DownArrow from "../icons/DownArrow.svg"
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Graphs } from "./Graphs";
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

    
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };


    const [isOpen2, setIsOpen2] = useState(false);

    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };




  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        fontFamily: "Proxima Nova",

        border: "1px solid transparent",
        height: "944px",
      }}
    >
      <div
        style={{
          width: "1136px",

          height: "232px",
          display: "flex",
          flexFlow: "wrap",
          gap: "32px",
          margin: "auto",

          marginTop: "40px",
        }}
      >
        {boxes.map((e) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "32px",
                justifyContent: "space-evenly",
                border: "2px solid #E3E9ED",
                width: "256px",
                borderRadius: "10px",

                backgroundColor: "white",
                height: "100px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "80%",

                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={e.logo} alt="logo" style={{ height: "52px" }} />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",

                    height: "90%",
                    alignItems: "center",
                    lineHeight: "0px",
                  }}
                >
                  <p>{e.title}</p>
                  <h3>{e.price}</h3>
                </div>
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
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              New Booking Request
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                marginRight: "20px",
              }}
              onClick={toggleDropdown2}
            >
              <img src={UpArrow} alt="btn" />
            </button>
          </div>
          {isOpen2 && (
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
              <p> booking content here</p>
            </div>
          )}
        </div>

        <div
          style={{
            width: "90%",
            border: "1px solid #E3E9ED",
            margin: "auto",
            backgroundColor: "white",
            marginBottom: "30px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Analytics
            </p>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                marginRight: "20px",
              }}
              onClick={toggleDropdown1}
            >
              <img src={UpArrow} alt="btn" />
            </button>
          </div>
          {isOpen1 && (
            <div
              style={{
                width: "100%",
                borderTop: "1px dotted green",
                margin: "auto",
                backgroundColor: "white",
                marginBottom: "30px",
                marginTop: "0px",
               
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p> <Graphs/></p>
            </div>
          )}
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
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              marginRight: "20px",
            }}
          >
            <img src={UpArrow} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
