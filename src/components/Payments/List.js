import react from 'react'


const List = () => {


    return (
        <div className="tab-pane" id="Fees-add"> 
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add Library</h3>
              <div className="card-options ">
                <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              </div>
            </div>
            <form className="card-body">
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Roll No <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Student Name <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Department/Class  <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control" name="select">
                    <option value>Select...</option>
                    <option value="Category 1">Mathematics</option>
                    <option value="Category 2">Engineering</option>
                    <option value="Category 3">Science</option>
                    <option value="Category 3">M.B.A.</option>
                    <option value="Category 3">Music</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Fees Type  <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control" name="selectType">
                    <option value>Select...</option>
                    <option value="Category 1">Annual</option>
                    <option value="Category 2">Tuition</option>
                    <option value="Category 3">Transport</option>
                    <option value="Category 3">Exam</option>
                    <option value="Category 3">Library</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Payment Duration <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option1" defaultChecked />
                      <span className="custom-control-label">Monthly</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option2" />
                      <span className="custom-control-label">Session</span>
                    </label>
                    <label className="custom-control custom-radio custom-control-inline">
                      <input type="radio" className="custom-control-input" name="example-inline-radios" defaultValue="option3" />
                      <span className="custom-control-label">Yearly</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Collection Date <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Amount <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Payment Method <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control" name="select">
                    <option value>Select...</option>
                    <option value="Category 1">Cash</option>
                    <option value="Category 2">Cheque</option>
                    <option value="Category 3">Credit Card</option>
                    <option value="Category 4">Debit Card</option>
                    <option value="Category 5">Netbanking</option>
                    <option value="Category 6">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Payment Status <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control" name="select">
                    <option value>Select...</option>
                    <option value="Category 1">Paid</option>
                    <option value="Category 2">Unpaid</option>
                    <option value="Category 3">Pending</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Payment Reference No. <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Payment Details <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                </div>
              </div> 
              <div className="form-group row">
                <label className="col-md-3 col-form-label" />
                <div className="col-md-7">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
     
        )

}

export default List