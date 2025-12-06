import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-40">

      {/* PARTICLES */}
      <ParticlesBackground />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-cyan-400">
          Black Iron Quantum AI
        </h1>

        <p className="text-2xl mt-4 text-cyan-300">
          Intelligence Beyond the Surface
        </p>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          A next-generation AI company building advanced Agentic AI systems,
          Quantum-inspired analytics, Cyber-Intelligence architectures, and 
          enterprise-grade FinTech automation. Registered with SECP, PSEB, and FBR — 
          delivering innovation with trust and compliance.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-cyan-400 text-cyan-400 
            font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>

    </main>
  );
}
