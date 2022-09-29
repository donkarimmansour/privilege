import react from 'react'



const Edit = () => {



    return (
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Edit Profile</h3>
            <div className="card-options">
              <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
              <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              <div className="item-action dropdown ml-2">
                <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>                                            
                  <div className="dropdown-divider" />
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                  <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body form-horizontal">
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Company <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Username <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Email address <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">First Name <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Last Name <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Address <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" placeholder="Home Address" defaultValue="455 S. Airport St. Moncks Corner" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">City <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Postal Code <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Country <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <select className="form-control custom-select">
                  <option value>USA</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">About Me <span className="text-danger">*</span></label>
              <div className="col-md-7">
                <textarea rows={5} className="form-control" placeholder="Here can be your description" defaultValue={"Oh so, your weak rhyme You doubt I'll bother, reading into it I'll probably won't, left to my own devices But that's the difference in our opinions."} />
              </div>
            </div>
          </div>
          <div className="card-footer text-right">
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
      
    )

}

export default Edit