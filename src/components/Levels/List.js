import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const List = () => {

  const { t } = useTranslation();
  const [filters, setFilters] = useState({ name: "", phone: "", date: "", class: "" });
  const { loading, error, success, levels, count } = useSelector(state => state.level)

  const OnSee = () => { }
  const OnEdit = () => { }
  const OnDelete = () => { }
  const handleOnChange = (e) => {
    const { name, value } = e
    setFilters({ ...filters, [name]: value })

  }


  const data = [
    {
      name: "a1",
      group: "one",
      department: "1th",
      position: "1",
      class: "germany",

    },
    {
      name: "b1",
      group: "one",
      department: "2th",
      position: "2",
      class: "germany",
    }

  ]

  return (
    <div className="tab-pane active" id="Student-all">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={("Name")} />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Class")} />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" onChange={(e) => { handleOnChange(e) }} placeholder={t("Groupe")} />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
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
              <th>{t("Groupe")}</th>
              <th>{t("Department")}</th>
              <th>{t("Position")}</th>
              <th>{t("Class")}</th>
            </tr>
          </thead>


          <tbody>


            {data.length > 0 && data.map((s, si) => {
              return (
                <tr key={si}>
                  <td>{si + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.group}</td>
                  <td>{s.department}</td>
                  <td>{s.position}</td>
                  <td>{s.class}</td>
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