// components/Footer.tsx
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';

// ✅ Stable gradient palette (module-level, not a new array each render)
const GRADIENT_COLORS = [
    '#ffffff',
    'rgba(59,130,246,0.95)',   // blue-500
    'rgba(99,102,241,0.95)',   // indigo-500
    'rgba(168,85,247,0.95)',   // purple-500
] as const;

const CurvedLine: React.FC = () => {
    // SSR-safe init (no direct window access during hydration)
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const update = () => setScreenWidth(window.innerWidth);
        update(); // set once on mount
        let raf = 0;
        const onResize = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update); // smooth + cheap
        };
        window.addEventListener('resize', onResize, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // ✅ precompute paths for performance (deps: only screenWidth)
    const paths = useMemo(() => {
        const arr: { d: string; color: string; width: number; opacity: number; blur: number }[] = [];
        for (let i = 0; i < 50; i++) {
            const opacity = Math.max(0.05, Math.pow(0.95, i));
            const yOffset = Math.pow(i, 1.5) * 1;
            const xSpread = Math.min(100, i * 3);
            const colorIndex = Math.floor((i / 30) * GRADIENT_COLORS.length);
            const color = GRADIENT_COLORS[Math.min(colorIndex, GRADIENT_COLORS.length - 1)];
            const yValue = screenWidth && screenWidth < 1000 ? 150 : 50;
            arr.push({
                d: `M-${xSpread},200 Q500,${yValue - yOffset} ${1000 + xSpread},200`,
                color,
                width: 7 - i * 0.15,
                opacity,
                blur: Math.min(25, i * 0.9),
            });
        }
        return arr;
    }, [screenWidth]);

    return (
        <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-black">
            <svg
                className="w-full h-full pointer-events-none"
                viewBox="0 0 1000 220"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                {paths.map((p, idx) => (
                    <path
                        key={idx}
                        d={p.d}
                        fill="none"
                        stroke={p.color}
                        strokeWidth={p.width}
                        strokeOpacity={p.opacity}
                        style={{ filter: `blur(${p.blur}px)` }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default function Footer() {
    return (
        <footer className="text-white bg-black">
            {/* Decorative glow line */}
            <CurvedLine />

            {/* Top helper link */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
                <p className="text-sm sm:text-base md:text-lg font-medium">
                    Need Help?{' '}
                    <Link href="/contact" className="text-teal-400 hover:underline">
                        Visit our Help Section
                    </Link>
                </p>
            </div>

            {/* Columns */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* About */}
                <div>
                    <Link href="/" className="block text-center text-2xl sm:text-3xl font-extrabold mb-4 leading-none">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
                            Quantism
                        </span>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-400">
                        Quantism is a data analysis team building reliable ML systems and research-grade analytics.
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

                {/* Capabilities */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Capabilities</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/trading/forex" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                ML & AI
                            </Link>
                        </li>
                        <li>
                            <Link href="/trading/indices" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Time Series
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/trading/cryptocurrencies"
                                className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition"
                            >
                                Bioinformatics
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Profiles */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Profiles</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="https://linkedin.com/in/ahmad-dehghan-035441185"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition"
                            >
                                LinkedIn (Ahmadreza)
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/ahmadrezadehghan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition"
                            >
                                GitHub (Ahmadreza)
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://scholar.google.com/citations?user=zmZiF-UAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition"
                            >
                                Google Scholar (S. Reza)
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Publications & Research */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Publications & Research</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/publications" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/open-source" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                ML & AI News
                            </Link>
                        </li>
                        <li>
                            <Link href="/tools" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition">
                                Data Tools
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                        <li>
                            <a href="mailto:ahmadrzdeh@gmail.com" className="hover:text-teal-400 transition">
                                ahmadrzdeh@gmail.com
                            </a>
                        </li>
                        <li>
                            <Link
                                href="https://ir.linkedin.com/in/seyed-reza-salarikia-md-mph-candidate-998863200"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-teal-400 transition"
                            >
                                LinkedIn (S. Reza)
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.researchgate.net/profile/Reza-Salarikia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-teal-400 transition"
                            >
                                ResearchGate (S. Reza)
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:Salarikiareza@gmail.com" className="hover:text-teal-400 transition">
                                Salarikiareza@gmail.com
                            </a>
                        </li>
                        <li className="pt-2 text-xs text-gray-500">© Quantism • Global / Remote</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 text-xs sm:text-sm text-gray-400">
                    <p>
                        <strong>Use data responsibly:</strong> We follow privacy-by-design, governance, and reproducible research
                        best practices.
                    </p>
                    <p>
                        <strong>Quantism</strong> — All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
