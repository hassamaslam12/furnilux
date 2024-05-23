import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import './Screen4.css'
import bed from '../assets/bed1.png'
import SmallCards from '../smallcards/SmallCards'

const Screen4 = () => {
  return (
    <div className='e2'>
        <div className='e3'>
            <p style={{
                fontWeight:600
            }}>
                "Incredibly happy with my new sofa!<br/>Stylish, Comfortableand exceeded <br/>my expectations. Seamless purchase and<br/> promt delivery. Highly recommended!"
            </p>
            <p>Maria Isabell</p>

            <div style={{
                display:'flex',
                backgroundColor:'#FFFFFF',
                width:250
            }}>
                <div>
                    <img src={bed} alt="" width={80}/>
                </div>
                <div style={{
                    paddingLeft:10
                }}>
                    <p>
                        Stylish bed
                <br/>
                        $99
                    <br/>
                    Rating: 4.5/5
                    </p>
                </div>
            </div>

        </div>
        <div className="image">
          <img src={bed} alt="" width={400}/>
        </div>
    </div>
  )
}

export default Screen4
