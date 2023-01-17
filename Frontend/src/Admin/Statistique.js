import React, { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../config'

function Statistique() {

    const [statistique , setStaistique] = useState([])
    axios.get(`${API_URL}/user/statistique`)
    .then((response)=>{
        setStaistique(response.data)
    })


    return (

            <div className="col-md-10 mt-4 container">
                <div className="row ">
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="card shadow-lg p-3 bg-success mb-5 bg-body rounded l-bg-cherry p-2">
                            <div className="card-statistic-3 ">
                                <div className="card-icon text-white card-icon-large"><span className=" fs-2 fa fa-users"></span></div>
                                <div className="mb-4">
                                    <h5 className="card-title text-white mt-1 mb-0">Employes</h5>
                                </div>
                                <div className="row align-items-end ms-5 ps-5  d-flex">
                                    <div className="col-8 ms-5 ps-5">
                                        <h2 className="d-flex text-white align-items-center ms-3 pt-2 mb-0">
                                            <b>{statistique.user}</b>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 " >
                        <div className="card shadow-lg p-3 mb-5 bg-primary rounded bgh l-bg-blue-dark p-2">
                            <div className="card-statistic-3">
                                <div className="card-icon text-white card-icon-large"><span className="fs-2 fa fa-graduation-cap"></span></div>
                                <div className="mb-4">
                                    <h5 className="card-title text-white mt-1 mb-0">Organismes</h5>
                                </div>
                                <div className="row align-items-end ms-5 ps-5  d-flex">
                                    <div className="col-8 ms-5 ps-5">
                                        <h2 className="d-flex text-white align-items-center ms-3 pt-2 mb-0">
                                            <b>{statistique.organisme}</b>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 ">
                        <div className="card bg-info shadow-lg p-3 mb-5 bg-body rounded bgh l-bg-green-dark p-2" style={{backgroundColor: '#a0aed9'}}>
                            <div className="card-statistic-3">
                                <div className="card-icon text-white card-icon-large"><span className="fs-2 fa fa-book"></span></div>
                                <div className="mb-4">
                                    <h5 className="card-title text-white  mt-1 mb-0">Formations</h5>
                                </div>
                                <div className="row align-items-end ms-5 ps-5  d-flex">
                                    <div className="col-8 ms-5 ps-5">
                                        <h2 className="d-flex text-white align-items-center ms-3 pt-2 mb-0">
                                            <b>{statistique.formation}</b>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Statistique