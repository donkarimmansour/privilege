import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { countCourse } from '../../redux/courses/action';
import { countDepartment } from '../../redux/department/action';
import { countGroupe } from '../../redux/groupes/action';
import { countLevel } from '../../redux/levels/action';
import { countProfessor } from '../../redux/professors/action';
import { countStudent } from '../../redux/students/action';


const Cards = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch()

    const { count : groupeCount } = useSelector(state => state.groupe)
    const { count : levelCount } = useSelector(state => state.level)
    const { count : coursesCount } = useSelector(state => state.courses)
    const { count : departmentCount } = useSelector(state => state.departments)
    const { count : studentsCount } = useSelector(state => state.students)
    const { count : professorsCount } = useSelector(state => state.professors)


    //get data count s
    useEffect(() => {
        dispatch(countCourse({}))
        dispatch(countDepartment({}))
        dispatch(countGroupe({}))
        dispatch(countProfessor({}))
        dispatch(countStudent({}))
        dispatch(countLevel({}))
    }, [dispatch])


    return  (
        <div className="row clearfix row-deck">
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body ribbon">
                    <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">{professorsCount}</div>
                    <Link to="/professors" className="my_sort_cut text-muted">
                        <i className="fa fa-black-tie"></i>
                        <span>{t("Teachers")}</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body  ribbon">
                <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">{coursesCount}</div>
                    <Link to="/app-contact" className="my_sort_cut text-muted">
                        <i className="fa fa-address-book"></i>
                        <span>{t("Classes")}</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body ribbon">
                    <div className="ribbon-box green" data-toggle="tooltip" title="New Students">{studentsCount}</div>
                    <Link to="/Students" className="my_sort_cut text-muted">
                        <i className="fa fa-user-circle-o"></i>
                        <span>{t("Students")}</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body ribbon">
                <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">{departmentCount}</div>
                    <Link to="/app-filemanager" className="my_sort_cut text-muted">
                        <i className="fa fa-folder"></i>
                        <span>{t("Departments")}</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body  ribbon">
                <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">{levelCount}</div>
                    <Link to="/library" className="my_sort_cut text-muted">
                        <i className="fa fa-book"></i>
                        <span>{t("Levels")}</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-6 col-md-4 col-xl-2">
            <div className="card">
                <div className="card-body  ribbon">
                <div className="ribbon-box green" data-toggle="tooltip" title="New Professors">{groupeCount}</div>
                    <Link to="/holiday" className="my_sort_cut text-muted">
                        <i className="fa fa-bullhorn"></i>
                        <span>{t("Groups")}</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
   
    )

}

export default Cards