import react from 'react'


const Notifications = () => {


    return ( 
        <div className="tab-pane" id="Notifications">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Notifications Settings</h3>
          </div>
          <div className="card-body">
            <ul className="list-group">
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
                Anyone seeing my profile page
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
              <li className="list-group-item">
                Anyone posts a comment on my post
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" defaultChecked />
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
                Anyone seeing my profile page
                <div className="float-right">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">&nbsp;</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    )

}

export default Notifications