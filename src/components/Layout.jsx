import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundAnimation from "./BackgroundAnimation";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Professional smooth scroll to top function with easing
  const scrollToTop = () => {
    const currentScroll = window.pageYOffset;
    const duration = 800; // Duration in milliseconds
    let startTime = null;

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animateScroll = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        const ease = easeOutCubic(progress);
        window.scrollTo(0, currentScroll * (1 - ease));
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col relative overflow-hidden">
      {/* Background Animation Component */}
      <BackgroundAnimation />

      <Navbar />
      <main className="flex-grow pt-16 relative z-10">{children}</main>
      <Footer />

      {/* Scroll to Top Button - Global */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-in-out transform ${
          showScrollTop
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="w-12 h-12 glass-dark border border-green-400/30 hover:border-green-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/25 group"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-green-400 text-lg group-hover:text-green-300 transition-colors"></i>
        </button>
      </div>
    </div>
  );
};

export default Layout;
