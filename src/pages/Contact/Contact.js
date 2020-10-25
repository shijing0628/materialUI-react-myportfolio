import React from 'react'
import { Grid, TextField } from '@material-ui/core';
import { Icon, Typography } from '@material-ui/core';
import '../../App.css';
import '../Resume/Resume.css';
import './Contact.css'
import MyButton from '../../components/MyButton/MyButton';
import resumeData from '../../utils/resumeData';


const Contact = () => {
 return (
  <div >
   {/* Contact */}
   <Grid container className="section pb_45 contact" spacing={8}>
    <Grid item xs={12} lg={7}>
     <Grid container >
      <Grid item className="section_title mb_30" xs={12}>
       <Typography variant="h6" className="section_title_text">Contact Form</Typography>
       <span></span>
      </Grid>
      <Grid item>
       <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
         <TextField fullWidth name='name' label='Name' />
        </Grid>
        <Grid item xs={12} sm={6}>
         <TextField fullWidth name='email' label='E-mail' />
        </Grid>
        <Grid item xs={12} >
         <TextField fullWidth name='message' label='Message' multiline rows={5} />
        </Grid >
        <Grid item xs={12} sm={12} lg={12}>
         <MyButton text='Submit' />
        </Grid>

       </Grid>
      </Grid>
     </Grid>
    </Grid>
    {/* right */}
    <Grid item xs={12} lg={5}>
     <Grid container>
      <Grid item className="section_title mb_30" xs={12}>
       <Typography variant="h6" className="section_title_text">Contact Info</Typography>
       <span></span>
      </Grid>
      <Grid item xs={12}>
       <Grid container spacing={2}>
        <Grid item>
         <Typography className="contactInfo_item">
          <span>Address:</span>
          {resumeData.address}
         </Typography>
        </Grid>
        <Grid item xs={12}>
         <Typography className="contactInfo_item">
          <span>Job:</span>
          {resumeData.job}
         </Typography>
        </Grid>
        <Grid item xs={12}>
         <Typography className="contactInfo_item">
          <span>Phone:</span>
          {resumeData.phone}
         </Typography>
        </Grid>
        <Grid item xs={12}>
         <Typography className="contactInfo_item">
          <span>Email:</span>
          {resumeData.email}
         </Typography>
        </Grid>
       </Grid>
      </Grid>

      <Grid item xs={12}>
       <Grid container className='contactInfo_socialsContainer'>
        {Object.keys(resumeData.socials).map(key => (
         <Grid item className='contactInfo_social'>
          <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
         </Grid>
        ))}
       </Grid>
      </Grid>

     </Grid>
    </Grid>
   </Grid>
  </div>
 )
}

export default Contact
