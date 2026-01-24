import React from 'react';

export default function Logo({ className = "h-12 w-12" }) {
  return (
    <div className={`${className} rounded-full bg-gradient-to-br from-emerald-800 to-emerald-900 flex items-center justify-center shadow-lg`}>
      <span className="text-white font-bold text-lg">ВС</span>
    </div>
  );
}