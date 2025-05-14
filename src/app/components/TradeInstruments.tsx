"use client";
import React from 'react';

// Instrument definitions with emoji icons to avoid external dependencies
const instruments = [
    { name: 'Forex', emoji: '💱' },
    { name: 'Indices', emoji: '📈' },
    { name: 'Stocks', emoji: '🏦' },
    { name: 'Commodities', emoji: '⚖️' },
];

export default function TradeInstruments() {
    return (
        <section className="container mx-auto px-6 py-16 text-center">
            {/* Title Section */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Trade Forex, Indices, Stocks & More with FMT
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Trade with precision—experience tight spreads, lightning-fast execution, and top-tier support with FMT Broker
            </p>

            {/* Instruments Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                {instruments.map(({ name, emoji }) => (
                    <div
                        key={name}
                        className="border border-gray-600 rounded-2xl p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                    >
                        <span className="text-4xl mb-3">{emoji}</span>
                        <span className="text-white font-medium text-lg">{name}</span>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <button
                type="button"
                onClick={() => window.open('https://direct.FMT.group/en/register/ua/cri/2y6ueacdr', '_blank', 'noopener')}
                className="inline-block px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:text-white hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-200"
            >
                Trade Like a Pro
            </button>

            {/* Optional: Tailwind custom utility classes for focus states */}
            <style jsx global>{`
        button:focus {
          outline: none;
        }
      `}</style>
        </section>
    );
}
