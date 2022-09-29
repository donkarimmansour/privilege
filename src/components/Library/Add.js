import react from 'react'


const Add = () => {


    return (
      <div className="tab-pane" id="Library-add">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Add Library</h3>
          <div className="card-options ">
            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Enter Title" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Enter Subject" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Department" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Enter Type" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Enter Year" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input type="text" defaultValue placeholder="Enter Status" className="form-control" />
              </div>
            </div>
            <div className="col-sm-12">
              <button className="btn btn-primary btn-lg btn-simple">Add Library</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
        )

}

export default Add