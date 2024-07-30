import Home from './component/home'
import About from './component/about'
import Porto from './component/porto'
import Navbar from './component/navbar'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className='container  '>
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/porto" element={<Porto />} />
        </Routes>
      </div>
      
      <Navbar />
    </div>
  )
}

export default App
