import { useState } from "react";
import Layout from "../components/Layout";
import { AnimateOnScroll } from "../utilities/animations.jsx";
import { teamData } from "../data/TeamData.js";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Extract data from teamData
  const { president, executives, cells, getCellColor, stats } = teamData;
  
  // Create teamStructure for backward compatibility
  const teamStructure = { president, executives, cells };

  const MemberCard = ({
    member,
    isChief = false,
    cellColor = "from-blue-500 to-cyan-500",
    delay = 0,
  }) => (
    <AnimateOnScroll animation="scaleIn" delay={delay}>
      <div
        className={`cyber-card p-4 group cursor-pointer relative overflow-hidden ${
          isChief ? "border-2 border-green-400" : "border border-blue-400/30"
        }`}
        onClick={() => setSelectedMember(member)}
      >
        {/* Role indicator */}
        {isChief && (
          <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        )}

        {/* Avatar - Same size for all */}
        <div className="relative mb-4">
          <div
            className={`w-24 h-24 mx-auto bg-gradient-to-br ${cellColor} rounded-lg overflow-hidden border-2 ${
              isChief ? "border-green-400" : "border-blue-400/50"
            } group-hover:scale-110 transition-transform duration-300`}
          >
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ display: member.image ? "none" : "flex" }}
            >
              <i className="fas fa-user text-white text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <h4 className="text-sm font-bold terminal-text mb-1 group-hover:text-green-400 transition-colors">
            {member.name}
          </h4>
          <p className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors">
            {member.role}
          </p>
        </div>

        {/* Hover effect */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cellColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
        ></div>
      </div>
    </AnimateOnScroll>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center mb-16 relative">
            {/* Terminal-style header */}
            <div className="glass-dark p-8 border border-green-400/30 max-w-4xl mx-auto relative overflow-hidden">
              {/* Code decoration */}
              <div className="absolute top-4 right-4 text-green-400/30 font-mono text-xs">
                {`// organization.hpp`}
              </div>

              <div className="relative z-10">
                <div className="font-mono text-green-400 text-sm mb-4">
                  <span className="text-red-400">[CIT@leadership]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">
                    cat organizational_chart.txt
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 terminal-text glow-text">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">
                    Organizational Chart
                  </span>
                </h1>

                <div className="terminal-text text-green-300 leading-relaxed text-base md:text-xl border-l-2 border-green-400/50 pl-6">
                  Our dedicated team of passionate students and professionals
                  working together to build an amazing community and drive
                  innovation in technology.
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* President */}
        <AnimateOnScroll animation="fadeInUp" delay={100}>
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="cyber-card p-8 border-4 border-green-400 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden group">
                {/* Crown icon */}
                <div className="absolute top-4 right-4 text-yellow-400 text-2xl">
                  <i className="fas fa-crown"></i>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg overflow-hidden border-4 border-green-400">
                    <img
                      src={teamStructure.president.image}
                      alt={teamStructure.president.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center"><i class="fas fa-user text-white text-4xl"></i></div>';
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-bold terminal-text text-green-400 mb-1">
                      {teamStructure.president.name}
                    </h2>
                    <p className="text-lg text-yellow-400 font-mono mb-2">
                      {teamStructure.president.role}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {teamStructure.president.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Executives */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold terminal-text text-center mb-8 text-blue-400">
              Executive Board
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamStructure.executives.map((exec, index) => (
                <div
                  key={index}
                  className="cyber-card p-6 border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden border-2 border-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            '<div class="w-full h-full flex items-center justify-center"><i class="fas fa-user text-white text-3xl"></i></div>';
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold terminal-text mb-1 group-hover:text-blue-400 transition-colors">
                      {exec.name}
                    </h3>
                    <p className="text-blue-300 font-mono text-sm mb-2">
                      {exec.role}
                    </p>
                    <p className="text-gray-400 text-xs">{exec.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Cells Grid */}
        <AnimateOnScroll animation="fadeInUp" delay={300}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold terminal-text text-center mb-8 text-purple-400">
              Specialized Cells
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Object.entries(teamStructure.cells).map(
                ([cellName, cellData], cellIndex) => {
                  const totalCells = Object.entries(teamStructure.cells).length;
                  const isLastCell = cellIndex === totalCells - 1;
                  const remainderCells = totalCells % 3;
                  const shouldCenter = isLastCell && remainderCells === 1;

                  return (
                    <div
                      key={cellName}
                      className={`${
                        shouldCenter
                          ? "xl:col-span-3 xl:flex xl:justify-center"
                          : ""
                      }`}
                    >
                      <AnimateOnScroll
                        animation="scaleIn"
                        delay={cellIndex * 50 + 400}
                      >
                        <div
                          className={`cyber-card p-6 border border-purple-400/30 hover:border-purple-400 transition-all duration-300 ${
                            shouldCenter ? "xl:w-96" : ""
                          }`}
                        >
                          {/* Cell Header */}
                          <div className="mb-6">
                            <h3 className="text-xl font-bold terminal-text mb-2 capitalize flex items-center">
                              <div
                                className={`w-4 h-4 bg-gradient-to-br ${getCellColor(
                                  cellName
                                )} mr-3 transform rotate-45`}
                              ></div>
                              {cellName} Cell
                            </h3>
                          </div>

                          {/* Chief */}
                          <div className="mb-4">
                            <MemberCard
                              member={cellData.chief}
                              isChief={true}
                              cellColor={getCellColor(cellName)}
                              delay={0}
                            />
                          </div>

                          {/* Members */}
                          {cellData.members.length > 0 && (
                            <div
                              className={`${
                                cellData.members.length === 1
                                  ? "flex justify-center"
                                  : "grid grid-cols-2 gap-3"
                              }`}
                            >
                              {cellData.members.map((member, memberIndex) => (
                                <div
                                  key={memberIndex}
                                  className={
                                    cellData.members.length === 1
                                      ? "w-full"
                                      : ""
                                  }
                                >
                                  <MemberCard
                                    member={member}
                                    cellColor={getCellColor(cellName)}
                                    delay={memberIndex * 50}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </AnimateOnScroll>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <AnimateOnScroll
                key={index}
                animation="scaleIn"
                delay={500 + index * 50}
              >
                <div className="cyber-card p-6 text-center group">
                  <i
                    className={`${stat.icon} text-3xl ${stat.color} mb-3 group-hover:scale-125 transition-transform duration-300`}
                  ></i>
                  <div
                    className={`text-3xl font-bold terminal-text ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Member Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass-dark border border-green-400/50 rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold terminal-text text-green-400">
                  {selectedMember.name}
                </h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-red-400 hover:text-red-300 text-xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg overflow-hidden border-2 border-green-400 mb-4">
                  {selectedMember.image ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ display: selectedMember.image ? "none" : "flex" }}
                  >
                    <i className="fas fa-user text-white text-4xl"></i>
                  </div>
                </div>

                <p className="text-lg text-blue-300 font-mono mb-3">
                  {selectedMember.role}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {selectedMember.description ||
                    "Contributing to the success of CIT Club through dedication and expertise."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Team;
