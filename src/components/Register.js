import React from 'react'
import Layoutpage from '../layout/Layoutpage'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Layoutpage>
             
  <section style={{marginTop:"80px"}} className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Welcom to Bilal Brands...</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                 
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input  type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example8">Address</label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example8">City</label>
                </div>
                
                <div className="form-outline mb-4">
                  <input  type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example9">Phone</label>
                </div>
                <div className="form-outline mb-4">
                  <input  type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example90">WhatsApp</label>
                </div>
                <div className="form-outline mb-4">
                  <input  type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example99">Email ID</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">password</label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  
                  <Link type="button" className="btn btn-warning btn-lg ms-2">Submit form</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </Layoutpage>
  )
}

export default Register
