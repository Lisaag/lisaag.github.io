/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lisa Groen",
  title: "Hi there, I'm Lisa!!",
  subTitle: "Thank you for checking out my portfolio website! Please stay a bit longer, and check out some of my cool projects down below :)",
  resumeLink: "CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lisaag",
  linkedin: "https://www.linkedin.com/in/lisa-groen-bb298816b/",
  itchio: "https://lisaag.itch.io/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  title: "Education",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utrecht University",
      logo: require("./assets/images/Utrecht_University_logo.svg.png"),
      subHeader: "Master of Science in Computer Science (Game and Media Technology)",
      duration: "Februari 2023 - April 2025",
      desc: "Graduation thesis title: Towards Continuous Sleep Monitoring of Preterm Infants in Complex NICU Scenes: A Video-Based Approach Using Eye Cues.",
    },
    {
      schoolName: "Amsterdam University of Applied Sciences",
      logo: require("./assets/images/channels4_profile.jpg"),
      subHeader: "Bachelor of Science in HBO-ICT (Game Development)",
      duration: "September 2016 - August 2020",
      desc: "Graduation project on procedural mountain landscape generation for a turn-based JRPG.",
    }
  ]
};

const workInfo = {
  title: "Work Experience",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Utrecht University",
      subHeader: "Teaching Assistant",
      duration: "September 2024 - November 2024",
      desc: "Teaching Assistant for the Multimedia Retrieval course. Presented introductory sessions for the practical assignments and offered guidance and support to students.",
    },
    {
      schoolName: "U-pad",
      subHeader: "Chair",
      duration: "September 2023 - September 2024",
      desc: "Chair of gaming student association in Utrecht.",
    },
    {
      schoolName: "Miracle Mile",
      subHeader: "AR software engineer",
      duration: "Januari 2021 - October 2021",
      desc: "Developed HoloLens 2 applications using Unity MRTK and Azure AR tools, built cross-platform online features for smartphones and tablets, and created IoT solutions with Arduino and M5Stack.",
    },
    {
      schoolName: "Shinyuden",
      subHeader: "Game programming intern",
      duration: "March 2020 - August 2020",
      desc: "Worked on generating a mountain landscape 3D model based on a set of pseudo random parameters.",
    },
    {
      schoolName: "Therapieland",
      subHeader: "VR engineer intern",
      duration: "September 2019 - Januari 2020",
      desc: "Developed an immersive VR application to support individuals facing anger-management challenges. Contributed across the full production pipeline; from game concept development and 3D asset creation to software implementation, including procedural 3D mesh generation.",
    },
    {
      schoolName: "Digital Society School",
      subHeader: "Software engineer intern",
      duration: "Januari 2018 - July 2018",
      desc: "Developed a prototype of an interactive bracelet designed to support children with asthma by making physical activity more engaging and motivating.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "School Projects",
  projects: [
    {
      projectId: "alfredos-kitchen",
      image: `/${"Screenshot 2025-11-17 at 14.55.11.png"}`
    },
    {
      projectId: "advanced-graphics",
      image: `/${"ag_preview.jpeg"}`
    },
    {
      projectId: "game-physics",
      image: `/${"Screenshot 2025-11-17 at 11.27.59.png"}`
    },
    {
      projectId: "computer-vision",
      image: require("./assets/images/ComputerVision.jpeg")
    },
    {
      projectId: "space-neon-emotions",
      image: `/${"vr1.png"}`
    },
    {
      projectId: "graphics-programming",
      image: require("./assets/images/GraphicsProgramming.png")
    },
    {
      projectId: "penguin-glide",
      image: `/${"PenguinGlide1.jpg"}`
    },
    {
      projectId: "automated-game-design",
      image: `/${"AGD3 (1).jpg"}`
    },
    {
      projectId: "de-schipper",
      image: `/${"DeSchipper11.png"}`
    },
    {
      projectId: "chasing-colors",
      image: `/${"ChasingColors6.png"}`
    },
    {
      projectId: "trustfall",
      image: `/${"Trustfall3.png"}`
    },
    {
      projectId: "cool-racing-game",
      image: `/${"CRG1.png"}`
    },
    {
      projectId: "hackerman",
      image: `/${"Hackerman5.png"}`
    },
    {
      projectId: "black-space",
      image: `/${"BlackSpace9.png"}`
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const personalProjects = {
  title: "Personal Projects",
  projects: [
    {
      projectId: "stillness-speaks",
      image: `/${"ss4.jpeg"}`
    },
    {
      projectId: "fix-the-computer",
      image: `/${"ggj2020_home.png"}`
    },
    {
      projectId: "broccolife",
      image: `/${"Broccolife4.png"}`
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "lisatgroen@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  personalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection};
