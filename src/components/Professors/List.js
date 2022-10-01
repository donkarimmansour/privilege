import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const List = () => {

    const { t } = useTranslation();
    const [filters, setFilters] = useState({ name: "", phone: "", date: "", teach: "" });

    //  const dispatch = useDispatch()
    const { loading, error, success, professors, count } = useSelector(state => state.professors)

    useEffect(() => {
        if (success) {

        } else if (error) {

        }
    }, [success, error]);

    const OnSee = () => { }
    const OnEdit = () => { }
    const OnDelete = () => { }
    const handleOnChange = (e) => {
        const { name, value } = e
        setFilters({ ...filters, [name]: value })

    }


    const data = [
        {
            firstname: "Peter Richards",
            lastname: "jjjjjj",
            teach: "female",
            phone: "+ (916) 369-7180",
            email: "fff@k.j",
            createdAtt: "ooo@jj.ko",

        },
        {
            firstname: "Peter Richards",
            lastname: "jjjjjjj",
            teach: "male",
            phone: "+ (916) 369-7180",
            email: "ooo@jj.ko",
            createdAtt: "ooo@jj.ko",
        }

    ]

    return (
        <div className="tab-pane active" id="Student-all">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={("Name")} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Teach")} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Phone")} />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="input-group">
                                <DatePicker onChange={(e) => { handleOnChange(e) }} className="form-control" placeholder={t("Enter your Date of Birth")} />
                                {/* <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Admission Date" /> */}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <a href="javascript:void(0);" className="btn btn-sm btn-primary btn-block" >{("Search")}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive card">
                <table className="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                    <thead>
                        <tr>
                            <th>#.</th>
                            <th>{t("Name")}</th>
                            <th />
                            <th>{t("Teach")}</th>
                            <th>{t("Email")}</th>
                            <th>{t("Phone")}</th>
                            <th>{t("Admission Date")}</th>
                            <th>{t("Action")}</th>
                        </tr>
                    </thead>


                    <tbody>


                        {data.length > 0 && data.map((s, si) => {
                            return (
                                <tr key={si}>
                                    <td>{si + 1}</td>
                                    <td className="w60">
                                        <img className="avatar" src="../assets/images/xs/avatar1.jpg" alt="" />
                                    </td>
                                    <td><span className="font-16">{`${s.firstname} ${s.lastname}`}</span></td>
                                    <td>{s.teach}</td>
                                    <td>{s.email}</td>
                                    <td>{s.phone}</td>
                                    <td>{s.createdAtt}</td>
                                    <td>
                                        <button type="button" className="btn btn-icon btn-sm" title="View" onclick={() => { OnSee() }}><i className="fa fa-eye" /></button>
                                        <button type="button" className="btn btn-icon btn-sm" title="Edit" onclick={() => { OnEdit() }}><i className="fa fa-edit" /></button>
                                        <button type="button" className="btn btn-icon btn-sm js-sweetalert" onclick={() => { OnDelete() }} title="Delete" data-type="confirm"><i className="fa fa-trash-o text-danger" /></button>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>


    )

}

export default List