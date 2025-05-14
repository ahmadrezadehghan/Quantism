import Image from 'next/image';

const sections = [
    { title: 'Forex' },
    { title: 'Metals' },
    { title: 'Crypto' },
    { title: 'Indices' },
    { title: 'Shares' },
    { title: 'Energy' },
    { title: 'ETFs' },
];

// Hexagon clip-polygon for hover masks
const hexClip = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';

export default function Flags() {
    return (
        // Gradient border wrapper lifted above content
        <div className="relative mt-20 z-20 mx-auto w-11/12 lg:w-10/12 p-1 bg-gradient-to-r from-purple-500/30 via-transparent to-teal-500/30 rounded-[50px]">
            {/* Inner transparent-gray container (PNG background) */}
            <section className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-gray-800/20 rounded-[48px] overflow-hidden relative">
                {/* Background image (PNG with transparency) */}
                <Image
                    src="/Country Flag.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />

                {/* Five panels */}
                <div className="absolute inset-0 flex">
                    {sections.map((sec, idx) => (
                        <div key={idx} className="relative flex-1 h-full group">
                            {/* Default dark overlay */}
                            <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-transparent" />

                            {/* Hexagon-shaped blur mask on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                style={{
                                    backdropFilter: 'blur(8px)',
                                    maskImage: hexClip,
                                    WebkitMaskImage: hexClip,
                                }}
                            />

                            {/* Title */}
                            <h3 className="relative z-10 text-white text-center pt-10 font-semibold text-2xl">
                                {sec.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
