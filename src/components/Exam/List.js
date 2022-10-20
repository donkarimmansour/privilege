import moment from "moment";
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { checkString, loader } from "../../common/funs";
import { getExam } from "../../redux/exam/action";
import { cleanAlerts } from "../../redux/exam/reducer";


const List = () => {

  const { t } = useTranslation();
  const { loading, error, success, exam } = useSelector(state => state.exam)
  const dispatch = useDispatch();
  const {user } = useSelector(state => state.auth) 

    //handle init
    useEffect(() => {  
      dispatch(getExam({ sort: { _id: -1 } , studentID : { _id : user._id } , expend: "all" , limit : 1}))
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


  return (
    <div className="table-responsive">

      {loading && loader()}

      <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
        <thead>
          <tr>
            <th>#</th>
            <th>{t("Question")}</th>
            <th>{t('Replay')}</th>
            <th>{t('Status')}</th>
            <th>{t('Type')}</th>
            <th>{t('Date')}</th>
          </tr>
        </thead>
        <tbody>


          {exam && exam.length > 0 && exam[0].exam.map((e, ei) => {
            return (
              <tr key={ei}>
                <td>{ei + 1}</td>

                <td><span>{e.question}</span></td>
                <td>{e.reply}</td>
                <td>{e.status ? 'true' : 'false' }</td>
                <td>{e.type}</td>
                <td>{moment(e.updatedAt).format("DD/MM/YYYY")}</td>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div>

  )

}

export default List