import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import './Screen2.css'
import bed from '../assets/bed1.png'

const Screen2 = () => {
  return (
    <div className='s2'>
        <div className='s3'>
            <h1>
                Luxurious Bed
            </h1>
            <p>Discover unparalleled comfort with<br/> our Luxurious brand, elegant design,<br/> Plush comfort</p>
            <b>$299</b>

            <div className='colorOpts'>
              <div className="circle yellow">
              </div>
              <div className="circle green">
                </div>
                <div className="circle blue">
                </div>
            </div>
            <button>Buy Now <ArrowForwardIcon /></button>
        </div>
        <div className="image">
          <img src={bed} alt="" width={400}/>
        </div>
    </div>
  )
}

export default Screen2
