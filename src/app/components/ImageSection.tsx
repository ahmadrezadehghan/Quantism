"use client";
import React from 'react';

/**
 * Image_Section Component
 * Renders a 75%-width, full-height section with 75% transparency and animated overlay text scaled up 5×.
 * Ensure `crapper.png` is a PNG with transparency and placed in the `/public` directory.
 */

const Image_Section: React.FC = () => (
    <section
        id="homefirst"
        className="relative w-[130vw] h-screen overflow-hidden bg-transparent opacity-75 mx-auto"
    >
        {/* Background image (PNG transparency preserved) with added opacity */}
        <img
            src="/crapper.png"
            alt="Skyline Wireframe"
            className="w-full h-full object-cover opacity-45"
        />

        {/* Animated title sliding left-to-right, text 5× larger, moved up further */}
        <div className="absolute bottom-[calc(10rem_)] left-1/2 transform -translate-x-1/2 text-[700%] text-white font-bold pointer-events-none">
            <span className="slide inline-block px-2">
                FMTbroker
            </span>
        </div>

        {/* Tagline with colored words, text 5× larger, moved up by 50px */}
        <div className="absolute bottom-[calc(3rem_)] left-1/2 transform -translate-x-1/2 text-[700%] font-semibold pointer-events-none">
            <span className="text-purple-600 mr-2">Educate</span>
            <span className="text-purple-400 mr-2">Elevate</span>
            <span className="text-blue-500">Execute</span>
        </div>

        {/* Animation CSS */}
        <style jsx>{`
      @keyframes slide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .slide {
        animation: slide 8s linear infinite;
      }
    `}</style>
    </section>
);

export default Image_Section;
