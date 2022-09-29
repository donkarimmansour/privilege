import react from 'react'
import { Link } from 'react-router-dom'


const Card = () => {


    return (
        <div className="card">
        <Link to="/courses/view"><img className="card-img-top" src="../assets/images/gallery/6.jpg" alt="" /></Link>
        <div className="card-body d-flex flex-column">
          <h5><a href="courses-details.html">UI UX Design Course</a></h5>
          <div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice!</div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-vcenter mb-0">
            <tbody>
              <tr>
                <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                <td className="tx-medium">Duration</td>
                <td className="text-right">6 Months</td>
              </tr>
              <tr>
                <td><i className="fa fa-cc-visa text-danger" /></td>
                <td className="tx-medium">Fees</td>
                <td className="text-right">$1,674</td>
              </tr>
              <tr>
                <td><i className="fa fa-users text-warning" /></td>
                <td className="tx-medium">Students</td>
                <td className="text-right">125+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center mt-auto">
            <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar6.jpg" alt="avatar" />
            <div>
              <a href="#">Pro. Emmett</a>
              <small className="d-block text-muted">Head OF Dept.</small>
            </div>
            <div className="ml-auto text-muted">
              <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /> 521</a>
            </div>
          </div>
        </div>
      </div>
    
        )

}

export default Card