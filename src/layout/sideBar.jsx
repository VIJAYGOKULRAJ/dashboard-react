import React from "react";
import { Icon } from "@iconify/react";
import "../CSS/SideBar.css";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export default function SideBar({ handleShowHeading}) {
  const iconData = {
    size: {
      height: "35px",
      width: "50px",
    },
  };

  return (
    <div className="sidebar px-0 ">
      <div>
        <img className="d-none d-md-none d-lg-block" src={logo} width={'100%'} style={{objectFit:"cover" , backgroundColor : 'transparent' , height : 'auto'}} height={'50px'} alt="" />
      </div>
      <ul className="">
      <Link to="/dashboard" className="text-black text-decoration-none">
        <li>
          <div 
          className="d-flex justify-content-center align-items-center mt-4"
          onClick={() => handleShowHeading('Dashboard')} 
          >
            <Icon
            className="my-3"
              style={{
                height: iconData.size.height,
                width: iconData.size.width,
              }}
              icon="uit:create-dashboard" 
            />
            <span >Dashboard</span>
          </div>
        </li>
        </Link>
        <Link to="/about" className="text-black text-decoration-none">
        <li>
          <div 
          className="d-flex justify-content-center align-items-center"
          onClick={() => handleShowHeading('About')} 
          >
            <Icon
            className="my-3 me-2"
              style={{
                height: iconData.size.height,
                width: iconData.size.width,
              }}
              icon="mdi:about"
            />
             <span >About</span>
          </div>
        </li>
        </Link>
      <Link to="/calculator" className="text-black text-decoration-none">
      <li 
        className="d-flex justify-content-center align-items-center" 
        onClick={() => handleShowHeading('Calculator')}
         >
          <div >
            <Icon
            className="my-3"
              style={{
                height: iconData.size.height,
                width: iconData.size.width,
              }}
              icon="ant-design:calculator-filled"
            />
             
          </div>
          <div>
          <span>Calculator</span>
          </div>
        </li>
      </Link>

      <Link to="/form" className="text-black text-decoration-none">
        <li 
        className="d-flex justify-content-center align-items-center"
        onClick={() => handleShowHeading('Form-1')}
        >
          <div >
            <Icon
            className="my-3 mx-2"
              style={{
                height: iconData.size.height,
                width: "30px",
              }}
              icon="ant-design:form-outlined"
            />
             
          </div>
          <div>
          <span>Form</span>
          </div>
        </li>
        </Link>
      </ul>
    </div>
  );
}
