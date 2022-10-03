import React, { useState } from "react"
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


const List = () => {

  const { t } = useTranslation();
  const { loading, error, success, exam } = useSelector(state => state.exam)



  const data = [
    {
      question: "It is a long established fact that a reader will be distracted...",
      durtion: "78s",
      replay: "mm",
      status: "field",
      date: {
        start: "Start: 3 Jun 2019",
        end: "End: 15 Jun 2019"
      },

    },
    {
      question: "It is a long established fact that a reader will be distracted...",
      durtion: "78s",
      replay: "mm",
      status: "field",
      date: {
        start: "Start: 3 Jun 2019",
        end: "End: 15 Jun 2019"
      },
    }

  ]


  return (
    <div className="table-responsive">
      <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
        <thead>
          <tr>
            <th>#</th>
            <th>{t("Question")}</th>
            <th>{t('Durtion')}</th>
            <th>{t('Replay')}</th>
            <th>{t('Status')}</th>
            <th>{t('Date')}</th>
          </tr>
        </thead>
        <tbody>


          {data.length > 0 && data.map((e, ei) => {
            return (
              <tr key={ei}>
                <td>{ei + 1}</td>

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

  )

}

export default List