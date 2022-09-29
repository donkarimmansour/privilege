import react from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const CoursesIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Courses" , url : "#"} 
  ]

const tabs = [
    {name : "List View" , id : "#Courses-all"} ,
    {name : "Add" , id : "#Courses-add"} ,
    // {name : "Add Bootstrap Style" , id : "#Courses-add-Boot"} ,
]


    return (
      <Container tabs={tabs} links={links}> 
      
       <div className="tab-content">

         <List />
         <Add />





         {/* <div className="tab-pane" id="Courses-add-Boot">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Add Department</h3>
              <div className="card-options ">
                <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
              </div>
            </div>
            <form className="card-body">
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Department Name <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Head Of Department</label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div> 
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Department Start Date <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input data-provide="datepicker" data-date-autoclose="true" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Student Capacity <span className="text-danger">*</span></label>
                <div className="col-md-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label">Department Details <span className="text-danger">*</span></label>
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
     
      */}
     
     
      </div>
      </Container>
    )

}

export default CoursesIndex