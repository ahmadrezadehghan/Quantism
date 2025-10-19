#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Quantism polish pass for a Next.js project.

Usage:
  python quantism_polish.py --root "C:\\Users\\AHMAD\\Desktop\\fmtnextjs"

What it does (idempotent):
  1) MobileSection: replace leftover trading copy under device cards.
  2) Achievements: add subtle dark overlay to boost text contrast on hex cards.
  3) Inflation_map: make tooltip follow cursor + add a small legend.
  4) De-duplicate "Explore Quantism across the web" heading (keep only first).
  5) Header: replace nav with Team/Projects/Publications/Data Tools/About/Contact + a11y on mobile button/drawer.
  6) Hero: change CTA to "Contact Quantism" (+ secondary "View Publications").
  7) Biography Quick Facts: inject a small facts strip under "Quantism — Biography" (if found).
  8) globals.css: add prefers-reduced-motion rule.
  9) layout.tsx: real metadata (title/OG/Twitter).
 10) page.tsx: cap extreme CSS blurs and inject JSON-LD Organization; small perf tidy.

Backups:
  Each modified file is saved to <file>.bak once per run if not already present.
"""

import argparse
import os
import re
import sys
from pathlib import Path

ENC = "utf-8"

FILES = {
    "page":           ["src", "app", "page.tsx"],
    "layout":         ["src", "app", "layout.tsx"],
    "globals":        ["src", "app", "globals.css"],
    "mobile":         ["src", "app", "components", "MobileSection.tsx"],
    "achievements":   ["src", "app", "components", "Achievements.tsx"],
    "inflation":      ["src", "app", "components", "Inflation_map.tsx"],
    "header":         ["src", "app", "components", "Header.tsx"],
    "hero":           ["src", "app", "components", "Hero.tsx"],
}

def backup_once(path: Path):
    bak = path.with_suffix(path.suffix + ".bak")
    if not bak.exists():
        bak.write_text(path.read_text(ENC), ENC)

def read(path: Path) -> str:
    if not path.exists():
        return ""
    return path.read_text(ENC)

def write(path: Path, content: str):
    backup_once(path)
    path.write_text(content, ENC)

def subn(pattern, repl, text, flags=0):
    return re.subn(pattern, repl, text, flags)

def inject_after(text: str, anchor_pat: str, injection: str, once_tag: str, flags=0):
    """Insert `injection` right AFTER the first anchor match if `once_tag` not present."""
    if once_tag in text:
        return text, 0
    m = re.search(anchor_pat, text, flags)
    if not m:
        return text, 0
    start, end = m.span()
    out = text[:end] + injection + text[end:]
    return out, 1

def ensure_heading_dedup(root: Path):
    """Replace duplicated 'Explore Quantism across the web' headings (beyond the first) with a softer variant."""
    target = "Explore Quantism across the web"
    softer = "Explore Quantism — profiles & tools"
    count_seen = 0
    changes = 0
    for p in root.glob("src/app/**/*.tsx"):
        txt = read(p)
        if not txt:
            continue
        def repl(m):
            nonlocal count_seen, changes
            count_seen += 1
            if count_seen == 1:
                return m.group(0)  # keep first
            changes += 1
            return softer
        new = re.sub(re.escape(target), repl, txt)
        if new != txt:
            write(p, new)
    return changes

def patch_mobile_section(path: Path):
    txt = read(path)
    if not txt:
        return 0
    # Replace the paragraph content under cards
    pattern = r"""<p className="mt-5[^"]*text-gray-300[^"]*".*?>[\s\S]*?</p>"""
    repl = (
        '<p className="mt-5 p-5 text-center text-lg md:text-xl text-gray-300 mb-0 pb-0">'
        "Find profiles, publications, datasets, and tools maintained by Quantism. "
        "Click any card to open the destination."
        "</p>"
    )
    new, n1 = subn(pattern, repl, txt)
    if n1:
        write(path, new)
    return n1

def patch_achievements_overlay(path: Path):
    txt = read(path)
    if not txt:
        return 0
    # Insert a subtle dark overlay inside the hex wrapper once.
    # Look for the wrapper div that has overflow-hidden + clipPath + onMouseMove={handleMouseMove}
    pattern = (
        r'(<div\s+className="[^"]*overflow-hidden[^"]*"\s*style={{[^}]+}}\s*onMouseMove={handleMouseMove}>\s*)'
        r'(?!\s*<div className="absolute inset-0 bg-black/25")'
    )
    repl = r'\1<div className="absolute inset-0 bg-black/25" />'
    new, n1 = subn(pattern, repl, txt)
    if n1:
        write(path, new)
    return n1

def patch_inflation_map(path: Path):
    txt = read(path)
    if not txt:
        return 0
    changes = 0

    # Add cursor state if not present
    if "const [cursor, setCursor]" not in txt:
        anchor = r"const \[hovered[^\n]+?\]\s*=\s*useState"
        injection = (
            "\n  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);\n"
            "  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {\n"
            "    const rect = e.currentTarget.getBoundingClientRect();\n"
            "    setCursor({ x: e.clientX - rect.left + 12, y: e.clientY - rect.top + 12 });\n"
            "  };\n"
        )
        new, n = inject_after(txt, anchor, injection, "setCursor(", flags=re.M)
        if n:
            txt = new
            changes += n

    # Add handlers to <svg ...>
    if 'onMouseMove={onMove}' not in txt:
        txt, n = subn(r"<svg(\s+)", r"<svg onMouseMove={onMove} onMouseLeave={() => setCursor(null)} ", txt)
        changes += n

    # Replace static tooltip with floating tooltip that follows cursor
    if "hovered && cursor" not in txt:
        tooltip_pat = r"""{hovered\s*&&\s*\([\s\S]*?\)}"""
        tooltip_repl = (
            "{hovered && cursor && (\n"
            "        <div\n"
            "          className=\"absolute z-20 text-xs md:text-sm bg-gray-900/90 text-white rounded-md px-2 py-1 shadow\"\n"
            "          style={{ left: cursor.x, top: cursor.y }}\n"
            "          role=\"status\" aria-live=\"polite\"\n"
            "        >\n"
            "          <div className=\"font-medium\">{hovered.country}</div>\n"
            "          <div>Inflation: {hovered.rate != null ? `${hovered.rate.toFixed(1)}%` : 'N/A'}</div>\n"
            "        </div>\n"
            "      )}"
        )
        txt, n = subn(tooltip_pat, tooltip_repl, txt)
        changes += n

    # Add legend under the map (if not already present)
    if "Quantism legend" not in txt:
        legend_anchor = r"</svg>\s*"
        legend = (
            "\n      {/* Quantism legend */}\n"
            "      <div className=\"mt-3 flex items-center justify-center gap-3 text-[11px] text-gray-300\">\n"
            "        <span className=\"inline-block h-3 w-6 rounded\" style={{ background: 'hsl(0,70%,50%)' }} />\n"
            "        <span>high</span>\n"
            "        <span className=\"inline-block h-3 w-6 rounded\" style={{ background: 'hsl(60,70%,50%)' }} />\n"
            "        <span>medium</span>\n"
            "        <span className=\"inline-block h-3 w-6 rounded\" style={{ background: 'hsl(120,70%,50%)' }} />\n"
            "        <span>low</span>\n"
            "      </div>\n"
        )
        txt, n = subn(legend_anchor, "</svg>" + legend, txt, flags=re.M)
        changes += n

    if changes:
        write(path, txt)
    return changes

def patch_header_nav(path: Path):
    txt = read(path)
    if not txt:
        return 0
    changes = 0

    # Replace NAV_ITEMS array
    nav_pat = r"const NAV_ITEMS:\s*NavItem\[\]\s*=\s*\[[\s\S]*?\];"
    nav_new = r"""const NAV_ITEMS: NavItem[] = [
    {
        label: 'Team',
        href: '/#biography',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/user-group.svg', title: 'Biography', desc: 'Team story and focus areas', href: '/#biography' },
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/link.svg', title: 'Profiles', desc: 'LinkedIn, GitHub, Scholar', href: '/#profiles' },
        ],
    },
    {
        label: 'Projects',
        href: '/#projects',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/beaker.svg', title: 'Research', desc: 'Genomics, forecasting, FinQA', href: '/#projects' },
        ],
    },
    { label: 'Publications', href: '/#publications', items: [] },
    {
        label: 'Data Tools',
        href: '/#tools',
        items: [
            { icon: 'https://unpkg.com/heroicons@2.0.13/24/outline/chart-bar-square.svg', title: 'Dashboards', desc: 'Explorers & maps', href: '/#tools' },
        ],
    },
    { label: 'About', href: '/#biography', items: [] },
    { label: 'Contact', href: 'mailto:ahmadrzdeh@gmail.com', items: [] },
];"""
    txt2, n1 = subn(nav_pat, nav_new, txt, flags=re.M)
    changes += n1
    txt = txt2

    # Add a11y to the mobile toggle button (aria-expanded/controls/label)
    if 'aria-expanded' not in txt:
        btn_pat = r"(<button\s+onClick=\{\(\)\s*=>\s*setMobileOpen\(!mobileOpen\)\}[^>]*className=\"[^\"]*)\""
        btn_repl = r'\1" aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label="Toggle navigation"'
        txt, n2 = subn(btn_pat, btn_repl, txt)
        changes += n2

    # Add id to mobile drawer
    if 'id="mobile-nav"' not in txt:
        drawer_pat = r"(\{mobileOpen\s*&&\s*\(\s*<div\s+className=\"md:hidden\b)"
        drawer_repl = r'{mobileOpen && (<div id="mobile-nav" className="md:hidden'
        txt, n3 = subn(drawer_pat, drawer_repl, txt)
        changes += n3

    if changes:
        write(path, txt)
    return changes

def patch_hero_cta(path: Path):
    txt = read(path)
    if not txt:
        return 0
    changes = 0

    # Replace primary CTA anchor (any known trading CTA)
    cta_pat = r"""<a[\s\S]*?href="https?://direct\.FMT\.group[\s\S]*?</a>"""
    cta_new = (
        '<a href="mailto:ahmadrzdeh@gmail.com" '
        'className="inline-block border border-blue-400 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold '
        'py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">'
        "Contact Quantism"
        "</a>\n"
        '<div className="mt-3">'
        '<a href="#publications" className="text-sm text-gray-300 hover:text-white underline/50">View Publications →</a>'
        "</div>"
    )
    txt2, n1 = subn(cta_pat, cta_new, txt)
    changes += n1
    txt = txt2

    if changes:
        write(path, txt)
    return changes

