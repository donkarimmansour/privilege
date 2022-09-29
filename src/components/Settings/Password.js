import react from 'react'


const Password = () => {


    return ( 
        <div className="tab-pane" id="Change_Password">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Change Password</h3>
          </div>
          <div className="card-body">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <div className="form-group">                                                
                  <input type="text" className="form-control" defaultValue="louispierce" disabled placeholder="Username" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <input type="email" className="form-control" defaultValue="louis.info@yourdomain.com" placeholder="Email" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
              </div>                                
              <div className="col-lg-12 col-md-12">
                <hr />
                <h6>Change Password</h6>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Current Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="New Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Confirm New Password" />
                </div>
              </div>
              <div className="col-sm-12 m-t-20 text-right">
                <button type="button" className="btn btn-primary">SAVE</button> &nbsp;
                <button type="button" className="btn btn-default">CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      </div> 
 
    )

}

export default Password