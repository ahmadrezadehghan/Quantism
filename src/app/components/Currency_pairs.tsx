'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Define types for cross-rate data
type CrossRateData = {
  [base: string]: {
    [quote: string]: string | null;
  };
};

// Currency list
const currencies = [
  { code: 'EUR', flag: 'EU' },
  { code: 'USD', flag: 'US' },
  { code: 'GBP', flag: 'GB' },
  { code: 'JPY', flag: 'JP' },
  { code: 'CHF', flag: 'CH' },
  { code: 'AUD', flag: 'AU' },
  { code: 'CNY', flag: 'CN' },
  { code: 'CAD', flag: 'CA' },
];

// Timeframe enum
enum Timeframe {
  '1D' = '1D',
  '1W' = '1W',
  '1M' = '1M',
  '3M' = '3M',
  '6M' = '6M',
  '1Y' = '1Y',
  YTD = 'YTD',
  '5Y' = '5Y',
  All = 'All',
}

// Timeframes list typed as Timeframe[]
const timeframes: Timeframe[] = [
  Timeframe['1D'],
  Timeframe['1W'],
  Timeframe['1M'],
  Timeframe['3M'],
  Timeframe['6M'],
  Timeframe['1Y'],
  Timeframe.YTD,
  Timeframe['5Y'],
  Timeframe.All,
];

// Generate sample cross-rate changes
type DataRow = { [quote: string]: string | null };
const sampleData: CrossRateData = currencies.reduce((acc, base) => {
  acc[base.code] = currencies.reduce((row: DataRow, quote) => {
    row[quote.code] = base.code === quote.code ? null : `${(Math.random() * 4 - 2).toFixed(2)}%`;
    return row;
  }, {} as DataRow);
  return acc;
}, {} as CrossRateData);

interface ForexHeatmapProps {
  data?: CrossRateData;
}

export default function ForexHeatmap({ data = sampleData }: ForexHeatmapProps) {
  const [activeTF, setActiveTF] = useState<Timeframe>(timeframes[0]);
  const hexClip = 'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)';

  return (
    <div className="relative mx-4 md:mx-16 lg:mx-32 xl:mx-48 my-6 p-1 border border-white bg-gradient-to-r from-white/5  via-white/5 to-white/5 rounded-[25px]">
      <section className="relative bg-gray-800/20 backdrop-blur-lg rounded-[48px] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/20">
          <a
            href="/markets/currencies/cross-rates-overview-heat-map/"
            className="text-xl font-semibold text-white hover:underline flex items-center"
          >
            Forex heatmap
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 11"
              width={6}
              height={11}
              className="ml-2 text-white/80"
            >
              <path
                fill="currentColor"
                d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z"
              />
            </svg>
          </a>
        </div>

        {/* Table with blur-hover mask */}
        <div className="overflow-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="sticky top-0 bg-white/10 backdrop-blur-sm">
              <tr>
                <th className="px-4 py-2"></th>
                {currencies.map((cur) => (
                  <th key={cur.code} className="px-4 py-2 text-white text-sm font-medium">
                    <span className="flex items-center space-x-1">
                      <Image
                        src={`https://s3-symbol-logo.tradingview.com/country/${cur.flag}.svg`}
                        alt={cur.code}
                        width={20}
                        height={14}
                        className="rounded"
                      />
                      <span>{cur.code}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currencies.map((base) => (
                <tr
                  key={base.code}
                  className="even:bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <th className="px-4 py-2 text-white text-sm font-medium">
                    <span className="flex items-center space-x-1">
                      <Image
                        src={`https://s3-symbol-logo.tradingview.com/country/${base.flag}.svg`}
                        alt={base.code}
                        width={20}
                        height={14}
                        className="rounded"
                      />
                      <span>{base.code}</span>
                    </span>
                  </th>
                  {currencies.map((quote) => {
                    const change = data![base.code][quote.code];
                    return (
                      <td key={quote.code} className="relative px-4 py-2 group">
                        {/* Blur hex-mask on hover */}
                        {change !== null && (
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              backdropFilter: 'blur(6px)',
                              maskImage: hexClip,
                              WebkitMaskImage: hexClip,
                            }}
                          />
                        )}
                        {change === null ? (
                          <span className="text-white/60">-</span>
                        ) : (
                          <span
                            className={
                              `text-sm font-semibold ` +
                              (change.startsWith('-') ? 'text-red-400' : 'text-green-400')
                            }
                          >
                            {change}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Timeframes */}
        <div className="px-6 py-4 border-t border-white/20 flex flex-wrap gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTF(tf)}
              className={
                `px-3 py-1 rounded-full text-sm font-medium transition ` +
                (activeTF === tf
                  ? 'bg-teal-400/30 text-white'
                  : 'bg-white/10 text-white/60 hover:bg-white/20')
              }
            >
              {tf}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
