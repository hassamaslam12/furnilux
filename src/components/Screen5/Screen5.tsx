import React from 'react'
import './Screen5.css'
import sofaa from '../assets/sofaa.jpeg'

const Screen5 = () => {
  return (
    <div>
         <div className='el'>
        <h1>Blogs and Insights</h1>
        <p>Explore our blog for design inspiration and tips</p>
            <div style={{
                paddingTop:20,
                display: 'flex',
                gap:20
            }}>
                <div style={{
                    width:275,
                    textWrap:'revert',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <img src={sofaa} alt="" width={275}/>
                    <p style={{backgroundColor:'#FFFFff99',
                        position:'absolute',
                        bottom:0,
                        left:20,
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit quasi sapiente, aut asperiores beatae nesciunt doloribus odio tenetur exercitationem.
                    </p>
                </div>
                <div style={{
                    width:275,
                    textWrap:'revert',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <img src={sofaa} alt="" width={275}/>
                    <p style={{backgroundColor:'#FFFFff99',
                        position:'absolute',
                        bottom:0,
                        left:20,
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit quasi sapiente, aut asperiores beatae nesciunt doloribus odio tenetur exercitationem.
                    </p>
                </div>
                <div style={{
                    width:275,
                    textWrap:'revert',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <img src={sofaa} alt="" width={275}/>
                    <p style={{backgroundColor:'#FFFFff99',
                        position:'absolute',
                        bottom:0,
                        left:20,
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit quasi sapiente, aut asperiores beatae nesciunt doloribus odio tenetur exercitationem.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen5
