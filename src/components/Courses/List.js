import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


import Card from './Card'





const List = () => {


        const { t } = useTranslation();
        // const [filters, setFilters] = useState({ name: "", phone: "", date: "", class: "" });
        const { loading, error, success, courses, count } = useSelector(state => state.courses)

        const data = [
                {
                        name: "germeny",
                        desk: "germeny b1 ..............",
                        teachers: "25",
                        fees: "$17k",
                        students: "423",

                },

                {
                        name: "germeny",
                        desk: "germeny b1 ..............",
                        teachers: "58",
                        fees: "$17k",
                        students: "423",

                },

                {
                        name: "germeny",
                        desk: "germeny b1 ..............",
                        teachers: "58",
                        fees: "$17k",
                        students: "423",

                },

                {
                        name: "germeny",
                        desk: "germeny b1 ..............",
                        teachers: "77",
                        fees: "$17k",
                        students: "423",

                },


        ]

        return (
                <div className="tab-pane active" id="Courses-all">
                        <div className="row row-deck">
                                {data.length > 0 && data.map((c, ci) => {

                                        return (<div key={ci} className="col-xl-4 col-lg-4 col-md-6"> <Card course={c} /> </div>)

                                })}

                        </div>
                </div>

        )

}

export default List