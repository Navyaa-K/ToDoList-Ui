import React from 'react'
import { Nav } from './Nav'

export const Search = () => {
  return (
    <div 
     style={{
        backgroundImage: 'url("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y1NDZiYXRjaDMtbXludC0zMS1iYWRnZXdhdGVyY29sb3JfMS5qcGc.jpg")',
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
                             <labe className="form-label"><b>title</b></labe>
                                <input type="text" className="form-control" />
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
