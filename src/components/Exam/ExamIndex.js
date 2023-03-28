import React from "react"
import { useTranslation } from "react-i18next";
import Container from "../shared/Container"
import List from "./List"


const ExamIndex = () => {

    
    const { t } = useTranslation();

    const links = [
        { name: t("Privilege"), url: "#" },
        { name: t("Exam"), url: "#" }
    ]

    const tabs = []
    

    return  (
        <Container tabs={tabs} links={links}> 

          <div className="tab-content">
            <div className="tab-pane active" id="TaskBoard-all">
                <List />
            </div>
       
          </div>
       
       </Container>
    )

}

export default  ExamIndex