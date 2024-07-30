
import photoProf from "../assets/foto-2.png";
import DescHome from './DescHome'

function PhotoProfile(){
    return(
        <img src={photoProf} alt="foto hendri" className='w-100 h-100 object-fit-cover'/>
    )
}

function Home(){
    return (
        <div className='row'>
            <div className='col-6'>
                <div className='text-center'>
                    <PhotoProfile/>

                </div>
            </div>
            <div className='col-6'>
                <DescHome/>
            </div>
        </div>
    )
}

export default Home