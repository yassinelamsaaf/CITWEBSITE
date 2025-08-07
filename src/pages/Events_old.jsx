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
      gallery: [jnjd1, jnjd2],
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
      gallery: [ideh1, ideh2],
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {mainEvents.map((event, index) => (
            <AnimateOnScroll key={event.id} animation="glitchIn" delay={index * 200}>
              <div 
                className="cyber-card rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 relative"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Header */}
                <div className={`relative h-48 bg-gradient-to-br ${event.color} overflow-hidden`}>
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <i className={`${getCategoryIcon(event.category)} text-6xl text-white/30`}></i>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${event.color} text-white text-xs font-bold rounded-full border border-white/20`}>
                      {event.category}
                    </span>
                  </div>
                  
                  {/* Status badge */}
                  {event.status && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full animate-pulse">
                        {event.status}
                      </span>
                    </div>
                  )}
                  
                  {/* Since badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white/80 text-sm font-mono">
                      Since {event.since}
                    </span>
                  </div>
                  
                  {/* Glitch effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-green-400 pointer-events-none transition-opacity duration-200"></div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                    {event.subtitle}
                  </h3>
                  <p className="text-sm text-blue-300 mb-4 font-mono italic">
                    {event.englishTitle}
                  </p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-1 mb-4">
                    {event.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <span className="text-green-400 mr-2">{'>'}</span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                    {event.features.length > 3 && (
                      <div className="text-xs text-blue-400 font-mono">
                        +{event.features.length - 3} more features...
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className="w-full cyber-button py-3 px-4 rounded-lg font-mono text-sm uppercase tracking-wider">
                    <span className="terminal-prompt">Learn More</span>
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold terminal-text text-center mb-8 glow-text">
            <span className="text-red-400">// </span>Event Gallery
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[jnjd1, jnjd2, ideh1, ideh2].map((image, index) => (
              <div 
                key={index}
                className="cyber-card rounded-lg overflow-hidden group cursor-pointer aspect-square"
              >
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-dark p-8 rounded-2xl neon-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold terminal-text mb-4 glow-text">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-gray-300 mb-6 font-mono">
              <span className="text-green-400">$ </span>
              Subscribe to get notified about upcoming events and exclusive opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="user@domain.com"
                className="flex-1 px-4 py-3 bg-black/50 border border-green-400/50 rounded-lg text-green-400 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:shadow-lg focus:shadow-green-400/25 font-mono"
              />
              <button className="cyber-button py-3 px-6 rounded-lg font-mono uppercase tracking-wider">
                Join Network
              </button>
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto neon-border">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl font-bold terminal-text glow-text">{selectedEvent.title}</h2>
                    <p className="text-xl text-green-400 font-mono">{selectedEvent.subtitle}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="text-red-400 hover:text-red-300 text-2xl"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-6">{selectedEvent.description}</p>
                    
                    <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">Features:</h3>
                    <div className="space-y-2">
                      {selectedEvent.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-green-400 mr-3">{'>'}</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    {selectedEvent.image && (
                      <img 
                        src={selectedEvent.image} 
                        alt={selectedEvent.title}
                        className="w-full rounded-lg mb-4 neon-border"
                      />
                    )}
                    
                    {selectedEvent.gallery.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {selectedEvent.gallery.map((img, index) => (
                          <img 
                            key={index}
                            src={img} 
                            alt={`${selectedEvent.title} ${index + 1}`}
                            className="w-full rounded cyber-card"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;
