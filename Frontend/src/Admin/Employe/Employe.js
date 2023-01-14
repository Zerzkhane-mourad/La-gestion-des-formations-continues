import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import axios from 'axios'
import toastr from 'toastr';
import "toastr/build/toastr.css"




function Employe() {

    
    const closeModal = () => {
        return 'modal'
    }

    const [data, setData] = useState([])
    const fetchEmploye = () => {
        axios.get(`${API_URL}/user/users`)

            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
    }

    useEffect(() => {
        fetchEmploye()
    }, [])


    const [employe, setEmploye] = useState([])
    const handleChange = (e) => {
        setEmploye({ ...employe, [e.target.id]: e.target.value })

    }


    const addEmploye = e => {

        e.preventDefault();

        axios.post(`${API_URL}/user/createuser`, employe)
            .then(() => {      
                toastr.success('Creteded succefully !')
                fetchEmploye()
                closeModal()
            })
            .catch(error => {
                if (error.response) {
                    toastr.warning(error.response.data.error, 'Please chek Form !')
                }
            })

    }
    
    const [organisme, setOrganisme] = useState([]);
    const fetchOrganisme = () => {
        axios.get(`${API_URL}/organisme/organismes`)
        .then((response)=>{
            setOrganisme(response.data)
        })
      }
    
    useEffect(() => {
        fetchOrganisme()
    }, [])


    const [showDataUser, setShowDataUser] = useState([])

    
    const onChangeEdite = (e) => {
        setShowDataUser({...showDataUser, [e.target.name]: e.target.value})
    }


    const editeDataUser = () => {
     axios.put(`${API_URL}/user/${showDataUser._id}`, showDataUser)
        .then(response => {
            console.log(response)
            fetchEmploye()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteUser = (id) => {
        
        axios.delete(`${API_URL}/user/${id}`)
        .then((response) => {
            
            fetchEmploye()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (

        <div className="container-fuildcol">
            <div className="d-flex flex-row justify-content-between align-items-center  pt-2">
                <div className="mx-4">
                    <h3><strong>Liste des Employes</strong></h3>
                </div>
                <div className="d-flex flex-row ">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Creér nouveau formation
                    </button>
                </div>
            </div>
            <div className="tab table-responsive me-4 ml-1 md-5 pt-2 mt-2">
                <table className="table">
                    <thead className=" bgh">
                        <tr>
                            <th>username</th>
                            <th>email</th>
                            <th>Organisme</th>
                            <th>confirmed</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((user, index) => (

                            <tr key={index} className="align-middle">
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.organisme.address}</td>
                                <td>{user._id}</td>
                                <td className="d-flex flex-row ">
                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => setShowDataUser(user)} className="btn btn-sm btn-warning me-3"><i className="fa fa-edit"></i></button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteUser(user._id)}><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={addEmploye} className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Username</b></label>
                                    </div>
                                    <input onChange={handleChange} id="username" type="text" className="form-control rounded-0 border-dark" name="username" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Organisme</b></label>
                                    </div>
                                    <select onChange={handleChange} className='form-select' id="organisme" name="organisme">
                                        {organisme.map((organisme) => (
                                            <option className='form-control' value={organisme._id}>{organisme.name}</option>
                                        ))}
                                    </select>

                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Email</b></label>
                                    </div>
                                    <input onChange={handleChange} id="email" type="email" className="form-control rounded-0 border-dark" name="email" />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Password</b></label>
                                    </div>
                                    <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="password" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" value="Submit" data-bs-dismiss={closeModal}  className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>CREER FORMATION</b>
                                    </button>
                                </div>
                                {JSON.stringify(employe)}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form  className="needs-validation">
                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Username</b></label>
                                    </div>
                                    <input  id="username" type="text" onChange={onChangeEdite} className="form-control rounded-0 border-dark" name="username" value={showDataUser.username} />
                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Organisme</b></label>
                                    </div>
                                    <select className='form-select' id="organisme" name="organisme">
                                        {organisme.map((organisme) => (
                                            <option className='form-control' value={organisme._id}>{organisme.name}</option>
                                        ))}
                                    </select>

                                </div>

                                <div className="mb-2">
                                    <div className="w-100">
                                        <label className="fonts"><b>Email</b></label>
                                    </div>
                                    <input  id="email" type="email" onChange={onChangeEdite}  className="form-control rounded-0 border-dark" value={showDataUser.email} name="email" />
                                </div>


                                <div className="d-flex align-items-center fonts pb-3 mt-4">

                                    <button type="submit" onClick={editeDataUser} value="Submit" className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                                        <b>Modifier Employe</b>
                                    </button>
                                </div>
                                {JSON.stringify(employe)}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Employe