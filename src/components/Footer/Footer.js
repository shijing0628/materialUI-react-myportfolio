import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css'
import resumeData from '../../utils/resumeData'


const Footer = () => {
 return (
  <div className='footer'>
   <div className="footer_left">
    <Typography className="footer_name">{resumeData.name}</Typography>
   </div>
   <div className="footer_right">
    <Typography className="footer_copyright">
     Design and developed by {' '}<a href='/'>Brenda Liu</a>
     <br />
     Reference from <a href="http://tavonline.net/html/mat/default/index.html#" target="_blank">Tavonline</a>
    </Typography>
   </div>
  </div>
 )
}

export default Footer
