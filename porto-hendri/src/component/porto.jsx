import React, { useState, useEffect } from 'react';
import axios from 'axios';
import photoProf from "../assets/foto-2.png";
import ecoprint from '../assets/ecoprint.png';
import farms from '../assets/farms.png';
import oleh_banyumas from '../assets/Oleh-oleh_Banyumas.png';
import image from '../assets/image.png';

function Porto() {
    return (
        <div className="container my-5">
            <h1 className="fs-1 fw-bolder text-center">KOLEKSI <span className="font-primary">PORTOFOLIO</span></h1>
            <div className='mt-4'>
                <div className="row">
                <div className="col-md-6 col-xl-4 mb-4" >
                            <div className="card border-3 rounded-4 card-porto h-100 ">
                                <img
                                    src={ecoprint}
                                    className="card-img-top"
                                    
                                />
                                <div className="card-body d-flex align-content-between flex-wrap">
                                    <div>
                                        <h5 className="card-title">Ecoprint</h5>
                                        <p>Pada proyek website Ecoprint, saya bertanggung jawab mengembangkan backend untuk mengelola yang efisien serta database yang dioptimalkan.</p>
                                        <div className='d-flex gap-2 my-4'>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">laravel</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Css</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Javascript</p>
                                        </div>
                                    </div>
                                    
                                    <a href="https://gitlab.com/luthfiah/ecoprint-mm3-pw2324" className='btn btn-custom rounded-4 fw-semibold w-100 p-1' target="_blank" rel="noopener noreferrer">Gitlab</a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-xl-4 mb-4" >
                            <div className="card border-3 rounded-4 card-porto h-100">
                                <img
                                    src={farms}
                                    className="card-img-top"
                                    
                                />
                                <div className="card-body d-flex align-content-between flex-wrap">
                                    <div>
                                        <h5 className="card-title">Farms App</h5>
                                        <p>Pada proyek website Farms App, saya bertanggung jawab mengembangkan suatu fitur untuk mengelola kategori</p>
                                        <div className='d-flex gap-2 my-4'>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Laravel</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Livewire</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Css</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Javascript</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Bootstrap</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <a href="https://gitlab.com/luthfiah/ecoprint-mm3-pw2324" className='btn btn-custom rounded-4 fw-semibold w-100 p-1' target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mb-4" >
                            <div className="card border-3 rounded-4 card-porto h-100">
                                <img
                                    src={oleh_banyumas}
                                    className="card-img-top"
                                    
                                />
                                <div className="card-body d-flex align-content-between flex-wrap">
                                    <div>
                                        <h5 className="card-title">Oleh-oleh Banyumas App</h5>
                                        <p>Pada proyek website Oleh-oleh Banyumas App, saya bertanggung jawab sebagai frontend dalam project ini</p>
                                        <div className='d-flex gap-2 my-4'>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Laravel</p>
                                            
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">CSS</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Javascript</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Bootstrap</p>
                                        </div>
                                    </div>
                                    <a href="https://gitlab.com/luthfiah/ecoprint-mm3-pw2324" className='btn btn-custom rounded-4 fw-semibold w-100 p-1' target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mb-4" >
                            <div className="card border-3 rounded-4 card-porto h-100">
                                <img
                                    src={image}
                                    className="card-img-top"
                                    
                                />
                                <div className="card-body d-flex align-content-between flex-wrap">
                                    <div>
                                        <h5 className="card-title">Edutur</h5>
                                        <p>Pada proyek website Edutur, saya bertanggung jawab sebagai fullstack dalam project ini</p>
                                        <div className='d-flex gap-2 my-4'>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">PHP</p>      
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">CSS</p>
                                            <p className="card-text  border-2 rounded-3 py-2 px-3 experience fw-bold">Javascript</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <a href="https://github.com/bagasly/Flawless_Cultural-Narative/tree/main" className='btn btn-custom rounded-4 fw-semibold w-100 p-1' target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Porto;
