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
 
const signupUserApi = async (data) => {
    return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.signup}` , data , config)
 }

 const forgotPasswordApi = async (data) => { 
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.forgot}` , data , config)
 }

 const resetPasswordApi = async (data , token) => {
    return  await axios.put(`${Host.BACKEND}${ApiEndpoints.Auth.route}${ApiEndpoints.Auth.reset}` , data , {headers : {...config.headers , ...token}} )
 }



export {signinUserApi , signupUserApi  , forgotPasswordApi , resetPasswordApi}


