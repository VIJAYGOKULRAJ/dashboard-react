import data from "../data.json";
import '../CSS/table.css'
import { Icon } from "@iconify/react";
import { Link , useNavigate } from "react-router-dom";

export default function Table() {
  const navigate = useNavigate();
  const handleToGetId = (val) => {
    navigate(`/table/id=${val._id}`)
    localStorage.setItem("customerId" , JSON.stringify(val))
  }
  const rowCount = data.length;
  return (
    <div>
      <div className="row">
        <div className="col-6 my-3">
          <span className="count-text fw-bold">Rows : {rowCount} </span>
        </div>
        <div className="col-6">

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
                <th scope="col" className="border">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr className="border">
                  <td className="border">{index + 1}</td>
                  <td className="border" scope="row">{value._id}</td>
                  <td className="border">{value.name}</td>
                  <td className="border">{value.age}</td>
                  <td className="border">{value.gender}</td>
                  <td className="border"> {value.company}</td>
                  <td className="border border-bottom-0 d-flex align-items-center justify-content-center align-items-center" style={{height:42}}> 
                  <div onClick={()=>handleToGetId(value)} className="border-0 bg-transparent text-dark">
                  <Icon icon="iconoir:eye" />
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}