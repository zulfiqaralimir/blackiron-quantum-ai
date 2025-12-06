export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center 
    p-6 z-50 text-cyan-300">

      <a href="/" className="font-bold text-lg hover:text-cyan-400 transition">
        Black Iron Quantum AI
      </a>

      <div className="flex space-x-6">
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#services" className="hover:text-cyan-400 transition">Services</a>
        <a href="#products" className="hover:text-cyan-400 transition">Products</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>

    </nav>
  );
}
