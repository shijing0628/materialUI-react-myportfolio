import React, { useState } from 'react'
import './Portfolio.css';
import { Typography, Grid, Tabs, Tab, Paper, Card, CardActionArea, CardMedia, CardContent, Grow, DialogContent, DialogActions } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import resumeData from '../../utils/resumeData'

const Portfolio = () => {
 const [tabValue, setTabValue] = useState('All');
 const [projectDialog, setProjectDialog] = useState(false);


 return (
  <>
   <Grid container className='section' pb_45 pt_45>
    <Grid item className="section_title mb_30" xs={12} >
     <span></span>
     <Typography variant="h6" className="section_title_text">Portfolio</Typography>
    </Grid>

    <Grid item xs={12}>
     <Tabs value={tabValue}
      indicatorColor="white"
      className='custom_tabs'
      onChange={(e, newValue) => setTabValue(newValue)}
     >
      <Tab label="All" value='All' className={"tabValue == 'All' ? 'customTabs_item active : 'customeTabs_item'"} />

      {/* use Set because want to get unique tag name */}
      {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
       <Tab label={tag} value={tag} className={tabValue == tag ? "customTabs_item active" : "customeTabs_item"} />
      ))}
     </Tabs>
    </Grid>

    {/* project card list */}
    <Grid item xs={12}>
     <Grid container spacing={3} >
      {resumeData.projects.map(project => (
       <>
        {tabValue == project.tag || tabValue == 'All' ? (
         <Grid item xs={12} sm={6} md={4} >
          <Grow in timeout={1000} >
           <Card className='customCard' onClick={() => setProjectDialog(project)}>
            <CardActionArea>
             <CardMedia className='customCard_image' image={project.image} title={project.title} />
             <CardContent>
              <Typography variant="body2" className='customCard_title'>
               {project.title}
              </Typography>
              <Typography className='customCard_caption' variant='body2'>
               {project.caption}
              </Typography>
             </CardContent>

            </CardActionArea>
           </Card>
          </Grow>
         </Grid>
        ) : null}
       </>
      ))}
     </Grid>
    </Grid>

    <Dialog class="projectDialog" open={projectDialog} onClose={() => setProjectDialog(false)}>
     <DialogTitle onClose={() => setProjectDialog(false)}>
      {projectDialog.title}
     </DialogTitle>
     <img src={projectDialog.image} alt='' className="projectDialog_image" />
     <DialogContent>
      <Typography className="projectDialog_description">
       {projectDialog.description}
      </Typography>
     </DialogContent>
     <DialogActions className="projectDialog_actions">
      {projectDialog?.links?.map(link => (
       <a href={link.link} target='_blank' className="projectDialog_icon" >{link.icon}</a>
      ))}
     </DialogActions>
    </Dialog>
   </Grid>
  </>
 )
}

export default Portfolio
