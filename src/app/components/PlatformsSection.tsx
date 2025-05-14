'use client';

import React from 'react';

// List of platform downloads
const platforms = [
    {
        name: 'Android MT4',
        logo: '/android_meta4.png',
        link: 'https://downloads.metaquotes.net/mt4/android/mt4.apk',
        direct: true,
    },
    {
        name: 'iOS MT4',
        logo: '/ios_meta4.png',
        link: 'https://apps.apple.com/app/metatrader-4/id496212596',
        direct: false,
    },
    {
        name: 'PC MT4',
        logo: '/pc_meta4.png',
        link: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4setup.exe',
        direct: true,
    },
    {
        name: 'Android MT5',
        logo: '/android_meta5.png',
        link: 'https://downloads.metaquotes.net/mt5/android/mt5.apk',
        direct: true,
    },
    {
        name: 'iOS MT5',
        logo: '/ios_meta5.png',
        link: 'https://apps.apple.com/app/metatrader-5/idXXXXXXXXX',
        direct: false,
    },
    {
        name: 'PC MT5',
        logo: '/pc_meta5.png',
        link: 'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe',
        direct: true,
    },
];

export default function PlatformsSection() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;
        const angle = ((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360;
        e.currentTarget.style.setProperty('--start', (angle + 60).toString());
    };

    return (
        <>
            {/* Main Heading outside of the section */}
            <div className="w-full text-center px-5 pt-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                    Experience Elite Trading: Download MetaTrader on Every Device
                </h1>
            </div>

            <section className="text-white py-8">
                <div className="container mx-auto max-w-screen-xl px-5">
                    {/* Platforms Grid with extra top margin */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                        {platforms.map((p, i) => (
                            <div
                                key={i}
                                onMouseMove={handleMouseMove}
                                style={{ '--start': 0 } as React.CSSProperties}
                                className="platform-card group relative bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center justify-center aspect-square overflow-hidden transition-all duration-300"
                            >
                                <a
                                    href={p.link}
                                    {...(p.direct
                                        ? { download: true }
                                        : { target: '_blank', rel: 'noopener noreferrer' })}
                                    className="relative z-10 w-1/2 h-1/2 flex items-center justify-center"
                                >
                                    <img src={p.logo} alt={p.name} className="w-full h-auto" />
                                </a>
                                <span className="mt-4 text-lg font-medium text-gray-300">
                                    {p.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Closing Note */}
                    <p className="mt-8 text-center text-lg md:text-xl text-gray-300">
                        Elevate your financial journey with MetaTrader’s refined analytics and unwavering reliability.
                        Simply click your device above to download or visit the store, and begin trading with sophistication
                        and confidence in moments.
                    </p>
                </div>
            </section>

            <style jsx>{`
        /* Prevent heading wrap */
        h1 {
          white-space: nowrap;
        }
        /* Hover tints for cards */
        .mt-12 > .platform-card:nth-child(3n + 1):hover {
          background-color: rgba(148, 88, 255, 0.2);
          backdrop-filter: blur(16px);
        }
        .mt-12 > .platform-card:nth-child(3n + 2):hover {
          background-color: rgba(0, 219, 200, 0.2);
          backdrop-filter: blur(16px);
        }
        .mt-12 > .platform-card:nth-child(3n + 3):hover {
          background-color: rgba(0, 169, 255, 0.2);
          backdrop-filter: blur(16px);
        }
      `}</style>
        </>
    );
}
