// components/ResearchSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, FlaskConical, FileText } from "lucide-react";

type Pub = { year: string; title: string; venue: string; authors?: string };
type Project = { title: string; period?: string; collaborators?: string };

const rezaScholar = "https://scholar.google.com/citations?user=zmZiF-UAAAAJ&hl=en";
const rezaRG = "https://www.researchgate.net/profile/Reza-Salarikia";
const LIST_CLASS = "grid grid-cols-1 gap-4 sm:gap-5";

const rezaPublications: Pub[] = [
    { year: "2024", title: "Nano-hydroxyapatite structures for bone regenerative medicine: Cell–material interaction", venue: "Bone 179:116956", authors: "Hoveidaei AH, et al." },
    { year: "2022", title: "Identification of hub pathways and drug candidates in gastric cancer through systems biology", venue: "Scientific Reports 12:9099", authors: "Salarikia SR, Kashkooli M, Taghipour MJ, Malekpour M, Negahdaripour M" },
    { year: "2023", title: "The genetic link between systemic autoimmune disorders and temporal lobe epilepsy", venue: "Epilepsia Open 8:509–516", authors: "Malekpour M, Salarikia SR, Kashkooli M, Asadi-Pooya AA" },
    { year: "2023", title: "A systems biology approach for psychogenic non-epileptic seizure", venue: "Frontiers in Psychiatry 14:1116892", authors: "Malekpour M, Jafari A, Kashkooli M, Salarikia SR, Negahdaripour M" },
    { year: "2024", title: "Aging-related genetic targets in pancreatic adenocarcinoma", venue: "ACG 119:S108 (Abstract)", authors: "Rajabi AH, et al." },
    { year: "2024", title: "Immunoinformatics-guided design of a multi-epitope mRNA vaccine for PDAC", venue: "Gastroenterology 166:S-1331 (Abstract)", authors: "Midjani F, et al." },
    { year: "2024", title: "Genetic biomarkers predicting prognosis in cholangiocarcinoma", venue: "Gastroenterology 166:S-1624 (Abstract)", authors: "Salarikia SR, et al." },
    { year: "2024", title: "Candidate treatment targets in colorectal cancer", venue: "Gastroenterology 166:S-764–S-765 (Abstract)", authors: "Rajabi A, Salarikia SR, Kashkooli M, Soleymanjahi S" },
    { year: "2024", title: "Genomic, transcriptomic, and proteomic intersections in cholangiocarcinoma", venue: "Gastroenterology 166:S-763–S-764 (Abstract)", authors: "Malekpour M, et al." },
    { year: "2023", title: "HCC pathobiology & drug candidates via bioinformatics", venue: "Gastroenterology 164:S-1255–S-1256 (Abstract)", authors: "Salarikia SR, et al." },
    { year: "2025", title: "ASCO 2025 — Three accepted abstracts (JCO: in press)", venue: "ASCO (in press)", authors: "Team" },
];

const rezaProjects: Project[] = [
    { title: "GBM metabolic network reconstruction; flux-inhibition & subnetwork analysis for targets", period: "Dec 2024 – present", collaborators: "with Dr. Bita Behrouzi (Harvard)" },
    { title: "HCC pathomechanisms & drug candidates (bioinformatics)", collaborators: "Prof. Tamar Taddei (Yale), Dr. Saeed Soleymanjahi (BWH)" },
    { title: "Biases of OMICS beyond non-representativeness", collaborators: "Prof. Leo A. Celi (Harvard)" },
    { title: "Epistemic humility & critical thinking in medical AI", collaborators: "Prof. Leo A. Celi (Harvard)" },
    { title: "The threat of AI is the matrix", collaborators: "Prof. Leo A. Celi (Harvard)" },
    { title: "Lung adenocarcinoma networks: biomarkers & targets", collaborators: "Prof. Leo A. Celi (Harvard), Prof. Kenneth P. Seastedt (Roswell Park)" },
    { title: "Early detection of lung cancer via miRNA + hybrid deep learning" },
    { title: "AI colonialism & impact on science/medical AI (op-ed, in submission)", collaborators: "Prof. Leo A. Celi (Harvard)" },
];

