import React from 'react'
import './Screen.css'
import MediaCard from '../Card/Card'
import sofaa from '../assets/sofaa.jpeg'
import chair from '../assets/chair.jpeg'
import table from '../assets/table.jpeg'

const Screen = () => {
  const cardDetails = [
    {
        CardImage:sofaa,
        CardTitle:'Comfortable Sofa',
        CardPrice:80.99
    },
    {
        CardImage:table,
        CardTitle:'Elegant side table',
        CardPrice:80.99
    },
    {
        CardImage:chair,
        CardTitle:'Classy padded Chair',
        CardPrice:80.99
    }
];
  
  return (
    <div className='EYLR'>
        <h1>Elevate Your Living Room</h1>
        <div>
            <MediaCard cardDetails ={cardDetails}/>
        </div>
    </div>
  )
}

export default Screen
