import react from 'react'


const Add = () => {


    return (
      <div className="tab-pane" id="Student-add">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Basic Information</h3>
              <div className="card-options ">
                <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              </div>
            </div>
            <form className="card-body">
              <div className="form-group row">
                <label className="col-md-3 col-form-label">First Name <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Enter First name" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Last Name <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Enter Last name" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Roll No <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Email</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Registration Date <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Class <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <select className="form-control input-height" name="department">
                    <option value>Select...</option>
                    <option value="Category 1">Computer</option>
                    <option value="Category 2">Mechanical</option>
                    <option value="Category 3">Mathematics</option>
                    <option value="Category 3">Commerce</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Gender <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <select className="form-control input-height" name="gender">
                    <option value>Select...</option>
                    <option value="Category 1">Male</option>
                    <option value="Category 2">Female</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Mobile No. <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Parents Name <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Parents Mobile No. <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Date Of Birth  <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
                <div className="col-md-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Profile Picture</label>
                <div className="col-md-9">
                  <input type="file" className="dropify" />
                  <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Account Information</h3>
              <div className="card-options ">
                <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              </div>
            </div>
            <div className="card-body">
              <div className="row clearfix">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Account Information</h3>
              <div className="card-options ">
                <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              </div>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Facebook</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Twitter</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>LinkedIN</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Behance</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>dribbble</label>
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="submit" className="btn btn-outline-secondary">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Add