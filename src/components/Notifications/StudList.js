import react, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { deleteNotification, getNotifications } from '../../redux/notifications/action';
import swal from 'sweetalert';
import { cleanAlerts } from '../../redux/notifications/reducer';
import { checkString, extractDesk, loader } from '../../common/funs';
import {Link, useNavigate} from 'react-router-dom';

const StudList = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success, notifications } = useSelector(state => state.notifications)


  //handle init
  useEffect(() => {
    dispatch(getNotifications({ sort: { _id: -1 } }))
  }, [dispatch])


  //alerts
  useEffect(() => {
    if (success) {
      swal(t("Success"), t(checkString(success)), "success");

    } else if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

    dispatch(cleanAlerts())

  }, [success, error]);



  //delete notification
  const OnDelete = (_id) => {

    swal({
      title: t("Are you sure?"),
      text: t("You will not be able to recover this data"),
      type: "warning",
      showCancelButton: true,  
      confirmButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
    }).then(isConfirm => {
      if (isConfirm) {
        dispatch(deleteNotification(_id))
      }
    });


  }

  

  return (



    <div className="tab-pane" id="pills-notification">

      {loading && loader()}

      {notifications && notifications.length > 0 ? notifications.map((n, ni) => {

        return (

          <div className="card inbox unread" key={ni}>


            <div className="card-header">

              <h5 className="mb-0">
                <button className="btn btn-link" type="button" onClick={() => {navigate(`/notification/view/${n._id}`)} }>{n.title}</button>
              </h5>

              <span className="text_ellipsis xs-hide">{extractDesk(n?.message, 50)}</span>

              <div className="card-options">
                <a className="text-muted" href="#!" onClick={() => {OnDelete(n._id)}}><i className="fa fa-trash" /></a>
                <Link className="text-muted" to={`/notification/view/${n._id}`}><i className="fa fa-eye" /></Link>
              </div>
            </div>


          </div> 

        )
      })
        :

        <div className="card">
          <div className="card-body text-center py-5">
            <img src="../assets/images/no-email.svg" className="width360 mb-3" />
            <h4>Not Found</h4>
          </div>
        </div>


      }



    </div>



  )

}

export default StudList