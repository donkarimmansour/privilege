const Host = {
  ROOT: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://app.centreprivilege.com",
  PREFIX: "/v1/api",
  BACKEND: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3001" : "https://api.centreprivilege.com",
}
 
const ApiEndpoints = {
 
  Auth: { 
    route: `${Host.PREFIX}/auth`, 
    signin: `/signin`, 
    forgot: `/forgot-password`, 
    me: `/me`, 
  },

  Teachers: { 
    route: `${Host.PREFIX}/teachers`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
    image: `/image` ,
    profileEdit: `/profileEdit`, 
  },

  Students: { 
    route: `${Host.PREFIX}/students`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    archivedCount: `/archivedCount`, 
    count: `/count`, 
    archivedList: `/archivedList`, 
    list: `/list`, 
    image: `/image`, 
    profileEdit: `/profileEdit`, 

  },

  Admins : { 
    route: `${Host.PREFIX}/admins`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
    image: `/image`, 
    profileEdit: `/profileEdit`, 

  },

  
  Groupes: { 
    route: `${Host.PREFIX}/groupes`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },


  
  Levels: { 
    route: `${Host.PREFIX}/levels`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  Notifications: { 
    route: `${Host.PREFIX}/notifications`, 
    list: `/list`, 
    create: `/create`, 
    delete: `/delete`, 
    seen: `/seen`, 
    count: `/count`,  
  },

  Cancelations: { 
    route: `${Host.PREFIX}/cancelations`, 
    list: `/list`, 
    create: `/create`, 
    delete: `/delete`, 
    edit: `/edit`, 
    count: `/count`,  
  }, 

  Blocks: { 
    route: `${Host.PREFIX}/blocks`, 
    list: `/list`, 
    create: `/create`, 
    delete: `/delete`, 
    edit: `/edit`, 
    count: `/count`,  
  }, 

  Bills: { 
    route: `${Host.PREFIX}/bills`, 
    list: `/list`, 
    count: `/count`, 
    create: `/create`, 
    delete: `/delete`, 
    edit: `/edit`, 
  },


  
  Department: { 
    route: `${Host.PREFIX}/department`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },

  Languages: { 
    route: `${Host.PREFIX}/languages`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
    image: `/image` ,
  },

  Exam: { 
    route: `${Host.PREFIX}/exam`, 
    create: `/create`, 
    list: `/list`, 
  },

  Smtp: { 
    route: `${Host.PREFIX}/smtp`, 
    edit: `/edit`, 
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

  User: { 
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    edit: `/edit`,
    image: `/image`,
    me: `/me`,

  },

};
 
export {ApiEndpoints , Host}