const ahmadSubmissions: Pub[] = [
    { year: "2025", title: "Genome–Network Integration for Gastric Cancer", venue: "Frontiers in Genetics (submitted)", authors: "Dehghanian SA, Salarikia SR, Kashkooli M" },
    { year: "2025", title: "Genome–Network Integration for Lung Cancer", venue: "Scientific Reports (submitted)", authors: "Dehghanian SA, Salarikia SR, Kashkooli M" },
    { year: "2025", title: "Fine-Tuning GPT-3.5 for Structured QA on Telegram Financial Data", venue: "IEEE TNNLS (submitted)", authors: "Dehghanian SA, Zare Chahooki MA" },
    { year: "2025", title: "Stacked LSTM for solar power forecasting", venue: "JEPT (submitted)", authors: "Dehghanian SA, Heidary S, Shams D, Mastali Pour A, Zahedi R" },
    { year: "2025", title: "ML-driven global electricity forecasting, 1950–2030", venue: "JEPT (submitted)", authors: "Dehghanian SA, Heidary S, Shams D, Mastali Pour A, Zahedi R" },
    { year: "2025", title: "ML for quantum chip thermal management", venue: "Quantum Information Processing (submitted)", authors: "Dehghanian SA" },
    { year: "2025", title: "Green Quantum Data Centers: AI-based resource allocation", venue: "Applied Energy (submitted)", authors: "Dehghanian SA" },
];

function Row({
    left,
    primary,
    secondary,
    chipClass,
}: {
    left?: string;
    primary: string;
    secondary?: string;
    chipClass: string;
}) {
    return (
        <li className="flex items-start gap-4 rounded-2xl border border-black/10 ring-1 ring-white/10 bg-black/10 backdrop-blur p-4 pb-7">
            {left ? (
                <span
                    className={`mt-0.5 shrink-0 rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-white/85 ${chipClass}`}
                >
                    {left}
                </span>
            ) : null}

            <div className="min-w-0">
                <p className="text-[0.98rem] font-medium text-white/95">{primary}</p>
                {secondary ? <p className="text-sm text-white/65">{secondary}</p> : null}
            </div>
        </li>
    );
}


