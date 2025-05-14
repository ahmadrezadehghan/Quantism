'use client';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';

const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const TradeInstruments = dynamic(() => import('./components/TradeInstruments'), { ssr: false });
const AccountsSection = dynamic(() => import('./components/AccountsSection'), { ssr: false });
const PlatformsSection = dynamic(() => import('./components/PlatformsSection'), { ssr: false });
const MobileSection = dynamic(() => import('./components/MobileSection'), { ssr: false });
const Achievements = dynamic(() => import('./components/Achievements'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const Flags = dynamic(() => import('./components/Flags'), { ssr: false });
const PriceTable = dynamic(() => import('./components/Price_tables'), { ssr: false });
const ForexHeatmap = dynamic(() => import('./components/Currency_pairs'), { ssr: false });
const InflationMap = dynamic(() => import('./components/Inflation_map'), { ssr: false });
const EconomicCalendar = dynamic(() => import('./components/Economic_calender'), { ssr: false });
const ImageSection = dynamic(() => import('./components/ImageSection'), { ssr: false });
const TradeLikePro = dynamic(() => import('./components/TradeLikePro'), { ssr: false });


export default function HomePage() {
  return (
    <div className="min-h-screen font-sans text-gray-800 relative bg-black" style={{
      /* desktop: shrink everything to 66% */
      zoom: '0.66',
      /* for browsers that don’t support zoom */
      transformOrigin: '0 0',
    }}>


      <Head>
        <title>FMT | Trusted Forex Broker | Online Forex Trading Platform</title>
        <meta
          name="description"
          content="Trade forex online with FMT, the trusted forex broker offering CFDs on currency pairs and six other asset classes. Enjoy tight spreads, powerful trading tools, and award-winning platforms. Start trading today!"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://direct-website.azureedge.net/fonts/inter/inter-latin.woff2"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/ce9dc04ef2952c6d8fcf-home-full-styles.css"
          fetchPriority="high"
        />
      </Head>

      {/* External scripts */}
      <Script src="59df250d7982f0d49e18-client-scripts.js" strategy="afterInteractive" />
      <Script src="https://www.google-analytics.com/analytics.js" strategy="afterInteractive" defer />
      <Script
        src="/static/fa323b8fa1eef1fe0ebde3a449d4b048-home-gtm-init-script.js"
        strategy="afterInteractive"
      />
      <Script src="ce9dc04ef2952c6d8fcf-home.js" strategy="afterInteractive" defer />
      <Script src="ce9dc04ef2952c6d8fcf-overlays.js" strategy="afterInteractive" defer />
      <Script
        id="convrs-webchat"
        src="https://webchat.conv.rs/b178f989f9e969b294668c15f96e16ce70f3d653.js"
        strategy="afterInteractive"
        defer
      />
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        strategy="afterInteractive"
        defer
        integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        data-cf-beacon='{"rayId":"910322a4ce7824a1","version":"2025.1.0","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"token":"d908983be3ed4be683ff9f2f50cdf85c","b":1}'
        crossOrigin="anonymous"
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WGF6FQL"
          height="0"
          width="0"
          className="hidden"
        ></iframe>
      </noscript>

      {/* Background effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-opacity-30 backdrop-blur-lg animate-pulse"
        style={{ zIndex: '-1' }}
      />

      {/* Radial Spotlight with Nft */}
      <div className="relative w-full bg-transparent">
        {/* Left Spotlight */}
        <div
          className="absolute top-1/20 left-0"
          style={{
            height: '75vh',
            width: '25%',
            filter: 'blur(80px)',
            transform: 'scale(1.1) translateY(700px)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 0% 50%,
                rgba(255, 255, 255, 0.6) 7%,
                rgba(0, 219, 200, 0.4) 15%,
                rgba(0, 219, 200, 0.4) 1%,
                rgba(0, 169, 255, 0.2) 70%
              )`,
            }}
          />
        </div>

        {/* Mirrored Right Spotlight */}
        <div
          className="absolute top-[calc(25%+500px)] right-0"
          style={{
            height: '100vh',
            width: '20%',
            filter: 'blur(100px)',
            transform: 'scale(1.1)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 99% 50%,
                rgba(255, 255, 255, 0.3) 5%,
                rgba(148, 88, 255, 0.4) 55%,
                rgba(148, 88, 255, 0.4) 15%,
                rgba(148, 88, 255, 0.2) 1%,
                rgba(0, 0, 0, 0) 80%
              )`,
            }}
          />
        </div>

        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>
      </div>

      <div className="relative w-full bg-transparent">
        {/* Left Spotlight */}
        <div
          className="absolute top-1/40 right-0"
          style={{
            height: '200vh',
            width: '20%',
            filter: 'blur(100px)',
            transform: 'scale(1.1) translateY(1700px)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 99% 50%,
                rgba(255, 255, 255, 0.3) 7%,
                rgba(0, 219, 200, 0.4) 15%,
                rgba(0, 219, 200, 0.4) 1%,
                rgba(0, 169, 255, 0.15) 80%
              )`,
            }}
          />
        </div>

        {/* Mirrored Right Spotlight */}
        <div
          className="absolute top-[calc(100%+1500px)] left-0"
          style={{
            height: '80vh',
            width: '30%',
            filter: 'blur(80px)',
            transform: 'scale(1.1)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{

              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(150, 150, 255, 0.2) 5%,
                rgba(0, 0, 255, 0.2) 55%,
                rgba(0, 0, 200, 0.2) 15%,
                rgba(0, 0, 200, 0.1) 80%
              )`,
            }}
          />
        </div>


        {/* Mirrored down left Spotlight */}
        <div
          className="absolute top-[calc(100%+8200px)] left-0"
          style={{
            height: '60vh',
            width: '20%',
            filter: 'blur(200px)',
            transform: 'scale(1.1)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(255, 255, 255, 0.2) 5%,
                rgba(148, 88, 255, 0.3) 55%,
                rgba(148, 88, 255, 0.4) 15%,
                rgba(148, 88, 255, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>





        {/* Mirrored center left Spotlight */}
        <div
          className="absolute top-[calc(100%+4000px)] right-0"
          style={{
            height: '200vh',
            width: '10%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(0, 219, 255, 0.2) 5%,
                rgba(0, 219, 255, 0.3) 55%,
                rgba(0, 219, 200, 0.3) 15%,
                rgba(0, 219, 200, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>
        {/* Mirrored center right Spotlight */}
        <div
          className="absolute top-[calc(100%+4000px)] left-0"
          style={{
            height: '180vh',
            width: '20%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(148, 88, 255, 0.2) 5%,
                rgba(148, 88, 255, 0.3) 55%,
                rgba(148, 88, 255, 0.3) 15%,
                rgba(148, 88, 255, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>






        {/* Mirrored center left Spotlight */}
        <div
          className="absolute top-[calc(100%+6500px)] left-0"
          style={{
            height: '200vh',
            width: '10%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(0, 219, 255, 0.2) 5%,
                rgba(0, 219, 255, 0.3) 55%,
                rgba(0, 219, 200, 0.3) 15%,
                rgba(0, 219, 200, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>
        {/* Mirrored center right Spotlight */}
        <div
          className="absolute top-[calc(100%+6500px)] right-0"
          style={{
            height: '200vh',
            width: '10%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(148, 88, 255, 0.2) 5%,
                rgba(148, 88, 255, 0.3) 55%,
                rgba(148, 88, 255, 0.3) 15%,
                rgba(148, 88, 255, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>


        {/* Mirrored right Spotlight */}
        <div
          className="absolute top-[calc(100%+8400px)] right-0"
          style={{
            height: '60vh',
            width: '20%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(255, 255, 255, 0.2) 5%,
                rgba(0, 0, 255, 0.3) 55%,
                rgba(0, 200, 200, 0.3) 15%,
                rgba(0, 200, 200, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>
        {/* Mirrored right Spotlight */}
        <div
          className="absolute top-[calc(100%+8400px)] right-0"
          style={{
            height: '50vh',
            width: '40%',
            filter: 'blur(150px)',
            transform: 'scale(1.2)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(
                ellipse at 50% 50%,
                rgba(255, 255, 255, 0.2) 5%,
                rgba(0, 0, 255, 0.3) 55%,
                rgba(0, 200, 200, 0.3) 15%,
                rgba(0, 200, 200, 0.2) 80%
              )`,
            }}
          />
        </div>
        <div className="relative z-0 space-y-0">
          {/* Any other content on top of the lighting */}
        </div>
      </div>

      {/* Page content */}

      <div className="w-full flex justify-center">
        <Header />
      </div>
      <Hero style={{ zIndex: '1' }} />
      <TradeInstruments />
      <AccountsSection />
      <ImageSection />

      <div className="mt-16">
        <PlatformsSection />
      </div>
      <div className="text-center  mt-20 mb-5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          Get FMT Broker App on a Wide Range of Platforms
        </h2>
      </div>
      <div className="w-full flex justify-center ">
        <MobileSection />
      </div>
      <div className="flex flex-col space-y-15 py-12">
        <Flags />
      </div>
      <div className="flex flex-col space-y-15 py-12">
        <Achievements />
      </div>
      <div className="flex flex-col space-y-5 py-5">
        <PriceTable />
      </div>
      <div className="flex flex-col space-y-5 py-5">
        <ForexHeatmap />
      </div>
      <div className="flex flex-col space-y-5 py-5">
        <EconomicCalendar />
      </div>
      {/* Grouped widgets with consistent spacing */}
      <div className="flex flex-col space-y-5 py-5">
        <InflationMap />
      </div>

      {/* Extra breathing room before CTA */}
      <div className="mt-12">
        <TradeLikePro />
      </div>

      <Footer />
    </div>
  );
}
