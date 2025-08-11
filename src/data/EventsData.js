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
      gallery: ["./images/JNJD1.JPG", "./images/JNJD2.JPG", "./images/JNJD3.png","./images/jnjd.jpg","./images/jnjd3.jpg"],
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
      gallery: ["./images/IDEH1.JPG", "./images/IDEH2.JPG", "./images/IDEH.png","./images/ideh3.jpg","./images/IDEH.JPG"],
      category: "Cybersecurity",
      color: "from-red-500 to-orange-500",
      status: "Annual Event",
    },
    {
      id: 3,
      title: "T2D",
      subtitle: "Think to Deploy",
      englishTitle: "Think to Deploy",
      since: "TBA",
      description:
        "Think to Deploy (T2D) is an innovative competition centered on creating and deploying real-world solutions in Data Science and Artificial Intelligence. Unlike traditional hackathons, T2D challenges participants to develop technically viable projects that are ready to be integrated into a partner company’s environment, with a clear objective: turning concepts into tangible, deployable solutions.",
      features: [
        "Real-world AI and Data challenge from a partner company",
        "Proof of Concept (POC) development",
        "On-site adaptation to company tools and data",
        "Final pitch to AI/Data expert jury",
        "Internship for the winning team",
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
    { src: "./images/jnjd.jpg", alt: "JNJD Event 1", category: "JNJD" },
    { src: "./images/jnjd3.jpg", alt: "JNJD Event 2", category: "JNJD" },
    { src: "./images/IDEH.JPG",  alt: "IDEH Event 1", category: "IDEH" },
    { src: "./images/ideh3.jpg", alt: "IDEH Event 2", category: "IDEH" },
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
