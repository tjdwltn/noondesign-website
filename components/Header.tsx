import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLogoClick = () => {
    if (router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 border-b border-black/5 bg-white/90 backdrop-blur-sm transition-colors ${
        isScrolled ? "border-black/10" : "border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <button
          type="button"
          onClick={onLogoClick}
          className="text-xs font-semibold tracking-tightMinus uppercase"
        >
          noonDesign
        </button>
        <nav className="flex gap-6 text-xs uppercase tracking-[0.16em]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black/70 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


