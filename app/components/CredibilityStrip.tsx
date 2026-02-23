"use client";
import Image from "next/image";

// bg: hex color that matches each logo's own background.
// For logos on transparent PNGs → use white (#ffffff)
// For logos with their own colored background → match exactly so there's no visible border
const LOGOS = [
    { src: "/company-paytm.png", alt: "Paytm", bg: "#ffffff" },
    { src: "/company-bajaj-finserv.png", alt: "Bajaj Finserv", bg: "#0067BF" }, // Bajaj blue
    { src: "/company-grant-thornton.png", alt: "Grant Thornton", bg: "#ffffff" },
    { src: "/company-highradius.png", alt: "HighRadius", bg: "#ffffff" },
    { src: "/company-aviso-ai.png", alt: "Aviso AI", bg: "#f0e8e8" }, // Aviso salmon-pink bg
    { src: "/company-reliance.png", alt: "Reliance", bg: "#ffffff" },
    { src: "/company-allianz.png", alt: "Allianz", bg: "#ffffff" },
    { src: "/company-scaleup-ai.png", alt: "ScaleUp:AI", bg: "#1b0f2e" }, // ScaleUp dark purple
    { src: "/company-sharda.png", alt: "Sharda World School", bg: "#ffffff" },
    { src: "/company-spatial-eye.png", alt: "Spatial Eye", bg: "#edf1f8" }, // Spatial Eye light blue
    { src: "/company-centime.png", alt: "Centime", bg: "#0D4A41" }, // Centime dark teal
];

// Quadruple for seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

// Uniform card dimensions — identical for every logo
const CARD_W = 148;
const CARD_H = 56;
const PADDING = 10; // px — same for all, so every card appears visually equal

export const CredibilityStrip = () => {
    return (
        <section className="py-10 md:py-16 border-gradient-y bg-[#0d0b0b] relative z-20">
            <div className="w-full px-5 md:px-[80px] relative z-10 grid md:grid-cols-[200px_1fr] items-center gap-8 md:gap-12">
                {/* Label */}
                <h3 className="text-xs text-gray-500 font-medium uppercase tracking-widest text-center md:text-left whitespace-nowrap">
                    Trusted by / Past work
                </h3>

                {/* Marquee track */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                    }}
                >
                    <div className="flex items-center w-max animate-scroll hover:pause">
                        {TRACK.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 mx-4 rounded-lg overflow-hidden flex items-center justify-center transition-opacity duration-300 opacity-90 hover:opacity-100"
                                style={{
                                    width: CARD_W,
                                    height: CARD_H,
                                    backgroundColor: logo.bg,
                                    padding: PADDING,
                                }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.alt} - B2B Marketing Client of Moxie Digital`}
                                    width={CARD_W - PADDING * 2}
                                    height={CARD_H - PADDING * 2}
                                    className="object-contain w-full h-full"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
