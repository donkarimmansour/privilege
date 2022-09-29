import react from 'react'


const StudentList = () => {

    return  (
        <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">New Student List</h3>
                    <div className="card-options">
                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped mb-0 text-nowrap">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Assigned Professor</th>
                                    <th>Date Of Admit</th>
                                    <th>Fees</th>
                                    <th>Branch</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jens Brincker</td>
                                    <td>Kenny Josh</td>
                                    <td>27/05/2016</td>
                                    <td>
                                        <span className="tag tag-success">paid</span>
                                    </td>
                                    <td>Mechanical</td>
                                    <td>
                                        <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mark Hay</td>
                                    <td> Mark</td>
                                    <td>26/05/2018</td>
                                    <td>
                                        <span className="tag tag-warning">unpaid</span>
                                    </td>
                                    <td>Science</td>
                                    <td>
                                        <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Anthony Davie</td>
                                    <td>Cinnabar</td>
                                    <td>21/05/2018</td>
                                    <td>
                                        <span className="tag tag-success ">paid</span>
                                    </td>
                                    <td>Commerce</td>
                                    <td>
                                        <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>David Perry</td>
                                    <td>Felix </td>
                                    <td>20/04/2019</td>
                                    <td>
                                        <span className="tag tag-danger">unpaid</span>
                                    </td>
                                    <td>Mechanical</td>
                                    <td>
                                        <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Anthony Davie</td>
                                    <td>Beryl</td>
                                    <td>24/05/2017</td>
                                    <td>
                                        <span className="tag tag-success ">paid</span>
                                    </td>
                                    <td>M.B.A.</td>
                                    <td>
                                        <a href="javascript:void(0)"><i className="fa fa-check"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    )

}

export default StudentList