import { Icon, Typography } from '@material-ui/core';
import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimelineSeparator from '../../components/TimeLine/CustomTimelineSeparator';
import WorkIcon from '@material-ui/icons/Work';
import CustomTimeline from '../../components/TimeLine/TimeLine'
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import '../../components/TimeLine/TimeLine.css'
import '../../App.css';
import './Resume.css';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';


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
   <Grid container className="section pb_45 ">
    <Grid item className="section_title mb_30" xs={12} >
     <span></span>
     <Typography variant="h6" className="section_title_text">Resume</Typography>
    </Grid>

    <Grid item xs={12}>
     <Grid container className="resume_timeline">
      {/* work history */}
      <Grid item sm={12} md={6} lg={6}>
       <CustomTimeline title='Work Experience' icon={<WorkIcon />} >
        {resumeData.experiences.map(experience => (
         <TimelineItem >
          <CustomTimelineSeparator />
          <TimelineContent className="timeline_content">
           <Typography className='timeline_title'>
            {experience.title}
           </Typography>
           <Typography variant='caption'
            className='timeline_date'>
            {experience.date}
           </Typography>
           <Typography variant="body2"
            className='timeline_description'>
            {experience.description}
           </Typography>
          </TimelineContent>
         </TimelineItem>
        ))}
       </CustomTimeline>
      </Grid>

      <Grid item sm={12} md={6}>
       <CustomTimeline title='Education' icon={<SchoolIcon />} >
        {resumeData.educations.map(education => (
         <TimelineItem >
          <CustomTimelineSeparator />
          <TimelineContent className="timeline_content">
           <Typography className='timeline_title'>
            {education.title}
           </Typography>
           <Typography variant='caption'
            className='timeline_date'>
            {education.date}
           </Typography>
           <Typography variant="body2"
            className='timeline_description'>
            {education.description}
           </Typography>
          </TimelineContent>
         </TimelineItem>
        ))}
       </CustomTimeline>
      </Grid>
     </Grid>
    </Grid>

   </Grid>


   {/* Service */}
   <Grid container className="section pb_45">
    <Grid item className="section_title mb_30" xs={12}>
     <Typography variant="h6" className="section_title_text">My Services</Typography>
     <span></span>
    </Grid>

    <Grid item xs={12}  >
     <Grid container spacing={3} justify='space-around' >
      {resumeData.services.map(service => (
       <Grid item xs={12} sm={6} md={3} >
        <div className="service">
         <Icon className='service_icon'>{service.icon}</Icon>
         <Typography className="servie_title" variant='h6'>{service.title}</Typography>
         <Typography className="servie_description" variant='body2'>{service.description}</Typography>
        </div>
       </Grid>
      ))}
     </Grid>
    </Grid>
   </Grid>
   {/* skills */}
   <Grid container spacing={3} justify='space-between' className="section pb_45  p_50 graybg ">
    {resumeData.skills.map(skill => (
     <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={0} className='skill'>
       <Typography variant='h6' className='skills_title'>{skill.title}</Typography>
       {skill.description.map(element => (
        <Typography variant='body2' className='skill_description'>
         <TimelineDot variant={'outlined'} className='timeline_dot' />{element}
        </Typography>
       ))}
      </Paper>
     </Grid>
    ))}
   </Grid>
   {/* Contact */}
   <Grid container className="section pb_45"></Grid>
  </div>
 )
}

export default Resume
