import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}

const getApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Notifications.route}${ApiEndpoints.Notifications.list}`, { headers: { ...config.headers, ...token }, params: filter })
}

const countApi = async (filter, token) => {
   return await axios.get(`${Host.BACKEND}${ApiEndpoints.Notifications.route}${ApiEndpoints.Notifications.count}`, { headers: { ...config.headers, ...token }, params: filter })
}

const createApi = async (data, token) => {
   return await axios.post(`${Host.BACKEND}${ApiEndpoints.Notifications.route}${ApiEndpoints.Notifications.create}`, data, { headers: { ...config.headers, ...token } })
}
const seenApi = async (id, data, token) => {
   return await axios.put(`${Host.BACKEND}${ApiEndpoints.Notifications.route}${ApiEndpoints.Notifications.seen}/${id}`, data, { headers: { ...config.headers, ...token } })
}

const deleteApi = async (id, token) => {
   return await axios.delete(`${Host.BACKEND}${ApiEndpoints.Notifications.route}${ApiEndpoints.Notifications.delete}/${id}`, { headers: { ...config.headers, ...token } })
}

export { getApi, createApi, seenApi, deleteApi, countApi }


