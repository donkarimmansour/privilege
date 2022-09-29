import react from 'react'
import { Link } from 'react-router-dom'



const ForgotPassword = () => {


    return (
        <>
<div className="auth option2"> 
        <div className="auth_left">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
                <div className="card-title">Forgot password</div>
              </div>
              <p className="text-muted">Enter your email address and your password will be reset and emailed to you.</p>
              <div className="form-group">
                <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block">Send me new password</button>
                <div className="text-muted mt-4">Forget it, <Link to="/login">Send me Back</Link> to the Sign in screen.</div>
              </div>
            </div>
          </div>        
        </div>
      </div>
        </>
    )

}

export default ForgotPassword