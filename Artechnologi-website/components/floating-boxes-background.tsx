import React from "react";

export function FloatingBoxesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute inset-0" style={{ filter: "blur(0.5px)" }}>
        <rect
          x="5%" y="70%" width="80" height="80"
          rx="16"
          fill="none"
          stroke="#818cf8"
          strokeWidth="2"
          className="animate-float1"
        />
        <rect
          x="80%" y="20%" width="60" height="60"
          rx="12"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
          className="animate-float2"
        />
        <rect
          x="60%" y="80%" width="50" height="50"
          rx="10"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          className="animate-float3"
        />
      </svg>
      <style jsx>{`
        .animate-float1 {
          animation: floatBox1 8s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: floatBox2 10s ease-in-out infinite alternate;
        }
        .animate-float3 {
          animation: floatBox3 12s ease-in-out infinite alternate;
        }
        @keyframes floatBox1 {
          0% { transform: translateY(0) rotate(0deg);}
          100% { transform: translateY(-30px) rotate(8deg);}
        }
        @keyframes floatBox2 {
          0% { transform: translateY(0) rotate(0deg);}
          100% { transform: translateY(25px) rotate(-10deg);}
        }
        @keyframes floatBox3 {
          0% { transform: translateY(0) rotate(0deg);}
          100% { transform: translateY(-20px) rotate(12deg);}
        }
      `}</style>
    </div>
  );
}
