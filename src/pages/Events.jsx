import { useState, useCallback, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { AnimateOnScroll } from "../utilities/animations.jsx";
import { eventsData } from "../data/EventsData.js";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [galleryScrollPosition, setGalleryScrollPosition] = useState(0);
  const autoScrollIntervalRef = useRef(null);
  const galleryContainerRef = useRef(null);

  // Extract data from eventsData
  const { mainEvents, eventGallery, getCategoryIcon } = eventsData;

  // Optimized gallery navigation with smoother scrolling
  const scrollGallery = useCallback(
    (direction, isManual = false) => {
      const container = galleryContainerRef.current;
      if (!container) return;

      // Pause auto-scroll temporarily when manual navigation is used
      if (isManual && isAutoScrolling) {
        setIsAutoScrolling(false);
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
          autoScrollIntervalRef.current = null;
        }

        // Resume auto-scroll after 5 seconds
        setTimeout(() => {
          setIsAutoScrolling(true);
        }, 5000);
      }

      const scrollAmount = 280; // Slightly reduced for smoother scrolling
      const targetScroll = direction === "left" ? -scrollAmount : scrollAmount;

      container.scrollBy({
        left: targetScroll,
        behavior: "smooth",
      });
    },
    [isAutoScrolling]
  );

  // Auto-scroll functionality with constant smooth scrolling
  useEffect(() => {
    if (!isAutoScrolling) return;

    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        const container = galleryContainerRef.current;
        if (!container) return;

        const scrollStep = 1; // Small step for smooth constant scrolling
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 5) {
          // Smoothly scroll back to start when we reach the end
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Constant smooth scrolling
          container.scrollLeft += scrollStep;
        }
      }, 50); // Much faster interval for smooth constant movement
    };

    const timer = setTimeout(startAutoScroll, 1000); // Start after 1 second

    return () => {
      clearTimeout(timer);
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoScrolling(false);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoScrolling(true);
  }, []);

  const openImageModal = useCallback((image, index) => {
    setSelectedImage({ ...image, index });
    setCurrentGalleryIndex(index);
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      const newIndex =
        direction === "prev"
          ? (currentGalleryIndex - 1 + eventGallery.length) %
            eventGallery.length
          : (currentGalleryIndex + 1) % eventGallery.length;

      setCurrentGalleryIndex(newIndex);
      setSelectedImage({ ...eventGallery[newIndex], index: newIndex });
    },
    [currentGalleryIndex, eventGallery]
  );

  // Keyboard navigation for image modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          navigateImage("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateImage("next");
          break;
        case "Escape":
          e.preventDefault();
          setSelectedImage(null);
          break;
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [selectedImage, navigateImage]);

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
                  <span className="text-gray-300 ml-2">
                    ls -la legendary_events/
                  </span>
                </div>

                <h1 className="text-5xl font-bold mb-6 terminal-text glow-text">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">
                    Events & Activities
                  </span>
                </h1>

                <div className="terminal-text text-green-300 leading-relaxed text-xl border-l-2 border-green-400/50 pl-6">
                  Join our legendary events that have been shaping the IT
                  landscape in Morocco. From competitive programming to ethical
                  hacking, we host the most prestigious tech events.
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainEvents.map((event, index) => (
            <AnimateOnScroll
              key={event.id}
              animation="fadeInUp"
              delay={index * 50}
            >
              <div
                className="group relative overflow-hidden cyber-card border border-green-400/30 hover:border-green-400 transition-all duration-300 cursor-pointer will-change-transform"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Header with Hologram Effect */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${event.color} overflow-hidden`}
                >
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                        linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
                      `,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  {event.image ? (
                    <div className="relative h-full">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                        loading="lazy"
                      />
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-400/20 group-hover:animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <i
                        className={`${getCategoryIcon(
                          event.category
                        )} text-8xl text-white/30 group-hover:text-white/50 transition-colors`}
                      ></i>
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
                    <span className="text-green-400 font-mono text-xs uppercase tracking-wider">
                      {event.status}
                    </span>
                  </div>

                  {/* Since badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 border border-green-400/50">
                    <span className="text-green-400 font-mono text-sm">
                      Since {event.since}
                    </span>
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
                      <i
                        className={`${getCategoryIcon(
                          event.category
                        )} text-blue-400 text-xl`}
                      ></i>
                    </div>
                    <h3 className="text-sm text-blue-300 font-mono mb-1">
                      {event.subtitle}
                    </h3>
                    <p className="text-xs text-gray-400 italic">
                      {event.englishTitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-1 mb-6">
                    <div className="text-xs text-green-400 font-mono uppercase tracking-wider mb-2">
                      Key Features:
                    </div>
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

        {/* Enhanced Gallery Section with Horizontal Scroll */}
        <AnimateOnScroll animation="fadeInUp" delay={300}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="glass-dark p-6 border border-green-400/30 max-w-2xl mx-auto">
                <div className="font-mono text-green-400 text-sm mb-2">
                  <span className="text-red-400">[CIT@gallery]</span>
                  <span className="text-blue-400 mx-2">:</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-green-400 ml-2">$</span>
                  <span className="text-gray-300 ml-2">
                    ./display_memories.sh
                  </span>
                </div>
                <h2 className="text-4xl font-bold terminal-text glow-text">
                  <span className="text-green-400">{">"}</span>
                  <span className="text-green-400 ml-2">Event Gallery</span>
                </h2>
                <p className="text-gray-400 text-sm mt-2">
                  Click any image to view larger • Scroll horizontally for more
                </p>
              </div>
            </div>

            {/* Horizontal Scrolling Gallery */}
            <div className="relative">
              {/* Status indicator */}
              <div className="absolute top-2 right-2 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 border border-green-400/50">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isAutoScrolling
                        ? "bg-green-400 animate-pulse"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <span className="text-green-400 font-mono text-xs">
                    {isAutoScrolling ? "Reliving memories" : "Paused"}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => scrollGallery("left", true)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-black/80 hover:bg-black/90 text-green-400 border border-green-400/50 hover:border-green-400 p-3 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous images"
              >
                <i className="fas fa-chevron-left text-xl"></i>
              </button>

              <button
                onClick={() => scrollGallery("right", true)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-black/80 hover:bg-black/90 text-green-400 border border-green-400/50 hover:border-green-400 p-3 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next images"
              >
                <i className="fas fa-chevron-right text-xl"></i>
              </button>

              {/* Gallery Container */}
              <div
                ref={galleryContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-8"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {eventGallery.map((image, index) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-64 h-64 cursor-pointer will-change-transform"
                    onClick={() => openImageModal(image, index)}
                  >
                    {/* Image Container */}
                    <div className="w-full h-full relative overflow-hidden cyber-card border border-green-400/30 hover:border-green-400 transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        style={{ imageRendering: "crisp-edges" }}
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <i className="fas fa-expand text-green-400 text-3xl mb-2"></i>
                          <p className="text-green-400 font-mono text-sm">
                            {image.category}
                          </p>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 border border-green-400/50">
                        <span className="text-green-400 font-mono text-xs">
                          {image.category}
                        </span>
                      </div>

                      {/* Corner Brackets */}
                      <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery Stats */}
              <div className="text-center mt-6">
                <p className="text-gray-400 font-mono text-sm mb-2">
                  {eventGallery.length} precious memories from our journey
                </p>
                <p className="text-gray-500 font-mono text-xs">
                  Click any image to relive the moment • Navigate with arrows
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto">
            <AnimateOnScroll animation="scaleIn">
              <div className="glass-dark max-w-6xl w-full min-h-[80vh] border border-green-400/50 relative my-8">
                {/* Close button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500/20 border border-red-400 text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-times"></i>
                </button>

                {/* Modal Header */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${selectedEvent.color} overflow-hidden`}
                >
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                        linear-gradient(rgba(0,255,65,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,65,0.5) 1px, transparent 1px)
                      `,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 flex items-end">
                    <div className="p-8 w-full">
                      <h2 className="text-5xl font-bold terminal-text glow-text mb-2">
                        {selectedEvent.title}
                      </h2>
                      <p className="text-2xl text-green-400 font-mono">
                        {selectedEvent.subtitle}
                      </p>
                      <p className="text-lg text-blue-300 italic mt-2">
                        {selectedEvent.englishTitle}
                      </p>
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
                        <p className="text-gray-300 leading-relaxed">
                          {selectedEvent.description}
                        </p>
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
                                <span className="text-green-400 text-xs">
                                  {index + 1}
                                </span>
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
                          <div className="relative">
                            {/* Gallery container with horizontal scroll */}
                            <div
                              className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4"
                              id="gallery-container"
                            >
                              {selectedEvent.gallery.map((img, index) => (
                                <div
                                  key={index}
                                  className="flex-shrink-0 relative group overflow-hidden border border-green-400/30 hover:border-green-400 transition-colors cursor-pointer"
                                  onClick={() =>
                                    setSelectedImage({
                                      src: img,
                                      alt: `${selectedEvent.title} ${
                                        index + 1
                                      }`,
                                    })
                                  }
                                >
                                  <img
                                    src={img}
                                    alt={`${selectedEvent.title} ${index + 1}`}
                                    className="w-48 h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  {/* Zoom icon overlay */}
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <i className="fas fa-search-plus text-white text-xl"></i>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Navigation arrows */}
                            {selectedEvent.gallery.length > 3 && (
                              <>
                                <button
                                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-black/70 hover:bg-black/90 text-green-400 p-2 border border-green-400/50 hover:border-green-400 transition-all duration-300"
                                  onClick={() => {
                                    const container =
                                      document.getElementById(
                                        "gallery-container"
                                      );
                                    container.scrollBy({
                                      left: -200,
                                      behavior: "smooth",
                                    });
                                  }}
                                >
                                  <i className="fas fa-chevron-left"></i>
                                </button>
                                <button
                                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-black/70 hover:bg-black/90 text-green-400 p-2 border border-green-400/50 hover:border-green-400 transition-all duration-300"
                                  onClick={() => {
                                    const container =
                                      document.getElementById(
                                        "gallery-container"
                                      );
                                    container.scrollBy({
                                      left: 200,
                                      behavior: "smooth",
                                    });
                                  }}
                                >
                                  <i className="fas fa-chevron-right"></i>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center mt-8 pt-8 border-t border-green-400/30">
                    <button className="cyber-button-outline py-3 px-8 font-mono uppercase tracking-wider">
                      <span className="terminal-prompt">Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        )}

        {/* Enhanced Image Modal with Navigation */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute -top-4 -right-4 z-20 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 p-3 border border-red-400/50 hover:border-red-400 transition-all duration-300 backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-green-400 p-4 border border-green-400/50 hover:border-green-400 transition-all duration-300 backdrop-blur-sm"
                onClick={() => navigateImage("prev")}
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left text-xl"></i>
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-green-400 p-4 border border-green-400/50 hover:border-green-400 transition-all duration-300 backdrop-blur-sm"
                onClick={() => navigateImage("next")}
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right text-xl"></i>
              </button>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain mx-auto border-2 border-green-400/50 shadow-2xl shadow-green-400/25"
                />

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-green-400/50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-green-400 font-mono text-lg mb-1">
                        {selectedImage.alt}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Category:{" "}
                        <span className="text-blue-400">
                          {selectedImage.category}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">
                        <span className="text-green-400">
                          {currentGalleryIndex + 1}
                        </span>{" "}
                        of{" "}
                        <span className="text-green-400">
                          {eventGallery.length}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Use arrow keys to navigate
                      </p>
                    </div>
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
