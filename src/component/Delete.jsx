import React from 'react'
import { Nav } from './Nav'

export const Delete = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("https://i.pinimg.com/1200x/8c/50/2b/8c502be29c145441739ff32d8d55fefe.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }} 
    >
        <Nav />
        <div className="container-fluid">
            <div className="row">
                <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label className="form-label"><b>title</b></label>
                                <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
