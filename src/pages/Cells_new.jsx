import Layout from '../components/Layout';
import { AnimateOnScroll } from '../utilities/animations.jsx';

const Cells = () => {
  const cells = [
    {
      id: 'web',
      title: 'Web Cell',
      image: '/src/assets/images/web.png',
      description: 'The Web Cell focuses on web development and related technologies. It deals with designing, building, and maintaining websites, web applications, and online services. This domain covers various aspects, including front-end development (user interface and user experience), back-end development (server-side logic and databases), web security, and web performance optimization.',
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      id: 'data',
      title: 'Data Cell',
      image: '/src/assets/images/data.png',
      description: 'The Data Cell is centered around data management and analysis. It involves collecting, storing, processing, and analyzing data to extract valuable insights and support decision-making processes. Data engineering, data science, data visualization, and database management are key components of this domain.',
      color: 'from-green-500 to-emerald-500',
      technologies: ['Python', 'R', 'SQL', 'Tableau', 'Machine Learning']
    },
    {
      id: 'devops',
      title: 'DevOps Cell',
      image: '/src/assets/images/DevOps.png',
      description: 'DevOps stands for Development and Operations. The DevOps Cell aims to bridge the gap between software development and IT operations. It focuses on automating and streamlining the software development lifecycle, from code writing to deployment and maintenance. DevOps practices emphasize collaboration, continuous integration and continuous delivery (CI/CD), infrastructure management, and monitoring.',
      color: 'from-orange-500 to-red-500',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform']
    },
    {
      id: 'design',
      title: 'Design Cell',
      image: '/src/assets/images/design.png',
      description: 'The Design Cell revolves around various aspects of visual and user experience design. It involves creating aesthetically pleasing and functional designs for products, services, or interfaces. This domain includes graphic design, user interface (UI) design, user experience (UX) design, interaction design, and prototyping.',
      color: 'from-pink-500 to-purple-500',
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Prototyping', 'UI/UX']
    },
    {
      id: 'security',
      title: 'Security Cell',
      image: '/src/assets/images/sec.png',
      description: 'The Security Cell is dedicated to safeguarding systems, networks, and data from potential threats and unauthorized access. It deals with information security, network security, application security, and cloud security. Professionals in this domain work on implementing security measures, conducting vulnerability assessments, and responding to security incidents.',
      color: 'from-red-500 to-orange-600',
      technologies: ['Penetration Testing', 'Cryptography', 'Network Security', 'Ethical Hacking', 'Cybersecurity']
    },
    {
      id: 'algorithmic',
      title: 'Algorithmic Cell',
      image: '/src/assets/images/algor.png',
      description: 'The Algorithmic Cell focuses on algorithms and computational problem-solving. It deals with designing and analyzing algorithms to solve complex computational problems efficiently. This domain is closely related to computer science and is crucial for various applications, including artificial intelligence, machine learning, optimization, and data analysis.',
      color: 'from-violet-500 to-purple-600',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Competitive Programming']
    }
  ];

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
                  <span className="text-green-400">{'>'}</span>
                  <span className="text-blue-400 ml-2">Our Cells</span>
                </h1>
                
                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-6">
                  Discover our specialized cells where passionate students collaborate, learn, and innovate in various domains of information technology and telecommunications.
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cells Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cells.map((cell, index) => (
            <AnimateOnScroll key={cell.id} animation="glitchIn" delay={index * 150}>
              <div className="cyber-card p-8 h-full group relative overflow-hidden border border-green-400/30 hover:border-green-400 transition-all duration-500">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cell.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Cell icon and title */}
                <div className="relative z-10 flex items-start space-x-6 mb-6">
                  {/* Icon container */}
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 bg-gradient-to-br ${cell.color} p-3 relative group-hover:scale-110 transition-transform duration-300 border-2 border-green-400/50 group-hover:border-green-400`}>
                      <img
                        src={cell.image}
                        alt={cell.title}
                        className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cell.title)}&background=1a1a2e&color=00ff41&size=128`;
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
                    <button className={`cyber-button-small py-2 px-6 font-mono text-sm bg-gradient-to-r ${cell.color} bg-opacity-20 border border-green-400/30 hover:border-green-400 hover:bg-opacity-30 transition-all duration-300 group-hover:scale-105`}>
                      <span className="terminal-prompt text-xs">Join Cell</span>
                    </button>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cell.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Particle effects on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 animate-ping"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${20 + i * 15}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to action */}
        <AnimateOnScroll animation="glitchIn" delay={1000}>
          <div className="mt-16 text-center">
            <div className="glass-dark p-8 border border-green-400/30 max-w-4xl mx-auto relative overflow-hidden">
              {/* Terminal prompt */}
              <div className="font-mono text-green-400 text-sm mb-6">
                <span className="text-red-400">[CIT@recruitment]</span>
                <span className="text-blue-400 mx-2">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-green-400 ml-2">$</span>
                <span className="text-gray-300 ml-2">./join_cell.sh</span>
              </div>
              
              <h2 className="text-3xl font-bold terminal-text mb-4 text-green-400">
                Ready to Join a Cell?
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Choose your specialization and start collaborating with like-minded students on exciting projects that shape the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button py-4 px-8 font-mono uppercase tracking-wider transform hover:scale-105 transition-all duration-300">
                  <span className="terminal-prompt">Initialize Application</span>
                </button>
                <button className="cyber-button-outline py-4 px-8 font-mono uppercase tracking-wider transform hover:scale-105 transition-all duration-300">
                  <span className="terminal-prompt">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </Layout>
  );
};

export default Cells;
