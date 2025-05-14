"use client";

// src/app/components/AccountsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Account {
    key: string;
    title: string;
    description: string;
    link: string;
    gradient: string;
}

const accounts: Account[] = [
    {
        key: 'Standard',
        title: 'Standard Account',
        description:
            'A great account for all types of traders, with floating FMT broker spreads from 1.2 pips via MT4/MT5 and micro lot trading available.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        gradient: 'from-cyan-400 to-indigo-500',
    },
    {
        key: 'ECN',
        title: 'ECN Account',
        description:
            'Trade like a pro with our ECN account, offering tight spreads from 0.0 pips, fast execution, and low commissions (up to $3.50 per lot, per side) on MT4/MT5.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        gradient: 'from-blue-400 to-indigo-500',

    },
    {
        key: 'Ecn Pro',
        title: 'Ecn Pro Account',
        description:
            'Enjoy ZERO spreads for 90%+ of the day, low commissions, and earn rebates up to 21% of your commissions on MT4/MT5.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        gradient: 'from-indigo-500 to-purple-400',
    },
    {
        key: 'Elite',
        title: 'Elite Account',
        description:
            'Enjoy ZERO spreads for 90%+ of the day, low commissions, and earn rebates up to 25% of your commissions on MT4/MT5 plus low commission (max $2.5 per lot per side) on MT4/MT5.',
        link: 'https://direct.FMT.group/en/register/ua/cri/2y6ueacdr',
        gradient: 'from-purple-400 to-purple-800',
    },

];

export default function AccountsSection() {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="w-full px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {accounts.map((acc, idx) => (
                        <motion.div
                            key={acc.key}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className={`relative w-full p-8 mx-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:bg-gradient-to-b ${acc.gradient} overflow-hidden`}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span
                                    className={`px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-gradient-to-r ${acc.gradient} rounded-full`}
                                >
                                    {acc.key}
                                </span>
                                <div className="text-4xl font-bold opacity-10">{idx + 1}</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{acc.title}</h3>
                            <p className="text-sm leading-relaxed mb-4">{acc.description}</p>
                            <a
                                href={acc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${acc.gradient} text-white uppercase tracking-wide transition-transform hover:scale-105`}
                            >
                                Open Account
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
