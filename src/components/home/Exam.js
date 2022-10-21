import react, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getExam } from '../../redux/exam/action';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import moment from 'moment';
import { ImageVIEW } from '../../common/funs';


const Exam = () => {
    const dispatch = useDispatch(); 
    const { t } = useTranslation();
    const { loading, error, success, exam } = useSelector(state => state.exam)

       //handle data
    useEffect(() => {
        dispatch(getExam({ sort : {_id : -1} , expend : "all"}))
    }, [dispatch])


    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">{t("Exams")}</h3>

                </div>
                <div className="table-responsive" style={{ height: "310px" }}>
                    <table className="table card-table table-vcenter text-nowrap table-striped mb-0" id="table-to-xls-exams">
                        <tbody>

                            <tr>
                                <th>{t("No.")}</th>
                                <th>{t("Name")}</th>
                                <th></th>
                                <th>{t("Rate")}</th>
                                <th>{t("Activated")}</th>
                                <th>{t("Date")}</th>
                            </tr>

                            {exam && exam.length > 0 && exam.map((ex, exi) => {
                                  return (
                                    <tr key={exi}>

                                        <td>{exi + 1}</td>
                                        <td className="w40">
                                            <div className="avatar">
                                                <img className="avatar" src={ImageVIEW(ex.studentID?.image)} alt="a" />
                                            </div>
                                        </td>
                                        <td>
                                            <div>{`${ex.studentID?.firstname} ${ex.studentID?.lastname}`}</div>
                                            <div className="text-muted">{ex.studentID?.className?.name}</div>
                                        </td>

                                          <td>{ex.rate}</td>
                                          <td>{ex.studentID?.isAccountActivated ? 'yes' : 'no'}</td>
                                          <td>{moment(ex.updatedAt).format("DD/MM/YYYY")}</td>

                                    </tr>
                                )
                                }) }


                        </tbody>
                    </table>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    {/* <div className="font-14"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">View All</a></span></div> */}
                    <div>
                        {/* <button type="button" className="btn btn-primary">Export</button> */}

                        <ReactHTMLTableToExcel  className='btn btn-primary'
                            // id="table-xls-button"
                            table="table-to-xls-exams"
                            filename="exams"
                            sheet="exams"
                            buttonText={t("Export")} />

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Exam