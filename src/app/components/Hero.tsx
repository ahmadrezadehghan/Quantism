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
                        "object-cover rounded-full " +
                        "w-64 h-64 " +         // doubled from 32
                        "sm:w-96 sm:h-96 " +   // doubled from 48
                        "md:w-[512px] md:h-[512px] " + // doubled from 64 (256px)
                        "lg:w-[640px] lg:h-[640px] " + // doubled from 80 (320px)
                        "xl:w-[768px] xl:h-[768px] " + // doubled from 96 (384px)
                        "2xl:w-[1200px] 2xl:h-[1200px]"   // doubled from 600px
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
            <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-0 \
                         py-32 sm:py-40 md:py-48 lg:py-64 xl:py-80 text-center text-white z-10">
                <span className="block text-6xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
                    FMT Broker
                </span>
                <h1 className=" md:py-5 text-4xl sm:text-1xl md:text-1xl lg:text-1xl font-extrabold  leading-tight">
                    <span className="block">Master the Markets with FMT Broker</span>
                    <span className="block">Achieve Your Financial Goals</span>
                </h1>
                <p className="mb-5 text-1xl sm:text-1xl md:text-1xl font-medium tracking-wide">
                    Join FMT Broker and step into a world of professional trading
                </p>
                <a
                    href="https://direct.FMT.group/en/register/ua/cri/2y6ueacdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="register"
                    className="inline-block border border-blue-400 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold \
                         py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Start Trading with FMT Broker Today
                </a>
            </div>
        </section>
    );
};

export default Hero;
