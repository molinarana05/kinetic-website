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
        <section className="py-10 md:py-16 border-gradient-y bg-[#0a0118] relative z-20">
            <div className="w-full px-5 md:px-[80px] relative z-10 grid md:grid-cols-[200px_1fr] items-center gap-8 md:gap-12">

                {/* Label */}
                <h3 className="text-xs text-gray-500 font-medium uppercase tracking-widest text-center md:text-left whitespace-nowrap">
                    Trusted by / Past work
                </h3>

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
                    {/*
                     * The inner track is exactly 2× the logo set wide.
                     * `marquee` keyframe shifts it −50%, which lands on the
                     * start of the duplicate → perfect seamless loop.
                     */}
                    <div
                        className="flex items-center gap-10"
                        style={{
                            width: "max-content",
                            animation: "marquee 30s linear infinite",
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
                                className="shrink-0 flex items-center justify-center"
                                style={{ width: 120, height: 48 }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.alt} – Moxie Digital client`}
                                    width={120}
                                    height={48}
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
