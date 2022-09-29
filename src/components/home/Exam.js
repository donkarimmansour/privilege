import react from 'react'


const Exam = () => {

    return  (
        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Exam Toppers</h3>
                                    <div className="card-options">
                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                        <div className="item-action dropdown ml-2">
                                            <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye"></i> View Details </a>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt"></i> Share </a>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download"></i> Download</a>                                            
                                                <div className="dropdown-divider"></div>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy"></i> Copy to</a>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder"></i> Move to</a>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit"></i> Rename</a>
                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash"></i> Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive" style={{height: "310px"}}>
                                    <table className="table card-table table-vcenter text-nowrap table-striped mb-0">
                                        <tbody>
                                            <tr>
                                                <th>No.</th>                                                    
                                                <th>Name</th>
                                                <th></th>
                                                <th>Marks</th>
                                                <th>%AGE</th>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Merri Diamond</div>
                                                    <div className="text-muted">Science</div>
                                                </td>
                                                <td>199</td>
                                                <td>99.00</td>
                                            </tr>
                                            <tr>
                                                <td>23</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Sara Hopkins</div>
                                                    <div className="text-muted">Mechanical</div>
                                                </td>
                                                <td>197</td>
                                                <td>98.00</td>
                                            </tr>
                                            <tr>
                                                <td>41</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Allen Collins</div>
                                                    <div className="text-muted">M.C.A.</div>
                                                </td>
                                                <td>197</td>
                                                <td>98.00</td>
                                            </tr>
                                            <tr>
                                                <td>17</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Erin Gonzales</div>
                                                    <div className="text-muted">Arts</div>
                                                </td>
                                                <td>194</td>
                                                <td>97.00</td>
                                            </tr>
                                            <tr>
                                                <td>57</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Claire Peters</div>
                                                    <div className="text-muted">Science</div>
                                                </td>
                                                <td>192</td>
                                                <td>95.00</td>
                                            </tr>
                                            <tr>
                                                <td>85</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Claire Peters</div>
                                                    <div className="text-muted">Science</div>
                                                </td>
                                                <td>192</td>
                                                <td>95.00</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td className="w40">
                                                    <div className="avatar">
                                                        <img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>Claire Peters</div>
                                                    <div className="text-muted">Science</div>
                                                </td>
                                                <td>191</td>
                                                <td>95.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <div className="font-14"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">View All</a></span></div>
                                    <div>
                                        <button type="button" className="btn btn-primary">Export</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
    )

}

export default Exam