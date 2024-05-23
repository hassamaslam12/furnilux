import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bgc'>
        <div className="container footer">
            <div className="row">
                <div className="col-md-2">
                  <h2>Furnilux</h2>
                    <p>+12986401</p>
                    <p>FURNILUX@MAILBOX.COM</p>
                    <p>123 homeland, Cleeve land, London</p>
                </div>
                <div className="col-md-2">
                    <h2>About Us</h2>
                    <ul>
                    <li>

                    <a href="">About us</a>
                    </li>
                    <li>

                    <a href="">Blog</a>
                    </li>
                    <li>

                    <a href="">Contact us</a>
                    </li>
                    <li>

                    <a href="">popular question</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h2>What's popular</h2>
                    <ul>
                    <li>

                    <a href="">King size bed</a>
                    </li>
                    <li>

                    <a href="">sofa</a>
                    </li>
                    <li>

                    <a href="">Chairs</a>
                    </li>
                    <li>

                    <a href="">Decorative lamps</a>
                    </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Get 15% off your first order</h2>
                    <p>Subscribe our newsletter for latest updates discount and much more.</p>
                    <div className='inputDiv'>
                        <input type="text" placeholder='Email Adress' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
