'use client';

import React from 'react';
import Image from 'next/image';

// Use image paths from the public folder
const images: string[] = ['/orientation.png', '/tablet.png', '/laptop.png', '/internet.png'];
const imageTexts: string[] = [
  "Use FMT broker's mobile apps",
  "Trade anywhere with tablet support",
  "Professional trading on your PC",
  "Access from the web at any time"
];

const CardGlow: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    e.currentTarget.style.setProperty('--start', (angle + 60).toString());
  };

  return (
    <div className="container space-y-12">
      {/* Cards grid with glow effect */}
      <div className="cards mt-8">
        {images.map((path, index) => (
          <div key={index} className="card" onMouseMove={handleMouseMove}>
            <div className="glow" />
            {path ? (
              <Image
                src={path}
                alt={`Card ${index + 1}`}
                className="card-image"
                width={200}
                height={250}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="card-placeholder">Image not available</div>
            )}
            <p className="card-text">{imageTexts[index]}</p>
          </div>
        ))}
      </div>

      {/* Explanatory paragraph under cards with padding */}
      <p className="mt-5 p-5 text-center text-lg md:text-xl text-gray-300 mb-0 pb-0">
        Master forex trading with FMT Broker—featuring live training, news, training, and expert insights.
        Simply click your device above to download or visit the store, and begin trading with sophistication
        and confidence in moments.
      </p>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Poppins:wght@400;500&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

      .container {
        margin-bottom: 0;
        padding: 40px 0 0 0;
        width: 100%;
        min-height: auto; /* Changed from 100vh */
        background-color: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .cards {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: clamp(15px, 5vw, 30px);
        width: 100%;
        max-width: 1600px;
        margin-bottom: 0;
      }

      @media (min-width: 1000px) {
        .cards {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 1300px) {
        .cards {
          grid-template-columns: repeat(4, 1fr);
          gap: 15px; /* Reduced from clamp */
        }
      }
        .card {
          --start: 0;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: clamp(1rem, 5vw, 2rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .card-image {
          width: clamp(4rem, 6vw, 8rem);
          height: auto;
          margin-bottom: 20px;
        }

        .card-placeholder {
          width: clamp(4rem, 6vw, 8rem);
          height: clamp(4rem, 6vw, 8rem);
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          color: rgb(174, 174, 174);
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: clamp(0.75rem, 2vw, 1rem);
        }

        .card-text {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: rgb(174, 174, 174);
          font-weight: 500;
          transition: text-shadow 0.3s ease;
          margin-top: 20px;
        }

        .card:hover .card-text {
          text-shadow:
            0 0 8px rgba(0, 219, 200, 0.9),
            0 0 15px rgba(0, 169, 255, 0.8),
            0 0 20px rgba(148, 88, 255, 0.9);
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: conic-gradient(
            from 90deg at 50% 50%,
            rgba(0, 219, 200, 0.9),
            rgba(0, 169, 255, 0.8),
            rgba(148, 88, 255, 0.9)
          );
          mask: linear-gradient(#0000, #0000),
            conic-gradient(
              from calc((var(--start) - 22) * 1deg),
              #ffffff1f 0deg,
              white,
              #ffffff00 100deg
            );
          mask-composite: intersect;
          mask-clip: padding-box, border-box;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card:hover::before {
          opacity: 0.6;
        }

        .glow {
          pointer-events: none;
          position: absolute;
          inset: 0;
          filter: blur(14px);
        }

        .glow::before {
          content: "";
          position: absolute;
          inset: 1%;
          border-radius: 14px;
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
    </div>
  );
};

export default CardGlow;
