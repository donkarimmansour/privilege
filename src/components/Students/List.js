import react from 'react'


const List = () => {


    return (
        <div className="tab-pane active" id="Student-all">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Roll No." />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Department" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="input-group">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Admission Date" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <a href="javascript:void(0);" className="btn btn-sm btn-primary btn-block" >Search</a>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive card">
          <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th />
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admission Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A25</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                </td>
                <td><span className="font-16">Ken Smith</span></td>
                <td>Science</td>
                <td>ken@gmail.com</td>
                <td>(417) 646-7483</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A26</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="" />
                </td>
                <td><span className="font-16">Gerald K Smith</span></td>
                <td>M.C.A.</td>
                <td>Gerald@gmail.com</td>
                <td>(154) 646-2486</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A25</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="" />
                </td>
                <td><span className="font-16">Ken Smith</span></td>
                <td>Mechanical</td>
                <td>ken@gmail.com</td>
                <td>(417) 646-8377</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A27</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                </td>
                <td><span className="font-16">Alice A Smith</span></td>
                <td>M.B.B.S.</td>
                <td>Patricia@gmail.com</td>
                <td>(753) 646-4931</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A17</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="" />
                </td>
                <td><span className="font-16">Ken Smith</span></td>
                <td>Arts</td>
                <td>ken@gmail.com</td>
                <td>(417) 646-7642</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A11</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="" />
                </td>
                <td><span className="font-16">Corrine M Johnson</span></td>
                <td>Mechanical</td>
                <td>Gladys@gmail.com</td>
                <td>(349) 646-8377</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A12</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
                </td>
                <td><span className="font-16">Alan Johnson</span></td>
                <td>Music</td>
                <td>ken@gmail.com</td>
                <td>(648) 646-8523</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
              <tr>
                <td>A23</td>
                <td className="w60">
                  <img className="avatar" src="../assets/images/xs/avatar8.jpg" alt="" />
                </td>
                <td><span className="font-16">John Smith</span></td>
                <td>Civil</td>
                <td>Corrine@gmail.com</td>
                <td>(417) 646-7845</td>
                <td>04 Jan, 2019</td>
                <td>
                  <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                  <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                  <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
     
        )

}

export default List