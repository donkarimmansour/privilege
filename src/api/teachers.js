import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const createApi = async (data , token) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.create}` , data , {headers : {...config.headers , ...token}})
}
 
const deleteApi = async (id , token) => {
    return  await axios.delete(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.delete}/${id}`  , {headers : {...config.headers , ...token}})
 }

 const editApi = async (id , data , token) => { 
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.edit}/${id}` , data , {headers : {...config.headers , ...token}})
 }

 const getApi = async (filter , token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.list}` , {headers : {...config.headers , ...token} , params : filter} )
 }


 const countApi = async (filter , token) => {
   return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.count}` , {headers : {...config.headers , ...token} , params : filter } )
}

const editProfileApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.profileEdit}/${id}` , data , {headers : {...config.headers , ...token}})
}

 const editImageApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Teachers.route}${ApiEndpoints.Teachers.image}/${id}` , data , {headers : {...config.headers , ...token}})
}


export {createApi , editApi  , deleteApi , getApi , countApi , editProfileApi , editImageApi}


