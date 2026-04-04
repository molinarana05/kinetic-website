import { Metadata } from 'next';
import { NavbarDesktop } from '../components/NavbarDesktop';
import { Navbar } from '../components/Navbar';
import { DemoForm } from '../components/DemoForm';
import { InteractiveGridDesktop } from '../components/ui/InteractiveGridDesktop';
import { MatrixLogStream } from '../components/ui/MatrixLogStream';

export const metadata: Metadata = {
    title: 'Deploy The Engine | Moxie Digital',
    description: 'Provide your requirements and let us map the blueprint for your compounding pipeline engine.',
    robots: {
        index: false,
        follow: false,
    }
};

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white relative selection:bg-neon selection:text-black">
            {/* Background elements */}
            <InteractiveGridDesktop />
            <MatrixLogStream side="left" />
            <MatrixLogStream side="right" />

            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            <section className="relative pt-32 md:pt-48 pb-24 z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                        
                        {/* Left Side: Copy & Value Prop */}
                        <div className="flex flex-col">
                            <span className="text-[#CCFF00] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 block animate-fade-in-up">
                                Immediate Deployment
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6 animate-fade-in-up delay-100">
                                STOP POSTING.<br />
                                START <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#88cc00]">COMPOUNDING.</span>
                            </h1>
                            <div className="space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up delay-200">
                                <p>
                                    Every day you delay is another day your competitors capture the zero-click search intent and LinkedIn demand your brand deserves. 
                                </p>
                                <p>
                                    Submit your parameters here. We process the telemetry, map your current bottlenecks, and return with a blueprint to install a B2B pipeline that runs on autopilot.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4 animate-fade-in-up delay-300">
                                {[
                                    { title: "ZERO FLUFF", desc: "No generic agency retainers. Just senior operators and AI precision." },
                                    { title: "ONE HOUR COMMITMENT", desc: "We extract everything we need in a single 60-minute interview." },
                                    { title: "INTEGRATED SYSTEM", desc: "SEO, LinkedIn, AEO, Email—all running from one central source of truth." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mt-2.5 shrink-0" />
                                        <div>
                                            <h4 className="font-black text-white uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: The Form */}
                        <div className="relative animate-fade-in-up delay-400">
                            {/* Decorative background glow behind form */}
                            <div className="absolute inset-0 bg-[#CCFF00]/10 blur-[100px] rounded-full" />
                            <DemoForm />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
