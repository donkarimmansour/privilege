import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}

const getApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Cancelations.route}${ApiEndpoints.Cancelations.list}`, { headers: { ...config.headers, ...token }, params: filter })
}

const countApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Cancelations.route}${ApiEndpoints.Cancelations.count}`, { headers: { ...config.headers, ...token }, params: filter })
}

const createApi = async (data, token) => {
   return await axios.post(`${Host.BACKEND}${ApiEndpoints.Cancelations.route}${ApiEndpoints.Cancelations.create}`, data, { headers: { ...config.headers, ...token } })
}

const editApi = async (id , data , token) => { 
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Cancelations.route}${ApiEndpoints.Cancelations.edit}/${id}` , data , {headers : {...config.headers , ...token}})
}

const deleteApi = async (id, token) => {
   return await axios.delete(`${Host.BACKEND}${ApiEndpoints.Cancelations.route}${ApiEndpoints.Cancelations.delete}/${id}`, { headers: { ...config.headers, ...token } })
}

export { getApi, createApi, deleteApi, countApi, editApi }


