import React from 'react'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import './TimeLine.css'
const CustomTimelineSeparator = () => {
 return (
  <div>
   <TimelineItem>
    <TimelineSeparator className={'separator_padding'}>
     <TimelineDot variant={'outlined'} className={'timeline_dot'} />
     <TimelineConnector />
    </TimelineSeparator>
   </TimelineItem>
  </div>
 )
}

export default CustomTimelineSeparator
