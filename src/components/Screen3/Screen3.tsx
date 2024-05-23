import React from 'react'
import './Screen3.css'
import sofaa from '../assets/sofaa.jpeg'
import chair from '../assets/chair.jpeg'
import table from '../assets/table.jpeg'
import MediaCard from '../Card/Card'


const Screen3 = () => {
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
        <div>
            
    <div className='EYLR'>
        <h1>All Products</h1>

        <div>
        <MediaCard cardDetails ={cardDetails}/>
        </div>

    </div>
    <div className='EYLR'>

        <div>
        <MediaCard cardDetails ={cardDetails}/>
        </div>

    </div>
    <div className='EYLR'>
        <div>
        <MediaCard cardDetails ={cardDetails}/>
        </div>

    </div>
        </div>
  )
}

export default Screen3
