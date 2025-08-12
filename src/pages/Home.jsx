import Layout from "../components/Layout";
import React from "react";
import { AnimateOnScroll } from "../utilities/animations.jsx";
import { homeData } from "../data/HomeData.js";

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
                          src={homeData.hero.logo.src}
                          alt={homeData.hero.logo.alt}
                          className="w-full h-full object-contain transform -rotate-45 hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Animated corner triangles aligned with hexagon edges */}
                      <div className="absolute top-2 left-2 w-0 h-0 border-r-[14px] border-r-transparent border-t-[14px] border-t-green-400 animate-pulse"></div>
                      <div className="absolute top-2 right-2 w-0 h-0 border-l-[14px] border-l-transparent border-t-[14px] border-t-blue-400 animate-pulse delay-200"></div>
                      <div className="absolute bottom-2 left-2 w-0 h-0 border-r-[14px] border-r-transparent border-b-[14px] border-b-purple-400 animate-pulse delay-400"></div>
                      <div className="absolute bottom-2 right-2 w-0 h-0 border-l-[14px] border-l-transparent border-b-[14px] border-b-cyan-400 animate-pulse delay-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal-style title - 70% width */}
              <div className="lg:col-span-7 flex justify-center lg:justify-start">
                <div className="glass-dark p-10 border border-green-400/30 max-w-full w-full relative overflow-hidden">
                  {/* Code decoration */}
                  <div className="absolute top-4 right-4 text-green-400/30 font-mono text-xs">
                    {`// main.cpp`}
                  </div>

                  <div className="relative z-10">
                    <div className="font-mono text-green-400 text-sm mb-4">
                      <span className="text-red-400">[CIT@main]</span>
                      <span className="text-blue-400 mx-2">:</span>
                      <span className="text-purple-400">~</span>
                      <span className="text-green-400 ml-2">$</span>
                      <span className="text-gray-300 ml-2">
                        ./initialize_club.sh
                      </span>
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="text-green-400 text-lg animate-pulse">
                        <span className="text-2xl">{">"}</span> {homeData.hero.title.initialization}
                      </div>
                      <div className="ml-4">
                        <img
                          src={homeData.hero.logo.src}
                          alt={homeData.hero.logo.alt}
                          className="w-8 h-8 object-contain opacity-80"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold terminal-text glow-text mb-6 leading-tight">
                      {homeData.hero.title.main}
                    </h1>

                    <div className="text-green-400 text-lg animate-pulse">
                      <span className="text-2xl">{">"}</span> {homeData.hero.title.status}
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
                {`// ${homeData.mission.title.replace('.txt', '.cpp')}`}
              </div>

              <div className="relative z-10">
                <div className="font-mono text-green-400 text-sm mb-4">
                  <span className="text-red-400">[CIT@mission]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-purple-400 ml-2">cat</span>
                  <span className="text-blue-400 ml-2">{homeData.mission.title}</span>
                </div>

                <h2 className="text-3xl font-bold terminal-text glow-text mb-8">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">Our Mission</span>
                </h2>

                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-8 py-4">
                  {homeData.mission.content}
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Collaborators Section */}
        <AnimateOnScroll animation="glitchIn" delay={400}>
          <section className="mb-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="glass-dark p-6 border border-green-400/30 max-w-2xl mx-auto">
                <div className="font-mono text-green-400 text-sm mb-2">
                  <span className="text-red-400">[CIT@partnerships]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">
                    ls -la collaborators/
                  </span>
                </div>
                <h2 className="text-4xl font-bold terminal-text glow-text">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">Strategic Partnerships</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  Collaborating with industry leaders to enhance learning experiences
                </p>
              </div>
            </div>

            {/* Partnership Card */}
            <div className="max-w-6xl mx-auto">
              <div className="glass-dark border border-green-400/30 hover:border-green-400 transition-all duration-300 overflow-hidden group">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 border-b border-green-400/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-mono text-lg uppercase tracking-wider">
                        {homeData.partnerships.datacamp.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Logo Section */}
                    <div className="lg:col-span-1">
                      <div className="relative group/logo">
                        <a
                          href={homeData.partnerships.datacamp.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block cursor-pointer"
                        >
                          {/* Hexagonal container for logo */}
                          <div className="relative w-72 h-72 mx-auto">
                            {/* Hexagonal background */}
                            <div 
                              className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-green-400/10 group-hover/logo:from-blue-400/20 group-hover/logo:to-green-400/20 transition-all duration-300"
                              style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                              }}
                            ></div>
                            
                            {/* Logo */}
                            <div className="absolute inset-12 flex items-center justify-center">
                              <img
                                src={homeData.partnerships.datacamp.logo.src}
                                alt={homeData.partnerships.datacamp.logo.alt}
                                className="w-full h-full object-contain filter brightness-90 group-hover/logo:brightness-110 transition-all duration-300"
                              />
                            </div>

                            {/* Corner accents */}
                            <div className="absolute -top-3 -left-3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-green-400 opacity-60"></div>
                            <div className="absolute -top-3 -right-3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-blue-400 opacity-60"></div>
                            <div className="absolute -bottom-3 -left-3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-green-400 opacity-60"></div>
                            <div className="absolute -bottom-3 -right-3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-400 opacity-60"></div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Title */}
                      <div>
                        <h3 className="text-4xl font-bold text-green-400 mb-3 terminal-text">
                          DataCamp
                        </h3>
                        <div className="text-blue-300 font-mono text-lg mb-6">
                          Educational Technology
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed text-xl">
                          {homeData.partnerships.datacamp.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-green-400"></div>
                            <span className="text-gray-400 text-lg">Interactive Learning Platform</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-blue-400"></div>
                            <span className="text-gray-400 text-lg">Hands-on Coding Challenges</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-green-400"></div>
                            <span className="text-gray-400 text-lg">Data Science & AI Courses</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-blue-400"></div>
                            <span className="text-gray-400 text-lg">Industry-Standard Tools</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6">
                        <a
                          href={homeData.partnerships.datacamp.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center cyber-button py-4 px-12 font-mono text-lg uppercase tracking-wider transition-all duration-300"
                        >
                          <i className="fas fa-rocket mr-4 group-hover/btn:animate-pulse"></i>
                          <span className="terminal-prompt">{homeData.partnerships.datacamp.link.text}</span>
                          <i className="fas fa-external-link-alt ml-4 text-sm group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-green-400/50 via-blue-400/50 to-green-400/50 group-hover:from-green-400 group-hover:via-blue-400 group-hover:to-green-400 transition-all duration-300"></div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Features Grid */}
        <AnimateOnScroll animation="glitchIn" delay={600}>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeData.features.map((feature, index) => (
              <AnimateOnScroll
                key={index}
                animation="scaleIn"
                delay={feature.delay + 800}
              >
                <div className="cyber-card p-6 h-full group">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 relative`}
                  >
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
                  <div
                    className={`h-1 w-0 bg-gradient-to-r ${feature.color} mt-4 group-hover:w-full transition-all duration-500`}
                  ></div>
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
