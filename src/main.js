
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Calculator from "./components/calculator";
import Form1 from "./components/form1";
import Dashboard from "./components/dashboard";
import Charts from "./components/about";
import Table from "./components/table";
import CustomerDetails from "./Pages/customerDetails";


export default function Main(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/calculator" element={<Calculator />}/>
                <Route path="/form" element={<Form1 />}/>
                <Route path="/about" element={<Charts/>}/>
                <Route path="/table" element={<Table />}/>
                <Route path="/table/:getCusById" element={<CustomerDetails />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}