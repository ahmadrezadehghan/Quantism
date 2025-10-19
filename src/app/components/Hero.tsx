"use client";
import React from 'react';

interface HeroProps {
    style?: React.CSSProperties;
}

const Hero: React.FC<HeroProps> = ({ style }) => {
    return (
        <section
            id="homefirst"
            className="relative overflow-hidden bg-gradient-to-r from-transparent to-transparent backdrop-blur-lg"
            style={style}
        >
            {/* Video background */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
                <video
                    className={
                        "object-cover rounded-full  origin-center " + // +25% everywhere
                        "w-40 h-40 " +
                        "sm:w-48 sm:h-48 " +
                        "md:w-80 md:h-80 " +
                        "lg:w-100 lg:h-100 " +
                        "xl:w-120 xl:h-120 " +
                        "2xl:w-[800px] 2xl:h-[800px]"
                    }
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/header.mp4"
                />

            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-0" />

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-0
                      py-32 sm:py-40 md:py-48 lg:py-64 xl:py-80 text-center text-white z-10">
                <span className="block text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
                    Quantism
                </span>
                <h1 className="md:py-5 text-4xl sm:text-1xl md:text-1xl lg:text-1xl font-extrabold leading-tight">
                    <span className="block">Quantism — Data Analysis Team</span>
                    <span className="block">Applied Research, Reliable Systems</span>
                </h1>
                <p className="mb-5 text-1xl sm:text-1xl md:text-1xl font-medium tracking-wide">
                    Join Quantism and step into a world of professional trading
                </p>
                <a
                    href="https://Quanteam.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="register"
                    className="inline-block border border-blue-400 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold
                     py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Meet the Team at Quantism
                </a>
            </div>
        </section>
    );
};

export default Hero;
