import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const editApi = async (data) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.User.route}${ApiEndpoints.User.edit}` , data , {headers : {...config.headers}})
}
 
 const getApi = async (filter , token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.User.route}${ApiEndpoints.User.list}` , {headers : {...config.headers , ...token} , params : filter} )
 }


export {editApi  , getApi }


