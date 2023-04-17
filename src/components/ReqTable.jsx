import React from "react";

const ReqTable = () => {
  const customer = [
    {
      id: "#242551",
      date: "24/12/2023",
      time: "7.15AM",
      to: "234, Oka Avenue Main Street, Anytown, USA",
      from: "234, Oka Avenue Main Street, Anytown, USA",
      exe: "Executive",
      seats: "6 Seats",
      driver: "Unassigned",
      price: "$34",
    },
    {
      id: "#242551",
      date: "24/12/2023",
      time: "7.15AM",
      to: "234, Oka Avenue Main Street, Anytown, USA",
      from: "234, Oka Avenue Main Street, Anytown, USA",
      exe: "Executive",
      seats: "6 Seats",
      driver: "Unassigned",
      price: "$34",
    },
    {
      id: "#242551",
      date: "24/12/2023",
      time: "7.15AM",
      to: "234, Oka Avenue Main Street, Anytown, USA",
      from: "234, Oka Avenue Main Street, Anytown, USA",
      exe: "Executive",
      seats: "6 Seats",
      driver: "Unassigned",
      price: "$34",
    },
  ];
  return (
    <div style={{borderRadius:"20px"}}>
      <table>
        <thead>
          <tr>
            <th>BOOKING ID</th>
            <th>DATE</th>
            <th>LOCATION</th>
            <th>FLEET</th>
            <th>DRIVER</th>
            <th>PRICE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          
                  {
                      customer.map((e) => {
                          return (
                            <tr>
                              <td>{e.id}</td>
                              <td>
                                <div>
                                  <p>{e.date}</p>
                                  <p style={{ fontSize: "14px" }}>{e.time}</p>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <p>{e.to}</p>
                                  <p>{e.from}</p>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <p>{e.exe}</p>
                                  <p style={{ fontSize: "14px" }}>{e.seats}</p>
                                </div>
                              </td>
                              <td style={{ color: "red" }}>{e.driver}</td>
                              <td>{e.price}</td>
                              <td>
                                <button
                                  style={{
                                    padding: "6px",
                                    width: "90px",
                                    backgroundColor: "#ddf0fb",
                                              border: "1px solid #aedaf3",
                                    borderRadius:"8px"
                                  }}
                                >
                                  New
                                </button>
                              </td>
                            </tr>
                          );
                      })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ReqTable;
