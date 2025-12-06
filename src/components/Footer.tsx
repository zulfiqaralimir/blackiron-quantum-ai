export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-cyan-500/30">

      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-cyan-400">
          Black Iron Quantum AI
        </h2>

        <p className="text-cyan-300 mt-2">
          Engineering Intelligence Beyond the Surface.
        </p>

        <div className="flex justify-center mt-3 text-cyan-400 space-x-4">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          © 2025 Black Iron Quantum AI — All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
