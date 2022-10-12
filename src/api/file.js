import axios from "axios"
import {Host , ApiEndpoints} from "../common/apiEndPoints"

const config = {
    headers : {
       "Content-Type" : "multipart/form-data" 
    }  
}

const CreateSingleFile = async (data , token) => {
  return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.File.route}${ApiEndpoints.File.createSingleFile}`  , data , { headers :  {...config.headers , ...token } })
}  


export {
  CreateSingleFile
}