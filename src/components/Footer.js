import React from 'react';
import './Footer.css';
import { Nav, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (

        <div className='footer--container'>
            <Col>
                <Row>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link><Link className='router--link--style' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='router--link--style' to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link><Link className='router--link--style' to='/projects'>Gallery</Link></Nav.Link>
                    </Nav>
                </Row>
            </Col>
            
            <Col>
            
                <div className='footer--masthead'>
                    <p>Total Glass Effects all rights reserved <i class="far fa-copyright"></i> 2021</p>                
                </div>
                <div className='footer--masthead'>
                    <p>site by <a href='http://www.websuitestudio.com'><Image className='websuitestudio--footer--logo' alt='Web Suite Studio' src='images/white-transparent.png'></Image></a></p>                
                </div>
            </Col>
        </div>

    )
}

export default Footer
