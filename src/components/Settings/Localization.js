import react from 'react'


const Localization = () => {


    return ( 
        <div className="tab-pane" id="Localization">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Basic Settings</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Default Country</label>
                    <select className="form-control">
                      <option selected="selected">USA</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Date Format</label>
                    <select className="form-control">
                      <option value="d/m/Y">15/05/2016</option>
                      <option value="d.m.Y">15.05.2016</option>
                      <option value="d-m-Y">15-05-2016</option>
                      <option value="m/d/Y">05/15/2016</option>
                      <option value="Y/m/d">2016/05/15</option>
                      <option value="Y-m-d">2016-05-15</option>
                      <option value="M d Y">May 15 2016</option>
                      <option selected="selected" value="d M Y">15 May 2016</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Timezone</label>
                    <select className="form-control">
                      <option>10:45am Chicago (GMT-6)</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Default Language</label>
                    <select className="form-control">
                      <option selected="selected">English</option>
                      <option>Russian</option>
                      <option>Arabic</option>
                      <option>French</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Currency Code</label>
                    <select className="form-control">
                      <option selected="selected">USD</option>
                      <option>Pound</option>
                      <option>EURO</option>
                      <option>Ringgit</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Currency Symbol</label>
                    <input className="form-control" defaultValue="$" type="text" />
                  </div>
                </div>
                <div className="col-sm-12 text-right m-t-20">
                  <button type="button" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>                    
      </div>
    
    )

}

export default Localization