import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const Exam = () => {


    const { t } = useTranslation();
    const { loading, error, success, exam } = useSelector(state => state.exam)



    const data = [
        {
            question: "It is a long established fact that...",
            durtion: "78s",
            replay: "mm",
            status: "field",
            date: {
                start: "Start: 3 Jun 2019",
                end: "End: 15 Jun 2019"
            },
            studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
            class: "germany",

        },
        {
            question: "It is a long established fact that...",
            durtion: "78s",
            replay: "mm",
            status: "field",
            date: {
                start: "Start: 3 Jun 2019",
                end: "End: 15 Jun 2019"
            },
            studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
            class: "germany",

        },
        {
            question: "It is a long established fact that...",
            durtion: "78s",
            replay: "mm",
            status: "field",
            date: {
                start: "Start: 3 Jun 2019",
                end: "End: 15 Jun 2019"
            },
            studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
            class: "germany",

        },
        {
            question: "It is a long established fact that...",
            durtion: "78s",
            replay: "mm",
            status: "field",
            date: {
                start: "Start: 3 Jun 2019",
                end: "End: 15 Jun 2019"
            },
            studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
            class: "germany",

        }

    ]


    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Exam Toppers</h3>

                </div>
                <div className="table-responsive" style={{ height: "310px" }}>
                    <table className="table card-table table-vcenter text-nowrap table-striped mb-0">
                        <tbody>




                            <tr>
                                <th>{t("No.")}</th>
                                <th>{t("Name")}</th>
                                <th></th>
                                <th>{t("question")}</th>
                                <th>{t("Durtion")}</th>
                                <th>{t("Replay")}</th>
                                <th>{t("Status")}</th>
                                <th>{t("Date")}</th>
                            </tr>

                            {data.length > 0 && data.map((e, ei) => {
                                return (
                                    <tr key={ei}>
                                        <td>{ei + 1}</td>
                                        <td className="w40">
                                            <div className="avatar">
                                                <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                                            </div>
                                        </td>
                                        <td>
                                            <div>{`${e.studentID.firstname} ${e.studentID.lastname}`}</div>
                                            <div className="text-muted">{e.class}</div>
                                        </td>
                                        <td><span>{e.question}</span></td>
                                        <td>{e.durtion}</td>
                                        <td>{e.replay}</td>
                                        <td>{e.status}</td>
                                        <td>
                                            <div className="text-info">{e.date.start}</div>
                                            <div className="text-pink">{e.date.end}</div>
                                        </td>


                                    </tr>
                                )
                            })}




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