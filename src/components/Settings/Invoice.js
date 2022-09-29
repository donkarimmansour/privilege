import react from 'react'


const Invoice = () => {


    return ( 
        <div className="tab-pane" id="Invoice_Settings">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Invoice Settings</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Invoice prefix</label>
                    <input className="form-control" type="email" />
                  </div>                           
                  <input type="file" className="dropify" />
                  <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
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

export default Invoice