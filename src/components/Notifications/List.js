import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const List = () => {

  const { t } = useTranslation();
  const { loading, error, success, notifications, count } = useSelector(state => state.notifications)

  const OnSee = () => { }
  const OnDelete = () => { }


 
  const data = [
    {
      class : "r" ,
      group : "d" ,
      level : "d" ,
      option : "e" ,
      session : "d" ,
      message : "dddd" ,
      title : "kk" ,
      title : "name kk" ,

    },
    {
      class : "r" ,
      group : "d" ,
      level : "d" ,
      option : "e" ,
      session : "d" ,
      message : "dddd" ,
      title : "kk" ,
      title : "name kk" , 
    }

  ]




  return (



<div className="tab-pane fade show active" id="notification-all">

  <div className="accordion" id="accordionExample">

    {data.length > 0 && data.map((n, ni) => {
      return (

        <div className="card inbox unread" key={ni}>
        <div className="card-header" id="mailheading2">

          <label className="custom-control custom-checkbox custom-control-inline mr-0">
            <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
            <span className="custom-control-label">&nbsp;</span>
          </label>


           <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#maillist2" aria-expanded="true" aria-controls="maillist2">{n.title}</button>
          </h5>

          <span className="text_ellipsis xs-hide">There are many variations of passages of Lorem Ipsum available</span>
          <div className="card-options">
            <a className="text-muted" href="#!" onClick={OnDelete}><i className="fa fa-trash" /></a>                                        
            <a className="text-muted" href="app-emailveiw.html" onClick={OnSee}><i className="fa fa-eye" /></a>
          </div>
        </div>                            
        <div id="maillist2" className="collapse" aria-labelledby="mailheading2" data-parent="#accordionExample">
          <div className="card-body detail">
            <div className="detail-header">
              <div className="media">
                <div className="float-left">
                  <div className="mr-3"><img src="../assets/images/xs/avatar3.jpg" alt="" /></div>
                </div>
                <div className="media-body">
                  <p className="mb-0"><strong className="text-muted mr-1">From:</strong><a href="#!;">info@gmail.com</a></p>
                  <p className="mb-0"><strong className="text-muted mr-1">To:</strong>Me </p>                                        
                </div>
              </div>
            </div>
            <div className="mail-cnt">
              <p>Hello <strong>{n.name}</strong>,</p><br />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>                                            
              <p>Thank youm,<br /><strong>Wendy Abbott</strong></p>
            </div>
          </div>
        </div>
      </div>

      )
    })}

   </div>



   <div className="card">
    <div className="card-body text-center py-5">
      <img src="../assets/images/no-email.svg" className="width360 mb-3" />
      <h4>Not Found</h4>
      <span>Choose a ............</span>
    </div>
  </div>



</div>



  )

}

export default List