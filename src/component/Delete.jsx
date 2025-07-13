import React from 'react'
import { Nav } from './Nav'

export const Delete = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("https://www.shutterstock.com/image-vector/collection-note-paper-do-list-600nw-2288989745.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }} 
    >
        <Nav />
        <div className="container">
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
