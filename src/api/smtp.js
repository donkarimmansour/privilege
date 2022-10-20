import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    }     
}


const editApi = async (id , data , token) => {
   return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Smtp.route}${ApiEndpoints.Smtp.edit}/${id}` , data , {headers : {...config.headers , ...token}})
}
 
 const getApi = async (token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Smtp.route}${ApiEndpoints.Smtp.list}` , {headers : {...config.headers , ...token}} )
 }


export {editApi  , getApi }


