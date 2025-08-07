import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: '/home/CIT' },
    { path: '/cells', label: '~/cells' },
    { path: '/events', label: '~/events' },
    { path: '/team', label: '~/our team' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-dark backdrop-blur-lg shadow-2xl border-b border-green-400/20' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand with typing effect */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="terminal-text text-lg font-bold hover:glow-text transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-green-400">CIT@cit-inpt.com</span>
              <span className="text-blue-400 ml-2">~</span>
              <span className="text-purple-400 ml-1">$</span>
              <span className="animate-pulse ml-1">_</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? 'bg-green-400/20 text-green-400 shadow-lg shadow-green-400/25 neon-border'
                      : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10 hover:shadow-lg hover:shadow-green-400/10'
                  }`}
                >
                  <span className="terminal-prompt">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-green-400 border border-green-400/50 hover:text-black hover:bg-green-400 hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with slide animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-dark border-t border-green-400/20">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-mono transition-all duration-300 transform hover:scale-105 ${
                isActive(item.path)
                  ? 'bg-green-400/20 text-green-400 shadow-lg shadow-green-400/25 neon-border'
                  : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10'
              }`}
            >
              <span className="terminal-prompt">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
