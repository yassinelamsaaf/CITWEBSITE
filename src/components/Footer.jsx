const Footer = () => {
  const socialLinks = [
    {
      href: "https://facebook.com/cit.inpt",
      icon: "fab fa-facebook",
      title: "Facebook",
      color: "hover:text-blue-400 hover:shadow-blue-400/50"
    },
    {
      href: "https://www.linkedin.com/company/cit-inpt/",
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      color: "hover:text-blue-300 hover:shadow-blue-300/50"
    },
    {
      href: "https://instagram.com/cit.inpt",
      icon: "fab fa-instagram",
      title: "Instagram",
      color: "hover:text-pink-400 hover:shadow-pink-400/50"
    },
    {
      href: "mailto:cit.inpt@gmail.com",
      icon: "fas fa-envelope",
      title: "Email",
      color: "hover:text-purple-400 hover:shadow-purple-400/50"
    }
  ];

  return (
    <footer className="glass-dark border-t border-green-400/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              className={`text-gray-400 ${link.color} transition-all duration-300 transform hover:scale-125 hover:rotate-12`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${link.icon} text-3xl hover:drop-shadow-lg`} aria-hidden="true"></i>
            </a>
          ))}
        </div>

        {/* Copyright and terminal-style info */}
        <div className="text-center space-y-2">
          <div className="terminal-text text-sm">
            <span className="text-green-400">root@cit-inpt.com</span>
            <span className="text-blue-400 mx-2">:</span>
            <span className="text-purple-400">~</span>
            <span className="text-green-400 ml-2">$</span>
            <span className="text-gray-300 ml-2">echo "© 2025 CIT Club - Club Informatique & Telecoms"</span>
          </div>
          <div className="text-gray-500 text-xs font-mono">
            <span className="text-green-400">[INFO]</span> System uptime: Since 2005 | 
            <span className="text-blue-400 ml-2">[STATUS]</span> All systems operational | 
            <span className="text-purple-400 ml-2">[BUILD]</span> React + Tailwind CSS
          </div>
        </div>

        {/* Terminal command simulation */}
        <div className="mt-6 text-center">
          <div className="inline-block glass p-3 rounded-lg border border-green-400/30">
            <div className="terminal-text text-xs">
              <span className="text-green-400">visitor@cit-website</span>
              <span className="text-blue-400">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-green-400">$ </span>
              <span className="text-gray-300 typing-animation" style={{ width: '200px' }}>
                join_the_club.sh --passion=tech
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
