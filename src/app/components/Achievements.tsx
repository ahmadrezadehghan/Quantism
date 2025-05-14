'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Mouse-driven glow animation
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;
  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
  angle = (angle + 360) % 360;
  e.currentTarget.style.setProperty('--start', (angle + 60).toString());
};

const achievements = [
  {
    value: 'Global',
    title: 'Worldwide Access',
    description:
      'Launch your trading journey from anywhere—our platform supports traders in over 100 countries with localized languages and currencies.',
  },
  {
    value: '24/7',
    title: 'Round-the-Clock Support',
    description:
      'Our multilingual support team is here whenever you need us, ensuring smooth onboarding and uninterrupted trading advice day and night.',
  },
  {
    value: 'Low',
    title: 'Competitive Fees',
    description:
      'Keep more of your gains: transparent, industry-leading low commission structures mean you pay less and trade more efficiently.',
  },
  {
    value: 'Secure',
    title: 'Bank-Grade Security',
    description:
      'Protecting your assets is our top priority. We employ end-to-end encryption and adhere to top global compliance standards.',
  },
];


export default function Achievements() {
  return (
    <section className="relative py-0 bg-transparent overflow-hidden">
      <div className="container mx-auto px-0">
        {/* Two columns on small screens, four on medium+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="w-full p-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover="hover"
            >
              <div
                className="relative bg-white bg-opacity-5 backdrop-blur-sm overflow-hidden aspect-square transform md:scale-200 md:origin-center"
                style={{
                  clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                }}
                onMouseMove={handleMouseMove}
              >
                {/* Glow layer */}
                <div className="glow"></div>

                {/* Glassy rotating star */}
                <motion.svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full"
                  initial={{ rotate: 0 }}
                  variants={{ hover: { rotate: 360 } }}
                  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                >
                  <polygon
                    points="50,15 61,39 88,39 66,57 75,84 50,68 25,84 34,57 12,39 39,39"
                    fill="yellow"
                    fillOpacity="0.25"
                  />
                </motion.svg>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white transform md:scale-[0.9] md:origin-center">
                  <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                    {item.value}
                  </h3>
                  <p className="text-lg md:text-3xl font-semibold mb-2 md:mb-6">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-base px-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Styled JSX for glow and card effects */}
      <style jsx>{`
        .glow {
          pointer-events: none;
          position: absolute;
          inset: 0;
          filter: blur(14px);
        }
        .glow::before {
          content: '';
          position: absolute;
          inset: 1%;
          border: 15px solid transparent;
          background: conic-gradient(
            from 90deg at 50% 50%,
            rgba(0, 219, 200, 0.8),
            rgba(0, 169, 255, 0.8),
            rgba(148, 88, 255, 0.9)
          );
          mask: linear-gradient(#0000, #0000),
            conic-gradient(
              from calc((var(--start) - 22) * 1deg),
              #000 0deg,
              #ffffff,
              rgba(0, 0, 0, 0) 100deg
            );
          mask-composite: intersect;
          mask-clip: padding-box, border-box;
          opacity: 0;
          transition: opacity 1s ease;
        }
        .card:hover > .glow::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
