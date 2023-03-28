import moment from 'moment';
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getPayment } from '../../redux/payments/action';
import myClassnames from 'classnames';


const StudentList = () => {

     const { t } = useTranslation();
     const dispatch = useDispatch();
     const { payments} = useSelector(state => state.payments)
  
  
    //handle data
    useEffect(() => {
      dispatch(getPayment({ sort : {_id : -1} , expend : "all"}))
    }, [dispatch])
  
  

    return (
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
                                        <th>{t("#")}</th>
                                        <th>{t("Name")}</th>
                                        <th>{t("Class")}</th>
                                        <th>{t("Method")}</th>
                                        <th>{t("Type")}</th>
                                        <th>{t("Amount")}</th>
                                        <th>{t("DATE")}</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {payments.length > 0 && payments.map((p, pi) => {
                                        return (
                                            <tr key={pi}>

                                                <td>{pi + 1}</td>

                                                <td>{`${p?.studentID?.firstname} ${p?.studentID?.lastname}`}</td>
                                                <td>{p?.studentID?.language?.name}</td>
                                                <td>{p.paymentMethod}</td>
                                                <td>{p.feesType}</td>
                                                <td>{p.amount}</td>
                                                <td>{moment(p.updatedAt).format("DD/MM/YYYY")}</td>

                                            </tr>
                                        )
                                    })}



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