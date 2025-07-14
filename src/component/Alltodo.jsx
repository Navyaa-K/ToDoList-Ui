import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const Alltodo = () => {
  const [data, changeData] = useState(
    { "todos": [], "total": 254, "skip": 0, "limit": 30 }
  )

  const fetchData=()=>{
    axios.get("https://dummyjson.com/todos").then(
      (response)=>{changeData(response.data)}
    ).catch()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rv1CSYjEen1wphdT7rN_swSlsMEA0Fal2Q&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}

    >
      <Nav />
      <div className="container-fluid ">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

              {
                data.todos.map(
                  (value, index) => {
                    return (
                      <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card" >
                          <div class="card-header">UserId:{value.userId}</div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id:{value.id}</li>
                            <li class="list-group-item">Title:{value.title}</li>
                            <li class="list-group-item">Completed:{value.completed ? "True" : "False"}</li>
                          </ul>
                        </div>
                      </div>
                    )
                  })}

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
