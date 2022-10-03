
const Host = {
  ROOT: "http://localhost:3000",
  BACKEND: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:3005" : "https://api.cheap-shop.net" ,
  PREFIX: "/v1/api",  
};
 
const ApiEndpoints = {
 
  Auth: { 
    route: `${Host.PREFIX}/user`, 
    signup: `/signup`, 
    signin: `/signin`, 
    forgot: `/forgot-password`, 
    reset: `/reset-password`, 
    me: `/me`, 
  },

  Professors: { 
    route: `${Host.PREFIX}/professors`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  Students: { 
    route: `${Host.PREFIX}/students`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  
  Department: { 
    route: `${Host.PREFIX}/department`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  Course: { 
    route: `${Host.PREFIX}/course`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  Exam: { 
    route: `${Host.PREFIX}/exam`, 
    create: `/create`, 
    list: `/list`, 
  },

  Library: { 
    route: `${Host.PREFIX}/library`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },


  Payments: { 
    route: `${Host.PREFIX}/payments`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },
 
  Chat: { 
    route: `${Host.PREFIX}/chat`, 
    getOnline: `/get-online`, 
    sendMessage: `/send-message`, 
    getMessage: `/get-message`, 
    imageMessageSend: `/image-message-send` 
  },

  File: {
    route: `${Host.PREFIX}/file`,
    getSingleFileView: `/get-single-file`,
    getSingleFileDownload: `/get-single-file`,
    createSingleFile: `/create-single-file`,
  },

  // User: { 
  //   route: `${Host.PREFIX}/user`,
  //   create:`/create`, 
  //   list: `/list`,
  //   login: `/login`,
  //   forgot: `/forgot-password`,
  //   confirm: `/confirm-email`,
  //   edit: `/edit`,
  //   address: `/address`,
  //   image: `/image`,
  //   me: `/me`,
  //   suspension:`/suspension`,
  //   count: `/count`,
  //   rule: `/rule`,

  // },

};
 
export {ApiEndpoints , Host}