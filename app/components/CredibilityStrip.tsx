"use client";
import Image from "next/image";

/**
 * Logo list — each entry is just src + alt.
 * No background overrides; logos render at their original colours
 * on the dark site background.
 */
const LOGOS = [
    { src: "/company-paytm.png", alt: "Paytm" },
    { src: "/company-bajaj-finserv.png", alt: "Bajaj Finserv" },
    { src: "/company-grant-thornton.png", alt: "Grant Thornton" },
    { src: "/company-highradius.png", alt: "HighRadius" },
    { src: "/company-aviso-ai.png", alt: "Aviso AI" },
    { src: "/company-reliance.png", alt: "Reliance" },
    { src: "/company-allianz.png", alt: "Allianz" },
    { src: "/company-scaleup-ai.png", alt: "ScaleUp AI" },
    { src: "/company-sharda.png", alt: "Sharda World School" },
    { src: "/company-spatial-eye.png", alt: "Spatial Eye" },
    { src: "/company-centime.png", alt: "Centime" },
];

/**
 * Duplicate once — the CSS animation moves exactly -50% so the
 * second copy seamlessly loops back to the first.
 */
const TRACK = [...LOGOS, ...LOGOS];

export const CredibilityStrip = () => {
    return (
        <section className="py-20 md:py-24 border-y border-white/5 bg-black relative z-20">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            Our Ecosystem
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[1.1] mb-6">
                            Built Alongside<br />
                            the Teams Shaping AI.
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                            We operate inside the ecosystems that matter. Early adopters, active contributors, 
                            and direct access to the platforms rewriting how B2B growth actually works.
                        </p>
                    </div>
                </div>

                {/* Marquee — overflow hidden + edge fade */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        maskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    }}
                >
                    <div
                        className="flex items-center gap-16 py-4"
                        style={{
                            width: "max-content",
                            animation: "marquee 40s linear infinite",
                            willChange: "transform",
                        }}
                        onMouseEnter={e =>
                            (e.currentTarget.style.animationPlayState = "paused")
                        }
                        onMouseLeave={e =>
                            (e.currentTarget.style.animationPlayState = "running")
                        }
                    >
                        {TRACK.map((logo, i) => (
                            <div
                                key={i}
                                className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100"
                                style={{ width: 140, height: 56 }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.alt} – Moxie Digital ecosystem`}
                                    width={140}
                                    height={56}
                                    className="object-contain max-w-full max-h-full"
                                    style={{ objectFit: "contain" }}
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
