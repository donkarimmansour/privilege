import react from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const ListGrid = () => {
    const { t } = useTranslation();
    const {  professors, count } = useSelector(state => state.professors)


    const data = [
        {
            firstname: "Peter Richards",
            lastname: "jjjjjj",
            gender: "female",
            phone: "+ (916) 369-7180",
            email: "fff@k.j",
        } ,
        {
            firstname: "Peter Richards",
            lastname: "jjjjjjj",
            gender: "male",
            phone: "+ (916) 369-7180",
            email: "ooo@jj.ko",
        }
    ]

    return (
        <div className="tab-pane" id="pro-grid">
                        <div className="row">

                            {data.length > 0 && data.map((p , pi) => {
                                return (
                                    <div key={pi} className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <img className="card-profile-img" src="../assets/images/sm/avatar1.jpg" alt=""/>
                                            <h5 className="mb-0">{`${p.firstname} ${p.lastname}`}</h5>
                                            <span>{p.gender}</span>
                                            <div className="text-muted">{p.phone}</div>
                                            <p className="mb-4 mt-3">{p.email}</p>
                                            <button className="btn btn-primary btn-sm">{t("Read More")}</button>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                           
                        </div>
                    </div>
                  
     
        )

}

export default ListGrid