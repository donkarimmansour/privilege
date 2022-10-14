import  { useState } from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'
import ListGrid from './ListGrid'


const ProfessorsIndex = () => {
    const [editProfessorId, setEditProfessorId] = useState("")

    const links = [
        { name: "Privilege", url: "/" },
        { name: "Professors", url: "#" },
    ]
 
    const tabs = [
        { name: "List View", id: "#pro-all" },
        { name: "Grid View", id: "#pro-grid" },
        { name: "Add", id: "#pro-add" },
    ]
 

    return (
        <Container tabs={tabs} links={links}>
            <div className="tab-content">

                <List setEditProfessorId={setEditProfessorId} />
                <Add editProfessorId={editProfessorId} setEditProfessorId={setEditProfessorId}/>
                <ListGrid setEditProfessorId={setEditProfessorId} />

            </div>
        </Container>
    )

}

export default ProfessorsIndex