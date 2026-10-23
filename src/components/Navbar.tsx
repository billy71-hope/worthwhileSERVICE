"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#stats", label: "Chiffres clés" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header background transition on scroll with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.header
      className`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-cubic
        ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-premium-hover"
            : "bg-transparent"
        }
      `
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3"
            aria-label="Worthwhile SERVICES - Accueil"
          >
            <div
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow to-yellow-light flex items-center justify-center"
            >
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-heading font-extrabold text-fluid-xl tracking-tight">
                Worthwhile
              </p>
              <p className="font-heading font-bold text-yellow text-fluid-xs tracking-wide">
                SERVICES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-fluid-sm text-gray-300 hover:text-yellow transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-yellow hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
              <a
                href="tel:+2290197643212"
                className="btn-primary text-sm px-5 py-2.5 hidden sm:flex"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+229 01 97 64 32 12</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="mobile-menu"
          >
            <span
              className="w-6 h-6 flex items-center justify-center"
              style={{ color: isMobileMenuOpen ? "yellow" : "white" }}
            >
              {isMobileMenuOpen ? (
                <X
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              )}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden mt-8 bg-black/98 backdrop-blur-xl rounded-xl p-6 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.08,
                      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 px-4 rounded-xl text-fluid-base font-medium text-gray-300 hover:text-yellow hover:bg-white/5 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <a
                    href="tel:+2290197643212"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow/10 text-yellow hover:bg-yellow/20 transition-all"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>
                      Appeler : +229 01 97 64 32 12
                    </span>
                  </a>

                  <a
                    href="tel:+2290151125456"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow/10 text-yellow hover:bg-yellow/20 transition-all"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    <span>
                      WhatsApp : +229 01 51 12 54 56
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}