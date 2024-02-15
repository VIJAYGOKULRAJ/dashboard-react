import React from "react";
import { Icon } from "@iconify/react";
import "../CSS/SideBar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({ handleShowHeading }) {
  const location = useLocation();

  const iconData = {
    size: {
      height: "35px",
      width: "50px",
    },
  };

  const links = [
    { label: 'Dashboard', to: '/dashboard', icon: 'uit:create-dashboard' },
    { label: 'About', to: '/about', icon: 'mdi:about' },
    { label: 'Calculator', to: '/calculator', icon: 'ant-design:calculator-filled' },
    { label: 'CustomerDetails', to: '/form', icon: 'ant-design:form-outlined' },
    { label: 'Table', to: '/table', icon: 'arcticons:nextcloud-tables' },
    { label: 'Table2', to: '/table2', icon: 'arcticons:nextcloud-tables' },

    
  ];

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
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="text-black text-decoration-none"
          >
            <li className="sidebar-content">
              <div
                className={`d-flex justify-content-center align-items-center ps-5 ${
                  location.pathname === link.to
                    ? "sidebar-content-set"
                    : "sidebar-content"
                }`}
                onClick={() => handleShowHeading(link.label)}
              >
                <div className="w-100 d-flex align-items-center ">
                  <Icon
                    className="my-3"
                    style={{
                      height: iconData.size.height,
                      width: iconData.size.width,
                    }}
                    icon={link.icon}
                  />
                  <span>{link.label}</span>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
