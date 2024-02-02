import { log } from 'mathjs';
import '../CSS/customerDetails.css'
import Moment from 'react-moment';
import 'moment-timezone';

export default function CustomerDetails() {
    const cusDetailsGet = JSON.parse(localStorage.getItem('customerId'))
    const customerDate = cusDetailsGet.date_of_birth
    const originalDate = customerDate.split(' ')[0]
    const addressLine_1 = cusDetailsGet.address.split(',')[0]
    const addressLine_2 = cusDetailsGet.address.split(',')[1]
    const city = cusDetailsGet.address.split(',')[2]
    const cityCode = cusDetailsGet.address.split(',')[3]
const aboutContent = cusDetailsGet.about

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className="card-container">
                <div className='mb-2'>
                    <span className="pro">{cusDetailsGet.isActive ? 'ACTIVE' : 'INACTIVE'}</span>

                </div>
                <img className="round mt-4" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>{cusDetailsGet.name}</h3>
                <h6>Age {cusDetailsGet.age}</h6>
                <h5>   <Moment format="YYYY/MM/DD">
                    {originalDate}
                </Moment></h5>
                <p>{cusDetailsGet.email}<br /> {cusDetailsGet.phone}</p>
                <div className='d-flex flex-column'>
                    <span className='fw-bold'>Latitude : {cusDetailsGet.latitude}</span>
                    <span className='fw-bold'>Longitude : {cusDetailsGet.longitude}</span>
                </div>
                <div className="buttons mt-3">
                    <button className="button-17 mx-3 mt-3">
                        About
                    </button>
                    <button className="button-17 mx-3">
                        Following
                    </button>
                </div>

            </div>

            <div className="card-container d-flex flex-column justify-content-evenly ">
                    <div>
                    <h5 className='text-center fw-bold'>About</h5>
                <div className='d-flex flex-column align-items-start text-start '>
                    <h6 className='fw-bold'>
                    {aboutContent}
                    </h6>
                </div>
                    </div>
                <div className='d-flex flex-column align-items-start'>
                    <span className='fw-bold'>Address 1 : {addressLine_1}</span>
                    <span className='fw-bold'>Address 2 : {addressLine_2}</span>
                    <span className='fw-bold'>City : {city}</span>
                    <span className='fw-bold'>Code : {cityCode}</span>
                </div>

            </div>
        </div>
    )
}