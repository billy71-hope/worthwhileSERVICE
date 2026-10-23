"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Shield, Truck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24 pb-32"
      aria-labelledby="hero-title"
    >
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-black/60 blur-[2px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{ x: [-100, 0, 100], transition: { duration: 30, repeat: Infinity, ease: "linear" } }}
          style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(255,180,0,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,180,0,0.02) 0%, transparent 50%)" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full"
          animate={{ x: [100, 0, -100], transition: { duration: 35, repeat: Infinity, ease: "linear" } }}
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(255,180,0,0.04) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(255,180,0,0.03) 0%, transparent 50%)" }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-yellow/5 blur-xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-yellow/3 blur-xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32 max-w-7xl mx-auto">
        <motion.div
          className="max-w-6xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 40, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Premium gradient tag */}
          <motion.span
            className="section-tag inline-block mb-8"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <span
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow/10 text-yellow text-sm font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-yellow animate-pulse-subtle" aria-hidden="true" />
              Expert Mécanique Industriel & Poids Lourds
            </span>
          </motion.span>

          {/* Main hero title with yellow gradient */}
          <motion.h1
            id="hero-title"
            className="section-title mb-8 gradient-text-yellow mb-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Worthwhile
            <br />
            <span className="relative">SERVICES</span>
          </motion.h1>

          {/* Premium subtitle */}
          <motion.p
            className="text-fluid-2xl sm:text-fluid-3xl font-heading font-semibold text-yellow mb-10 tracking-tight"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            L'expert de vos engins et poids lourds
          </motion.p>

          {/* Description with premium styling */}
          <motion.p
            className="text-fluid-lg sm:text-fluid-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed opacity-0 into-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Maintenance préventive & corrective, réparation engins BTP, poids lourds,
            hydraulique, moteurs diesel. Dépannage 24/7 sur site partout au Bénin.
          </motion.p>

          {/* Premium CTA buttons group */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center pt-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <Link
              href="#contact"
              className="btn-primary group w-full sm:w-auto px-10 py-4"
            >
              Demander un devis
              <ArrowRight
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#services"
              className="btn-secondary w-full sm:w-auto px-10 py-4"
            >
              Nos services
            </Link>
          </motion.div>

          {/* Premium trust indicators - stacked on mobile, horizontal on desktop */}
          <motion.div
            className="flex flex-col sm:flex-wrap items-center justify-center gap-3 mt-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.8, delay: 1.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-0 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-yellow" aria-hidden="true" />
              <span>Garantie 12 mois sur toutes interventions</span>
            </div>
            <div className="flex items-center gap-2 mb-4 sm:mb-0 text-sm text-gray-400">
              <Truck className="w-4 h-4 text-yellow" aria-hidden="true" />
              <span>Intervention sur site partout au Bénin</span>
            </div>
            <div className="flex items-center gap-2 mb-4 sm:mb-0 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-yellow" aria-hidden="true" />
              <span>Disponible 24h/24 et 7j/7</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Wrench className="w-4 h-4 text-yellow" aria-hidden="true" />
              <span>Pièces d'origine garanties</span>
            </div>
          </motion.div>

          {/* Decorative divider with gradient */}
          <motion.div
            className="my-10 pt-10 border-y border-white/5 opacity-50"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          />
        </motion.div>
      </div>

      {/* Floating abstract shape at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform pointer-events-none"
        animate={{ y: [0, -20, 0], rotation: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-64 h-64 opacity-50 mix-blend-multiply"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2z"
            stroke="#FFB400"
          />
        </svg>
      </motion.div>
    </section>
  );
}

/* Keyframe for subtle pulse animation */
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}