def inject_bio_quick_facts(page_path: Path):
    txt = read(page_path)
    if not txt:
        return 0
    # Look for the main biography heading text and inject facts right after it
    facts_block = """
<ul className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3" data-quantism-facts>
  {[
    ['173+', 'countries reached'],
    ['15+', 'publications/abstracts'],
    ['2', 'core team members'],
    ['2018', 'Nat’l Medical Exam rank 7 (IR)'],
  ].map(([a,b]) => (
    <li key={a} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center">
      <div className="text-xl font-extrabold text-white">{a}</div>
      <div className="text-xs text-white/80">{b}</div>
    </li>
  ))}
</ul>
"""
    if 'data-quantism-facts' in txt:
        return 0
    anchor_pat = r"(Quantism\s+—\s+Biography[^<]*</h2>)"
    new, n = inject_after(txt, anchor_pat, facts_block, "data-quantism-facts", flags=re.I)
    if n:
        write(page_path, new)
    return n

def patch_globals(path: Path):
    txt = read(path)
    if not txt:
        return 0
    if "prefers-reduced-motion" in txt:
        return 0
    addition = """

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
"""
    write(path, txt + addition)
    return 1

def patch_layout_metadata(path: Path):
    txt = read(path)
    if not txt:
        return 0
    changes = 0
    # Replace metadata object
    meta_pat = r"export const metadata:\s*Metadata\s*=\s*{[\s\S]*?};"
    meta_new = """export const metadata: Metadata = {
  title: "Quantism — Data Analysis Team | Biography, Research & Tools",
  description:
    "Quantism is a research–engineering team building reliable data analytics and ML systems with privacy, governance, and reproducibility by design.",
  metadataBase: new URL("https://quantism.example.com"),
  openGraph: {
    title: "Quantism — Data Analysis Team",
    description: "Biography, publications, projects, and data tools by Quantism.",
    url: "https://quantism.example.com",
    siteName: "Quantism",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Quantism" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantism — Data Analysis Team",
    description: "Biography, publications, projects, and data tools.",
    images: ["/og-cover.png"],
  },
};"""
    txt2, n1 = subn(meta_pat, meta_new, txt, flags=re.M)
    changes += n1
    txt = txt2

    if changes:
        write(path, txt)
    return changes

