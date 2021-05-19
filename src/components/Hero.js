import React from 'react';
import './Hero.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




  document.body.className += ' js-loading';



window.addEventListener('load', showPage, false);

function showPage(){
  document.body.className = document.body.className.replace('js-loading', '');
}







const Hero = () => {

    return (
        <div>
            <section className='hero--section'>
                <div className='hero--overlay'>
                    <div className='hero--header'>
                        <h1 className="splashscreen--text heading1 animate-pop-up">Total Glass Effects</h1>
                        <div className='header--small--text'>
                            <p data-aos="fade-in">
                            With over 30 years in the business, our goal here at Total Glass Effects is to bring a quick and professional experience,
                            with accurate measurments and time sensitive efficiency that you can count on.
                            </p>
                            <div className="dividing--line"></div>
                        </div>
                        <br></br>

                        <Col>
                            <Row>
                            <p className='heading2 animate-pop-up'>RESIDENTIAL </p>&nbsp; <p className='heading3 animate-pop-up'> & COMMERCIAL</p>&nbsp; <p className='heading4 animate-pop-up'> SERVICES SINCE</p>&nbsp; <p className='heading5 animate-pop-up yellow'> 1980</p>
                            </Row>
                        </Col>
                        <Col>
                            <button className='hero--button heading6 animate-pop-up'>
                                <Link 
                                    className='hero--link--style' 
                                    to='/contact'>
                                        contact <i className="far fa-envelope"></i>
                                </Link>
                            </button>   
                        </Col>
                    </div>
                   
                </div> 
                
            </section>

            
        </div>
    )
}

export default Hero
