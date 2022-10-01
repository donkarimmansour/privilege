
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

  Payments: { 
    route: `${Host.PREFIX}/payments`, 
    create: `/create`, 
    edit: `/edit`, 
    delete: `/delete`, 
    count: `/count`, 
    list: `/list`, 
  },
 

};
 
export {ApiEndpoints , Host}