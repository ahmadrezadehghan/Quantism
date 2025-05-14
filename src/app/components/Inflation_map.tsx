'use client';

import { useState, useEffect, useRef } from 'react';
import { geoMercator, geoPath, GeoPermissibleObjects } from 'd3-geo';
import type { Feature, Geometry } from 'geojson';

// Data type for inflation entries
interface InflationData {
  country: string;
  code: string;
  rate: number;
}

// Minimal World Bank API entry type
type WBEntry = {
  country: { id: string; value: string };
  value: number | null;
};

// Optional props: pick a year (defaults to two years ago to ensure availability)
interface InflationMapProps {
  year?: number;
}

// Map inflation rate to HSL hue (0 red → 120 green)
const rateToHue = (rate: number): number => {
  const clamped = Math.max(0, Math.min(10, rate));
  return (1 - clamped / 10) * 120;
};

export default function InflationMap({ year = new Date().getFullYear() - 2 }: InflationMapProps) {
  const [geographies, setGeographies] = useState<Feature<Geometry, Record<string, unknown>>[]>([]);
  const [data, setData] = useState<InflationData[]>([]);
  const [hovered, setHovered] = useState<{ country: string; rate: number | null } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load GeoJSON
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson'
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GeoJSON fetch error: ${res.status}`);
        return res.json();
      })
      .then((geojson: { features?: Feature<Geometry, Record<string, unknown>>[] }) => {
        setGeographies(geojson.features ?? []);
      })
      .catch((err) => console.error('Error loading GeoJSON:', err));
  }, []);

  // Fetch inflation data from World Bank API
  useEffect(() => {
    const apiUrl =
      `https://api.worldbank.org/v2/country/all/indicator/FP.CPI.TOTL.ZG?date=${year}&format=json&per_page=300`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Inflation API error: ${res.status}`);
        return res.json();
      })
      .then((json: unknown) => {
        const arr =
          Array.isArray(json) && Array.isArray(json[1])
            ? (json[1] as WBEntry[])
            : [];
        const parsed: InflationData[] = arr
          .filter((d) => d.value !== null && d.country?.id)
          .map((d) => ({
            country: d.country.value,
            code: d.country.id.toUpperCase(),
            rate: Number(d.value!.toFixed(1)),
          }));
        setData(parsed);
      })
      .catch((err) => {
        console.error('Error loading inflation data:', err);
        setData([]);
      });
  }, [year]);

  // Map sizing & projection
  const width = containerRef.current?.offsetWidth ?? 800;
  const height = width / 1.8;
  const projection = geoMercator()
    .scale((width / 2 / Math.PI) * 1.1)
    .translate([width / 2, height / 2]);
  const pathGenerator = geoPath().projection(projection);

  return (
    <div ref={containerRef} className="w-full mx-0">
      {/* Header */}
      <div className="mb-20 flex items-center">
        <a
          href="/economy/inflation/"
          className="text-lg font-semibold text-white hover:underline flex items-center ml-[20px] md:ml-[200px]"
        >
          Inflation Map ({year})
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 11"
            width={6}
            height={11}
            className="ml-2 text-white/80"
          >
            <path fill="currentColor" d="M1.6 10.96 0 9.66l3.26-3.7L0 2.26 1.6.96l4.4 5-4.4 5Z" />
          </svg>
        </a>
      </div>

      {/* SVG Map centered */}
      <div className="flex justify-center">
        <svg className="mx-auto w-[95%] md:w-[70%]" viewBox={`0 0 ${width} ${height}`}>
          {geographies.map((geo, idx) => {
            const props = geo.properties;
            const iso =
              ((props.ISO_A2 as string) || (props.iso_a2 as string) || '').toUpperCase();
            const entry = data.find((d) => d.code === iso);
            const rate = entry?.rate ?? null;
            const fill = rate != null ? `hsl(${rateToHue(rate)},70%,50%)` : 'transparent';

            return (
              <path
                key={idx}
                d={pathGenerator(geo as GeoPermissibleObjects) ?? ''}
                fill={fill}
                stroke="rgba(255,255,255,0.3)"
                className="cursor-pointer"
                onMouseEnter={() =>
                  setHovered({
                    country:
                      entry?.country ?? (props.ADMIN as string) ?? 'Unknown',
                    rate,
                  })
                }
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </svg>
      </div>

      {/* Tooltip */}
      {hovered && (
        <div className="relative mt-2 bg-gray-900/80 text-white text-sm p-2 rounded shadow-lg inline-block">
          <div className="font-medium">{hovered.country}</div>
          <div>
            Inflation: {hovered.rate != null ? hovered.rate.toFixed(1) + '%' : 'N/A'}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 text-center">
        <a
          href="/economy/inflation/"
          className="inline-block text-sm text-teal-300 hover:underline"
        >
          See full inflation data →
        </a>
      </div>
    </div>
  );
}
