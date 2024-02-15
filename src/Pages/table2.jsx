import { useEffect, useState } from "react";
import TableList from "../components/TableList"
import data from "../data2.json";

export const Table2 = () => {
  const records = data.slice(1, 11)
  const [dataObject, setData] = useState([])
  useEffect(() => {
    const fetchData = records.map((val) => {
      return {
        name : val.name,
        city: val.address.city,
        longitutde : val.address.geo.lng
      }
      
    })
    setData(fetchData)
  }, [])

  const column = [
    { heading: 'Sno', value: '' },
    { heading: 'Name', value: 'name' },
    { heading: 'City', value: 'city' },
    { heading: 'Longitutde', value: 'longitutde' },

  ]
  return (
    <>
      <TableList
        record={dataObject}
        column={column}
      />
    </>
  )
}