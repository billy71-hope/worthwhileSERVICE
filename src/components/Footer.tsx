"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Wrench,
  Shield,
  Truck,
  Zap,
} from "lucide-react";

const footerLinks = {
  services: [
    { href: "#services", label: "Maintenance préventive" },
    { href: "#btp", label: "Réparation engins BTP" },
    { href: "#poids-lourds", label: "Poids lourds & camions" },
    { href: "#hydraulique", label: "Hydraulique industrielle" },
    { href: "#electricite", label: "Électricité auto" },
    { href: "#moteurs", label: "Moteurs diesel" },
  ],
  company: [
    { href: "#about", label: "À propos" },
    { href: "#stats", label: "Nos chiffres" },
    { href: "#team", label: "Équipe" },
    { href: "#certifications", label: "Certifications" },
    { href: "#engagements", label: "Engagements RSE" },
    { href: "#carriers", label: "Carrières" },
  ],
  support: [
    { href: "#contact", label: "Demander un devis" },
    { href: "#depannage", label: "Dépannage 24/7" },
    { href: "#pieces", label: "Pièces & consommables" },
    { href: "#contrats", label: "Contrats maintenance" },
    { href: "#faq", label: "FAQ" },
    { href: "#mentions", label: "Mentions légales" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-black border-t border-white/10 overflow-hidden border-t-2"
      role="contentinfo"
    >
      {/* Abstract gradient background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(255,180,0,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,180,0,0.03) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2 xl:col-span-2"
            initial={{ opacity: 0, y: 40, x: -40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <Link href="#" className="flex items-center gap-4 mb-8" aria-label="Worthwhile SERVICES - Accueil">
              <div
                className="w-14 h-14 rounded-3xl bg-gradient-to-br from-yellow to-yellow-light flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-black"
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
                <p className="font-heading font-extrabold text-2xl lg:text-3xl tracking-tight">
                  Worthwhile
                </p>
                <p className="font-heading font-bold text-yellow text-xs tracking-wide">
                  SERVICES
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-fluid-base lg:text-lg leading-relaxed mb-10 max-w-xs">
              L'expert de vos engins et poids lourds. 15 ans d'excellence mécanique
              au service de votre productivité. Basés à Abomey-Calavi / Cotonou,
              intervention sur site partout au Bénin.
            </p>

            {/* Contact Quick */}
            <div className="space-y-3 mb-10">
              <a
                href="tel:+2290197643212"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors group"
              >
                <Phone
                  className="w-5 h-5 group-hover:text-yellow transition-colors"
                  aria-hidden="true"
                />
                <span>+229 01 97 64 32 12</span>
              </a>
              <a
                href="tel:+2290151125456"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors group"
              >
                <Phone
                  className="w-5 h-5 group-hover:text-yellow transition-colors"
                  aria-hidden="true"
                />
                <span>
                  +229 01 51 12 54 56 (WhatsApp)
                </span>
              </a>
              <a
                href="mailto:gdbilly71@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow transition-colors group"
              >
                <Mail
                  className="w-5 h-5 group-hover:text-yellow transition-colors"
                  aria-hidden="true"
                />
                <span>gdbilly71@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow hover:border-yellow/30 hover:bg-yellow/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-yellow transition-colors" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-label="Services"
          >
            <h4 className="font-heading font-bold text-fluid-lg lg:text-xl mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-yellow" aria-hidden="true" />
              Services
            </h4>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow transition-colors text-sm lg:text-fluid-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-yellow/30 group-hover:bg-yellow group-hover:scale-125 transition-all"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company */}
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-label="Entreprise"
          >
            <h4 className="font-heading font-bold text-fluid-lg lg:text-xl mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow" aria-hidden="true" />
              Entreprise
            </h4>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow transition-colors text-sm lg:text-fluid-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-yellow/30 group-hover:bg-yellow group-hover:scale-125 transition-all"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Support */}
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            aria-label="Support"
          >
            <h4 className="font-heading font-bold text-fluid-lg lg:text-xl mb-6 flex items-center gap-2">
              <Truck className="w-5 h-5 text-yellow" aria-hidden="true" />
              Support
            </h4>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow transition-colors text-sm lg:text-fluid-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-yellow/30 group-hover:bg-yellow group-hover:scale-125 transition-all"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Divider with gradient */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-yellow/30 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-fluid-sm lg:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {new Date().getFullYear()} Worthwhile SERVICES. Tous droits réservés.
            <span className="hidden lg:inline mx-2">·</span>
            <span className="hidden lg:inline text-gray-500">
              Conçu avec excellence au Bénin
            </span>
          </motion.p>

          {/* Premium Certifications / Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow/10 text-yellow text-xs font-heading font-semibold">
              <Shield className="w-4 h-4" aria-hidden="true" />
              Garantie 12 mois
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow/10 text-yellow text-xs font-heading font-semibold">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Intervention 24/7
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow/10 text-yellow text-xs font-heading font-semibold">
              <Truck className="w-4 h-4" aria-hidden="true" />
              Sur site Bénin
            </span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            className`
              fixed bottom-8 right-8 w-12 h-12 rounded-3xl bg-yellow/10 border border-yellow/30 flex items-center justify-center text-yellow
              hover:bg-yellow/20 hover:border-yellow/50 hover:shadow-glow-yellow transition-all duration-300 z-40
            `
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}