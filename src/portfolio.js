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
  username: "Shesheer Kokkirala",
  title: "Hi all, I'm Shesheer",
  subTitle: emoji(
    "I am a curious and detail-oriented data professional passionate about uncovering insights and solving real-world problems. With a creative approach to data storytelling and a strong analytical mindset, I thrive in environments that value innovation and collaboration. My drive to continuously learn and adapt keeps me aligned with the ever-evolving data landscape, enabling me to craft efficient and impactful solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shesheerrao0606",
  linkedin: "https://www.linkedin.com/in/shesheer-rao/",
  gmail: "kokkirala.shesheer@gmail.com",
  instagram:
    "https://www.instagram.com/shesheer_rao10/profilecard/?igsh=am9lZjJzbHplMGNh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Skills",
  subTitle: "What I Bring To The Table",
  skills: [
    "⚡ Build and deploy robust machine learning models to solve real-world problems, enabling real-time predictions and data-driven decision-making.",
    "⚡ Engineer efficient data pipelines and ETL processes using tools like SQL, Python, and Snowflake to handle and transform large datasets effectively.",
    "⚡ Conduct in-depth exploratory data analysis (EDA) and develop powerful visualizations with Tableau, Power BI, and Matplotlib to derive actionable business insights.",
    "⚡ Leverage cloud technologies such as AWS and Docker for scalable deployments and manage big data frameworks like Hadoop and Spark for advanced analytics.",
    "⚡ Employ advanced data analysis techniques with tools like Pandas and Scikit-learn to extract meaningful patterns and improve business performance."
  ],

  softwareSkills: [
    // Machine Learning and Python
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Seaborn",
      fontAwesomeClassname: "fas fa-wave-square"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "EDA",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Data Visualizations",
      fontAwesomeClassname: "fas fa-project-diagram"
    },

    // SQL and Databases
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake"
    },
    {
      skillName: "Hadoop",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fas fa-bolt"
    },

    // Cloud Technologies
    {
      skillName: "AWS (S3, EC2)",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    },

    // Data Visualization Tools
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-microsoft"
    },

    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Advanced MS Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },

    // Programming and Scripting
    {
      skillName: "Shell-scripting",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },

    // Version Control
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },

    // ETL Tools
    {
      skillName: "ETL Tools",
      fontAwesomeClassname: "fas fa-cogs"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stochastic Geomechanics Laboratory, Texas A&M University",
      logo: require("./assets/images/sgllogo.png"), // Replace with the actual logo file path
      subHeader: "Graduate Assistant Researcher",
      duration: "May 2024 - August 2024",
      //desc: "Developed a strong foundation in core computer science concepts and programming principles.",
      descBullets: [
        "Collaborated with the US Department of Homeland Security to optimize the resilience of North American semiconductor and water supply chains.",
        "Developed a risk assessment framework with benchmarks for acceptable risk levels across nine supply chains, improving operational integrity and stakeholder confidence.",
        "Analyzed over 120 datasets to identify vulnerabilities and improve decision-making processes in supply chain operations.",
        "Contributed to Bayesian network models to address supply chain disruptions, market variability, and operational risks, providing actionable insights for mitigation strategies."
      ]
    },
    {
      schoolName: "Reliance Jio , Bengaluru, India",
      logo: require("./assets/images/jio.jpg"), // Replace with the actual logo file path
      subHeader: "Data Analyst",
      duration: "June 2021 - June 2023",
      // desc: "Focused on leveraging advanced analytical and cloud technologies for data-driven decision-making.",
      descBullets: [
        "Worked in a team of 5 in the development of gender and apparel detection models, employing advanced machine learning and deep learning methodologies, attaining an accuracy surpassing 80%",

        "Developed a real-time recommender system incorporating collaborative filtering algorithms, machine learning techniques, and Kafka for instant data processing, leading to a minimum increase of 10% in user retention time.",

        "Designed and implemented a database management server for processing substantial data volumes using SQL Server and MongoDB, resulting in a 30% reduction in data processing time."
      ]
    },
    {
      schoolName: "Intone Networks",
      logo: require("./assets/images/intone.png"), // Replace with the actual logo file path
      subHeader: "Data Analyst Intern",
      duration: "May 2019 - July 2019",
      //desc: "Developed a strong foundation in core computer science concepts and programming principles.",
      descBullets: [
        "Analyzed house prices data utilizing machine learning algorithms, including Linear Regression and Random Forest Regression, to identify investment opportunities.",
        "Presented insights to company executives, leading to a strategic shift in investment strategies.",
        "Implemented clustering algorithms on real estate market data, such as K-means and hierarchical clustering, to identify distinct market segments.",
        "Optimized targeted marketing strategies, resulting in a 15% improvement in conversion rates."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & AI", // Highlighting expertise in ML/AI
      progressPercentage: "90%" // Relative proficiency in percentage
    },
    {
      Stack: "Data Analysis & Visualization", // Skills like Tableau, Power BI, EDA
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering", // ETL, Pipelines, Big Data Tools
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Technologies", // AWS, Docker, Snowflake, Hadoop
      progressPercentage: "75%"
    },
    {
      Stack: "Database Management", // SQL, NoSQL, MySQL, MongoDB
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display CodersRank badges; change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Texas A&M University, Mays Business School",
      company: "2023 - 2025",
      companylogo: require("./assets/images/texasLogo.png"), // Replace with the actual logo file path
      date: "Master of Science in Management Information Systems",
      desc: "Focused on leveraging advanced analytical and cloud technologies for data-driven decision-making.",
      descBullets: [
        "Relevant Coursework : Advanced Data Management, Project Management, Advanced System Analysis and Design, Statistics for Data Science, Machine Learning and Analytics, Cloud Computing , Leadership in Organizations and Technology Commecialization"
      ]
    },

    {
      role: "National Institute of Technology, Durgapur",
      company: "2017 - 2021",
      companylogo: require("./assets/images/nitLogo.png"),
      date: "Bachelor of Technology in Computer Science and Engineering",
      desc: "Developed a strong foundation in core computer science concepts and programming principles",
      descBullets: [
        "Relevant Coursework : Data Structures and Algorithms, Operating Systems, Object-Oriented Programming, Computer Networking, Database Management Systems"
      ]
    }
    /* {
      role: "Data Analyst Intern",
      company: "Intone Networks",
      companylogo: require("./assets/images/intone.png"),
      date: "May 2019 – July 2019",
      desc: "Worked on analyzing real estate data to uncover actionable insights and drive strategic decisions.",
      descBullets: [
        "Analyzed house prices data utilizing machine learning algorithms, including Linear Regression and Random Forest Regression, to identify investment opportunities.",
      ]
    
    },*/
    /* {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: " Projects",
  subtitle: "INNOVATIVE PROJECTS AND SOLUTIONS I HAVE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/smsOrganizerLogo.png"), // Add the image file path for your project logo
      projectName: "SMS Organizer",
      projectDesc:
        "Developed a machine learning model to classify SMS messages into categories: Promotional, Transactional, and OTP, achieving a top accuracy of 95.83% using Linear SVC.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/shesheerrao0606/SMS_ORGANIZER" // Replace with the actual link to your project report or relevant resource
        }
        // Add more buttons if needed
      ]
    },
    {
      image: require("./assets/images/Netflix.png"), // Add the actual image path here
      projectName: "Netflix Dashboard",
      projectDesc:
        "Created an interactive Tableau dashboard analyzing Netflix content by genre, country, release year, and ratings. The dashboard provides insights into trends, distributions, and viewer preferences.",
      footerLink: [
        {
          name: "View  Dashboard",
          url: "https://public.tableau.com/shared/7PC3TDFN4?:display_count=n&:origin=viz_share_link" // Add your project URL or remove this line
        }
      ]
    },

    {
      image: require("./assets/images/erd.png"),
      projectName: "ETL and Data Aggregation Project",
      projectDesc:
        "Built an ETL pipeline using AWS and MongoDB to clean, transform, and organize raw customer, order, and product data. Created JSON-based aggregates to analyze customer order history and product purchases, showcasing advanced SQL techniques and cloud data management.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/shesheerrao0606/ETL-and-Data-Aggregation-Project"
        }
      ]
    },
    {
      image: require("./assets/images/canvas.png"),
      projectName: "Product Canvas - DeliverEase",
      projectDesc:
        "DeliverEase is a conceptual platform designed to revolutionize food delivery by offering real-time comparisons of prices, wait times, and promotions across multiple services like Uber Eats, DoorDash, and Grubhub. The platform aims to provide users with cost-effective, personalized choices through a seamless, unified interface.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/shesheerrao0606/Product-Canvas-DeliverEase"
        }
      ]
    },
    {
      image: require("./assets/images/kafka.png"),
      projectName: "Stock Market Data Engineering",
      projectDesc:
        "A real-time stock market data engineering project utilizing Kafka to process and analyze large-scale financial data streams. The system is designed to provide high-throughput, low-latency data pipelines for monitoring and decision-making.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/shesheerrao0606/stock-market-kafka-data-engineering-project"
        }
      ]
    },
    {
      image: require("./assets/images/flightticket.png"),
      projectName: "Flight Fare Prediction",
      projectDesc:
        "A web application to predict flight fares using machine learning models. The project enables users to input travel details and get real-time fare predictions, offering insights for smarter travel decisions.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/shesheerrao0606/shesheerflightfare.github.io"
        }
      ]
    },
    {
      image: require("./assets/images/senti.png"),
      projectName: "Sentiment Analysis",
      projectDesc:
        "A machine learning project designed to analyze and predict the sentiment of textual data. The application processes user inputs, leveraging NLP techniques to determine positive, negative, or neutral sentiments.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/shesheerrao0606/Sentiment-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/news.png"),
      projectName: "News Application With AI Voice Assistant",
      projectDesc:
        "A cutting-edge news application integrated with an AI-powered voice assistant that provides users with hands-free access to the latest news, tailored recommendations, and interactive voice commands.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/shesheerrao0606/News-Application-With-AI-Voice-Assistant"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      subtitle:
        "Completed certification focusing on cloud-native application development and deployment using AWS.",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/e68875764d5d45c03ebaa5fa2cf83b5b"
        }
      ]
    },
    {
      title: "Machine Learning with Python",
      subtitle:
        "Earned certification from IBM covering machine learning concepts, algorithms, and hands-on Python implementation.",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/2294061f6c0fbdbb401fc184b20db910"
        }
      ]
    },
    {
      title: "Business Analytics",
      subtitle:
        "Completed certification from the Indian School of Business (ISB), focusing on data analysis and decision-making strategies.",
      image: require("./assets/images/isb.png"),
      imageAlt: "ISB Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/8f60e01f2edbef21936e7d7104719b6c"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

/*const blogSection = {
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
  display: true // Set false to hide this section, defaults to true
};
*/
// Talks Sections

/*const talkSection = {
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
  display: true // Set false to hide this section, defaults to true
};

*/
// Podcast Section

/*const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
*/
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am actively seeking full-time opportunities. Feel free to reach out—I’d love to connect and discuss how I can contribute!",
  number: "+1(945)527-2619",
  email_address: "kokkirala.shesheer@gmail.com"
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
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  //blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
