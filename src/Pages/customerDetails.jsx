import '../CSS/customerDetails.css'

export default function CustomerDetails() {
    const cusDetailsGet = JSON.parse(localStorage.getItem('customerId'))
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className="card-container">
               <div className='mb-2'>
               <span className="pro">{cusDetailsGet.company}</span>
               </div>
                <img className="round mt-4" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>{cusDetailsGet.name}</h3>
                <h6>Age {cusDetailsGet.age}</h6>
                <p>{cusDetailsGet.address}<br /> front-end developer</p>
                <div className="buttons">
                    <button className="primary">
                        Message
                    </button>
                    <button className="primary ghost">
                        Following
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>

            
        </div>
    )
}