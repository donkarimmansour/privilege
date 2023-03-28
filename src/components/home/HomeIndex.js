import react from 'react'
import Exam from './Exam'
import StudentList from './StudentList'
import University from './University'
import Cards from './Cards'
import Container from '../shared/Container'
import { useTranslation } from 'react-i18next'


const HomeIndex = () => {


    const { t } = useTranslation();

    const links = [
        { name: t("Privilege"), url: "#" },
        { name: t("Dashboard"), url: "#" }
    ]

    const tabs = []


    return  (
        <Container tabs={tabs} links={links}> 

            <Cards /> 
            
            <div className="tab-content">
                <div className="tab-pane fade show active" id="admin-Dashboard" role="tabpanel">
                    {/* <div className="row clearfix">
                       <University />

                    </div>                 */}
                    <div className="row clearfix row-deck">
                       
                        <Exam />
                    </div>
                    <StudentList />
                </div>
              
              
              
              
                {/* <div className="tab-pane fade" id="admin-Activity" role="tabpanel">
                    <div className="row clearfix row-deck">
                        <div className="col-xl-7 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Quick Mail</h3>
                                    <div className="card-options">
                                        <a href="#!" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        <div className="item-action dropdown ml-2">
                                            <a href="#!" data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w80">To:</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                        <div className="input-group-append">
                                            <span className="input-group-text">CC BCC</span>
                                        </div>
                                    </div>
                                    <div className="input-group mt-1 mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text w80">Subject:</span>
                                        </div>
                                        <input type="text" className="form-control" />
                                    </div>

                                    <div className="summernote">
                                        Hi there,
                                        <br/>
                                        <p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code>, <code>onpaste</code> and many more.</p>
                                        <br/>
                                        <p>Thank you!</p>
                                        <h6>Summer Note</h6>
                                    </div>
                                    <button className="btn btn-default mt-3">Send</button>
                                </div>
                            </div>
            
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">University Stats</h3>
                                    <div className="card-options">
                                        <a href="#!" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                        <div className="item-action dropdown ml-2">
                                            <a href="#!" data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>                                            
                                                <div className="dropdown-divider"></div>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                                                <a href="#!" className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row text-center">
                                        <div className="col-lg-4 col-4 border-right">
                                            <label className="mb-0 font-10">Department</label>
                                            <h4 className="font-20 font-weight-bold">05</h4>
                                        </div>
                                        <div className="col-lg-4 col-4 border-right">
                                            <label className="mb-0 font-10">Total Teacher</label>
                                            <h4 className="font-20 font-weight-bold">43</h4>
                                        </div>
                                        <div className="col-lg-4 col-4">
                                            <label className="mb-0 font-10">Total Student</label>
                                            <h4 className="font-20 font-weight-bold">267</h4>
                                        </div>
                                    </div>
                                    <table className="table table-striped mt-4">
                                        <tbody><tr>
                                            <td>
                                                <label className="d-block">Mechanical Engineering<span className="float-right">43%</span></label>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-indigo" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{width: "43%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="d-block">Business Analysis - BUS <span className="float-right">27%</span></label>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={{width: "27%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="d-block">Computer Technology - CT <span className="float-right">81%</span></label>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-cyan" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "81%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="d-block">Management - MGT <span className="float-right">61%</span></label>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-pink" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "61%"}}></div>
                                                </div>   
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="d-block">Science <span className="float-right">77%</span></label>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: "77%"}}></div>
                                                </div>   
                                            </td>
                                        </tr>
                                    </tbody></table> 
                                </div>
                                <div className="card-footer">
                                    <small>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="card">
                                <div className="table-responsive todo_list">
                                    <table className="table table-hover text-nowrap table-striped table-vcenter mb-0">
                                        <thead>
                                            <tr>
                                                <th>Task</th>
                                                <th className="w150 text-right">Due</th>
                                                <th className="w100">Priority</th>
                                                <th className="w80 text-center"><i className="icon-user"></i></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
                                                        <span className="custom-control-label">Report Panel Usag</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">Feb 12-2019</td>
                                                <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                <td>
                                                    <span className="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" />
                                                        <span className="custom-control-label">Report Panel Usag</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">Feb 18-2019</td>
                                                <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                <td>
                                                    <img src="../assets/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
                                                        <span className="custom-control-label">New logo design for Angular Admin</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">March 02-2019</td>
                                                <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                <td>
                                                    <img src="../assets/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
                                                        <span className="custom-control-label">Report Panel Usag</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">Feb 12-2019</td>
                                                <td><span className="tag tag-danger ml-0 mr-0">HIGH</span></td>
                                                <td>
                                                    <span className="avatar avatar-pink"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" />
                                                        <span className="custom-control-label">Report Panel Usag</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">Feb 18-2019</td>
                                                <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                <td>
                                                    <img src="../assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked />
                                                        <span className="custom-control-label">New logo design for Angular Admin</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">March 02-2019</td>
                                                <td><span className="tag tag-success ml-0 mr-0">High</span></td>
                                                <td>
                                                    <span className="avatar avatar-blue"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar Name">NG</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" />
                                                        <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">March 20-2019</td>
                                                <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                <td>
                                                    <img src="../assets/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" />
                                                        <span className="custom-control-label">Design PSD files for Angular Admin</span>
                                                    </label>
                                                </td>
                                                <td className="text-right">March 20-2019</td>
                                                <td><span className="tag tag-warning ml-0 mr-0">MED</span></td>
                                                <td>
                                                    <img src="../assets/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="avatar" data-original-title="Avatar Name" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            */}
            </div>
       
       </Container>
    )

}

export default HomeIndex