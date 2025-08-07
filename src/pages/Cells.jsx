import Layout from "../components/Layout";
import { AnimateOnScroll } from "../utilities/animations.jsx";
import { useState, useEffect } from "react";

const Cells = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const cells = [
    {
      id: "web",
      title: "Web Cell",
      image: "/CITWEBSITE/images/web.png",
      description:
        "The Web Cell focuses on web development and related technologies. It deals with designing, building, and maintaining websites, web applications, and online services. This domain covers various aspects, including front-end development (user interface and user experience), back-end development (server-side logic and databases), web security, and web performance optimization.",
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Node.js", "JavaScript", "HTML5", "CSS3"],
      chef: "Sarah El Mansouri",
      members: ["Ahmed Benali", "Fatima Zahra"],
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
    {
      id: "data",
      title: "Data Cell",
      image: "/CITWEBSITE/images/data.png",
      description:
        "The Data Cell is centered around data management and analysis. It involves collecting, storing, processing, and analyzing data to extract valuable insights and support decision-making processes. Data engineering, data science, data visualization, and database management are key components of this domain.",
      color: "from-green-500 to-emerald-500",
      technologies: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
      chef: "Dr. Omar Benkirane",
      members: ["Aicha Hammadi", "Rachid Bouali"],
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
      image: "/CITWEBSITE/images/DevOps.png",
      description:
        "DevOps stands for Development and Operations. The DevOps Cell aims to bridge the gap between software development and IT operations. It focuses on automating and streamlining the software development lifecycle, from code writing to deployment and maintenance. DevOps practices emphasize collaboration, continuous integration and continuous delivery (CI/CD), infrastructure management, and monitoring.",
      color: "from-orange-500 to-red-500",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
      chef: "Karim Alaoui",
      members: ["Layla Benali", "Hassan Idrissi"],
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
      image: "/CITWEBSITE/images/design.png",
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
      chef: "Amina Kadiri",
      members: ["Yassine Bouazza", "Khadija Senhaji"],
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
      image: "/CITWEBSITE/images/sec.png",
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
      chef: "Reda El Mokhtari",
      members: ["Imane Zouaki", "Abdelali Berrada"],
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
      image: "/CITWEBSITE/images/algor.png",
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
      chef: "Ismail Benali",
      members: ["Sara Alami", "Khalid Fassi"],
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
  ];

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedCell) {
        setSelectedCell(null);
      }
    };

    if (selectedCell) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedCell]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <AnimateOnScroll animation="glitchIn">
          <div className="text-center mb-16 relative">
            {/* Terminal-style header */}
            <div className="glass-dark p-8 border border-green-400/30 max-w-4xl mx-auto relative overflow-hidden">
              {/* Code decoration */}
              <div className="absolute top-4 right-4 text-green-400/30 font-mono text-xs">
                {`// cells.hpp`}
              </div>

              <div className="relative z-10">
                <div className="font-mono text-green-400 text-sm mb-4">
                  <span className="text-red-400">[CIT@specializations]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">cat cells.txt</span>
                </div>

                <h1 className="text-5xl font-bold mb-6 terminal-text glow-text">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">Our Cells</span>
                </h1>

                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-6">
                  Discover our specialized cells where passionate students
                  collaborate, learn, and innovate in various domains of
                  information technology and telecommunications.
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cells Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cells.map((cell, index) => (
            <AnimateOnScroll
              key={cell.id}
              animation="glitchIn"
              delay={index * 150}
            >
              <div className="cyber-card p-8 h-full group relative overflow-hidden border border-green-400/30 hover:border-green-400 transition-all duration-500">
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cell.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Cell icon and title */}
                <div className="relative z-10 flex items-start space-x-6 mb-6">
                  {/* Icon container */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${cell.color} p-3 relative group-hover:scale-110 transition-transform duration-300 border-2 border-green-400/50 group-hover:border-green-400`}
                    >
                      <img
                        src={cell.image}
                        alt={cell.title}
                        className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            cell.title
                          )}&background=1a1a2e&color=00ff41&size=128`;
                        }}
                      />

                      {/* Corner accent */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 transform rotate-45"></div>
                    </div>
                  </div>

                  {/* Title and tech stack */}
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold terminal-text mb-3 group-hover:text-green-400 transition-colors">
                      {cell.title}
                    </h2>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cell.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-mono border border-green-400/30 text-green-300 bg-gradient-to-r ${cell.color} bg-opacity-20 hover:border-green-400 hover:bg-opacity-30 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors mb-6">
                    {cell.description}
                  </p>

                  {/* Action button */}
                  <div className="flex justify-end">
                    <button
                      className={`cyber-button-small py-2 px-6 font-mono text-sm bg-gradient-to-r ${cell.color} bg-opacity-20 border border-green-400/30 hover:border-green-400 hover:bg-opacity-30 transition-all duration-300 group-hover:scale-105`}
                      onClick={() => setSelectedCell(cell)}
                    >
                      <span className="terminal-prompt text-xs">
                        Learn More
                      </span>
                    </button>
                  </div>
                </div>

                {/* Animated border effect */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cell.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* Particle effects on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 animate-ping"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                        animationDelay: `${i * 200}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Information Section */}
        <AnimateOnScroll animation="glitchIn" delay={1000}>
          <div className="mt-16 text-center">
            <div className="glass-dark p-8 border border-green-400/30 max-w-4xl mx-auto relative overflow-hidden">
              {/* Terminal prompt */}
              <div className="font-mono text-green-400 text-sm mb-6">
                <span className="text-red-400">[CIT@info]</span>
                <span className="text-blue-400 mx-2">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-green-400 ml-2">$</span>
                <span className="text-gray-300 ml-2">cat cell_info.md</span>
              </div>

              <h2 className="text-3xl font-bold terminal-text mb-4 text-green-400">
                Explore Our Specialized Cells
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Each cell represents a specialized area of expertise where
                students collaborate on innovative projects, share knowledge,
                and develop cutting-edge solutions in their chosen field.
              </p>

              <div className="text-green-400 font-mono text-sm">
                <span className="animate-pulse">{">"}</span> Click "Learn More"
                to discover detailed information about each cell
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cell Detail Modal */}
        {selectedCell && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto"
            onClick={() => setSelectedCell(null)}
          >
            <AnimateOnScroll animation="scaleIn">
              <div
                className="glass-dark max-w-6xl w-full min-h-[80vh] border border-green-400/50 relative my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedCell(null)}
                  className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-red-500/20 border border-red-400 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>

                {/* Header */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${selectedCell.color} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-white">
                      {selectedCell.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Overview
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedCell.details}
                    </p>
                  </div>

                  {/* Cell Chef */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Cell Chef
                    </h3>
                    <div className="glass-dark p-4 border border-green-400/30">
                      <p className="text-white text-xl font-semibold">
                        {selectedCell.chef}
                      </p>
                      <p className="text-gray-400 text-sm">
                        Leading expert and mentor for the {selectedCell.title}
                      </p>
                    </div>
                  </div>

                  {/* Members */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Active Members
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedCell.members.map((member, index) => (
                        <div
                          key={index}
                          className="glass-dark p-3 border border-green-400/30 text-center"
                        >
                          <p className="text-white font-semibold text-sm">
                            {member}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Projects */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Current Projects
                    </h3>
                    <div className="space-y-3">
                      {selectedCell.projects.map((project, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 border border-green-400/30 border-l-4"
                        >
                          <p className="text-white font-semibold">{project}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Key Skills Developed
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedCell.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 border border-green-400/50 text-green-300 bg-gradient-to-r ${selectedCell.color} bg-opacity-20 font-mono text-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedCell.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 border border-green-400/30 text-green-400 bg-gradient-to-r ${selectedCell.color} bg-opacity-10 font-mono text-sm hover:border-green-400 transition-colors`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cells;
