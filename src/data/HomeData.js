// Home page data configuration
export const homeData = {
  hero: {
    logo: {
      src: "./images/Logo CIT.png",
      alt: "CIT Club Logo"
    },
    title: {
      main: "Club Informatique & Telecoms",
      initialization: "Initializing CIT Club...",
      status: "Status: Operational since 1996"
    }
  },

  mission: {
    title: "mission.txt",
    content: "The CIT club is the first IT club in Morocco and has as a goal to gather passionate students reach their goals in IT by offering courses throughout the year and make them compete in competitions."
  },

  partnerships: {
    datacamp: {
      logo: {
        src: "./images/DataCamp.png",
        alt: "DataCamp"
      },
      title: "DataCamp Partnership",
      status: "Partnership Active",
      description: "Learn Data Science & AI from the comfort of your browser, at your own pace with DataCamp's video tutorials & coding challenges on R, Python, Statistics & more.",
      link: {
        url: "https://www.datacamp.com/donates",
        text: "Initialize Learning"
      }
    }
  },

  features: [
    {
      icon: "fas fa-users",
      title: "Community",
      description: "Join a passionate community of IT students and professionals",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Learning",
      description: "Access courses and workshops throughout the year",
      color: "from-green-500 to-emerald-500",
      delay: 100
    },
    {
      icon: "fas fa-trophy",
      title: "Competitions",
      description: "Participate in exciting IT competitions and challenges",
      color: "from-purple-500 to-violet-500",
      delay: 200
    }
  ]
};
