import '../CSS/dashboard.css'
import analysisimg from '../assets/analysis-img.png'
import analysisimg_2 from '../assets/analysis-img-2.png'
export default function Dashboard() {
  return (
    <div>
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-6 ">
            <img className="analysis-img" src={analysisimg}
            alt="img" srcset="" 
            />
        </div>
        <div className="col-6 col-md-6 ">
        <img className="analysis-img" src={analysisimg_2}
            alt="img" srcset="" 
            />  
        </div>
      </div>

      <div className='row'>
<div className="col-12">
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
      </div>
    </div>
  );
}
