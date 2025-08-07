import Layout from '../components/Layout';
import { AnimateOnScroll } from '../utilities/animations.jsx';
import citLogo from '../assets/images/Logo CIT.png';
import datacampLogo from '../assets/images/DataCamp.png';

const Home = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <AnimateOnScroll animation="glitchIn">
          <section className="mb-20 relative">
            {/* Logo and Title Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center mb-16">
              {/* Logo - 30% width with margin */}
              <div className="lg:col-span-3 flex justify-center lg:justify-end lg:mr-8 mb-8 lg:mb-0">
                <div className="relative">
                  <div className="w-72 h-72 relative">
                    {/* Outer glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-none transform rotate-45 blur-lg opacity-30 animate-pulse"></div>
                    
                    {/* Main hexagonal container */}
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-45 border-4 border-green-400 shadow-2xl shadow-green-400/25">
                      {/* Logo - properly centered and larger */}
                      <div className="absolute inset-4 flex items-center justify-center">
                        <img 
                          src={citLogo} 
                          alt="CIT Club Logo" 
                          className="w-full h-full object-contain transform -rotate-45 hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Animated corner accents */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-400 transform rotate-45 animate-pulse"></div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 transform rotate-45 animate-pulse delay-200"></div>
                      <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-purple-400 transform rotate-45 animate-pulse delay-400"></div>
                      <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-cyan-400 transform rotate-45 animate-pulse delay-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal-style title - 70% width */}
              <div className="lg:col-span-7 flex justify-center lg:justify-start">
                <div className="glass-dark p-10 border-l-4 border-green-400 max-w-full w-full">
                  <div className="font-mono text-left">
                    <div className="text-green-400 text-lg mb-4 animate-pulse">
                      <span className="text-2xl">{'>'}</span> Initializing CIT Club...
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold terminal-text glow-text mb-6 leading-tight">
                      Club Informatique & Telecoms
                    </h1>
                    <div className="text-green-400 text-lg animate-pulse">
                      <span className="text-2xl">{'>'}</span> Status: Operational since 1996
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Mission Statement */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <section className="mb-20">
            <div className="glass-dark p-12 border border-green-400/30 max-w-6xl mx-auto relative overflow-hidden">
              {/* Code-like decoration */}
              <div className="absolute top-4 right-4 text-green-400/30 font-mono text-xs">
                {`// mission.cpp`}
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold terminal-text mb-8 flex items-center">
                  <span className="text-green-400 mr-3">$</span>
                  <span className="text-purple-400">cat</span>
                  <span className="text-blue-400 ml-2">mission.txt</span>
                </h2>
                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-8 py-4">
                  The CIT club is the first IT club in Morocco and has as a goal to gather passionate students reach their goals in IT by offering courses throughout the year and make them compete in competitions.
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Collaborators Section */}
        <AnimateOnScroll animation="glitchIn" delay={400}>
          <section className="glass-dark border border-green-400/30 p-8 mb-20 relative overflow-hidden">
            {/* Terminal header */}
            <div className="mb-8">
              <div className="font-mono text-green-400 text-sm mb-2">
                <span className="text-red-400">[CIT@partnerships]</span>
                <span className="text-blue-400 mx-2">:</span>
                <span className="text-purple-400">~</span>
                <span className="text-green-400 ml-2">$</span>
                <span className="text-gray-300 ml-2">ls -la collaborators/</span>
              </div>
              <h2 className="text-3xl font-bold terminal-text mb-2">
                <span className="text-green-400">&gt;</span>
                <span className="text-blue-400 ml-2">DataCamp Partnership</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* DataCamp Logo */}
              <div className="order-2 lg:order-1 lg:col-span-2">
                <a 
                  href="https://www.datacamp.com/donates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="glass p-6 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-400/25">
                    <img 
                      src={datacampLogo} 
                      alt="DataCamp" 
                      className="w-full h-auto max-w-sm mx-auto filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </a>
              </div>
              
              {/* Partnership Details */}
              <div className="order-1 lg:order-2 lg:col-span-3 flex flex-col h-full">
                <div className="terminal-text flex-grow">
                  <div className="text-green-400 text-2xl font-bold mb-6">
                    <span className="animate-pulse">{'>'}</span> Partnership Active
                  </div>
                  <p className="text-gray-300 leading-relaxed text-2xl mb-8 w-full max-w-none">
                    Learn Data Science & AI from the comfort of your browser, at your own pace with DataCamp's video tutorials & coding challenges on R, Python, Statistics & more.
                  </p>
                </div>
                
                <div className="flex justify-start mt-auto">
                  <a 
                    href="https://www.datacamp.com/donates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button inline-block py-4 px-8 font-mono uppercase tracking-wider transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="terminal-prompt">Join Now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Features Grid */}
        <AnimateOnScroll animation="glitchIn" delay={600}>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((feature, index) => (
              <AnimateOnScroll key={index} animation="scaleIn" delay={feature.delay + 800}>
                <div className="cyber-card p-6 h-full group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 relative`}>
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                    
                    {/* Corner accents */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 transform rotate-45"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 transform rotate-45"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold terminal-text mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Hover line effect */}
                  <div className={`h-1 w-0 bg-gradient-to-r ${feature.color} mt-4 group-hover:w-full transition-all duration-500`}></div>
                </div>
              </AnimateOnScroll>
            ))}
          </section>
        </AnimateOnScroll>
      </div>
    </Layout>
  );
};

export default Home;
