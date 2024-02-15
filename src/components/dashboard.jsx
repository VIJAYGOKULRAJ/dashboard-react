import "../CSS/dashboard.css";
import analysisimg from "../assets/analysis-img.png";
import analysisimg_2 from "../assets/analysis-img-2.png";
import data from "../data.json";
import { useState } from "react";
import { log } from "mathjs";
import TableList from "./TableList";
export default function Dashboard() {
const records = data.slice(1,6)
const column = [
  {heading : 'Sno' , value : ''},
  {heading : 'Name' , value : 'name'},
  {heading : 'Age' , value : 'age'},
  {heading : 'Gender' , value : 'gender'},
  {heading : 'Email' , value : 'email'},
  {heading : 'Company' , value : 'company'},
]
  return (
    <div>
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-6 ">
          <img className="analysis-img" src={analysisimg} alt="img" srcset="" />
        </div>
        <div className="col-6 col-md-6 ">
          <img
            className="analysis-img"
            src={analysisimg_2}
            alt="img"
            srcset=""
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
        <TableList  
        record = {records}
        column = {column}
      />
        </div>
      </div>
    </div>
  );
}
