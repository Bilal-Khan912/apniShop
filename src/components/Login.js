import React from 'react'
import Layoutpage from '../layout/Layoutpage'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../CSS/login.css'
const Login = () => {
  return (
    <Layoutpage>
       
     
       <section style={{marginTop:"80px"}} className="vh-100 mb-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <FaFacebookSquare />
            </button>
            <button type="" className="btn btn-primary btn-floating mx-1">
            <ImGoogle2/>
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <FaTwitterSquare/>
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
                <FaLinkedin/>
            </button>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/reg" className="link-danger">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  </div>

</section>



    </Layoutpage>
  )
}

export default Login
