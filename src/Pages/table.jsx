import data from "../data.json";
import '../CSS/table.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import TableList from "../components/TableList";


export default function Table() {
  const [currentPage, setcurrentPage] = useState(1)
  const recordShowPerPage = 5
  const serialNo = (currentPage - 1) * recordShowPerPage + 1
  const lastIndex = currentPage * recordShowPerPage
  const firstIndex = lastIndex - recordShowPerPage
  const records = data.slice(firstIndex, lastIndex)
  const noOfPage = Math.ceil(data.length / recordShowPerPage)
  const numbers = [...Array(noOfPage + 1).keys()].slice(1)

  //console.log(records ,"data",data,data.slice(firstIndex, lastIndex));
  const navigate = useNavigate();
  const handleToGetId = (val) => {
    navigate(`/table/id=${val._id}`)
    localStorage.setItem("customerId", JSON.stringify(val))
  }
  const nextPage = () => {
    if (currentPage != noOfPage) {
      setcurrentPage(currentPage + 1)
    }
  }
  const changeCurrentpage = (id) => {
    setcurrentPage(id)
  }
  const previousPage = () => {
    if (currentPage != noOfPage) {
      setcurrentPage(currentPage - 1)
    }
  }
  const rowCount = data.length;


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
      <TableList
        record = {records}
        column = {column}
      />
    </div>
  )
}