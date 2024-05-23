import React from 'react'
import './Home.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmallCards from '../smallcards/SmallCards';
import sofa from '../assets/sofa.jpg'
import Bed1 from '../assets/bed1.png'
import sofaa from '../assets/sofaa.jpeg'
import chair from '../assets/chair.jpeg'
import table from '../assets/table.jpeg'

const Home = () => {
  return (
      <>
    <main style={{
        position:'relative'
    }}>
        <div>

        <h1>FurniLux - Your Brand</h1>
        <h1 className='right3'>for Stylish Living</h1>
        </div>

        <div>
            <p>Discover a fusion of modern design and functionality,crafted to elevate every</p>
            <p className='right3'>corner of your living space, Furnilux, redifining stylish living for you.</p>
        </div>

        <div className="btn">
            <button>Shop Now <ArrowForwardIcon /></button>
        </div>
        <div style={{
        position:'absolute',
        bottom:'-10px',
        display: 'flex',
        
    }}>

        <SmallCards image={sofa} title='Sofa'/>
        <SmallCards image={Bed1} title='Bed'/>
        <SmallCards image={chair} title='chair'/>
        <SmallCards image={table} title='table'/>
        <SmallCards image={sofaa} title='Sofaa'/>
        <SmallCards image={sofa} title='Sofa'/>
    </div>
    </main>
   
      </>
  )
}

export default Home
