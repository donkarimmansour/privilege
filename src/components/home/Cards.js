import react from 'react'


const Cards = () => {

    return  (
        <div className="row clearfix row-deck">
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body ribbon">
                    <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">5</div>
                    <a href="professors.html" className="my_sort_cut text-muted">
                        <i className="fa fa-black-tie"></i>
                        <span>Professors</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body">
                    <a href="app-contact.html" className="my_sort_cut text-muted">
                        <i className="fa fa-address-book"></i>
                        <span>Courses</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body ribbon">
                    <div className="ribbon-box orange" data-toggle="tooltip" title="New Students">8</div>
                    <a href="Students.html" className="my_sort_cut text-muted">
                        <i className="fa fa-user-circle-o"></i>
                        <span>Students</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body">
                    <a href="app-filemanager.html" className="my_sort_cut text-muted">
                        <i className="fa fa-folder"></i>
                        <span>Departments</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body">
                    <a href="library.html" className="my_sort_cut text-muted">
                        <i className="fa fa-book"></i>
                        <span>Levels</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body">
                    <a href="holiday.html" className="my_sort_cut text-muted">
                        <i className="fa fa-bullhorn"></i>
                        <span>Groups</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
   
    )

}

export default Cards