import React from "react";
import { Icon } from "@iconify/react";
import "../CSS/SideBar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({ handleShowHeading }) {
  const location = useLocation();
  const isCalculatorRoute = location.pathname === "/calculator";
  const isDashboardRoute = location.pathname === "/dashboard";
  const isAboutRoute = location.pathname === "/about";
  const isFormRoute = location.pathname === "/form";

  const iconData = {
    size: {
      height: "35px",
      width: "50px",
    },
  };

  return (
    <div className="sidebar px-0 ">
      <div>
        <img
          className="d-none d-md-none d-lg-block"
          src={logo}
          width={"100%"}
          style={{
            objectFit: "cover",
            backgroundColor: "transparent",
            height: "auto",
          }}
          height={"50px"}
          alt=""
        />
      </div>
      <ul className="">
        <Link to="/dashboard" className="text-black text-decoration-none">
          <li className="sidebar-content">
            <div
             className={`d-flex justify-content-center align-items-center ps-5 ${
              isDashboardRoute ? "sidebar-content-set" : "sidebar-content"
            }`}
              onClick={() => handleShowHeading("Dashboard")}
            >
              <div className="w-100 d-flex align-items-center ">
                <Icon
                  className="my-3"
                  style={{
                    height: iconData.size.height,
                    width: iconData.size.width,
                  }}
                  icon="uit:create-dashboard"
                />
                <span>Dashboard</span>
              </div>
            </div>
          </li>
        </Link>
        <Link to="/about" className="text-black text-decoration-none">
          <li className="sidebar-content">
            <div
              className={`d-flex justify-content-center align-items-center ps-5 ${
                isAboutRoute ? "sidebar-content-set" : "sidebar-content"
              }`}
              onClick={() => handleShowHeading("About")}
            >
              <div className="w-100 d-flex align-items-center ">
                <Icon
                  className="my-3"
                  style={{
                    height: iconData.size.height,
                    width: iconData.size.width,
                  }}
                  icon="mdi:about"
                />
                <span>About</span>
              </div>
            </div>
          </li>
        </Link>
        <Link to="/calculator" className={`text-black text-decoration-none`}>
          <li className="sidebar-content">
            <div
              className={`d-flex justify-content-center align-items-center ps-5 ${
                isCalculatorRoute ? "sidebar-content-set" : "sidebar-content"
              }`}
              onClick={() => handleShowHeading("Calculator")}
            >
              <div className="w-100 d-flex align-items-center ">
                <Icon
                  className="my-3"
                  style={{
                    height: iconData.size.height,
                    width: iconData.size.width,
                  }}
                  icon="ant-design:calculator-filled"
                />

                <span>Calculator</span>
              </div>
            </div>
          </li>
        </Link>
        <Link to="/form" className="text-black text-decoration-none">
          <li className="sidebar-content">
            <div
              className={`d-flex justify-content-center align-items-center ps-5 ${
                isFormRoute ? "sidebar-content-set" : "sidebar-content"
              }`}
              onClick={() => handleShowHeading("Form-1")}
            >
              <div className="w-100 d-flex align-items-center ">
                <Icon
                  className="my-3"
                  style={{
                    height: iconData.size.height,
                    width: iconData.size.width,
                  }}
                  icon="ant-design:form-outlined"
                />
                <span>Form</span>
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}
