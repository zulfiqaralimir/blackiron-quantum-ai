import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 text-center">

      {/* PARTICLES */}
      <ParticlesBackground />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight
                       bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500
                       bg-clip-text text
                       drop-shadow-[0_0_14px_rgba(0,225,255,0.45)]">
          Black Iron Quantum AI
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-xl md:text-2xl text-cyan-200 opacity-90
                      animate-pulse drop-shadow-lg">
          Intelligence Beyond the Surface
        </p>

        {/* DESCRIPTION */}
        <p className="mt-8 text-lg leading-relaxed text-gray-300">
          A next-generation AI company building advanced Agentic AI systems,
          Quantum-inspired analytics, Cyber-Intelligence architectures, and
          enterprise-grade FinTech automation. Registered with SECP, PSEB, and FBR —
          delivering innovation with trust and compliance.
        </p>

        {/* BUTTON */}
        <a
          href="/contact"
          className="inline-block mt-10 px-8 py-3 text-lg font-semibold
                     rounded-full border border-cyan-400 text-cyan-300
                     hover:bg-cyan-400 hover:text-black transition-all duration-300
                     shadow-[0_0_12px_rgba(0,255,255,0.6)]
                     hover:shadow-[0_0_20px_rgba(0,255,255,0.9)]">
          Contact Us
        </a>

      </div>
    </main>
  );
}
