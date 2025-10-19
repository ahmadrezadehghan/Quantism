'use client';

import Image from 'next/image';
import React from 'react';

export default function Biography() {
  return (
    <section id="biography" className="relative z-10 w-full py-16 sm:py-20 lg:py-24">
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-16"
        style={{ maxWidth: '1600px' }}
      >
        {/* Header */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8">
          Quantism — Biography
        </h2>

        {/* Ahmadreza Section */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 origin-center transition-transform duration-200 ease-out will-change-transform hover:scale-[1.01] hover:z-[1]">          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-5">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Seyed Ahmadreza Dehghanian</h3>
              <p className="text-gray-200/90 text-lg leading-relaxed">
                <strong>Software & ML Engineer</strong> focused on representation learning, LLMs/RAG, computer vision,
                time-series modeling, and reinforcement learning. He builds reproducible, production-grade ML systems
                emphasizing governance, privacy, and observability.
              </p>
              <ul className="list-disc pl-6 text-gray-300/90 space-y-1">
                <li>Architects end-to-end ML platforms (data governance, GPU-accelerated training, evaluation).</li>
                <li>Experience with MLflow, Kubeflow, DVC, Ray, Spark, Triton, ONNX, and more.</li>
                <li>Expertise across cancer genomics, energy forecasting, and fintech/trading.</li>
                <li>M.Sc. Software Engineering (Yazd, Sep 2025); B.Sc. Computer Engineering (Shiraz, Sep 2023).</li>
                <li>
                  Portfolio: <a href="https://quanteam.vercel.app" className="underline text-blue-300">Quanteam.vercel.app</a> •{' '}
                  GitHub: <a href="https://github.com/ahmadrezadehghan" className="underline text-blue-300">ahmadrezadehghan</a> •{' '}
                  LinkedIn: <a href="https://linkedin.com/in/ahmad-dehghan-035441185" className="underline text-blue-300">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Ahmad1.png"
                alt="Seyed Ahmadreza Dehghanian"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Reza Section */}
        <div className="relative rounded-3xl  bg-white/5 p-8 sm:p-10 md:p-12 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 origin-center transition-transform duration-200 ease-out will-change-transform hover:scale-[1.01] hover:z-[1]">          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-5">
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Seyed Reza Salarikia</h3>
              <p className="text-gray-200/90 text-lg leading-relaxed">
                <strong>Biomedical Data Scientist</strong> specializing in oncology, cancer genomics, multi-omics
                integration, and survival modeling. Ranked top-10 nationwide in Iran’s medical entrance exam, with
                international research presentations and peer-reviewed publications.
              </p>
              <ul className="list-disc pl-6 text-gray-300/90 space-y-1">
                <li>Develops cancer-genomics pipelines with QC, normalization, and pathway scoring (GSVA).</li>
                <li>Works on classical and deep survival models (Cox, KM, time-dependent ROC).</li>
                <li>Published researcher with presence on Google Scholar and ResearchGate.</li>
                <li>Contact: <a href="mailto:Salarikiareza@gmail.com" className="underline text-blue-300">Salarikiareza@gmail.com</a></li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Reza1.png"
                alt="Seyed Reza Salarikia"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Contact</h3>
          <p className="text-gray-200/90">
            <a href="mailto:ahmadrzdeh@gmail.com" className="underline decoration-blue-400/60 hover:decoration-blue-300">
              ahmadrzdeh@gmail.com
            </a> •{' '}
            <a href="mailto:Salarikiareza@gmail.com" className="underline decoration-violet-400/60 hover:decoration-violet-300">
              Salarikiareza@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