export default function ResearchSection() {
    const [tab, setTab] = React.useState<"pubs" | "projects" | "subs">("pubs");

    const TABS = [
        {
            key: "pubs",
            label: `Publications (${rezaPublications.length})`,
            icon: BookOpen,
            // violet → indigo
            activeBg: "bg-gradient-to-r from-violet-500/25 to-indigo-500/25",
            chip: "bg-gradient-to-r from-violet-500/25 to-indigo-500/25",
        },
        {
            key: "projects",
            label: `Projects (${rezaProjects.length})`,
            icon: FlaskConical,
            // emerald → cyan
            activeBg: "bg-gradient-to-r from-emerald-500/25 to-cyan-500/25",
            chip: "bg-gradient-to-r from-emerald-500/25 to-cyan-500/25",
        },
        {
            key: "subs",
            label: `Submissions (${ahmadSubmissions.length})`,
            icon: FileText,
            // sky → blue
            activeBg: "bg-gradient-to-r from-sky-500/25 to-blue-500/25",
            chip: "bg-gradient-to-r from-sky-500/25 to-blue-500/25",
        },
    ] as const;


    return (
        <section id="research" className="relative w-full py-24">
            {/* Ambient backdrop */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(124,58,237,0.14)_0%,rgba(0,0,0,0)_100%)] blur-3xl" />
                <div className="absolute right-[-12rem] bottom-[-12rem] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(6,182,212,0.12)_0%,rgba(0,0,0,0)_100%)] blur-3xl" />
            </div>

            <div className="mx-auto w-full px-6" style={{ maxWidth: "1600px" }}>
                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
                        <span className="text-lg">📚</span>
                        <span className="text-xs uppercase tracking-[0.22em] text-white/70">Research</span>
                    </div>
                    <h2 className="mx-auto mt-4 max-w-4xl bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                        Publications • Projects • Submissions
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
                        Clean, minimal, and easy to scan — switch tabs to browse.
                    </p>
                </header>

                {/* One glass card */}
                <article
                    className="relative w-full rounded-[32px] border border-white/10 bg-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_60px_-25px_rgba(0,0,0,0.8)]
                     origin-center transition-transform duration-200 ease-out will-change-transform hover:scale-[1.01] hover:z-[1]"
                >
                    {/* subtle accent ring */}
                    <div
                        aria-hidden
                        className="absolute inset-[-1px] -z-10 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.16),rgba(99,102,241,0.12),rgba(6,182,212,0.14),rgba(139,92,246,0.16))] opacity-30"
                    />

                    {/* Top: links + tabs */}
                    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-wrap gap-2">
                            <Link
                                href={rezaScholar}
                                target="_blank"
                                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85"
                            >
                                Reza — Scholar
                            </Link>
                            <Link
                                href={rezaRG}
                                target="_blank"
                                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85"
                            >
                                Reza — ResearchGate
                            </Link>
                        </div>

                        <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
                            {TABS.map(({ key, label, icon: Icon, activeBg }) => (
                                <button
                                    key={key}
                                    onClick={() => setTab(key as typeof tab)}
                                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85
                              transition-[transform] duration-150 ease-out
                              ${tab === key ? `${activeBg} ring-1 ring-white/10` : ""}`}
                                    aria-pressed={tab === key}
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="rounded-2xl  p-4 sm:p-6">
                        {tab === "pubs" && (
                            <>
                                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/75">
                                    <BookOpen className="h-4 w-4 text-violet-300/90" /> Publications & Abstracts — Reza
                                </h3>
                                <ul className="grid grid-cols-1 gap-4 sm:gap-5">
                                    {rezaPublications.map((p, i) => (
                                        <Row
                                            key={i}
                                            left={p.year}
                                            primary={p.title}
                                            secondary={`${p.venue}${p.authors ? " — " + p.authors : ""}`}
                                            chipClass="bg-gradient-to-r from-violet-500/25 to-indigo-500/25"
                                        />
                                    ))}
                                </ul>
                            </>
                        )}

                        {tab === "projects" && (
                            <>
                                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/75">
                                    <FlaskConical className="h-4 w-4 text-emerald-300/90" /> Active Projects — Reza
                                </h3>
                                <ul className={LIST_CLASS}>
                                    {rezaProjects.map((pr, i) => (
                                        <Row
                                            key={i}
                                            left={pr.period ?? "Ongoing"}
                                            primary={pr.title}
                                            secondary={pr.collaborators ? `Collaborators: ${pr.collaborators}` : undefined}
                                            chipClass="bg-gradient-to-r from-emerald-500/25 to-cyan-500/25"
                                        />
                                    ))}
                                </ul>
                            </>
                        )}

                        {tab === "subs" && (
                            <>
                                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/75">
                                    <FileText className="h-4 w-4 text-sky-300/90" /> Submissions & Preprints — Ahmad
                                </h3>
                                <ul className={LIST_CLASS}>
                                    {ahmadSubmissions.map((s, i) => (
                                        <Row
                                            key={i}
                                            left={s.year}
                                            primary={s.title}
                                            secondary={`${s.venue}${s.authors ? " — " + s.authors : ""}`}
                                            chipClass="bg-gradient-to-r from-sky-500/25 to-blue-500/25"
                                        />
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </article>
            </div>
        </section>
    );
}
