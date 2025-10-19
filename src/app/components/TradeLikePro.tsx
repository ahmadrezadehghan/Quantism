'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TradeLikePro() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-40">
            <div className="relative container mx-auto px-6 text-center z-10">
                {/* Title */}
                <motion.h2
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Collaborate With{' '}
                    <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Quantism
                    </span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-200 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Partner with us on ML research, bioinformatics pipelines, forecasting, and data platform engineering.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="mailto:ahmadrzdeh@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-black font-semibold text-lg px-10 py-4 rounded-full shadow-2xl transform transition-transform duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Contact Quantism
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 ml-3 text-black"
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                </motion.a>
            </div>
        </section>
    );
}
