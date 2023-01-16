import React , {useEffect, useState}  from 'react'
import Navbar from '../core/Navbar'
import { isAunthenticated } from './../helpers/Auth'
import { API_URL } from '../config'
import axios from 'axios'



function EmployePage() {

    const [data, setData] = useState([])
    const FormationAsigned = () => {
        axios.get(`${API_URL}/formation/formationasigned`)
            .then((response) => {
                console.log(response.data)
                
            })
    }

    useEffect(() => {
        FormationAsigned()
    }, [])
    const { user } = isAunthenticated()
    return (
        <div>
            <Navbar />
            <header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Bonjour, {user.username}</h1>
                                <p className="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                                <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Our founding</h2>
                            <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
                        <div className="col-auto">
                            <a className="link-light small" href="#!">Privacy</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="#!">Terms</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default EmployePage