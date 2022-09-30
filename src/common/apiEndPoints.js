
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
 

};
 
export {ApiEndpoints , Host}