import react from 'react'


const List = () => {


    return (
        <div className="tab-pane active" id="Dep-all">
        <div className="table-responsive">
          <div className="table-responsive card">
            <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Dept. Name</th>
                  <th>Head OF Dept.</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>establish</th>
                  <th>Std. Capacity</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mechanical Engg.</td>
                  <td>Emmett L Johnson</td>
                  <td>+123 4567890</td>
                  <td>test@example.com</td>
                  <td>1998</td>
                  <td>150</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Computer Engg.</td>
                  <td>Corrine M Johnson</td>
                  <td>+123 4567890</td>
                  <td>test@example.com</td>
                  <td>2011</td>
                  <td>205</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>M.B.A.</td>
                  <td>Gladys J Smith</td>
                  <td>+123 4567890</td>
                  <td>test@example.com</td>
                  <td>2009</td>
                  <td>128</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>M.C.A.</td>
                  <td>Patricia Smith</td>
                  <td>+123 4567890</td>
                  <td>test@example.com</td>
                  <td>2014</td>
                  <td>98</td>
                  <td>
                    <button type="button" className="btn btn-icon btn-sm" title="View"><i className="fa fa-eye" /></button>
                    <button type="button" className="btn btn-icon btn-sm" title="Edit"><i className="fa fa-edit" /></button>
                    <button type="button" className="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Civil Engg.</td>
                  <td>Danny M Johnson</td>
                  <td>+123 4567890</td>
                  <td>test@example.com</td>
                  <td>2016</td>
                  <td>231</td>
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
      </div>
     
     
        )

}

export default List