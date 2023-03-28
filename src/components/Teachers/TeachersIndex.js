import  { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'
import ListGrid from './ListGrid'


const TeachersIndex = () => {
    const [editTeacherId, setEditTeacherId] = useState("")

    const { t } = useTranslation();

    const links = [
      { name: t("Privilege"), url: "#" },
      { name: t("Teachers"), url: "#" }
    ]
    
    const tabs = [
      { name: t("List"), id: "#pro-all" },
      { name: t("Grid"), id: "#pro-grid" },
      { name: t("Add"), id: "#pro-add" },
    ]

    return (
        <Container tabs={tabs} links={links}>
            <div className="tab-content">

                <List setEditTeacherId={setEditTeacherId} />
                <Add editTeacherId={editTeacherId} setEditTeacherId={setEditTeacherId}/>
                <ListGrid setEditTeacherId={setEditTeacherId} />

            </div>
        </Container>
    )

}

export default TeachersIndex