import { ApiEndpoints, Host } from "../common/apiEndPoints"


//ImageLink
const ImageVIEW = (img) => {
    return `${Host.BACKEND}${ApiEndpoints.FileEndpoints.route}${ApiEndpoints.FileEndpoints.getSingleFileView}/${img}/view`
}

const ImageDOWNLOAD = (img) => {
    return `${Host.BACKEND}${ApiEndpoints.FileEndpoints.route}${ApiEndpoints.FileEndpoints.getSingleFileDownload}/${img}/download`
}



const extractDesk = (desk , length) => {
    if(desk.length > length){
         return desk.substr(0 , length) + "..."
    }else {
        return desk
    }
}

function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export { ImageVIEW  , ImageDOWNLOAD  , extractDesk  , makeId}  