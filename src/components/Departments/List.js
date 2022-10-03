import react, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';


const List = () => {

  const { t } = useTranslation();
  const [filters, setFilters] = useState({ name: "", phone: "", date: "", class: "" });
  const { loading, error, success, departments, count } = useSelector(state => state.departments)

  const OnSee = () => { }
  const OnEdit = () => { }
  const OnDelete = () => { 

    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
  }).then(isConfirm => {
      if (isConfirm) {
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
      } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
      }
  });

  }


  const data = [
    {
      headOfDepartment: "1",
      departmentName: "one",

    },
    {
      headOfDepartment: "8",
      departmentName: "two",
    } ,
    {
      headOfDepartment: "4",
      departmentName: "thee",

    },
    {
      headOfDepartment: "3",
      departmentName: "uuuu",
    }

  ]


  
 
  return (
    <div className="tab-pane active" id="Dep-all">
      <div className="table-responsive">
        <div className="table-responsive card">
          <table className="table table-hover table-striped table-vcenter text-nowrap mb-0">
            <thead>
              <tr>
                <th>#.</th>
                <th>{t("Department Name")}</th>
                <th>{t("Head of Department")}</th>
                <th>{t("Action")}</th>
              </tr>
            </thead>
            <tbody>

              {data.length > 0 && data.map((d, di) => {
                return (
                  <tr key={di}>
                    <td>{di + 1}</td>

                    <td>{d.departmentName}</td>
                    <td>{d.headOfDepartment}</td>
                    <td>
                      <button type="button" className="btn btn-icon btn-sm" title="View" onclick={() => { OnSee() }}><i className="fa fa-eye" /></button>
                      <button type="button" className="btn btn-icon btn-sm" title="Edit" onclick={() => { OnEdit() }}><i className="fa fa-edit" /></button>
                      <button type="button" className="btn btn-icon btn-sm" onClick={() => { OnDelete() }} title="Delete"><i className="fa fa-trash-o text-danger" /></button>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>


  )

}

export default List