// components/Footer.tsx

'use client'; // This directive marks the file as a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// CurvedLine component definition
const CurvedLine = () => {
    // State to track screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update screen width on resize
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Define colors for the gradient effect from white to oranges
    const colors = ['#FFFFFF', 'rgba(0, 180, 255, 0.99)', 'rgba(169, 169, 255, 0.99)', 'rgba(169, 0, 255, 0.99)'];

    return (
        <div className="w-full h-96 relative overflow-hidden bg-black">
            <svg className="w-full h-96" viewBox="0 0 1000 220" preserveAspectRatio="none">
                {/* Multiple curved paths for expanded shadow effect */}
                {[...Array(50)].map((_, index) => {
                    // Exponential decrease in opacity for more natural fade
                    const opacity = Math.max(0.05, Math.pow(0.95, index));
                    // Increase spread as shadow goes up
                    const yOffset = Math.pow(index, 1.5) * 1;
                    // Gradually increase the curve spread
                    const xSpread = Math.min(100, index * 3);
                    // Determine color based on position in the sequence
                    const colorIndex = Math.floor((index / 30) * colors.length);
                    const color = colors[Math.min(colorIndex, colors.length - 1)];

                    // If the screen width is smaller than 1000, use 150 instead of 50 for the Y offset
                    const yValue = screenWidth < 1000 ? 150 : 50;

                    return (
                        <path
                            key={index}
                            d={`M-${xSpread},200 Q500,${yValue - yOffset} ${1000 + xSpread},200`}
                            fill="none"
                            stroke={color}
                            strokeWidth={7 - (index * 0.15)}
                            strokeOpacity={opacity}
                            style={{
                                filter: `blur(${Math.min(25, index * 0.9)}px)`
                            }}
                        />
                    );
                })}
                {/* Main line on top with strong glow */}
            </svg>
        </div>
    );
};

export default function Footer() {
    return (
        <footer className="py-12 sm:py-16 text-white bg-black">
            {/* CurvedLine component added above the footer */}
            <CurvedLine />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-base sm:text-lg font-medium mb-4">
                    Need Help?{' '}
                    <Link href="/help" className="text-teal-400 hover:underline">
                        Visit our Help Section
                    </Link>
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Column 1: About */}
                <div>
                    <Link href="/" className="block text-center text-2xl sm:text-3xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-300 to-indigo-400">
                            FMT Broker
                        </span>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-400">
                        FMT delivers top-tier service across 173 countries with innovative trading solutions.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <Link href="/about" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/download" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Download App
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 2: Products */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Products</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/trading/forex" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Forex
                            </Link>
                        </li>
                        <li>
                            <Link href="/trading/indices" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Indices
                            </Link>
                        </li>
                        <li>
                            <Link href="/trading/cryptocurrencies" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Crypto CFDs
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Platforms */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Platforms</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/platforms/mt4" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                MetaTrader 4
                            </Link>
                        </li>
                        <li>
                            <Link href="/platforms/mt5" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                MetaTrader 5
                            </Link>
                        </li>
                        <li>
                            <Link href="/platforms/fmt-trade" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                FMT Trade
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Education & News */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Education & News</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/blog" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                FMT Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/training" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Training Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/tools/forex-news" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Forex News
                            </Link>
                        </li>
                        <li>
                            <Link href="/tools/forex-calendar" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Economic Calendar
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 5: Contact & Support */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact & Support</h4>
                    <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                        <li>
                            <a href="tel:+442031515550" className="hover:text-teal-400 transition">
                                +44 (0) 203 151 5550
                            </a>
                        </li>
                        <li>
                            <Link href="/help/faq" className="hover:text-teal-400 transition">
                                FAQ & Help
                            </Link>
                        </li>
                        <li>
                            <Link href="/help/support" className="hover:text-teal-400 transition">
                                Support Team
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:support@fmt.group" className="hover:text-teal-400 transition">
                                support@fmt.group
                            </Link>
                        </li>
                        <li className="pt-2 text-xs text-gray-500">
                            FMT UK Ltd: City of London, EC2V 5BQ, UK.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-xs sm:text-sm space-y-2 sm:space-y-0 text-gray-400">
                    <p>
                        <strong>Trade responsibly:</strong> Trading CFDs is risky and may lead to permanent capital loss.
                    </p>
                    <p>
                        <strong>FMT Markets CR SRL</strong> is a subsidiary of FMT Group Ltd.
                    </p>
                </div>
            </div>
        </footer>
    );
}
