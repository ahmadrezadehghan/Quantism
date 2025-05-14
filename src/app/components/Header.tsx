"use client";
import Link from 'next/link';
import { useState, useRef } from 'react';

interface SubMenuItem {
    icon: string;
    title: string;
    desc: string;
    href: string;
}
interface NavItem {
    label: string;
    href: string;
    items: SubMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
    {
        label: 'Accounts',
        href: '/accounts',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/user-group.svg', title: 'Standard', desc: 'Trade with standard conditions for all experience levels', href: '/accounts/standard' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chart-bar.svg', title: 'ECN', desc: 'Access deep liquidity and tighter spreads for fast trades', href: '/accounts/ecn' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chart-pie.svg', title: 'ECN Pro', desc: 'Professional-grade ECN with lower spreads for expert traders', href: '/accounts/ecn-pro' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/star.svg', title: 'ECN Elite', desc: 'Elite ECN access with VIP treatment and ultra-low spreads', href: '/accounts/ecn-elite' },
        ],
    },
    {
        label: 'Meta Trader',
        href: '/platforms/meta-trader',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/wrench-screwdriver.svg', title: 'MetaTrader 4', desc: 'Classic platform with fast execution and essential tools', href: '/platforms/mt4' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chart-bar-square.svg', title: 'MetaTrader 5', desc: 'Multi-asset platform with advanced features', href: '/platforms/mt5' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/arrows-right-left.svg', title: 'Compare Platforms', desc: 'Find the platform that suits you best', href: '/platforms/compare' },
        ],
    },
    {
        label: 'FMT Trade',
        href: '/fmt-trade',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chart-pie.svg', title: 'FMT Trade', desc: 'Trade on FMT with advanced charts, real-time data, and tools', href: '/fmt-trade' },
        ],
    },
    {
        label: 'Blog',
        href: '/blog',
        items: [],
    },
    {
        label: 'Start Trading',
        href: '/start-trading',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/arrows-pointing-in-out.svg', title: 'Compare all Accounts', desc: 'Find the right trading option across all FMT accounts', href: '/accounts/compare' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/currency-dollar.svg', title: 'Deposit/Withdraw', desc: 'Explore your transaction options', href: '/support/deposit' },
        ],
    },
    {
        label: 'Help',
        href: '/help',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chat-alt-2.svg', title: 'Repetitive Questions', desc: 'Find answers to common inquiries', href: '/help/faq' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/support.svg', title: 'Support Team', desc: 'Contact our support team for assistance', href: '/help/support' },
        ],
    },
    {
        label: 'About Us',
        href: '/about',
        items: [],
    },

];

export default function Header() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = (idx: number) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenIndex(idx);
    };

    const handleMouseLeave = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenIndex(null), 500);
    };

    return (
        <header className="sticky top-0 z-50 bg-black bg-opacity-70 backdrop-blur-xl shadow-xl">
            <div className="container max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-300 to-indigo-400 font-extrabold tracking-tight text-5xl mx-4">
                    FMT Broker
                </Link>

                {/* Desktop nav & auth */}
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex space-x-8">
                        {NAV_ITEMS.map((menu, idx) => (
                            <div key={menu.label} className="relative text-center mx-4" onMouseEnter={() => handleMouseEnter(idx)} onMouseLeave={handleMouseLeave}>
                                <Link href={menu.href} className="group flex items-center text-xl font-semibold text-white hover:text-blue-300 transition px-4">
                                    {menu.label}
                                    {menu.items.length > 0 && (
                                        <span className="ml-1 text-sm text-white group-hover:text-blue-300 transition">▼</span>
                                    )}
                                </Link>
                                {menu.items.length > 0 && openIndex === idx && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl transition-all duration-300 z-50 mx-4" onMouseEnter={() => clearTimeout(closeTimer.current!)} onMouseLeave={handleMouseLeave}>
                                        <div className="p-6 space-y-4 text-center">
                                            {menu.items.map(item => (
                                                <Link key={item.title} href={item.href} className="group flex flex-col items-center space-y-2 hover:bg-gray-100 p-4 rounded-lg transition mx-4">
                                                    <img src={item.icon} alt={item.title} className="w-10 h-10 group-hover:text-blue-300 transition" />
                                                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-300 transition">{item.title}</h4>
                                                    <p className="text-base text-gray-600 group-hover:text-blue-300 transition">{item.desc}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex space-x-6">
                        <Link href="https://direct.FMT.group/en/register/ua/cri/2y6ueacdr" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-xl font-semibold mx-4">
                            Register
                        </Link>
                        <Link href="https://direct.FMT.group/en/login/2y6ueacdr" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-blue-600 text-white rounded-full hover:bg-blue-700 hover:text-white transition text-xl font-semibold mx-4">
                            Sign in
                        </Link>
                    </div>
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center space-x-4 mx-2">
                    <Link href="https://direct.FMT.group/en/register/ua/cri/2y6ueacdr" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-full text-base font-semibold hover:bg-blue-700 transition mx-2">
                        Reg
                    </Link>
                    <Link href="https://direct.FMT.group/en/login/2y6ueacdr" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-blue-600 text-white rounded-full text-base font-semibold hover:bg-blue-700 hover:text-white transition mx-2">
                        Sign
                    </Link>
                    <button onClick={() => setMobileOpen(!mobileOpen)} className="p-3 bg-white bg-opacity-25 rounded-full focus:outline-none mx-2">
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="md:hidden bg-black bg-opacity-90">
                    <div className="px-4 pb-6 space-y-6">
                        {NAV_ITEMS.map(menu => (
                            <div key={menu.label} className="text-center mx-4">
                                <Link href={menu.href} className="group flex justify-center items-center text-white font-semibold py-3 text-lg mx-4 hover:text-blue-300 transition">
                                    {menu.label}
                                    {menu.items.length > 0 && (
                                        <span className="ml-1 text-sm text-white group-hover:text-blue-300 transition">▼</span>
                                    )}
                                </Link>
                                {menu.items.length > 0 && (
                                    <div className="pl-2">
                                        {menu.items.map(item => (
                                            <Link key={item.title} href={item.href} className="group block text-gray-300 hover:text-blue-300 py-1 text-base mx-4 transition">
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
