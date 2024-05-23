import React from 'react'
import './smallcards.css'

const SmallCards = (props:any) => {
  return (
    <div style={        {
        gap:'5px',
            display: 'flex',
            fontWeight: 500,
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px #302f2f',
            borderRadius: '1px',
            padding: '5px 10px',marginRight:'20px'

        }    }>
      <img src={props.image} alt={props.title} width={30} height={30}/>
      <p>{props.title}</p>
    </div>
  )
}

export default SmallCards
