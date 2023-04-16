import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import HomeLogo from "../icons/HomeLogo.svg";
import DashboardLogo from "../icons/DashboardLogo.svg";
import ManageLogo from "../icons/ManageLogo.svg";
import FlashLogo from "../icons/FlashLogo.svg";
import PriceLogo from "../icons/PriceLogo.svg";
import AvailLogo from "../icons/AvailLogo.svg";

import "../App.css";

function SideMenu() {
  return (
    <div
      style={{
        width: "240px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "#292F3B",
          height: "80px",
          PaddingLeft: "20px",
          display: "flex",
          justifyContent:"flex-start"
        }}
      >
        <div style={{width:"20px"}}></div>
        <h2>
          <img src={HomeLogo} alt="svgImg" />
        </h2>
      </div>

      <div style={{ height: "700px", borderTop: "2px solid gray" }}>
        <Sidebar
          width="100%"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              height: "700px",
              backgroundColor: "#292F3B",
              fontFamily: "Proxima Nova",
              fontSize: "20px",
              overflow: "unset",
            },
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree

                return {
                  color: "white",
                  backgroundColor: "#292F3B",
                };
              },
            }}
          >
            <MenuItem style={{ background: "#292F3B", color: "white" }}>
              {" "}
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src={DashboardLogo} alt="dash logo" />
                <p>Dashboard</p>
              </div>
            </MenuItem>

            <SubMenu
              label=<div
                style={{
                  width: "80%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src={ManageLogo} alt="manage" />
                <p>Manage Trips</p>
              </div>
              style={{ background: "#292F3B", color: "white" }}
            >
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                {" "}
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Bookings
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Bookings
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Bookings
                </div>{" "}
              </MenuItem>
            </SubMenu>

            <MenuItem style={{ background: "#292F3B", color: "white" }}>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src={FlashLogo} alt="dash logo" />
                <p>Flash Sales</p>
              </div>
            </MenuItem>
            <SubMenu
              label=<div
                style={{
                  width: "80%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src={PriceLogo} alt="manage" />
                <p>Pricing</p>
              </div>
              style={{ background: "#292F3B", color: "white" }}
            >
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  PAP
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  MP
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Meet & Greet
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "60%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Other Charges
                </div>{" "}
              </MenuItem>
            </SubMenu>
            <SubMenu
              label=<div
                style={{
                  width: "80%",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src={AvailLogo} alt="manage" />
                <p>Availability</p>
              </div>
              style={{ background: "#292F3B", color: "white" }}
            >
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "45%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Fleets
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "90%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Pause Availability
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "80%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  Operation Hours
                </div>{" "}
              </MenuItem>
              <MenuItem style={{ background: "#292F3B", color: "white" }}>
                <div
                  style={{
                    borderLeft: "2px solid gray",
                    height: "50px",
                    width: "76%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "17px",
                  }}
                >
                  No Of Vehicles
                </div>{" "}
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
}

export default SideMenu;
