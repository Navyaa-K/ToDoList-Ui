import React from 'react'
import { Nav } from './Nav'

export const Addlist = () => {
    return (
        <div
        style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-1405717-2736499.jpg&fm=jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
        
        >
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <labe className="form-label"><b>Id</b></labe>
                                <input type="text" className="form-control" />
                            </div>
                           <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <labe className="form-label"><b>UserId</b></labe>
                                <input type="text" className="form-control" />
                            </div>
                          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <labe className="form-label"><b>title</b></labe>
                                <input type="text" className="form-control" />
                            </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                
                                    <label htmlFor="" className="form-label"><b>Completed</b></label><br></br>
                                        <input type="checkbox" id="" name="" value="Car"/>
                                            <label for="vehicle2"> <b>false</b>  </label>   <input type="checkbox" id="" name="" value=""/>
                                    <label for=""><b>True </b>  </label><br/>

                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <button className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
}
