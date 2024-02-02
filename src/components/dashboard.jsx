import "../CSS/dashboard.css";
import analysisimg from "../assets/analysis-img.png";
import analysisimg_2 from "../assets/analysis-img-2.png";
import data from "../data.json";
import { useState } from "react";
import { log } from "mathjs";
export default function Dashboard() {

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
          <table class="table table-striped table-light">
            <thead>
              <tr className="border">
                <th scope="col" className="border">Sno</th>
                <th scope="col" className="border">Id</th>
                <th scope="col" className="border">Name</th>
                <th scope="col" className="border">Age</th>
                <th scope="col" className="border">Gender</th>
                <th scope="col" className="border">Company</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value , index) => index < 5 &&(
                <tr className="border">
                  <td className="border">{ index + 1}</td>
                  <td className="border" scope="row">{value._id}</td>
                  <td className="border">{value.name}</td>
                  <td className="border">{value.age}</td>
                  <td className="border">{value.gender}</td>
                  <td className="border"> {value.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
