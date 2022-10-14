import  { useState } from 'react'
import List from './List'
import Container from '../shared/Container'
import Add from './Add'



const LibraryIndex = () => {
  const [editLibraryId , setEditLibraryId] = useState("")


  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Library" , url : "#"} ,
]

const tabs = [
    {name : "List View" , id : "#Library-all"} ,
    {name : "Add" , id : "#Library-add"} ,
]



    return (
      <Container tabs={tabs} links={links}> 
            <div className="tab-content">
 
            <List setEditLibraryId={setEditLibraryId} />
            <Add editLibraryId={editLibraryId} setEditLibraryId={setEditLibraryId}/>
     
      </div> 
      </Container>
    )

}

export default LibraryIndex  