def patch_page_blur_and_jsonld(path: Path):
    txt = read(path)
    if not txt:
        return 0
    changes = 0

    # Cap extreme blur values (e.g., blur(220px) -> blur(150px))
    def cap_blur(m):
        val = int(m.group(1))
        return f"blur({min(val,150)}px)"
    txt2, n1 = subn(r"blur\((\d{3,})px\)", cap_blur, txt)
    changes += n1
    txt = txt2

    # Inject JSON-LD Organization into <Head> (if not present)
    if '"@type":"Organization"' not in txt and '"@type": "Organization"' not in txt:
        jsonld = r"""
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quantism",
              "url": "https://quantism.example.com",
              "sameAs": [
                "https://linkedin.com/in/ahmad-dehghan-035441185",
                "https://github.com/ahmadrezadehghan",
                "https://scholar.google.com/citations?user=zmZiF-UAAAAJ&hl=en"
              ],
              "email": "ahmadrzdeh@gmail.com"
            }),
          }}
        />
"""
        head_pat = r"(<Head>[\s\S]*?<title>[\s\S]*?</title>[\s\S]*?)"
        # Inject after the title/meta group, but before </Head>
        if "</Head>" in txt:
            txt = txt.replace("</Head>", jsonld + "      </Head>")
            changes += 1

    if changes:
        write(path, txt)
    return changes

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", required=True, help="Path to Next.js project root")
    args = ap.parse_args()
    root = Path(args.root)

    # Resolve file paths
    paths = {k: root.joinpath(*v) for k, v in FILES.items()}

    total_changes = 0

    # 1) MobileSection copy
    total_changes += patch_mobile_section(paths["mobile"])

    # 2) Achievements overlay
    total_changes += patch_achievements_overlay(paths["achievements"])

    # 3) Inflation map tooltip + legend
    total_changes += patch_inflation_map(paths["inflation"])

    # 4) Deduplicate heading
    total_changes += ensure_heading_dedup(root)

    # 5) Header nav + a11y
    total_changes += patch_header_nav(paths["header"])

    # 6) Hero CTA(s)
    total_changes += patch_hero_cta(paths["hero"])

    # 7) Inject quick facts under biography heading (in page.tsx)
    total_changes += inject_bio_quick_facts(paths["page"])

    # 8) Reduced motion in globals.css
    total_changes += patch_globals(paths["globals"])

    # 9) Real metadata in layout.tsx
    total_changes += patch_layout_metadata(paths["layout"])

    # 10) Cap extreme blurs & inject JSON-LD in page.tsx
    total_changes += patch_page_blur_and_jsonld(paths["page"])

    print(f"✅ Done. Changes applied: {total_changes}")
    print("Backups created as *.bak next to each edited file.")
    print("Tip: run `npm run build && npm start` (or `npm run dev`) and re-check Lighthouse and contrast.")

if __name__ == "__main__":
    sys.exit(main())
