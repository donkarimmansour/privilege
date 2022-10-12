import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const createApi = async (data , token) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.create}` , data , {headers : {...config.headers , ...token}})
}
 
const deleteApi = async (id , token) => {
    return  await axios.delete(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.delete}/${id}`  , {headers : {...config.headers , ...token}})
 }

 const editApi = async (id , data , token) => { 
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.edit}/${id}` , data , {headers : {...config.headers , ...token}})
 }

 const editProfileApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.profileEdit}/${id}` , data , {headers : {...config.headers , ...token}})
}

 const editImageApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.image}/${id}` , data , {headers : {...config.headers , ...token}})
}

 const getApi = async (filter , token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.list}` , {headers : {...config.headers , ...token} , params : filter} )
 }


 const countApi = async (filter , token) => {
   return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Students.route}${ApiEndpoints.Students.count}` , {headers : {...config.headers , ...token} , params : filter } )
}


 
export {createApi , editApi  , deleteApi , getApi , countApi , editImageApi , editProfileApi}


