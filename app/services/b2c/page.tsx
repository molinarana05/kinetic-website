import { Navbar } from "../../components/Navbar";

export default function ServicesB2CPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-neon/30">
            <Navbar />
            <div className="pt-32 px-6 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-glow text-neon">B2C Systems</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Customer acquisition scaled through resonant brand storytelling.
                </p>
            </div>
        </main>
    );
}
