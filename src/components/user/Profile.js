import react from 'react'
import Container from '../shared/Container'
import Calender from './Calender'
import Edit from './Edit'



const Profile = () => {

  const links = [
    {name : "Ericsson" , url : "#"} ,
    {name : "My Profile" , url : "#"} ,
]

const tabs = [
    {name : "Calendar" , id : "#pills-calendar"} ,
    {name : "Profile" , id : "#pills-profile"}
]


    return (
      <Container tabs={tabs} links={links}> 
       <div className="row clearfix">
        {/* <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="widgets1">
                <div className="icon">
                  <i className="icon-trophy text-success font-30" />
                </div>
                <div className="details">
                  <h6 className="mb-0 font600">Total Earned</h6>
                  <span className="mb-0">$96K +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="widgets1">
                <div className="icon">
                  <i className="icon-heart text-warning font-30" />
                </div>
                <div className="details">
                  <h6 className="mb-0 font600">Total Likes</h6>
                  <span className="mb-0">6,270</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="widgets1">
                <div className="icon">
                  <i className="icon-handbag text-danger font-30" />
                </div>
                <div className="details">
                  <h6 className="mb-0 font600">Delivered</h6>
                  <span className="mb-0">720 Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="widgets1">
                <div className="icon">
                  <i className="icon-user text-primary font-30" />
                </div>
                <div className="details">
                  <h6 className="mb-0 font600">Jobs</h6>
                  <span className="mb-0">614</span>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}
        
        <div className="col-md-12">
          <div className="tab-content" id="pills-tabContent">

            <Calender />
            <Edit />


            {/* <div className="tab-pane fade" id="pills-timeline" role="tabpanel" aria-labelledby="pills-timeline-tab">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Activity</h3>
                  <div className="card-options">
                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                    <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                    <div className="item-action dropdown ml-2">
                      <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>                                            
                        <div className="dropdown-divider" />
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                        <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                    <span><a href="javascript:void(0);">Elisse Joson</a> San Francisco, CA <small className="float-right text-right">20-April-2019 - Today</small></span>
                    <h6 className="font600">Hello, 'Im a single div responsive timeline without media Queries!</h6>
                    <div className="msg">
                      <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.</p>
                      <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 12 Love</a>
                      <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-comments" /> 1 Comment</a>
                      <div className="collapse p-4 section-gray show" id="collapseExample">
                        <form className="well">
                          <div className="form-group">
                            <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                          </div>
                          <button className="btn btn-primary">Submit</button>
                        </form>
                        <ul className="recent_comments list-unstyled mt-4 mb-0">
                          <li>
                            <div className="avatar_img">
                              <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                            </div>
                            <div className="comment_body">
                              <h5>Donald Gardner <small className="float-right font-14">Just now</small></h5>
                              <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>                                
                  </div>
                  <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                    <span><a href="javascript:void(0);" title>Dessie Parks</a> Oakland, CA <small className="float-right text-right">19-April-2019 - Yesterday</small></span>
                    <h6 className="font600">Oeehhh, that's awesome.. Me too!</h6>
                    <div className="msg">
                      <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
                      <div className="timeline_img mb-20">
                        <img className="width100" src="../assets/images/gallery/1.jpg" alt="Awesome Image" />
                        <img className="width100" src="../assets/images/gallery/2.jpg" alt="Awesome Image" />
                      </div>
                      <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 23 Love</a>
                      <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i className="fa fa-comments" /> 2 Comment</a>
                      <div className="collapse p-4 section-gray" id="collapseExample1">
                        <form className="well">
                          <div className="form-group">
                            <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                          </div>
                          <button className="btn btn-primary">Submit</button>
                        </form>
                        <ul className="recent_comments list-unstyled mt-4 mb-0">
                          <li>
                            <div className="avatar_img">
                              <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="" />
                            </div>
                            <div className="comment_body">
                              <h5>Donald Gardner <small className="float-right font-14">Just now</small></h5>
                              <p>Lorem ipsum Veniam aliquip culpa laboris minim tempor</p>
                              <div className="timeline_img mb-20">
                                <img className="width150" src="../assets/images/gallery/7.jpg" alt="Awesome Image" />
                                <img className="width150" src="../assets/images/gallery/8.jpg" alt="Awesome Image" />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="avatar_img">
                              <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="" />
                            </div>
                            <div className="comment_body">
                              <h5>Dessie Parks <small className="float-right font-14">1min ago</small></h5>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                            </div>
                          </li>
                        </ul>
                      </div>                                    
                    </div>
                  </div>
                  <div className="timeline_item ">
                    <img className="tl_avatar" src="../assets/images/xs/avatar7.jpg" alt="" />
                    <span><a href="javascript:void(0);" title>Rochelle Barton</a> San Francisco, CA <small className="float-right text-right">12-April-2019</small></span>
                    <h6 className="font600">An Engineer Explains Why You Should Always Order the Larger Pizza</h6>
                    <div className="msg">
                      <p>I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.</p>
                      <a href="javascript:void(0);" className="mr-20 text-muted"><i className="fa fa-heart text-pink" /> 7 Love</a>
                      <a className="text-muted" role="button" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i className="fa fa-comments" /> 1 Comment</a>
                      <div className="collapse p-4 section-gray" id="collapseExample2">
                        <form className="well">
                          <div className="form-group">
                            <textarea rows={2} className="form-control no-resize" placeholder="Enter here for tweet..." defaultValue={""} />
                          </div>
                          <button className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab">
              <div className="card">
                <div className="card-body">
                  <div className="new_post">
                    <div className="form-group">
                      <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                    </div>
                    <div className="mt-4 text-right">
                      <button className="btn btn-warning"><i className="icon-link" /></button>
                      <button className="btn btn-warning"><i className="icon-camera" /></button>
                      <button className="btn btn-primary">Post</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card blog_single_post">
                    <div className="img-post">
                      <img className="d-block img-fluid" src="../assets/images/gallery/6.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">                                    
                      <h4><a href="#">All photographs are accurate</a></h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                      <div className="actions">
                        <a href="javascript:void(0);" className="btn btn-outline-secondary">Continue Reading</a>
                      </div>
                      <ul className="stats list-unstyled">
                        <li><a href="javascript:void(0);">General</a></li>
                        <li><a href="javascript:void(0);" className="icon-heart"> 28</a></li>
                        <li><a href="javascript:void(0);" className="icon-bubbles"> 128</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card blog_single_post">
                    <div className="img-post">
                      <img className="d-block img-fluid" src="../assets/images/gallery/4.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                      <h4><a href="#">All photographs are accurate</a></h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                      <div className="actions">
                        <a href="javascript:void(0);" className="btn btn-outline-secondary">Continue Reading</a>
                      </div>
                      <ul className="stats list-unstyled">
                        <li><a href="javascript:void(0);">General</a></li>
                        <li><a href="javascript:void(0);" className="icon-heart"> 28</a></li>
                        <li><a href="javascript:void(0);" className="icon-bubbles"> 128</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card blog_single_post">
                    <div className="img-post">
                      <img className="d-block img-fluid" src="../assets/images/gallery/1.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">                                    
                      <h4><a href="#">All photographs are accurate</a></h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                      <div className="actions">
                        <a href="javascript:void(0);" className="btn btn-outline-secondary">Continue Reading</a>
                      </div>
                      <ul className="stats list-unstyled">
                        <li><a href="javascript:void(0);">General</a></li>
                        <li><a href="javascript:void(0);" className="icon-heart"> 28</a></li>
                        <li><a href="javascript:void(0);" className="icon-bubbles"> 128</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card blog_single_post">
                    <div className="img-post">
                      <img className="d-block img-fluid" src="../assets/images/gallery/2.jpg" alt="First slide" />
                    </div>
                    <div className="card-body">
                      <h4><a href="#">All photographs are accurate</a></h4>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    </div>
                    <div className="footer">
                      <div className="actions">
                        <a href="javascript:void(0);" className="btn btn-outline-secondary">Continue Reading</a>
                      </div> 
                      <ul className="stats list-unstyled">
                        <li><a href="javascript:void(0);">General</a></li>
                        <li><a href="javascript:void(0);" className="icon-heart"> 28</a></li>
                        <li><a href="javascript:void(0);" className="icon-bubbles"> 128</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>                        
        */}
       
       
          </div>
        </div>
      </div>
      </Container>
    )

}

export default Profile