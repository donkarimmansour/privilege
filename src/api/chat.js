import axios from "axios"
import { ApiEndpoints, Host } from "../common/apiEndPoints"

const config = {
    Headers : {
       "Content-Type" : "application/json" 
    } 
    
}
 

const messageSendApi = async (data) => {
    return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.Chat.route}${ApiEndpoints.Chat.sendMessage}` , data , config)
}

const ImageMessageSendApi = async (data) => {
    return  await  axios.post(`${Host.BACKEND}${ApiEndpoints.Chat.route}${ApiEndpoints.Chat.imageMessageSend}` , data , config)
}


const getOnlineApi = async (authorization) => {
    return await axios.get(
      `${Host.BACKEND}${ApiEndpoints.Chat.route}${ApiEndpoints.Chat.getOnline}`, { headers: { ...config.headers , ...authorization } }
    );
};

const getMessageApi = async (p , id) => {
    return await axios.get(
      `${Host.BACKEND}${ApiEndpoints.Chat.route}${ApiEndpoints.Chat.getMessage}/${p}/${id}`, { headers: { ...config.headers } }
    );
};
  
 
export { getMessageApi , getOnlineApi , ImageMessageSendApi , messageSendApi }