'use client';

import React from 'react';
import Image from 'next/image';

// Sample economic events data
const sampleEvents = [
  { time: '2025-04-27 14:00', country: 'United States', code: 'US', event: 'Nonfarm Payrolls', actual: '236K', forecast: '200K', prior: '215K' },
  { time: '2025-04-28 09:00', country: 'Germany', code: 'DE', event: 'GDP QoQ', actual: '0.4%', forecast: '0.3%', prior: '0.5%' },
  { time: '2025-04-28 10:00', country: 'Eurozone', code: 'EU', event: 'Consumer Confidence', actual: '-8.5', forecast: '-7.9', prior: '-8.0' },
  { time: '2025-04-29 02:30', country: 'China', code: 'CN', event: 'Manufacturing PMI', actual: '50.1', forecast: '49.8', prior: '49.5' },
  { time: '2025-04-29 08:30', country: 'United Kingdom', code: 'GB', event: 'CPI YoY', actual: '1.7%', forecast: '1.8%', prior: '1.6%' },
  { time: '2025-04-30 13:30', country: 'United States', code: 'US', event: 'Unemployment Rate', actual: '3.5%', forecast: '3.6%', prior: '3.7%' },
  { time: '2025-04-27 14:00', country: 'United States', code: 'US', event: 'Nonfarm Payrolls', actual: '236K', forecast: '200K', prior: '215K' },
  { time: '2025-04-28 09:00', country: 'Germany', code: 'DE', event: 'GDP QoQ', actual: '0.4%', forecast: '0.3%', prior: '0.5%' },
  { time: '2025-04-28 10:00', country: 'Eurozone', code: 'EU', event: 'Consumer Confidence', actual: '-8.5', forecast: '-7.9', prior: '-8.0' },
];

export default function EconomicCalendar({ events = sampleEvents }) {
  const hexClip = 'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)';

  return (
    <div data-cms-base-widget="true" data-container-name="economic-calendar" className="relative mx-4 md:mx-16 lg:mx-32 xl:mx-48 my-6 p-1 border border-white bg-gradient-to-r from-white/5 via-white/5to-white/5 rounded-[25px]">
      <section className="relative bg-gray-800/20 backdrop-blur-lg rounded-[48px] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 ">
          <a href="/economy/economic-calendar/" className="text-xl font-semibold text-white hover:underline flex items-center">
            Economic Calendar
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width={6} height={11} className="ml-2 text-white/80">
              <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z" />
            </svg>
          </a>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="sticky top-0 bg-white/10 backdrop-blur-sm">
              <tr>
                <th className="px-4 py-2 text-white text-sm font-medium">Time</th>
                <th className="px-4 py-2 text-white text-sm font-medium">Country</th>
                <th className="px-4 py-2 text-white text-sm font-medium">Event</th>
                <th className="px-4 py-2 text-white text-sm font-medium text-right">Actual</th>
                <th className="px-4 py-2 text-white text-sm font-medium text-right">Forecast</th>
                <th className="px-4 py-2 text-white text-sm font-medium text-right">Prior</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={i} className="even:bg-white/10 hover:bg-white/20 transition-colors">
                  <td className="px-4 py-3 text-white text-sm">{e.time}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <Image src={`https://s3-symbol-logo.tradingview.com/country/${e.code}.svg`} alt={e.country} width={20} height={14} className="rounded" />
                    <span className="text-white text-sm">{e.country}</span>
                  </td>
                  <td className="relative px-4 py-3 group text-white text-sm">
                    {/* Hex blur on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        backdropFilter: 'blur(6px)',
                        maskImage: hexClip,
                        WebkitMaskImage: hexClip,
                      }}
                    />
                    {e.event}
                  </td>
                  <td className="px-4 py-3 text-right text-white text-sm">{e.actual}</td>
                  <td className="px-4 py-3 text-right text-white/60 text-sm">{e.forecast}</td>
                  <td className="px-4 py-3 text-right text-white/60 text-sm">{e.prior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer link */}
        <div className="px-6 py-4 ">
          <a href="/economy/economic-calendar/" className="text-sm text-teal-300 hover:underline">
            See all events →
          </a>
        </div>
      </section>
    </div>
  );
}
