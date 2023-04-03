import react, { useEffect, useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'
import { useTranslation } from 'react-i18next'
import { checkRole } from '../../common/funs'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'


const StudentsIndex = () => {

  const [editStudentId, setEditStudentId] = useState("")
  const [initAdd, setInitAdd] = useState(false)

  const { t } = useTranslation();
  const { user, isLoggedIn } = useSelector(state => state.auth)

  const links = [
    { name: t("Privilege"), url: "#" },
    { name: t("Students"), url: "#" }
  ]

  const [tabs, setTabs] = useState([{ name: t("List"), id: "#student-all" }])

  useEffect(() => {
    if (user.role !== "teacher") {
      setTabs([...tabs, { name: t("Add"), id: "#student-add" }])

    }
  }, [user])



  return (
    <>
      { !isLoggedIn ? <Navigate to="/login" /> : checkRole(user.role, "teacherOradminOrsuperAdmin") ?
        <Container tabs={tabs} links={links} setInitAdd={setInitAdd}>

          <div className="tab-content">

            <List setEditStudentId={setEditStudentId} />

            { user.role !== "teacher" &&
             <Add editStudentId={editStudentId} setEditStudentId={setEditStudentId} initAdd={initAdd}/>
            }


          </div>
        </Container>
        : <Navigate to="/profile" />}
    </>
  )

}

export default StudentsIndex