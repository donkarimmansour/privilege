import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
      
}
const createApi = async (data , token) => {
   return  await axios.post(`${Host.BACKEND}${ApiEndpoints.Exam.route}${ApiEndpoints.Exam.create}` , data , {headers : {...config.headers , ...token}})
}
 
 const getApi = async (filter , token) => {
    return  await axios.get(`${Host.BACKEND}${ApiEndpoints.Exam.route}${ApiEndpoints.Exam.list}` , {headers : {...config.headers , ...token} , params : filter} )
 }


export {createApi  , getApi }


