"use client";
import Image from "next/image";

// All 10 company logos — golden tinted via CSS filter
const ALL_LOGOS = [
    { src: "/company-paytm.png", alt: "Paytm", w: 80 },
    { src: "/company-bajaj-finserv.png", alt: "Bajaj Finserv", w: 120 },
    { src: "/company-grant-thornton.png", alt: "Grant Thornton", w: 140 },
    { src: "/company-highradius.png", alt: "HighRadius", w: 120 },
    { src: "/company-aviso-ai.png", alt: "Aviso AI", w: 60 },
    { src: "/company-reliance.png", alt: "Reliance", w: 110 },
    { src: "/company-allianz.png", alt: "Allianz", w: 110 },
    { src: "/company-scaleup-ai.png", alt: "ScaleUp:AI", w: 120 },
    { src: "/company-sharda.png", alt: "Sharda World School", w: 130 },
    { src: "/company-spatial-eye.png", alt: "Spatial Eye", w: 110 },
];

// Double the array so the loop is seamless
const LOGOS = [...ALL_LOGOS, ...ALL_LOGOS];

// CSS sepia+saturate+hue-rotate to make any logo look gold/amber
const GOLD_FILTER =
    "sepia(1) saturate(3) hue-rotate(5deg) brightness(1.1)";

interface Props {
    label?: string;
    speed?: number; // animation duration in seconds per full loop
}

export function LogoMarquee({ label = "Trusted by", speed = 30 }: Props) {
    return (
        <section className="py-12 border-gradient-y bg-black/40 overflow-hidden select-none">
            {label && (
                <p className="text-center text-xs font-mono uppercase tracking-[0.3em] text-gray-600 mb-8">
                    {label}
                </p>
            )}

            <div className="relative">
                {/* Edge fade masks */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
                    style={{ background: "linear-gradient(to right, #0d0b0b 0%, transparent 100%)" }} />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
                    style={{ background: "linear-gradient(to left, #0d0b0b 0%, transparent 100%)" }} />

                {/* Scrolling track */}
                <div
                    className="flex items-center gap-16 w-max"
                    style={{
                        animation: `marquee-scroll ${speed}s linear infinite`,
                    }}
                >
                    {LOGOS.map((logo, i) => (
                        <div
                            key={`${logo.alt}-${i}`}
                            className="relative flex-shrink-0 flex items-center"
                            style={{ height: 40, width: logo.w }}
                        >
                            <Image
                                src={logo.src}
                                alt={`${logo.alt} - Trusted B2B Brand & Enterprise Marketing Client`}
                                fill
                                className="object-contain object-center"
                                style={{ filter: GOLD_FILTER, opacity: 0.75 }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee-scroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
