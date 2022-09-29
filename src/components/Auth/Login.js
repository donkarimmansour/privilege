import react from 'react'
import { Link } from 'react-router-dom'



const Login = () => {


    return (
        <>
            <div className="auth option2">
        <div className="auth_left">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
                <div className="card-title mt-3">Login to your account</div>
                <button type="button" className="btn btn-facebook"><i className="fa fa-facebook mr-2" />Facebook</button>
                <button type="button" className="btn btn-google"><i className="fa fa-google mr-2" />Google</button>
                <h6 className="mt-3 mb-3">Or</h6>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label className="form-label"><Link to="/forgotpassword" className="float-right small">I forgot password</Link></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <a href="index.html" className="btn btn-primary btn-block" >Sign in</a>
                <div className="text-muted mt-4">Don't have account yet? <Link to="/register">Sign up</Link></div>
              </div>
            </div>
          </div>        
        </div>
      </div>
        </>
    )

}

export default Login