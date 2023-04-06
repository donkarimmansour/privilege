import React from "react"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { checkRole } from '../../common/funs';
import Container from "../shared/Container"
import List from "./List"


const ExamIndex = () => {


    const { t } = useTranslation();
    const { user, isLoggedIn } = useSelector(state => state.auth)

    const links = [
        { name: t("Privilege"), url: "/" },
        { name: t("Exam"), url: "#" }
    ]

    const tabs = []


    return (

        <>
            { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "adminOrsuperAdmin") ?

                <Container tabs={tabs} links={links}>

                    <div className="tab-content">
                        <div className="tab-pane active" id="TaskBoard-all">
                            <List />
                        </div>

                    </div>

                </Container>
                : <Navigate to="/profile" />}
        </>
    )

}

export default ExamIndex