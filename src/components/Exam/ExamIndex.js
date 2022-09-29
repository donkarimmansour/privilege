import React from "react"
import Container from "../shared/Container"
import Card from "./Card"
import List from "./List"


const ExamIndex = () => {

    const links = [
        {name : "Ericsson" , url : "#"} ,
        {name : "Privilege" , url : "#"} ,
    ]

    const tabs = []

    return  (
        <Container tabs={tabs} links={links}> 

          <div className="tab-content">
            <div className="tab-pane active" id="TaskBoard-all">
                <Card />
                <List />
         
            </div>
       
          </div>
       
       </Container>
    )

}

export default  ExamIndex