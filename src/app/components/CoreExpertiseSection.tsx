// components/CoreExpertiseSection.tsx
"use client";

import React from "react";
import { Brain, Microscope, LineChart, ServerCog, Cloud, Atom } from "lucide-react";

/**
 * 🌌 Core Expertise / Services
 * - Spacious glass cards (width ~38%)
 * - Two cards per row on large screens
 * - Each card has a unique steady gradient (no hover color changes)
 * - Matches Biography section width/spacing
 */

type Pillar = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  bullets: string[];
  leads: string[];
};

const pillars: readonly Pillar[] = [
  {
    title: "Machine Learning & AI",
    Icon: Brain,
    accent: "from-fuchsia-500/25 via-purple-500/15 to-violet-500/20",
    bullets: [
      "Computer vision for safety (YOLOv8, TensorRT, CUDA).",
      "LLMs + RAG for sentiment, Q&A, and forecasting.",
      "Multimodal (tabular, text, image) predictive systems.",
      "Interpretability, benchmarking, and robust evaluation.",
      "Distributed GPU training and scalable deployment.",
    ],
    leads: ["Ahmad"],
  },
  {
    title: "Bioinformatics & Cancer Informatics",
    Icon: Microscope,
    accent: "from-indigo-500/25 via-violet-500/15 to-blue-500/20",
    bullets: [
      "Multi-omics pipelines (RNA-Seq, microarray, WES) for biomarker discovery.",
      "Survival modeling (Cox, Kaplan–Meier) in HCC, CCA, gastric, and lung cancer.",
      "Network-based drug target discovery & systems biology.",
      "Publications in DDW, ACG, and ASCO (Harvard, Yale, Stanford collaborations).",
      "AI for early detection (miRNA) and mRNA vaccine modeling.",
    ],
    leads: ["S. R. Salarikia"],
  },
  {
    title: "Data Analytics & Biostatistics",
    Icon: LineChart,
    accent: "from-blue-500/25 via-sky-500/15 to-indigo-500/20",
    bullets: [
      "Experimental design, data gathering, and quality control.",
      "Advanced modeling: regression, survival, causal inference, forecasting.",
      "Econometric and macro-financial time-series forecasting.",
      "Scientific writing, reproducibility, and clean R/Python pipelines.",
      "Cross-domain analytics: biomedical and economic datasets.",
    ],
    leads: ["S. R. Salarikia", "Ahmad"],
  },
  {
    title: "Scientific Software & MLOps",
    Icon: ServerCog,
    accent: "from-cyan-400/25 via-blue-400/15 to-indigo-400/20",
    bullets: [
      "End-to-end ML pipelines (Python/R) with MLflow & DVC tracking.",
      "CI/CD automation using Docker, Kubernetes, and GitHub Actions.",
      "High-performance inference (Triton, ONNX, TensorRT).",
      "Comprehensive experiment logging and monitoring.",
      "Code modularity, documentation, and reliability at scale.",
    ],
    leads: ["Ahmad"],
  },
  {
    title: "Cloud & Full-Stack Engineering",
    Icon: Cloud,
    accent: "from-teal-400/25 via-cyan-400/15 to-sky-400/20",
    bullets: [
      "Next.js/React UIs, Node APIs, and real-time WebSocket microservices.",
      "FMT Broker Platform: secure trading, analytics, and cloud scalability.",
      "FXDrop Airdrop Game: Flutter front-end, Laravel back-end, Python analytics.",
      "SEO-optimized Next.js SSR sites on Vercel (sub-second loading).",
      "AWS, GCP, Azure deployments with IaC and observability tools.",
    ],
    leads: ["Ahmad"],
  },
  {
    title: "Quantum Computing & Green Energy",
    Icon: Atom,
    accent: "from-emerald-400/25 via-teal-400/15 to-cyan-400/20",
    bullets: [
      "ML for quantum chip thermal management and stability.",
      "Energy-aware scheduling and resource allocation for quantum/AI workloads.",
      "Carbon-aware autoscaling; PUE optimization for green data centers.",
      "Solar & wind forecasting (stacked LSTM/transformers) for grid planning.",
      "Sustainable HPC: GPU utilization tuning, DVFS, and workload shaping.",
    ],
    leads: ["S. R. Salarikia", "Ahmad"],
  }

] as const;

export default function CoreExpertiseSection() {
  return (
    <section className="relative w-full py-24">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(147,51,234,0.12)_0%,rgba(0,0,0,0)_100%)] blur-3xl" />
        <div className="absolute right-[-12rem] bottom-[-12rem] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(34,211,238,0.12)_0%,rgba(0,0,0,0)_100%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur">
            <span className="text-lg">🧩</span>
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Core Expertise
            </span>
          </div>
          <h2 className="mt-5 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Expertise that bridges science and engineering
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm text-white/70">
            Precision research, practical software, and reliable AI—built with clarity and purpose.
          </p>
        </header>

        {/* Two-column layout (each 38% width) */}
        <div className="flex flex-wrap justify-center gap-10">
          {pillars.map(({ title, Icon, bullets, leads, accent }) => (
            <article
              key={title}
              className="relative w-full md:w-[47.5%] rounded-[32px] border border-white/10 bg-white/10 p-10 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_60px_-25px_rgba(0,0,0,0.8)]
             origin-center transition-transform duration-200 ease-out will-change-transform hover:scale-[1.01] hover:z-[1]"
            >

              {/* Soft gradient layer */}
              <div
                aria-hidden
                className={`absolute inset-[-1px] -z-10 rounded-[32px] bg-gradient-to-br ${accent} opacity-30`}
              />

              {/* Header */}
              <div className="mb-6 flex items-center gap-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                  <Icon className="h-8 w-8 text-white/90" strokeWidth={1.5} />
                </span>
                <h3 className="text-xl font-semibold text-white/95">{title}</h3>
              </div>

              {/* Content */}
              <div className="space-y-3 text-[1rem] leading-relaxed text-white/85">
                {bullets.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>

              {/* Leads */}
              <div className="mt-6 flex flex-wrap gap-2">
                {leads.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/75"
                  >
                    Lead: {name}
                  </span>
                ))}
              </div>

              {/* Decorative light blur */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[radial-gradient(40%_40%_at_50%_50%,rgba(255,255,255,0.15),rgba(255,255,255,0))] opacity-40 blur-3xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
