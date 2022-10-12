import { ApiEndpoints, Host } from "../common/apiEndPoints"


//ImageLink
const ImageVIEW = (img) => {
    return `${Host.BACKEND}${ApiEndpoints.File.route}${ApiEndpoints.File.getSingleFileView}/${img}/view`
}

const ImageDOWNLOAD = (img) => {
    return `${Host.BACKEND}${ApiEndpoints.File.route}${ApiEndpoints.File.getSingleFileDownload}/${img}/download`
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

const removeSiblingsClass = (el , classe) => {
    [...el.parentElement.children].forEach(sib => sib.classList.remove(classe))
}

const checkString = msg => typeof msg == "string" ? msg : msg[0]

const loader = () => <div className="loading"> <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="loading"> <span className="sr-only">Loading...</span> </div> </div>

export { ImageVIEW  , ImageDOWNLOAD  , extractDesk  , makeId , removeSiblingsClass , checkString , loader}  