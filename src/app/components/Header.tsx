// components/Header.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Quick = { title: string; href: string };

const QUICK_ACCESS: Quick[] = [
    { title: "Home", href: "/#homefirst" },
    { title: "Biography", href: "/#biography" },
    { title: "Core Expertise", href: "/#core-expertise" },
    { title: "Research", href: "/#research" },
    { title: "Publications", href: "/#publications" },
    { title: "Projects", href: "/#projects" },
    { title: "Tools", href: "/#tools" },
    { title: "Platforms", href: "/#platforms" },
    { title: "Achievements", href: "/#achievements" },
    { title: "Contact", href: "mailto:ahmadrzdeh@gmail.com" },
];

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [headerH, setHeaderH] = useState(80);

    useEffect(() => {
        const update = () => setHeaderH(headerRef.current?.offsetHeight ?? 80);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const isHashLink = (href: string) =>
        href?.startsWith("#") || href?.startsWith("/#");

    const handleAnchorClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        href: string
    ) => {
        if (!isHashLink(href)) return; // let external links work
        e.preventDefault();

        const id = href.split("#")[1];
        if (!id) return;

        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 12);
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", `#${id}`);
    };

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl shadow-xl"
        >
            {/* Row 1: Brand OUTSIDE any container — truly flush with the left viewport edge */}
            <div className="w-screen px-0">
                <div className="flex items-center justify-start py-3 sm:py-4">
                    <Link
                        href="/"
                        className="pl-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-300 to-indigo-400 font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl"
                    >
                        Quantism
                    </Link>
                </div>
            </div>

            {/* Row 2: Quick Access chips centered */}
            <div className="mx-auto w-full max-w-[1600px] pb-3">
                <div className="flex justify-center">
                    <div className="inline-flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible scrollbar-none px-3 sm:px-4 lg:px-6 justify-center">
                        {QUICK_ACCESS.map((q) => (
                            <Link
                                key={q.title}
                                href={q.href}
                                onClick={(e) => handleAnchorClick(e, q.href)}
                                className="whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85 hover:bg-white/15 transition text-center"
                            >
                                {q.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
