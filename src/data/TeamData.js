// Team Data - Complete organizational structure for CIT Club
export const teamData = {
  // President (top leadership)
  president: {
    name: "AAMOUM\nIlyass",
    role: "Club's Chairman",
    image: "./images/team/Ilyass.png",
    description: "Leading the club with vision and strategic planning",
    level: "executive",
  },

  // Executive Board
  executives: [
    {
      name: "SIHAMI\nImane",
      role: "Vice Chairman",
      image: "./images/team/Imane.png",
      description: "Supporting leadership and member coordination",
      level: "executive",
    },
    {
      name: "ID AISSA\nFarid",
      role: "Treasurer",
      image: "./images/team/Farid.png",
      description: "Managing financial operations and budget planning",
      level: "executive",
    },
    {
      name: "LACHGUER\nMouad",
      role: "General Secretary",
      image: "./images/team/Mouad.png",
      description: "Administrative operations and documentation",
      level: "executive",
    },
  ],

// Specialized Cells with Chiefs and Members
cells: {
    events: {
        chief: {
            name: "IDLAFQIH\nAnas",
            role: "Events Cell Chief",
            image: "./images/team/Anas.png",
            description:
                "Organizing workshops, competitions, and networking events",
        },
        members: [
            { name: "HAROUAL\nHafsa", role: "Co-chief", image: "./images/team/Hafsa.png" },
            { name: "FARAJ\nDiaeeddine", role: "Co-chief", image: "./images/team/Diaeeddine.png" },
        ],
    },
    sponsorship: {
        chief: {
            name: "IBLIHI\nMaryam",
            role: "Sponsorship Cell Chief",
            image: "./images/team/Maryam.png",
            description: "Building partnerships and sponsorship relationships",
        },
        members: [
            { name: "GHAYATI\nDouae", role: "Co-chief", image: "./images/team/Douae.png" },
            { name: "AIT JDID\nNissrine", role: "Co-chief", image: "./images/team/Nissrine.png" },
        ],
    },
    technical: {
        chief: {
            name: "NAIT KHOUYA\nMohamed Najib",
            role: "Technical Cell Chief",
            image: "./images/team/Najib.png",
            description: "Overseeing technical projects and innovations",
        },
        members: [
            { name: "CHAKRONE\nAnas", role: "Co-chief", image: "./images/team/Chakrone.png" },
        ],
    },
    media: {
        chief: {
            name: "BARA\nMouad",
            role: "Media Cell Chief",
            image: "./images/team/Bara.png",
            description: "Managing digital presence and communications",
        },
        members: [{ name: "ELHAIMAR\nMorad", role: "Co-chief", image: "./images/team/Morad.png" }],
    },
    web: {
        chief: {
            name: "LAMSAAF\nYassine",
            role: "Web Cell Chief",
            image: "./images/team/Yassine.png",
            description: "Web development and digital infrastructure",
        },
        members: [{ name: "RAGUIG\nMohammed Amine", role: "Co-Chief", image: "./images/team/Amine.png" }],
    },
    algo: {
        chief: {
            name: "SERJI\nAsmae",
            role: "Algorithm Cell Chief",
            image: "./images/team/Asmae.png",
            description: "Competitive programming and algorithmic challenges",
        },
        members: [
            { name: "FAJOUI\nAnass", role: "Co-Chief", image: "./images/team/Fajoui.png" },
        ],
    },
    security: {
        chief: {
            name: "AKALLAL\nMohamed Issam",
            role: "Security Cell Chief",
            image: "./images/team/Issam.png",
            description: "Cybersecurity and ethical hacking initiatives",
        },
        members: [{ name: "ANADDAM\nMohamed", role: "Co-Chief", image: "./images/team/Anaddam.png" }],
    },
    data: {
        chief: {
            name: "AIT ABDELOUAHAB\nMehdi",
            role: "Data Cell Chief",
            image: "./images/team/Mehdi.png",
            description: "Data science and machine learning projects",
        },
        members: [{ name: "CHAHIRI\nAbderrahmane", role: "Co-Chief", image: "./images/team/Abderrahmane.png" }],
    },
    devops: {
        chief: {
            name: "EL MOUDEN\nAbdelghafor",
            role: "DevOps Cell Chief",
            image: "./images/team/Abdelghafor.png",
            description: "Infrastructure and deployment automation",
        },
        members: [{ name: "AHORRAR\nOmar", role: "Co-Chief", image: "./images/team/Omar.png" }],
    },
    design: {
        chief: {
            name: "ZIZAH\nTaha",
            role: "Design Cell Chief",
            image: "./images/team/Taha.png",
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
