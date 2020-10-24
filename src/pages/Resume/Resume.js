import { Typography } from '@material-ui/core';
import React from 'react';
import './Resume.css'
import { Grid } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import '../../App.css'

const Resume = () => {
 return (
  <div>
   {/* About me */}
   <Grid container className="section pb_45">
    <Grid item className="section_title mb_30" xs={12}>
     <Typography variant="h6" className="section_title_text">About Me</Typography>
     <span></span>
    </Grid>
    <Grid item xs={12}>
     <Typography className='aboutme_text' >{resumeData.about}</Typography>
    </Grid>
   </Grid>


   {/* Education and Experience */}

   {/* Service */}

   {/* skills */}

   {/* Contact */}
  </div>
 )
}

export default Resume
