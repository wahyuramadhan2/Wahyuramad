import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Tentang" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Pengalaman" },
    { href: "#education", label: "Pendidikan" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-xl gradient-text">
            WR
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:wahyuramadhan9090@gmail.com"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:wahyuramadhan9090@gmail.com"
                className="inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium mt-2"
              >
                Hubungi
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
