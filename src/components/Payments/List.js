import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const List = () => {
  const { t } = useTranslation();


  //  const dispatch = useDispatch()
  const { loading, error, success, payments, count } = useSelector(state => state.payments)

  const data = [
    {

      studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
      class: "germany",
      paymentStatus: "paid",
      paymentMethod: "cash",
      createdAtt: "1/77/2024",
      paymentDuration: "monthly",
      amount: 877,

    },
    {
      studentID: { firstname: "Peter Richards", lastname: "jjjjjj" },
      class: "germany",
      paymentStatus: "paid",
      paymentMethod: "cash",
      createdAtt: "1/77/2024",
      paymentDuration: "monthly",
      amount: 877,
    }

  ]


  return (
    <div className="tab-pane active" id="Fees-all">
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover text-nowrap js-basic-example dataTable table-striped table_custom border-style spacing5">
              <thead>
                <tr>
                  <th>#.</th>
                  <th>{t("Student Name")}</th>
                  <th>{t("Method")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Class")}</th>
                  <th>{t("Duration")}</th>
                  <th>{t("Status")}</th>
                  <th>{t("Amount")}</th>
                </tr>
              </thead>
              <tbody>

                {data.length > 0 && data.map((p, pi) => {
                  return (
                    <tr key={pi}>
                      <td>{pi + 1}</td>
                      <td>{`${p.studentID.firstname} ${p.studentID.lastname}`}</td>
                      <td>{p.paymentMethod}</td>
                      <td>{p.createdAtt}</td>
                      <td>{p.class}</td>
                      <td>{p.paymentDuration}</td>
                      <td><span className="tag tag-green">{p.paymentStatus}</span></td>
                      <td>{p.amount}</td>
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