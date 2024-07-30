import { useState } from 'react'

function SocialMedia() {
    return (
        <div className='d-flex gap-2 mt-3 w-75'>
            <div className='icon-socialMedia border '>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-instagram"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <div className='icon-socialMedia border '>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-dark'>
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
        </div>
    );
}
function DescHome(){
    return(
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div>
                <h1 className='font-primary fw-semibold fs-3'>MY NAME IS</h1>
                <h2 className='fs-1 fw-bold'>HENDRI SETIADI DARMOKO</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam non nostrum quo laudantium. Eius tempora, est excepturi velit tenetur sequi animi ratione culpa facere. Vitae inventore perferendis dignissimos id totam!</p>
                <SocialMedia/>
                <a href="#" className='btn btn-custom mt-3 rounded-4 fw-semibold mt-4'>Read More</a>
            </div>
        </div>
    )
}

export default DescHome