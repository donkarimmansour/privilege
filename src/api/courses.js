import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const createApi = async (data , token) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.create}` , data , {headers : {...config.headers , ...token}})
}
 
const deleteApi = async (id , token) => {
    return  await axios.delete(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.delete}/${id}`  , {headers : {...config.headers , ...token}})
 }

 const editApi = async (id , data , token) => { 
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.edit}/${id}` , data , {headers : {...config.headers , ...token}})
 }

 const getApi = async (filter , token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.list}` , {headers : {...config.headers , ...token} , params : filter} )
 }


 const countApi = async (filter , token) => {
   return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.count}` , {headers : {...config.headers , ...token} , params : filter } )
}


const editImageApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Course.route}${ApiEndpoints.Course.image}/${id}` , data , {headers : {...config.headers , ...token}})
}



export {createApi , editApi  , deleteApi , getApi , countApi , editImageApi}


