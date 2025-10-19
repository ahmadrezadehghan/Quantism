// components/TradeInstruments.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

type Instrument = {
    name: string;
    icon: string;    // transparent PNG/SVG
    emoji: string;   // graceful fallback if image missing
    desc: string;
    accent: string;  // steady gradient accent
};

const instruments: Instrument[] = [
    {
        name: "Machine Learning & AI",
        icon: "/icons/ml.svg",
        emoji: "🧠",
        desc: "LLMs, vision, forecasting, and robust evaluation.",
        accent: "from-fuchsia-500/20 via-purple-500/10 to-violet-500/20",
    },
    {
        name: "Bioinformatics",
        icon: "/icons/bio.svg",
        emoji: "🧬",
        desc: "Multi-omics, biomarkers, survival & systems biology.",
        accent: "from-indigo-500/20 via-violet-500/10 to-blue-500/20",
    },
    {
        name: "Time Series",
        icon: "/icons/time.svg",
        emoji: "⏱️",
        desc: "Energy/finance forecasting with stacked LSTM/Transformers.",
        accent: "from-sky-500/20 via-blue-500/10 to-cyan-500/20",
    },
    {
        name: "Data Platforms",
        icon: "/icons/platforms.svg",
        emoji: "🗄️",
        desc: "Reproducible pipelines, MLOps, and observability.",
        accent: "from-teal-400/20 via-emerald-400/10 to-cyan-400/20",
    },
];

function IconImage({ src, alt, emoji }: { src: string; alt: string; emoji: string }) {
    const [errored, setErrored] = useState(false);
    if (errored) {
        return (
            <span className="text-5xl sm:text-6xl select-none">{emoji}</span>
        );
    }
    return (
        <Image
            src={src}
            alt={alt}
            width={140}
            height={140}
            onError={() => setErrored(true)}
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain mix-blend-screen drop-shadow-[0_10px_25px_rgba(255,255,255,0.18)] pointer-events-none select-none"
            priority={false}
        />
    );
}

export default function TradeInstruments() {
    return (
        <section id="instruments" className="relative text-white py-16 sm:py-20">
            {/* subtle ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-8rem] h-[24rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(56,189,248,0.12)_0%,rgba(0,0,0,0)_100%)] blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-[1600px] px-6">
                {/* Title */}
                <header className="text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Expertise across ML, Bioinformatics, and Data Platforms
                    </h1>
                    <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                        We design reproducible data/AI systems—from research to MLOps—with clear evaluation.
                    </p>
                </header>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
                    {instruments.map((it) => (
                        <div
                            key={it.name}
                            className="group relative overflow-hidden rounded-[28px] border border-white/10 ring-1 ring-white/10
                         bg-white/5 backdrop-blur-xl p-6 md:p-8 aspect-square
                         shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_60px_-25px_rgba(0,0,0,0.8)]
                         transition-transform duration-200 ease-out hover:scale-[1.02] will-change-transform"
                        >
                            {/* steady gradient accent */}
                            <div
                                aria-hidden
                                className={`absolute inset-[-1px] -z-10 rounded-[28px] bg-gradient-to-br ${it.accent} opacity-30`}
                            />

                            {/* glow behind icon */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full
                                bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_70%)] blur-2xl opacity-60" />
                            </div>

                            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                                <IconImage src={it.icon} alt={it.name} emoji={it.emoji} />
                                <div className="mt-4 md:mt-5">
                                    <div className="text-white/95 font-semibold text-lg leading-tight">
                                        {it.name}
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-[16rem] mx-auto">
                                        {it.desc}
                                    </p>
                                </div>
                            </div>

                            {/* extra bottom padding for airy feel */}
                            <div className="pb-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
