import React from 'react';
import photoProf from "../assets/foto-2.png";
function Porto() {
    return (
        <div className="container my-5">
            <h1 className="fs-1 fw-bolder text-center ">KOLEKSI <span className="font-primary">PORTOFOLIO</span></h1>
            <div className='mt-4'>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-3 rounded-4 card-porto" >
                            <img src={photoProf} className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Project </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className='btn btn-custom rounded-4 fw-semibold w-100 p-1 border-1 border-danger'>Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-3 rounded-4 card-porto" >
                            <img src={photoProf} className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Project </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className='btn btn-custom rounded-4 fw-semibold w-100 p-1'>Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card border-3 rounded-4 card-porto" >
                            <img src={photoProf} className="card-img-top" alt="Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Project </h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className='btn btn-custom rounded-4 fw-semibold w-100 p-1'>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
}

export default Porto;
