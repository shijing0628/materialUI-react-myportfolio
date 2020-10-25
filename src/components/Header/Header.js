import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@material-ui/icons';
import resumeData from '../../utils/resumeData';
import MyButton from '../MyButton/MyButton';
import './Header.css'

const Header = (props) => {
 const pathName = props?.location?.pathname
 return (
  <>
   <Navbar bg="light" sticky="top" className="header" >
    <Nav.Link as={NavLink} to='/' className='header_nav-link' >
     <Navbar.Brand className="header_home">
      <HomeRounded />
     </Navbar.Brand>
    </Nav.Link>

    <Navbar.Toggle />

    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className='header_left'>
      <Nav.Link as={NavLink} to='/' className={"pathName == '/'" ? 'header_link_active' : 'header_link'}>Resume
      </Nav.Link>
      <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio
      </Nav.Link>
      <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? 'header_link_active' : 'header_link'}>Contact
      </Nav.Link>
     </Nav>
     <div className="header_right">
      {Object.keys(resumeData.socials).map(key => (
       <a key={key} href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
      ))
      }
      <MyButton text={'Hire Me'} icon={<Telegram />}></MyButton>
     </div>
    </Navbar.Collapse>
   </Navbar>
  </>
 )
}

export default withRouter(Header) 
