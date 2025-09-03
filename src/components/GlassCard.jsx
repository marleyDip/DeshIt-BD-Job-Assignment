// GlassCard.jsx
import React from "react";

const GlassCard = ({ children }) => {
  return (
    <div className="relative w-[337px] h-[560px] rounded-[36px] overflow-hidden bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md shadow-[14.18px_17.72px_28.35px_0_rgba(0 , 0 , 0 , 0.05)] border border-white/60">
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left light glare */}
        <div className="absolute top-0 left-14 w-1/2 h-1/3 bg-blue-500/10 blur-2xl rounded-full" />

        {/* Bottom right glow */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-pink-500/5 blur-xl rounded-full" />
      </div>
      {children}
    </div>
  );
};

export default GlassCard;
