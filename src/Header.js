import React from "react";

const Header = () => (
    <div className="relative text-center py-10 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-700 text-white shadow-lg overflow-hidden">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 font-playfair drop-shadow-lg uppercase">Nitin's Portfolio</h1>
        <p className="text-2xl font-bold italic mb-2 font-lato text-orange-400">Crafting projects, debugging with a smile.</p>
        <p className="mt-2 text-base font-mono bg-slate-900/80 rounded px-4 py-2 inline-block text-orange-300 shadow">
            "If it works, it ships"
        </p>
        {/* Geometric SVG border */}
        <svg className="absolute left-0 bottom-0 w-full" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,40 0,30 180,10 360,30 540,10 720,30 900,10 1080,30 1260,10 1440,30 1440,40" fill="#1e293b"/>
        </svg>
    </div>
);

export default Header;