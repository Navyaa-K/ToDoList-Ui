import React from 'react'
import { Nav } from './Nav'

export const Search = () => {
  return (
    <div 
     style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/06/f7/7e/06f77ea4683af86c14a7b36e9b5f639a.jpg")',
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
