
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
   

  return (
    <>
    <div className={`flex justify-between p-6 gap-4  `}>

    <ul className='flex gap-4 justify-between flex-2'>
        <li><Link to="/" className=' text-white' >Home</Link></li>
        <li><Link to="/about"  className=' text-white'>about</Link></li>
        <li><Link to="/services" className=' text-white'>services</Link></li>
        <li><Link to="/contact" className=' text-white'>contact    </Link></li>
    </ul>
    <h3 className='flex-1 flex justify-center  text-white'>METEORA</h3>
    <ul className='flex gap-4 justify-between flex-2'>
        <li><Link to="/" className=' text-white'>Galaxies</Link></li>
        <li><Link to="/about" className=' text-white'>Solar System</Link></li>
        <li><Link to="/services" className=' text-white'>Earth</Link></li>
    </ul>

    </div>
    
    </>
  )
}
