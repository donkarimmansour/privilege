import react from 'react'


const Email = () => {


    return ( 
        <div className="tab-pane" id="Email_Settings">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">SMTP Email Settings</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="fancy-radio custom-color-green"><input name="gender3" defaultValue="PHP Mail" type="radio" defaultChecked /><span><i />PHP Mail</span></label>
                <label className="fancy-radio custom-color-green"><input name="gender3" defaultValue="SMTP" type="radio" /><span><i />SMTP</span></label>
              </div>							
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email From Address</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Emails From Name</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP HOST</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP USER</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP PASSWORD</label>
                    <input className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP PORT</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP Security</label>
                    <select className="form-control">
                      <option>None</option>
                      <option>SSL</option>
                      <option>TLS</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SMTP Authentication Domain</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-sm-12 m-t-20 text-right">
                  <button type="button" className="btn btn-primary">SAVE</button>
                </div>
              </div>                            
            </form>
          </div>
        </div>                    
      </div>
     
    )

}

export default Email