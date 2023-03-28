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


function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const checkRole = (role , type) => {
    if (type === "superAdmin") {
      return ["superAdmin"].includes(role)
    } else if (type === "admin") {
        return ["admin"].includes(role)
    } else if (type === "teacher") {
        return ["teacher"].includes(role)
    } else if (type === "student") {
        return ["student"].includes(role)
    } else if (type === "teacherOradminOrsuperAdmin") {
        return ["admin" , "superAdmin", "teacher"].includes(role)
    } else if (type === "adminOrsuperAdmin") {
        return ["superAdmin"].includes(role)
    } else if (type === "studentOrteacher") {
        return ["student" , "teacher"].includes(role)
    } else if (type === "all") {
        return ["teacher", "student", "admin", "superAdmin"].includes(role)
    }
}


export { ImageVIEW  , ImageDOWNLOAD  , extractDesk  , makeId , removeSiblingsClass , checkString , loader, getUniqueListBy, checkRole}  