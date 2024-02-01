import data from "../data.json";

export default function Table(){
    return(
        <div>
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
              {data.map((value , index) => (
                <tr className="border">
                  <td className="border">{index + 1}</td>
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
    )
}