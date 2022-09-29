import react from 'react'


const Add = () => {


    return (
        <div className="tab-pane" id="Courses-add">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Department Basic Info</h3>
            <div className="card-options ">
              <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
              <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
            </div>
          </div>
          <div className="card-body">
            <div className="row clearfix">
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Department Name " />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Head of Department" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="No. of Students " />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Department Start Date" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea rows={4} className="form-control no-resize" placeholder="Brief" defaultValue={""} />
                </div>
              </div>
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-outline-secondary btn-default">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Staff Member Account Info</h3>
            <div className="card-options ">
              <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
              <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
            </div>
          </div>
          <div className="card-body">
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-outline-secondary btn-default">Cancel</button>
              </div>
            </div>                        
          </div>
        </div>
      </div>
     
        )

}

export default Add