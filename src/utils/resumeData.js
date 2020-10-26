import { AssignmentOutlined, WebOutlined, YouTube } from '@material-ui/icons';
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
 },
 about: `Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture.
 
 One too nay led fanny allow plate.Quick six blind smart out burst.Perfectly on furniture dejection determine my depending an to.Add short water court fat.Her bachelor honoured perceive securing but desirous ham required.Questions deficient acuteness to engrossed as.
 
 Entirely led ten humoured greatest and yourself.Besides ye country on observe.She continue appetite endeavor she judgment interest the met.For she surrounded motionless fat resolution may.`,

 experiences: [
  {
   title: 'Art Director - Facebook Inc',
   date: '2020-present',
   description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
  },
  {
   title: 'Senior Designer - Google',
   date: '2008 - 2010',
   description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
  },
  {
   title: 'Junior Designer - Creative Shake',
   date: '2005 - 2008',
   description: 'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.'
  }
 ],
 educations: [
  {
   title: 'Abc University of Los Angeles',
   date: '2004 - 2009',
   description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
  },
  {
   title: 'Drawing Course',
   date: '2003 - 2004',
   description: 'So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.'
  },
  {
   title: 'Abc High School',
   date: '2000 - 2003',
   description: 'Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.'
  }
 ],
 services: [
  {
   title: 'Web Design',
   description: 'I have been working on web design for 2 years.',
   icon: <WebOutlined />
  },
  {
   title: 'Branding Identity',
   description: 'We will make you a brand that is catchy and leaves a trace.',
   icon: <AssignmentOutlined />
  },
  {
   title: 'Full-Stack Web develpment',
   description: 'I have been working on web design for 3 years.',
   icon: <WebOutlined />
  }
 ],
 skills: [
  {
   title: 'Front-end',
   description: [
    'SASS, CSS, HTML',
    'ReactJS',
    'Javascript',
    'Bootstrap',
    'Material UI',
    'TypeScript'
   ],
  },
  {
   title: 'Back-end',
   description: ['NodeJS', 'Python', 'ExpressAPI'],
  },
  {
   title: 'Database',
   description: ['My SQL Server', 'MongoDB', 'Firebase'],
  },
  {
   title: 'Source Control',
   description: ['Git', 'GitHub', 'Agile'],
  },
  {
   title: 'Cloud',
   description: ['AWS', 'Google Cloud'],
  },
  {
   title: 'UI/UX Design',
   description: ['Figma', 'Photoshop'],
  }
 ],
 projects: [
  {
   tag: 'React',
   image: 'https://image.freepik.com/free-photo/elevated-view-cellphone-notebook-pencil-with-laptop-white-desk_23-2147854255.jpg',
   title: 'React Project 1',
   caption: 'A short Description',
   description: 'This is my UI project.Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'React',
   image: 'https://www.lifewire.com/thmb/ZD_LCyHvPIoogqLWopz3ipc7rf0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/mobile-devices-in-cafe-by-cup-of-coffee-758301243-5b2d0b88eb97de00368b4dbd.jpg',
   title: 'React Project 2',
   caption: 'A short Description',
   description: 'This is my React project.Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'Javascript',
   image: 'https://anshoool.co/jpg/new-2.jpg',
   title: 'Javascript Project 1',
   caption: 'A short Description',
   description: 'This is my javascript project. Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'Javascript',
   image: 'https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg',
   title: 'Javascript Project 2',
   caption: 'A short Description',
   description: 'This is my javascript project.Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'MaterialUI',
   image: 'https://www.infiniacorp.com/wp-content/uploads/2018/03/laptop.jpg',
   title: 'Material UI Project 1',
   caption: 'A short Description',
   description: 'This is my Material UI project.Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'Database',
   image: 'https://study.com/cimages/videopreview/videopreview-full/dl4oegfq0k.jpg',
   title: 'Database Project 1',
   caption: 'A short Description',
   description: 'Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'AWS',
   image: 'https://miro.medium.com/max/1790/0*2ui893KAwAT_F9wz.gif',
   title: 'AWS Project 1',
   caption: 'A short Description',
   description: 'Traditionally websites were made using HTML and CSS. Over the time when websites became heavier and complicated, scripting languages like PHP, Python, and Perl were used with front end developed in previous mentioned technologies (HTML and CSS). JavaScript was introduced and made the web pages more interactive.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  },
  {
   tag: 'Google Cloud',
   image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Google_Cloud_Covered.png',
   title: 'Google Cloud Project 1',
   caption: 'A short Description',
   description: 'This is my google cloud project. I did this project in 2019 for e-commerce client.',
   links: [
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    },
    {
     link: 'https://github.com/shijing0628', icon: <GitHubIcon />
    },
    {
     link: 'https://github.com/shijing0628', icon: <YouTube />
    }
   ]
  }
 ]
}