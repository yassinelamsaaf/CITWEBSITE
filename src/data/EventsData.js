// Events Data - Comprehensive event information and gallery for CIT Events
export const eventsData = {
  // Main events configuration
  mainEvents: [
    {
      id: 1,
      title: "JNJD",
      subtitle: "Journée Nationale du Jeune Développeur",
      englishTitle: "National Day of the Young Developer",
      since: "2005",
      description:
        "The National Day of Young Developers (JNJD) is an annual event that has been celebrated since 2005, dedicated to young individuals with a passion for programming and a knack for tackling complex algorithmic challenges. JNJD serves as a platform to inspire, engage, and recognize the talents of budding developers, fostering a thriving community in the field of information technology.",
      features: [
        "Competitive Programming (CP) competitions",
        "Workshops with cutting-edge technologies",
        "Conferences from industry experts",
        "Team collaboration and networking",
        "Algorithmic problem-solving challenges",
      ],
      image: "./images/JNJD3.png",
      gallery: ["./images/JNJD1.JPG", "./images/JNJD2.JPG", "./images/JNJD3.png"],
      category: "Competition",
      color: "from-blue-500 to-cyan-500",
      status: "Annual Event",
    },
    {
      id: 2,
      title: "IDEH",
      subtitle: "International Day of Ethical Hacking",
      englishTitle: "International Day of Ethical Hacking",
      since: "2019",
      description:
        "The International Days of Ethical Hacking (IDEH) is an annual event that has been taking place since 2019, bringing together individuals with a passion for cybersecurity and ethical hacking. This unique event aims to challenge and showcase the skills of participants while fostering a spirit of healthy competition.",
      features: [
        "Capture The Flag (CTF) competitions",
        "Cybersecurity scenario simulations",
        "Vulnerability assessment challenges",
        "Expert-led security workshops",
        "Penetration testing techniques",
        "Threat intelligence sessions",
      ],
      image: "./images/IDEH.png",
      gallery: ["./images/IDEH1.JPG", "./images/IDEH2.JPG", "./images/IDEH.png"],
      category: "Cybersecurity",
      color: "from-red-500 to-orange-500",
      status: "Annual Event",
    },
    {
      id: 3,
      title: "T2D",
      subtitle: "Tech to Data Summit",
      englishTitle: "Coming Soon...",
      since: "TBA",
      description:
        "An upcoming event focused on data science, machine learning, and advanced analytics. Stay tuned for more details about this exciting addition to our event lineup.",
      features: [
        "Machine Learning workshops",
        "Data visualization challenges",
        "AI research presentations",
        "Industry expert talks",
        "Hands-on data projects",
      ],
      image: "./images/t2d.jpg",
      gallery: [],
      category: "Data Science",
      color: "from-purple-500 to-pink-500",
      status: "Coming Soon",
    },
  ],

  // Event gallery - only event-specific images (no team member images)
  eventGallery: [
    { src: "./images/JNJD1.JPG", alt: "JNJD Event 1", category: "JNJD" },
    { src: "./images/JNJD2.JPG", alt: "JNJD Event 2", category: "JNJD" },
    { src: "./images/IDEH1.JPG", alt: "IDEH Event 1", category: "IDEH" },
    { src: "./images/IDEH2.JPG", alt: "IDEH Event 2", category: "IDEH" },
  ],

  // Category icons mapping
  getCategoryIcon: (category) => {
    switch (category) {
      case "Competition":
        return "fas fa-code";
      case "Cybersecurity":
        return "fas fa-shield-alt";
      case "Data Science":
        return "fas fa-chart-line";
      default:
        return "fas fa-calendar";
    }
  }
};
