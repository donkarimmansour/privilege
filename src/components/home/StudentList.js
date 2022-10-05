import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const StudentList = () => {


    const { t } = useTranslation();
    // const { loading, error, success, students, count } = useSelector(state => state.students)
    const { loading, error, success, payments, count } = useSelector(state => state.payments)

    const OnSee = () => { }
    const OnEdit = () => { }
    const OnDelete = () => { }
    const handleOnChange = (e) => {
        const { name, value } = e
        // setFilters({ ...filters, [name]: value })

    }


    const data = [
        {
            firstname: "Peter Richards",
            lastname: "jjjjjj",
            createdAtt: "ooo@jj.ko",
            class: "germany",
            paymentStatus: "paid",
            teacher : "kk mm" 

        },
        {
            firstname: "Peter Richards",
            lastname: "jjjjjj",
            createdAtt: "ooo@jj.ko",
            class: "germany",
            paymentStatus: "paid",
            teacher : "kk mm" 

        }

    ]




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
                                        <th>{t("No")}</th>
                                        <th>{t("Name")}</th>
                                        <th>{t("Assigned Professor")}</th>
                                        <th>{t("ADMISSION DATE")}</th>
                                        <th>{t("Fees")}</th>
                                        <th>{t("Class")}</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {data.length > 0 && data.map((s, si) => {
                                        return (
                                            <tr key={si}>
                                                <td>{si + 1}</td>

                                                <td>{`${s.firstname} ${s.lastname}`}</td>
                                                <td>{s.teacher}</td>
                                                <td>{s.createdAtt}</td>
                                                <td>
                                                    <span className="tag tag-success">{s.paymentStatus}</span>
                                                </td>
                                                <td>{s.class}</td>


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