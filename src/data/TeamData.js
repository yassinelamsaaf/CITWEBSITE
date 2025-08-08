// Team Data - Complete organizational structure for CIT Club
export const teamData = {
  // President (top leadership)
  president: {
    name: "ZRALLA Jinane",
    role: "Club's Chairman",
    image: "./images/Jinane.jpg",
    description: "Leading the club with vision and strategic planning",
    level: "executive",
  },

  // Executive Board
  executives: [
    {
      name: "OUCHEN Imane",
      role: "Vice Chairman",
      image: "./images/Imane.jpeg",
      description: "Supporting leadership and member coordination",
      level: "executive",
    },
    {
      name: "LAANAYA Mohamed Amine",
      role: "Treasurer",
      image: "./images/Image.jpg",
      description: "Managing financial operations and budget planning",
      level: "executive",
    },
    {
      name: "ANOU Oussama",
      role: "General Secretary",
      image: "./images/oussie.jpg",
      description: "Administrative operations and documentation",
      level: "executive",
    },
  ],

  // Specialized Cells with Chiefs and Members
  cells: {
    events: {
      chief: {
        name: "MOUKIL Aya",
        role: "Events Cell Chief",
        image: "./images/aya.jpg",
        description:
          "Organizing workshops, competitions, and networking events",
      },
      members: [
        { name: "Member 1", role: "Events Coordinator", image: null },
        { name: "Member 2", role: "Events Coordinator", image: null },
      ],
    },
    sponsorship: {
      chief: {
        name: "EL MAZOUNI Doha",
        role: "Sponsorship Cell Chief",
        image: "./images/doha.png",
        description: "Building partnerships and sponsorship relationships",
      },
      members: [
        { name: "Member 1", role: "Partnership Coordinator", image: null },
        { name: "Member 2", role: "Partnership Coordinator", image: null },
      ],
    },
    technical: {
      chief: {
        name: "EL HACHIMI Athmane",
        role: "Technical Cell Chief",
        image: "./images/HACHIMI.jpg",
        description: "Overseeing technical projects and innovations",
      },
      members: [
        { name: "Member 1", role: "Technical Developer", image: null },
      ],
    },
    media: {
      chief: {
        name: "KRIBBI Fatima Zahrae",
        role: "Media Cell Chief",
        image: "./images/kribbi.png",
        description: "Managing digital presence and communications",
      },
      members: [{ name: "Member 1", role: "Content Creator", image: null }],
    },
    web: {
      chief: {
        name: "SLIMANI Hatim",
        role: "Web Cell Chief",
        image: "./images/hatim.jpeg",
        description: "Web development and digital infrastructure",
      },
      members: [{ name: "Member 1", role: "Co-Chief", image: null }],
    },
    algo: {
      chief: {
        name: "Member Chief",
        role: "Algorithm Cell Chief",
        image: null,
        description: "Competitive programming and algorithmic challenges",
      },
      members: [
        { name: "Member 1", role: "Algorithm Specialist", image: null },
      ],
    },
    security: {
      chief: {
        name: "AZEHAF Sara",
        role: "Security Cell Chief",
        image: "./images/sara.jpg",
        description: "Cybersecurity and ethical hacking initiatives",
      },
      members: [{ name: "Member 1", role: "Security Analyst", image: null }],
    },
    data: {
      chief: {
        name: "LAKHAL Badr",
        role: "Data Cell Chief",
        image: "./images/badr.jpg",
        description: "Data science and machine learning projects",
      },
      members: [{ name: "Member 1", role: "Data Scientist", image: null }],
    },
    devops: {
      chief: {
        name: "IKBI Abdelillah",
        role: "DevOps Cell Chief",
        image: "./images/IKBI.jpg",
        description: "Infrastructure and deployment automation",
      },
      members: [{ name: "Member 1", role: "DevOps Engineer", image: null }],
    },
    design: {
      chief: {
        name: "EL OUKILI Tarik",
        role: "Design Cell Chief",
        image: "./images/loukili.jpg",
        description: "UI/UX design and visual identity",
      },
      members: [],
    },
  },

  // Cell color themes for visual consistency
  getCellColor: (cellName) => {
    const colors = {
      events: "from-purple-500 to-pink-500",
      sponsorship: "from-green-500 to-emerald-500",
      technical: "from-blue-500 to-cyan-500",
      media: "from-orange-500 to-red-500",
      web: "from-cyan-500 to-blue-500",
      algo: "from-violet-500 to-purple-500",
      design: "from-pink-500 to-rose-500",
      security: "from-red-500 to-orange-500",
      data: "from-emerald-500 to-teal-500",
      devops: "from-indigo-500 to-blue-500",
    };
    return colors[cellName] || "from-gray-500 to-gray-600";
  },

  // Club statistics
  stats: [
    {
      value: "50+",
      label: "Active Members",
      icon: "fas fa-users",
      color: "text-blue-400",
    },
    {
      value: "20+",
      label: "Years Experience",
      icon: "fas fa-calendar",
      color: "text-green-400",
    },
    {
      value: "10",
      label: "Specialized Cells",
      icon: "fas fa-network-wired",
      color: "text-purple-400",
    },
    {
      value: "100+",
      label: "Projects Completed",
      icon: "fas fa-code",
      color: "text-cyan-400",
    },
  ],
};
