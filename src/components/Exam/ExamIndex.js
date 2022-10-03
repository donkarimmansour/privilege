import React from "react"
import Container from "../shared/Container"
import List from "./List"


const ExamIndex = () => {

    const links = [
        {name : "Privilege" , url : "#"} ,
        {name : "Exam" , url : "#"} ,
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