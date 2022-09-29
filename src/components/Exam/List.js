import React from "react"


const List = () => {


    return  (
      <div className="table-responsive">
      <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Team</th>
            <th>Duration</th>
            <th>Action</th>
            <th className="w200" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>
              <h6 className="mb-0">New code Update on github</h6>
              <span>It is a long established fact that a reader will be distracted...</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 3 Jun 2019</div>
              <div className="text-pink">End: 15 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-blue">Planned</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>0%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-azure" role="progressbar" style={{width: '0%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>
              <h6 className="mb-0">Design Events</h6>
              <span>It is a long established fact that a reader will be distracted...</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 02 Jun 2019</div>
              <div className="text-pink">End: 08 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-green">Completed</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>100%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-green" role="progressbar" style={{width: '100%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>
              <h6 className="mb-0">Feed Details on Dribbble</h6>
              <span>The point of using Lorem Ipsum is that...</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 3 Jun 2019</div>
              <div className="text-pink">End: 15 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-orange">In progress</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>35%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-azure" role="progressbar" style={{width: '35%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>
              <h6 className="mb-0">New code Update on github</h6>
              <span>It is a long established fact that a reader will be distracted...</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 13 Jun 2019</div>
              <div className="text-pink">End: 23 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-orange">In progress</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>75%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-green" role="progressbar" style={{width: '75%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>
              <h6 className="mb-0">New code Update on github</h6>
              <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 8 Jun 2019</div>
              <div className="text-pink">End: 15 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-orange">In progress</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>35%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-azure" role="progressbar" style={{width: '35%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>
              <h6 className="mb-0">Angular App Design bug</h6>
              <span>There are many variations of passages of Lorem Ipsum available...</span>
            </td>
            <td>
              <ul className="list-unstyled team-info mb-0 w150">
                <li><img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                <li><img src="../assets/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
              </ul>
            </td>
            <td>
              <div className="text-info">Start: 3 Jun 2019</div>
              <div className="text-pink">End: 15 Jun 2019</div>
            </td>
            <td>
              <span className="tag tag-orange">Planned</span>
            </td>
            <td>
              <div className="clearfix">
                <div className="float-left"><strong>35%</strong></div>
                <div className="float-right"><small className="text-muted">Progress</small></div>
              </div>
              <div className="progress progress-xs">
                <div className="progress-bar bg-azure" role="progressbar" style={{width: '35%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    )

}

export default  List