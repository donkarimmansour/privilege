import react from 'react'


const Permissions = () => {


    return ( 
        <div className="tab-pane" id="Roles_Permissions">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Roles &amp; Permissions</h3>
          </div>
          <div className="card-body">
            <ul className="list-group mb-3 tp-setting">
              <li className="list-group-item">
                Anyone seeing my profile page
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Anyone send me a message
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Anyone posts a comment on my post
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Anyone invite me to group
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
            </ul>
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Module Permission</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Create</th>
                    <th>Delete</th>
                    <th>Import</th>
                    <th>Export</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employee</td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Holidays</td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Leave Request</td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Events</td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                    <td>
                      <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>                    
      </div>
      
    )

}

export default Permissions