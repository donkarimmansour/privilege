import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}

const createApi = async (data , token) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Languages.route}${ApiEndpoints.Languages.create}` , data , {headers : {...config.headers , ...token}})
}
 
const deleteApi = async (id , token) => {
    return  await axios.delete(`${Host.BACKEND}${ApiEndpoints.Languages.route}${ApiEndpoints.Languages.delete}/${id}`  , {headers : {...config.headers , ...token}})
 }

const editApi = async (id, data, token) => {
   return await axios.put(`${Host.BACKEND}${ApiEndpoints.Languages.route}${ApiEndpoints.Languages.edit}/${id}`, data, { headers: { ...config.headers, ...token } })
}

const getApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Languages.route}${ApiEndpoints.Languages.list}`, { headers: { ...config.headers, ...token }, params: filter })
}


const countApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Languages.route}${ApiEndpoints.Languages.count}`, { headers: { ...config.headers, ...token }, params: filter })
}




export {createApi , editApi  , deleteApi , getApi , countApi }


