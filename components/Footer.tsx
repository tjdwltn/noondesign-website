export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container flex flex-col gap-4 py-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} noonDesign. All rights reserved.</span>
          <span className="text-[10px] uppercase tracking-[0.18em]">
            Graphic Design Studio — Seoul
          </span>
        </div>
        <div className="flex flex-wrap gap-4 uppercase tracking-[0.16em]">
          <a href="#work" className="hover:text-black">
            Work
          </a>
          <a href="#services" className="hover:text-black">
            Services
          </a>
          <a href="#about" className="hover:text-black">
            About
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}




