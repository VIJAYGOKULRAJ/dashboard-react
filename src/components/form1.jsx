import axios from 'axios';
import "../CSS/form.css";
import { useEffect, useState } from "react";
import TableList from './TableList';

export default function Form1() {
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([])
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users')
      .then(function (response) {
        setUsers(response.data)


      })
      .catch(function (err) {
        console.log(err)
      })
  }, [])

  console.log(users)
  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Gender', value: 'gender' },
    { heading: 'Status', value: 'status', type: 'dropdown', options: ['Active', 'Inactive'] },

  ]
  return (
    <div className="form-body m-5">
      <TableList
        record={users}
      column = {column}
      />
    </div>
  );
}
