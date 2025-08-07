import { useState } from 'react';
import Layout from '../components/Layout';
import { AnimateOnScroll } from '../utilities/animations.jsx';
import jnjdImage from '../assets/images/JNJD3.png';
import idehImage from '../assets/images/IDEH.png';
import jnjd1 from '../assets/images/JNJD1.JPG';
import jnjd2 from '../assets/images/JNJD2.JPG';
import ideh1 from '../assets/images/IDEH1.JPG';
import ideh2 from '../assets/images/IDEH2.JPG';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const mainEvents = [
    {
      id: 1,
      title: "JNJD",
      subtitle: "Journée Nationale du Jeune Développeur",
      englishTitle: "National Day of the Young Developer",
      since: "2005",
      description: "The National Day of Young Developers (JNJD) is an annual event that has been celebrated since 2005, dedicated to young individuals with a passion for programming and a knack for tackling complex algorithmic challenges. JNJD serves as a platform to inspire, engage, and recognize the talents of budding developers, fostering a thriving community in the field of information technology.",
      features: [
        "Competitive Programming (CP) competitions",
        "Workshops with cutting-edge technologies",
        "Conferences from industry experts", 
        "Team collaboration and networking",
        "Algorithmic problem-solving challenges"
      ],
      image: jnjdImage,
      gallery: [jnjd1, jnjd2, jnjdImage],
      category: "Competition",
      color: "from-blue-500 to-cyan-500",
      status: "Annual Event"
    },
    {
      id: 2,
      title: "IDEH", 
      subtitle: "International Day of Ethical Hacking",
      englishTitle: "International Day of Ethical Hacking",
      since: "2019",
      description: "The International Days of Ethical Hacking (IDEH) is an annual event that has been taking place since 2019, bringing together individuals with a passion for cybersecurity and ethical hacking. This unique event aims to challenge and showcase the skills of participants while fostering a spirit of healthy competition.",
      features: [
        "Capture The Flag (CTF) competitions",
        "Cybersecurity scenario simulations", 
        "Vulnerability assessment challenges",
        "Expert-led security workshops",
        "Penetration testing techniques",
        "Threat intelligence sessions"
      ],
      image: idehImage,
      gallery: [ideh1, ideh2, idehImage],
      category: "Cybersecurity",
      color: "from-red-500 to-orange-500",
      status: "Annual Event"
    },
    {
      id: 3,
      title: "DATA EVENT",
      subtitle: "Data Science & Analytics Summit",
      englishTitle: "Coming Soon...",
      since: "TBA",
      description: "An upcoming event focused on data science, machine learning, and advanced analytics. Stay tuned for more details about this exciting addition to our event lineup.",
      features: [
        "Machine Learning workshops",
        "Data visualization challenges",
        "AI research presentations",
        "Industry expert talks",
        "Hands-on data projects"
      ],
      image: null,
      gallery: [],
      category: "Data Science",
      color: "from-purple-500 to-pink-500",
      status: "Coming Soon"
    }
  ];

  const allGalleryImages = [...jnjd1, jnjd2, ideh1, ideh2].filter(Boolean);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Competition': return 'fas fa-code';
      case 'Cybersecurity': return 'fas fa-shield-alt';
      case 'Data Science': return 'fas fa-chart-line';
      default: return 'fas fa-calendar';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Header Section */}
        <AnimateOnScroll animation="glitchIn">
          <div className="text-center mb-16 relative">
            {/* Terminal-style header */}
            <div className="glass-dark p-8 border border-green-400/30 max-w-4xl mx-auto relative overflow-hidden">
              {/* Code decoration */}
              <div className="absolute top-4 right-4 text-green-400/30 font-mono text-xs">
                {`// events.cpp`}
              </div>
              
              <div className="relative z-10">
                <div className="font-mono text-green-400 text-sm mb-4">
                  <span className="text-red-400">[CIT@events]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">ls -la legendary_events/</span>
                </div>
                
                <h1 className="text-5xl font-bold mb-6 terminal-text glow-text">
                  <span className="text-green-400">{'>'}</span>
                  <span className="text-blue-400 ml-2">Events & Activities</span>
                </h1>
                
                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-6">
                  Join our legendary events that have been shaping the IT landscape in Morocco. From competitive programming to ethical hacking, we host the most prestigious tech events.
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainEvents.map((event, index) => (
            <AnimateOnScroll key={event.id} animation="glitchIn" delay={index * 100}>
              <div 
                className="group relative overflow-hidden cyber-card border border-green-400/30 hover:border-green-400 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Header with Hologram Effect */}
                <div className={`relative h-64 bg-gradient-to-br ${event.color} overflow-hidden`}>
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {event.image ? (
                    <div className="relative h-full">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                      />
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-400/20 group-hover:animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <i className={`${getCategoryIcon(event.category)} text-8xl text-white/30 group-hover:text-white/50 transition-colors`}></i>
                    </div>
                  )}
                  
                  {/* Futuristic HUD overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Corner brackets */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-green-400"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-green-400"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-green-400"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-green-400"></div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-xs uppercase tracking-wider">{event.status}</span>
                  </div>
                  
                  {/* Since badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-green-400/50">
                    <span className="text-green-400 font-mono text-sm">Since {event.since}</span>
                  </div>
                </div>

                {/* Event Info Panel */}
                <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
                  {/* Title Section */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-bold terminal-text text-green-400 group-hover:glow-text transition-all duration-300">
                        {event.title}
                      </h2>
                      <i className={`${getCategoryIcon(event.category)} text-blue-400 text-xl`}></i>
                    </div>
                    <h3 className="text-sm text-blue-300 font-mono mb-1">{event.subtitle}</h3>
                    <p className="text-xs text-gray-400 italic">{event.englishTitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-1 mb-6">
                    <div className="text-xs text-green-400 font-mono uppercase tracking-wider mb-2">Key Features:</div>
                    {event.features.slice(0, 3).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-cyan-400 mr-2"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {event.features.length > 3 && (
                      <div className="text-xs text-blue-400 font-mono mt-2">
                        +{event.features.length - 3} more...
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full cyber-button py-3 font-mono text-sm uppercase tracking-wider group-hover:scale-105 transition-transform duration-300">
                    <span className="terminal-prompt flex items-center justify-center">
                      <i className="fas fa-terminal mr-2"></i>
                      Access Event
                    </span>
                  </button>
                </div>

                {/* Glitch effect overlay */}
                <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Futuristic Gallery Section */}
        <AnimateOnScroll animation="glitchIn" delay={600}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="glass-dark p-6 border border-green-400/30 max-w-2xl mx-auto">
                <div className="font-mono text-green-400 text-sm mb-2">
                  <span className="text-red-400">[CIT@gallery]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">./display_memories.sh</span>
                </div>
                <h2 className="text-4xl font-bold terminal-text glow-text">
                  <span className="text-green-400">{'>'}</span>
                  <span className="text-blue-400 ml-2">Event Gallery</span>
                </h2>
              </div>
            </div>
            
            {/* Interactive Gallery Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[jnjd1, jnjd2, ideh1, ideh2].map((image, index) => (
                <AnimateOnScroll key={index} animation="scaleIn" delay={index * 100}>
                  <div className="group relative overflow-hidden cyber-card border border-green-400/30 hover:border-green-400 transition-all duration-500">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Event ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-search-plus text-green-400 text-2xl mb-2"></i>
                        <p className="text-green-400 font-mono text-sm">View Image</p>
                      </div>
                    </div>
                    
                    {/* Corner brackets */}
                    <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <AnimateOnScroll animation="scaleIn">
              <div className="glass-dark max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-green-400/50 relative">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500/20 border border-red-400 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-times"></i>
                </button>

                {/* Modal Header */}
                <div className={`relative h-64 bg-gradient-to-br ${selectedEvent.color} overflow-hidden`}>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,255,65,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,65,0.5) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 flex items-end">
                    <div className="p-8 w-full">
                      <h2 className="text-5xl font-bold terminal-text glow-text mb-2">{selectedEvent.title}</h2>
                      <p className="text-2xl text-green-400 font-mono">{selectedEvent.subtitle}</p>
                      <p className="text-lg text-blue-300 italic mt-2">{selectedEvent.englishTitle}</p>
                    </div>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Description and Features */}
                    <div>
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-green-400 mb-3 font-mono flex items-center">
                          <i className="fas fa-info-circle mr-2"></i>
                          Description
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-green-400 mb-4 font-mono flex items-center">
                          <i className="fas fa-list-ul mr-2"></i>
                          Event Features
                        </h3>
                        <div className="space-y-3">
                          {selectedEvent.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                              <div className="flex items-center justify-center w-6 h-6 bg-green-400/20 border border-green-400/50 mr-3 mt-0.5">
                                <span className="text-green-400 text-xs">{index + 1}</span>
                              </div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Gallery and Info */}
                    <div>
                      {selectedEvent.image && (
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-green-400 mb-3 font-mono flex items-center">
                            <i className="fas fa-image mr-2"></i>
                            Event Showcase
                          </h3>
                          <div className="relative group">
                            <img 
                              src={selectedEvent.image} 
                              alt={selectedEvent.title}
                              className="w-full h-64 object-cover border border-green-400/50"
                            />
                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      )}
                      
                      {selectedEvent.gallery.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-green-400 mb-3 font-mono flex items-center">
                            <i className="fas fa-images mr-2"></i>
                            Gallery
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {selectedEvent.gallery.map((img, index) => (
                              <div key={index} className="relative group overflow-hidden border border-green-400/30 hover:border-green-400 transition-colors">
                                <img 
                                  src={img} 
                                  alt={`${selectedEvent.title} ${index + 1}`}
                                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-green-400/30">
                    <button className="cyber-button py-3 px-8 font-mono uppercase tracking-wider">
                      <span className="terminal-prompt">Register Now</span>
                    </button>
                    <button className="cyber-button-outline py-3 px-8 font-mono uppercase tracking-wider">
                      <span className="terminal-prompt">Learn More</span>
                    </button>
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

export default Events;
