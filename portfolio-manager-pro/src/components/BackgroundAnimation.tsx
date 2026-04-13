import React from "react";

const blobs = [
  {
    style: {
      top: "-10%",
      left: "-10%",
      width: "60vw",
      height: "60vw",
      animationDuration: "24s",
      background: "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.18), transparent 70%)",
      animationDelay: "0s",
    },
  },
  {
    style: {
      top: "-20%",
      right: "-10%",
      width: "50vw",
      height: "50vw",
      animationDuration: "30s",
      background: "radial-gradient(circle at 70% 30%, rgba(99,102,241,0.16), transparent 70%)",
      animationDelay: "-8s",
    },
  },
  {
    style: {
      bottom: "-15%",
      left: "10%",
      width: "70vw",
      height: "70vw",
      animationDuration: "36s",
      background: "radial-gradient(circle at 40% 70%, rgba(236,72,153,0.14), transparent 70%)",
      animationDelay: "-4s",
    },
  },
  {
    style: {
      bottom: "-10%",
      right: "-10%",
      width: "40vw",
      height: "40vw",
      animationDuration: "28s",
      background: "radial-gradient(circle at 60% 80%, rgba(168,85,247,0.13), transparent 70%)",
      animationDelay: "-12s",
    },
  },
];

const BackgroundAnimation: React.FC = () => (
  <div
    aria-hidden
    className="fixed inset-0 w-full h-full z-[-1] pointer-events-none overflow-hidden"
    style={{ background: "linear-gradient(120deg, #f8fafc 0%, #f1f5f9 100%)" }}
  >
    {blobs.map((b, i) => (
      <div
        key={i}
        className="absolute rounded-full blur-3xl opacity-80 animate-blob"
        style={{
          ...b.style,
          position: "absolute",
          zIndex: -1,
          filter: "blur(80px)",
          opacity: 0.7,
          animationName: "blobMove",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />
    ))}
    <style>
      {`
        @keyframes blobMove {
          0%, 100% { transform: translateY(0) scale(1); }
          33% { transform: translateY(-40px) scale(1.07); }
          66% { transform: translateY(30px) scale(0.96); }
        }
      `}
    </style>
  </div>
);

export default BackgroundAnimation;
