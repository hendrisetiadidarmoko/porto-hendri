import { useState } from 'react'

function SocialMedia() {
    return (
        <div className='d-flex gap-2 mt-3 w-75'>
            <div className='icon-socialMedia border '>
                <a href="https://www.instagram.com/hendri_darmoko/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://github.com/hendrisetiadidarmoko" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://www.linkedin.com/in/hendri-setiadi-darmoko-466850257/" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hendrisetiadi3030@gmail.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-envelope"></i>
                </a>
            </div>
        </div>
    );
}
function DescHome(){
    return(
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div>
                <h1 className='fw-semibold fs-4'>Hello, saya </h1>
                <h2 className='fs-1 fw-bold '><span className='font-primary'>HENDRI SETIADI DARMOKO</span>,</h2>
                <h2 className='fs-4 fw-bold '>Web Developer</h2>
                <SocialMedia/>
                <a href="/about" className='btn btn-custom mt-3 rounded-4 fw-semibold mt-4'>Read More</a>
            </div>
        </div>
    )
}

export default DescHome