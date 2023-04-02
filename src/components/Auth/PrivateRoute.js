import { useSelector } from "react-redux"
import { Navigate  } from "react-router-dom"

const PrivateRoute  = ({children}) => {
  const { isLoggedIn , user } = useSelector(state => state.auth) 


  return ( isLoggedIn ?  user.role !== "student" ? <> { children } </> 
  : user.tested !== "no"  ? <> { children } </>  : <Navigate to="/test" />
  : <Navigate to="/login" /> )

}

export default PrivateRoute 