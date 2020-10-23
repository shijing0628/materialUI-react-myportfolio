import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';


export default {
 name: ' Brenda Liu',
 title: " full-stack dev",
 birthday: 'Dec 20th,2020',
 email: ' brenda@gmail.com',
 job: 'Freelance',
 address: '123 Street, MB',
 phone: "202-222-2222",
 socials: {
  Facebook: {
   link: 'https://www.facebook.com',
   text: " Brenda's Facebook",
   icon: <FacebookIcon />,
  },
  Twitter: {
   link: 'https://www.twitter.com',
   text: " Brenda's Twitter",
   icon: <TwitterIcon />,
  },
  Github: {
   link: 'https://www.github.com',
   text: " Brenda's Github",
   icon: <GitHubIcon />,
  },
  LinkedIn: {
   link: 'https://www.linkedin.com',
   text: " Brenda's Linkedin",
   icon: <LinkedInIcon />,
  }
 }
}