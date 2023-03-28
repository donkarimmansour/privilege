import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import { checkString, loader, ImageVIEW } from "../../common/funs";
import { getSingleNotification, seenNotification, deleteNotification } from "../../redux/notifications/action";
import { cleanAlerts } from "../../redux/notifications/reducer";
import moment from 'moment';

const View = () => {

  const { t } = useTranslation();
  const { loading, error, singleNotification } = useSelector(state => state.notifications)
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth)

  //get notifications data
  useEffect(() => {
    if (params && params.id && params.id !== "") {
      dispatch(getSingleNotification({ filter: { _id: params.id } }))
    }
  }, [params])

    //get notifications data
    useEffect(() => {
      if (singleNotification && singleNotification._id) {

        const actions = {
          fullName: `${user.firstname} ${user.lastname}`,
          action: `see`,
          role: `${user.role}`
        }

        dispatch(seenNotification({actions}))
      }
    }, [singleNotification])
  

  //alerts
  useEffect(() => {
    
    if (error) {
      swal(t("Error"), t(checkString(error)), "error");
    }

   dispatch(cleanAlerts())

  }, [ error]);


  
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

  //toggle Screen
  const toggleScreen = (e) => {
      e.target.closest(".card-header").parentElement.classList.toggle("card-fullscreen")
  }




    return (
        <div className="row row-deck">

            {loading && loader()}

            <div className="col-12">
                <div className="card" >
                    <div className="card-header">

                        <h3 className="card-title">
                            <a href="#!" onClick={() => navigate(-1)}> <i className="fa fa-arrow-left" /> </a> {t('Back')}
                        </h3>

                        {singleNotification && singleNotification.title &&
                            <div className="card-options">

                            <a href="#!" className="card-options-fullscreen" onClick={(e) => { toggleScreen(e) }}> <i className="fe fe-maximize" /></a>
                            <a href="#!" onClick={() => { OnDelete(singleNotification._id) }}> <i className="fe fe-trash" /></a>

                            </div>
                        }

                      </div>

                    {singleNotification && singleNotification.title &&

                        <div className="card-body detail">
                            <div className="detail-header">
                                <div className="media">
                                    <div className="float-left">
                                        <div className="mr-3">
                                            <img style={{maxWidth: "50px"}} src={ImageVIEW("64138ac51da720d3bad08481")} alt="admin avatar" />
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p className="mb-0">
                                            <strong className="text-muted mr-1">{t('From')}:</strong>
                                            <a href="#!">info@privilege.com</a>
                                            <span className="text-muted text-sm float-right">
                                                {moment(singleNotification.updatedAt).format("DD/MM/YYYY")}
                                            </span>
                                        </p>
                                        <p className="mb-0">
                                            <strong className="text-muted mr-1">{t('To')}:</strong>{t('Me')}{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mail-cnt mt-3">
                                <p>
                                    <strong>{singleNotification.title}</strong>,
                                </p>
                                <br />
                                <p>
                                    {singleNotification.message}
                                </p>

                                <br />
                            </div>
                        </div>

                    }

                   </div>
            </div>
        </div>


    )

}

export default View