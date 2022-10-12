import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const signinUserApi = async (data) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.signin}` , data , config)
}
 
 const forgotPasswordApi = async (data) => { 
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.forgot}` , data , config)
 }


 
const getMeApi = async (token) => {
   return  await  axios.get(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.me}`  ,  { headers :  {...config.headers , ...token } })
}  
 


export {signinUserApi  , forgotPasswordApi , getMeApi}


