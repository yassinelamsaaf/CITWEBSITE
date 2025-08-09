import Layout from "../components/Layout";
import { AnimateOnScroll } from "../utilities/animations.jsx";
import { useState, useEffect } from "react";
import { cellsData } from "../data/CellsData.js";

const Cells = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  
  // Extract data from cellsData
  const { cells, infoSection } = cellsData;

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
                          className={`px-3 py-1 text-xs font-mono border border-green-400/30 text-white bg-gradient-to-r ${cell.color} bg-opacity-20 hover:border-green-400 hover:bg-opacity-30 transition-all duration-300`}
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
                      <span className="terminal-prompt text-xs text-white">
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
                {infoSection.title}
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {infoSection.description}
              </p>

              <div className="text-green-400 font-mono text-sm">
                <span className="animate-pulse">{">"}</span> {infoSection.callToAction}
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

                  {/* Cell Heads */}
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
                      {">"} Cell Heads
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Chief */}
                      <div className="glass-dark p-4 border border-green-400/50 text-center">
                        <div className="mb-2">
                          <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                          <span className="text-yellow-400 text-xs font-mono">CHIEF</span>
                        </div>
                        <p className="text-white font-semibold text-sm">
                          {selectedCell.chef}
                        </p>
                      </div>
                      
                      {/* Co-Chiefs/Members */}
                      {selectedCell.members.map((member, index) => (
                        <div
                          key={index}
                          className="glass-dark p-4 border border-green-400/30 text-center"
                        >
                          <div className="mb-2">
                            <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                            <span className="text-green-400 text-xs font-mono">CO-CHIEF</span>
                          </div>
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
                      {selectedCell.projects && selectedCell.projects.length > 0 ? (
                        selectedCell.projects.map((project, index) => (
                          <div
                            key={index}
                            className="glass-dark p-4 border border-green-400/30 border-l-4"
                          >
                            {selectedCell.id === "web" && project === "CIT Platform" ? (
                              <a
                                href="https://yassinelamsaaf.github.io/CITWEBSITE/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-semibold hover:text-green-400 transition-colors cursor-pointer"
                              >
                                {project}
                              </a>
                            ) : (
                              <p className="text-white font-semibold">{project}</p>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="glass-dark p-4 border border-green-400/30 border-l-4">
                          <p className="text-gray-400 font-semibold italic">Coming soon</p>
                        </div>
                      )}
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
                          className={`px-4 py-2 border border-green-400/50 text-white bg-gradient-to-r ${selectedCell.color} bg-opacity-20 font-mono text-sm`}
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
                          className={`px-4 py-2 border border-green-400/30 text-white bg-gradient-to-r ${selectedCell.color} bg-opacity-10 font-mono text-sm hover:border-green-400 transition-colors`}
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
