import { useEffect, useState } from "react";

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="grid-background"></div>
      </div>
      
      {/* Floating particles - increased count and smoother animations */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute w-1 h-1 bg-blue-400/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animation: `float ${
                5 + Math.random() * 4
              }s ease-in-out infinite reverse`,
            }}
          />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute w-0.5 h-0.5 bg-purple-400/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animation: `float ${6 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Moving dots with smoother float animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              i % 3 === 0
                ? "bg-green-400/30"
                : i % 3 === 1
                ? "bg-blue-400/25"
                : "bg-purple-400/35"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 40}%`,
              animation: `float ${5 + i * 0.3}s ease-in-out infinite ${
                i * 0.5
              }s`,
            }}
          />
        ))}
      </div>

      {/* Circuit-like connecting lines - more subtle */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(0, 255, 65, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
          </linearGradient>
        </defs>

        <path
          d="M0,200 Q400,100 800,300 T1600,250"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          strokeDasharray="8,8"
          style={{ animation: "dash 15s linear infinite" }}
        />
        <path
          d="M0,400 Q600,200 1200,400 T2400,350"
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="0.5"
          strokeDasharray="6,6"
          style={{ animation: "dash 20s linear infinite reverse" }}
        />
      </svg>

      {/* Grid pattern overlay - more subtle */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          animation: "grid-move 30s linear infinite",
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
