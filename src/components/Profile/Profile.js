import React from 'react';
import { Typography } from '@material-ui/core';
import './Profile.css';
import '../../App.css'
import myimage from '../../assets/images/profile.jpg'
import CustomerTimeLine from "../TimeLine/TimeLine";
import resumeData from '../../utils/resumeData'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CustomTimelineSeparator from '../TimeLine/CustomTimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import MyButton from '../MyButton/MyButton';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
 <TimelineItem >
  <CustomTimelineSeparator />
  <TimelineContent className="timelineItem_content">
   {link ? (<Typography className="timelineItem_text">
    <span>{title}</span>
    {' '}
    <a href={'link'} target="_blank">{text}</a>
   </Typography>) :
    <Typography className="timelineItem_text"> <span>{title}</span>{text}</Typography>
   }
  </TimelineContent >
 </TimelineItem >
)


const Profile = () => {
 return (
  <>
   <div className="profile container_shadow">
    <div className="profile_name">
     <Typography className="name">
      {resumeData.name}
     </Typography>
     <Typography className="title">
      {resumeData.title}
     </Typography>
    </div>

    <figure className="profile_image">
     <img src={myimage} alt="brenda" />
    </figure>

    <div className="profile_information">
     <CustomerTimeLine icon={<PermIdentityIcon />} >
      <CustomTimelineItem title="Name" text={resumeData.name} />
      <CustomTimelineItem title="Title" text={resumeData.title} />
      <CustomTimelineItem title="Email" text={resumeData.email} />
      {/* loop through an object */}
      {
       Object.keys(resumeData.socials).map(key => (
        <CustomTimelineItem key={key} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}></CustomTimelineItem>
       ))
      }
     </CustomerTimeLine>
     <br />
     <div className={'button_container'}>
      <MyButton text={'Download CV'} icon={<GetAppIcon />} />
     </div>

    </div>
   </div>
  </>
 )
}

export default Profile
