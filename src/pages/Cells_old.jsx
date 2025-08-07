import Layout from '../components/Layout';
import algorLogo from '../assets/images/algor.png';
import dataLogo from '../assets/images/data.png';
import data2Logo from '../assets/images/data2.png';
import designLogo from '../assets/images/design.png';
import devopsLogo from '../assets/images/DevOps.png';
import secLogo from '../assets/images/sec.png';
import webLogo from '../assets/images/web.png';

const Cells = () => {
  const cells = [
    {
      id: 1,
      name: "Algorithms & Data Structures",
      image: algorLogo,
      description: "Master the fundamentals of computer science with algorithmic thinking and efficient data structures.",
      color: "from-blue-500 to-cyan-600",
      icon: "fas fa-code"
    },
    {
      id: 2,
      name: "Data Science",
      image: dataLogo,
      description: "Explore the world of data analysis, machine learning, and statistical modeling.",
      color: "from-green-500 to-emerald-600",
      icon: "fas fa-chart-line"
    },
    {
      id: 3,
      name: "Advanced Data Analytics",
      image: data2Logo,
      description: "Deep dive into advanced analytics, big data processing, and AI technologies.",
      color: "from-purple-500 to-violet-600",
      icon: "fas fa-brain"
    },
    {
      id: 4,
      name: "UI/UX Design",
      image: designLogo,
      description: "Create beautiful and intuitive user interfaces with modern design principles.",
      color: "from-pink-500 to-rose-600",
      icon: "fas fa-palette"
    },
    {
      id: 5,
      name: "DevOps",
      image: devopsLogo,
      description: "Learn continuous integration, deployment, and infrastructure management.",
      color: "from-orange-500 to-red-600",
      icon: "fas fa-tools"
    },
    {
      id: 6,
      name: "Cybersecurity",
      image: secLogo,
      description: "Protect digital assets and learn about information security and ethical hacking.",
      color: "from-red-500 to-pink-600",
      icon: "fas fa-shield-alt"
    },
    {
      id: 7,
      name: "Web Development",
      image: webLogo,
      description: "Build modern web applications using cutting-edge technologies and frameworks.",
      color: "from-indigo-500 to-blue-600",
      icon: "fas fa-globe"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Cells
          </h1>
          <p className="text-xl text-green-300 max-w-3xl mx-auto leading-relaxed">
            Discover our specialized cells where passionate students collaborate, learn, and innovate 
            in various domains of information technology and telecommunications.
          </p>
        </div>

        {/* Cells Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cells.map((cell) => (
            <div 
              key={cell.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br p-6 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${cell.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <img 
                  src={cell.image} 
                  alt={cell.name}
                  className="w-24 h-24 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cell.color} flex items-center justify-center text-white mr-3`}>
                    <i className={`${cell.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {cell.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {cell.description}
                </p>
                <div className={`h-1 w-full bg-gradient-to-r ${cell.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join a Cell?</h2>
            <p className="text-xl mb-6 opacity-90">
              Choose your area of interest and start your journey with like-minded peers.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cells;
