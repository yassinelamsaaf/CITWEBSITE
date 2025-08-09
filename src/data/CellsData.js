// Cells Data - Complete information about CIT specialized cells
export const cellsData = {
  // Main cells array with complete information
  cells: [
    {
      id: "web",
      title: "Web Cell",
      image: "./images/web.png",
      description:
        "The Web Cell focuses on web development and related technologies. It deals with designing, building, and maintaining websites, web applications, and online services. This domain covers various aspects, including front-end development (user interface and user experience), back-end development (server-side logic and databases), web security, and web performance optimization.",
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Node.js", "JavaScript", "HTML5", "CSS3"],
      chef: "LAMSAAF Yassine",
      members: ["RAGUIG Mohammed Amine"],
      projects: [
        "E-commerce Platform",
        "University Management System",
        "Real-time Chat Application",
      ],
      skills: [
        "Frontend Development",
        "Backend Development",
        "API Design",
        "Database Management",
      ],
      details:
        "Our Web Cell is at the forefront of modern web technologies. We specialize in creating responsive, scalable, and user-friendly web applications. Members work on real-world projects using the latest frameworks and tools, gaining hands-on experience in full-stack development.",
    },
    // {//ok
    //   id: "events",
    //   title: "Events Cell",
    //   image: "./images/events.png",
    //   description:
    //     "The Events Cell is responsible for planning, organizing, and executing various activities and events. This includes workshops, competitions, seminars, networking sessions, and social gatherings that bring together students, professionals, and industry experts to foster learning and collaboration.",
    //   color: "from-purple-500 to-pink-500",
    //   technologies: ["Event Management", "Marketing", "Communication", "Logistics", "Planning"],
    //   chef: "IDLAFQIH Anas",
    //   members: ["HAROUAL Hafsa", "FARAJ Diaeeddine"],
    //   projects: [
    //     "JNJD Organization",
    //     "IDEH Coordination",
    //     "Workshop Series Planning",
    //   ],
    //   skills: [
    //     "Event Planning",
    //     "Project Management",
    //     "Team Coordination",
    //     "Public Speaking",
    //   ],
    //   details:
    //     "Our Events Cell orchestrates memorable experiences that educate, inspire, and connect our community. From technical workshops to competitive programming contests, we create opportunities for learning and networking.",
    // },
    // {
    //   id: "sponsorship",
    //   title: "Sponsorship Cell",
    //   image: "./images/sponsorship.png",
    //   description:
    //     "The Sponsorship Cell focuses on building strategic partnerships and securing sponsorships from companies and organizations. This cell works on establishing relationships with industry partners, negotiating sponsorship deals, and managing corporate collaborations.",
    //   color: "from-green-500 to-emerald-500",
    //   technologies: ["Partnership Management", "Business Development", "Communication", "Networking"],
    //   chef: "IBLIHI Maryam",
    //   members: ["GHAYATI Douae", "AIT JDID Nissrine"],
    //   projects: [
    //     "Corporate Partnership Program",
    //     "Sponsorship Portfolio Development",
    //     "Industry Collaboration Framework",
    //   ],
    //   skills: [
    //     "Business Development",
    //     "Negotiation",
    //     "Relationship Management",
    //     "Strategic Planning",
    //   ],
    //   details:
    //     "Our Sponsorship Cell bridges the gap between academia and industry. We cultivate meaningful partnerships that benefit both our club and our corporate partners, creating opportunities for internships, mentorship, and project collaboration.",
    // },
    // {
    //   id: "technical",
    //   title: "Technical Cell",
    //   image: "./images/technical.png",
    //   description:
    //     "The Technical Cell oversees all technical aspects of club operations and projects. This includes infrastructure management, technical project supervision, innovation initiatives, and ensuring the quality of technical deliverables across all club activities.",
    //   color: "from-blue-500 to-cyan-500",
    //   technologies: ["System Architecture", "Project Management", "Innovation", "Quality Assurance"],
    //   chef: "NAIT KHOUYA Mohamed Najib",
    //   members: ["CHAKRONE Anas"],
    //   projects: [
    //     "Technical Infrastructure Upgrade",
    //     "Innovation Lab Setup",
    //     "Quality Standards Framework",
    //   ],
    //   skills: [
    //     "Technical Leadership",
    //     "System Design",
    //     "Innovation Management",
    //     "Quality Control",
    //   ],
    //   details:
    //     "Our Technical Cell ensures excellence in all technical endeavors. We supervise complex projects, maintain technical standards, and drive innovation across all club activities while fostering a culture of continuous improvement.",
    // },
    // {
    //   id: "media",
    //   title: "Media Cell",
    //   image: "./images/media.png",
    //   description:
    //     "The Media Cell manages the club's digital presence and communication strategies. This includes content creation, social media management, photography, videography, and maintaining the club's brand image across all digital platforms.",
    //   color: "from-orange-500 to-red-500",
    //   technologies: ["Content Creation", "Social Media", "Photography", "Video Editing", "Branding"],
    //   chef: "BARA Mouad",
    //   members: ["ELHAIMAR Morad"],
    //   projects: [
    //     "Digital Marketing Campaign",
    //     "Content Strategy Development",
    //     "Brand Identity Enhancement",
    //   ],
    //   skills: [
    //     "Content Creation",
    //     "Social Media Management",
    //     "Visual Communication",
    //     "Brand Management",
    //   ],
    //   details:
    //     "Our Media Cell amplifies the club's voice across digital platforms. We create engaging content, manage social media presence, and ensure consistent brand communication that resonates with our community.",
    // },//here
    {
      id: "data",
      title: "Data Cell",
      image: "./images/data.png",
      description:
        "The Data Cell is centered around data management and analysis. It involves collecting, storing, processing, and analyzing data to extract valuable insights and support decision-making processes. Data engineering, data science, data visualization, and database management are key components of this domain.",
      color: "from-green-500 to-emerald-500",
      technologies: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
      chef: "AIT ABDELOUAHAB Mehdi",
      members: ["CHAHIRI Abderrahmane"],
      projects: [
        "Market Analysis Dashboard",
        "Predictive Analytics Model",
        "Big Data Processing Pipeline",
      ],
      skills: [
        "Data Analysis",
        "Machine Learning",
        "Statistical Modeling",
        "Data Visualization",
      ],
      details:
        "The Data Cell transforms raw information into actionable insights. Our team works with cutting-edge tools and techniques in data science, machine learning, and business intelligence. We tackle real-world problems using statistical analysis and predictive modeling.",
    },
    {
      id: "devops",
      title: "DevOps Cell",
      image: "./images/DevOps.png",
      description:
        "DevOps stands for Development and Operations. The DevOps Cell aims to bridge the gap between software development and IT operations. It focuses on automating and streamlining the software development lifecycle, from code writing to deployment and maintenance. DevOps practices emphasize collaboration, continuous integration and continuous delivery (CI/CD), infrastructure management, and monitoring.",
      color: "from-orange-500 to-red-500",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      chef: "EL MOUDEN Abdelghafor",
      members: ["AHORRAR Omar"],
      projects: [
        "CI/CD Pipeline Automation",
        "Cloud Infrastructure Setup",
        "Monitoring and Alerting System",
      ],
      skills: [
        "Infrastructure Automation",
        "Cloud Computing",
        "Container Orchestration",
        "System Monitoring",
      ],
      details:
        "Our DevOps Cell focuses on streamlining development workflows and infrastructure management. We work with cloud platforms, automation tools, and monitoring systems to ensure reliable, scalable, and efficient software delivery.",
    },
    {
      id: "design",
      title: "Design Cell",
      image: "./images/design.png",
      description:
        "The Design Cell revolves around various aspects of visual and user experience design. It involves creating aesthetically pleasing and functional designs for products, services, or interfaces. This domain includes graphic design, user interface (UI) design, user experience (UX) design, interaction design, and prototyping.",
      color: "from-pink-500 to-purple-500",
      technologies: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "Prototyping",
        "UI/UX",
      ],
      chef: "ZIZAH Taha",
      members: [],
      projects: [
        "Mobile App UI/UX Design",
        "Brand Identity System",
        "Interactive Website Prototype",
      ],
      skills: [
        "User Interface Design",
        "User Experience Research",
        "Graphic Design",
        "Prototyping",
      ],
      details:
        "The Design Cell creates visually stunning and user-centered designs. Our team specializes in UI/UX design, graphic design, and brand development, ensuring that every project is both beautiful and functional.",
    },
    {
      id: "security",
      title: "Security Cell",
      image: "./images/sec.png",
      description:
        "The Security Cell is dedicated to safeguarding systems, networks, and data from potential threats and unauthorized access. It deals with information security, network security, application security, and cloud security. Professionals in this domain work on implementing security measures, conducting vulnerability assessments, and responding to security incidents.",
      color: "from-red-500 to-orange-600",
      technologies: [
        "Penetration Testing",
        "Cryptography",
        "Network Security",
        "Ethical Hacking",
        "Cybersecurity",
      ],
      chef: "ANADDAM Mohamed",
      members: ["AKALLAL Mohamed Issam"],
      projects: [
        "Vulnerability Assessment Tool",
        "Security Audit Framework",
        "Incident Response System",
      ],
      skills: [
        "Ethical Hacking",
        "Security Auditing",
        "Risk Assessment",
        "Incident Response",
      ],
      details:
        "Our Security Cell is dedicated to protecting digital assets and ensuring cybersecurity. We conduct penetration testing, security audits, and develop security frameworks to protect against evolving threats.",
    },
    {
      id: "algorithmic",
      title: "Algorithmic Cell",
      image: "./images/algor.png",
      description:
        "The Algorithmic Cell focuses on algorithms and computational problem-solving. It deals with designing and analyzing algorithms to solve complex computational problems efficiently. This domain is closely related to computer science and is crucial for various applications, including artificial intelligence, machine learning, optimization, and data analysis.",
      color: "from-violet-500 to-purple-600",
      technologies: [
        "C++",
        "Python",
        "Data Structures",
        "Algorithms",
        "Competitive Programming",
      ],
      chef: "SERJI Asmae",
      members: ["FAJOUI Anass"],
      projects: [
        "Algorithm Optimization Library",
        "Competitive Programming Platform",
        "AI Problem Solver",
      ],
      skills: [
        "Algorithm Design",
        "Data Structures",
        "Problem Solving",
        "Code Optimization",
      ],
      details:
        "The Algorithmic Cell excels in computational problem-solving and algorithm design. We participate in competitive programming contests and develop efficient algorithms for complex computational challenges.",
    },
  ],

  // Information section data
  infoSection: {
    title: "Explore Our Specialized Cells",
    description:
      "Each cell represents a specialized area of expertise where students collaborate on innovative projects, share knowledge, and develop cutting-edge solutions in their chosen field.",
    callToAction: 'Click "Learn More" to discover detailed information about each cell',
  },
};
