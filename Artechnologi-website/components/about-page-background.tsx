import React from "react";

export function AboutPageBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Base gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-purple-50/40" />
      {/* Large animated waves */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.10" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z" fill="url(#wave-gradient-1)">
            <animate attributeName="d" dur="15s" repeatCount="indefinite"
              values="M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z;
                      M0,140 Q400,180 800,140 T1600,140 L1600,0 L0,0 Z;
                      M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z" />
          </path>
          <path d="M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z" fill="url(#wave-gradient-2)">
            <animate attributeName="d" dur="20s" repeatCount="indefinite"
              values="M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z;
                      M0,980 Q400,1020 800,980 T1600,980 L1600,1200 L0,1200 Z;
                      M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z" />
          </path>
        </svg>
      </div>
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-primary/35 rounded-lg rotate-12 animate-float-slow" />
      <div className="absolute top-[15%] left-[25%] w-24 h-24 border-[1.5px] border-cyan-400/30 rounded-md rotate-[25deg] animate-float-medium" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-[15%] w-24 h-24 border-2 border-cyan-500/35 rounded-full animate-float-medium" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[45%] right-[8%] w-28 h-28 border-2 border-blue-400/30 rounded-lg -rotate-[20deg] animate-float-slow" style={{ animationDelay: '1.8s' }} />
      <div className="absolute bottom-1/3 left-[20%] w-20 h-20 border-2 border-purple-500/35 rotate-45 animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[35%] left-[35%] w-16 h-16 border-[1.5px] border-primary/25 rounded-md rotate-[15deg] animate-float-medium" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/4 right-[25%] w-28 h-28 border-2 border-primary/30 rounded-lg -rotate-12 animate-float-medium" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[15%] right-[40%] w-20 h-20 border-2 border-cyan-500/30 rounded-md rotate-[30deg] animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[55%] left-[5%] w-16 h-16 border-[1.5px] border-purple-400/30 rounded-lg -rotate-[35deg] animate-float-medium" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-[25%] right-[35%] w-20 h-20 border-2 border-blue-500/25 rounded-md rotate-[18deg] animate-float-slow" style={{ animationDelay: '1.2s' }} />
      {/* Animated gradient orbs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-drift-1" />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-full blur-3xl animate-drift-2" />
      <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/25 to-transparent rounded-full blur-3xl animate-drift-3" />
    </div>
  );
}
