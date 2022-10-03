import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const List = () => {

  const { t } = useTranslation();
  const [filters, setFilters] = useState({ name: "", phone: "", date: "", class: "" });
  const { loading, error, success, students, count } = useSelector(state => state.students)

  const OnSee = () => { }
  const OnEdit = () => { }
  const OnDelete = () => { }

  
  const handleOnChange = (e) => {
    const { name, value } = e
    setFilters({ ...filters, [name]: value })

  }


  const data = [
    {
      title: "lllll",
      status: "in stock",
      type: "cd",
      subject: "mm mmm",

    },
    {
      title: "lllll",
      status: "in stock",
      type: "cd",
      subject: "mm mmm",
    }

  ]
  return (
    <div className="tab-pane active" id="Library-all">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover js-basic-example dataTable table-striped table_custom border-style spacing5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{("Title")}</th>
                  <th>{("Subject")}</th>
                  <th>{("Type")}</th>
                  <th>{("Status")}</th>
                </tr>
              </thead>
              <tbody>


                {data.length > 0 && data.map((l, li) => {
                  return (
                    <tr key={li}>
                      <td>{li + 1}</td>

                      <td>{l.title}</td>
                      <td>{l.subject}</td>
                      <td>{l.type}</td>
                      <td>{l.status}</td>
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
      </div>
    </div>


  )

}

export default List