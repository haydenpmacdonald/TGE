import React from 'react'
import './ServiceSquares.css'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const ServiceSquares = () => {
    return (

        <div className='service--squares--container'>
            <div className='services--top'>
              <div className='left'>
                <ul>
                    <h1 data-aos="fade-in" className='services--header--text'>Offered Services</h1>
                    <li data-aos="fade-right" className='services--text--block'><Image className='verified--svg' src='images/verified.svg'></Image>Window Repair/Replacement</li>
                    <li data-aos="fade-right" className='services--text--block'><Image className='verified--svg' src='images/verified.svg'></Image>Custom Shower Glass</li>
                    <li data-aos="fade-right" className='services--text--block'><Image className='verified--svg' src='images/verified.svg'></Image>Hinge & Pivots</li>
                    <li data-aos="fade-right" className='services--text--block'><Image className='verified--svg' src='images/verified.svg'></Image>Handles & Locks</li>
                    <li data-aos="fade-right" className='services--text--block'><Image className='verified--svg' src='images/verified.svg'></Image>Bathroom Mirrors</li>
                </ul>
                
              </div>
              <div className='right'>
                  <Image data-aos="fade-left" className='location--image' src='images/tge--location.png'></Image>
              </div>
            </div>
            <div className='service--squares--top'>
                <div className='service--squares--left--text'>
                    <p data-aos="fade-in">From pick-up services to flexible scheduling, we want your glass replacement or repair service to be a convenient, fast, and stress-free experience.</p>
                    <Link to='/projects'>
                        <button className='service--squares--button' data-aos="fade-in">VIEW PROJECTS</button>
                    </Link>
                </div>
                <div className='service--squares--right--image'><Image className='service--squares--image' src='https://images.unsplash.com/photo-1615322146380-7726d0c281ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80' ></Image></div>
            </div>
            <div className='service--squares--bottom'>
                <div className='service--squares--left--image'><Image className='service--squares--image' src='https://images.unsplash.com/photo-1613688684111-5c197974be20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' ></Image></div>
                <div className='service--squares--right--text'>
                    <p data-aos="fade-in">When you need glass repair or replacement in the Vancouver, or Lower Mainland area, Total Glass Effects can solve every problem for your house, or business. 
                        In order to provide a wide range of glass solutions for residential and commercial properties, we take care of all types of glass repairs and replacements with mobile services. </p>
                    <Link to='/contact'>
                        <button className='service--squares--button' data-aos="fade-in" >GET QUOTE</button>
                    </Link>
                    <br></br>
                    <br></br>
                    <p data-aos="fade-in">call now! <Image className='verified--svg' src='images/verified.svg'></Image></p>
                </div>
            </div>
        </div>

    )
}

export default ServiceSquares
