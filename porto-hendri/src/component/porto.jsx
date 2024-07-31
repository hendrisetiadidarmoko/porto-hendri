import React, { useState, useEffect } from 'react';
import axios from 'axios';
import photoProf from "../assets/foto-2.png";

function Porto() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/experiences')
            .then(response => {
                console.log(response.data); // Debug: Log the API response
                setExperiences(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the experiences!', error);
            });
    }, []);

    return (
        <div className="container my-5">
            <h1 className="fs-1 fw-bolder text-center">KOLEKSI <span className="font-primary">PORTOFOLIO</span></h1>
            <div className='mt-4'>
                <div className="row">
                    {experiences.map(experience => (
                        <div className="col-md-6 col-xl-4 mb-4" key={experience.id}>
                            <div className="card border-3 rounded-4 card-porto">
                                <img
                                    src={experience.image ? `http://localhost:3000/${experience.image}` : photoProf}
                                    className="card-img-top"
                                    alt={experience.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{experience.title}</h5>
                                    <div className='d-flex gap-2 my-4'>
                                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience ">{experience.job}</p>
                                        <p className="card-text  border-2 rounded-3 py-2 px-3 experience ">{experience.technology}</p>
                                    </div>
                                    
                                    
                                    <a href={experience.githubLink} className='btn btn-custom rounded-4 fw-semibold w-100 p-1' target="_blank" rel="noopener noreferrer">Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Porto;
