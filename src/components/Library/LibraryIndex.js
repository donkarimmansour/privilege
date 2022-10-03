import react from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'



const LibraryIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Library" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Library-all"} ,
    {name : "Add" , id : "#Library-add"} ,
    // {name : "Add Bootstrap Style" , id : "#Library-add-Boot"}
]



    return (
      <Container tabs={tabs} links={links}> 
            <div className="tab-content">
 
            <List />
         <Add />
        {/* <div className="tab-pane" id="Library-add-Boot">
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
                <label className="col-md-3 col-form-label">Title <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Subject  <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control input-height" name="sub">
                    <option value>Select...</option>
                    <option value="Category 1">Mathematics</option>
                    <option value="Category 2">Science</option>
                    <option value="Category 3">Software</option>
                    <option value="Category 3">Other</option>
                  </select>
                </div>  
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Purchase Date <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Auther Name <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Publisher <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Price <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Department <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control input-height" name="departmnt">
                    <option value>Select...</option>
                    <option value="Category 1">Mathematics</option>
                    <option value="Category 2">Engineering</option>
                    <option value="Category 3">Science</option>
                    <option value="Category 3">M.B.A.</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Asset Type <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <select className="form-control input-height" name="assttype">
                    <option value>Select...</option>
                    <option value="Category 1">Book</option>
                    <option value="Category 2">CD</option>
                    <option value="Category 3">DVD</option>
                    <option value="Category 3">NewsPaper</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Asset Details <span className="text-danger">*</span></label>
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
        </div>*/}
      </div> 
      </Container>
    )

}

export default LibraryIndex  