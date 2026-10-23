"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Truck,
  Settings,
  Zap,
  Droplets,
  Cpu,
  Shield,
  Package,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Maintenance Préventive & Corrective",
    description:
      "Programmes d'entretien sur mesure pour engins BTP et poids lourds. Inspections régulières, vidanges, filtres, réglages. Détection précoce des pannes pour éviter les arrêts coûteux.",
    features: ["Visites planifiées", "Rapports détaillés", "Historique numérique", "Alertes préventives"],
  },
  {
    icon: Truck,
    title: "Réparation Poids Lourds & Camions",
    description:
      "Moteurs diesel, boîtes de vitesses, ponts, freinage pneumatique, suspension. Remise en état complète ou ciblée. Atelier mobile pour interventions sur site.",
    features: ["Moteurs Diesel", "Transmission", "Freinage air", "Électricité embarquée"],
  },
  {
    icon: Settings,
    title: "Engins BTP (Caterpillar, Pelleteuses, Bulldozers, Chargeuses)",
    description:
      "Spécialistes chenilles, hydraulique, moteurs, transmissions. Réparation chenilles, vérins, distributeurs, pompes. Pièces OEM disponibles.",
    features: ["Systèmes chenilles", "Hydraulique complète", "Moteurs CAT/Komatsu", "Diagnostic électronique"],
  },
  {
    icon: Droplets,
    title: "Hydraulique Industrielle & Mobile",
    description:
      "Réparation et test pompes, moteurs, vérins, distributeurs, blocs hydrauliques. Banc de test pression. Remplacement joints, chromage tiges.",
    features: ["Banc de test 350 bar", "Chromage tiges", "Usinage sur site", "Filtrage huile"],
  },
  {
    icon: Cpu,
    title: "Électricité Auto & Diagnostic Électronique",
    description:
      "Diagnostic multimarque, calculateurs, faisceaux, démarreurs, alternateurs, éclairage, climatisation. Reprogrammation, clone ECU.",
    features: ["Valises diagnostic", "Réparation faisceaux", "Clonage ECU", "Climatisation"],
  },
  {
    icon: Zap,
    title: "Moteurs Diesel & Boîtes de Vitesses",
    description:
      "Réfection complète moteurs (culasse, pistons, vilebrequin, injection). Boîtes mécaniques, automatiques, powershift. Rodage, réglage injecteurs.",
    features: ["Rectification culasse", "Injection Common Rail", "Boîtes powershift", "Essai dynamométrique"],
  },
  {
    icon: Shield,
    title: "Dépannage Sur Site 24/7",
    description:
      "Équipe mobile équipée : atelier roulant, gruette, compresseur, groupe électrogène. Intervention rapide Abomey-Calavi, Cotonou et périphérie.",
    features: ["Atelier mobile", "Gruette 10T", "Groupe électrogène", "Stock pièces courant"],
  },
  {
    icon: Package,
    title: "Vente Pièces & Consommables",
    description:
      "Filtres, huiles, courroies, pneus, batteries, pièces hydrauliques, pièces moteur. Stock permanent + commande express. Prix grossiste pour flottes.",
    features: ["Stock 5000+ références", "Livraison 24h", "Tarifs flottes", "Garantie constructeur"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Abstract geometric background shapes */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255,180,0,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,180,0,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="section-tag">Nos Expertises</span>
          <h2 id="services-title" className="section-title">
            Services <span className="gradient-text-yellow">Industriels</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Une gamme complète de services pour maintenir votre parc roulant
            opérationnel et rentable. Chaque intervention est tracée, garantie
            et optimisée pour votre productivité.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="card-premium group relative h-full flex flex-col overflow-hidden"
              variants={itemVariants}
            >
              {/* Decorative top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow/30 to-transparent"
                transition={{ y: [0, -10, 0] }}
                whileHover={{ y: [-10, 0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />

              {/* Icon container with premium hover */}
              <motion.div
                className="w-16 h-16 rounded-2xl bg-yellow/10 flex items-center justify-center mb-6 group-hover:bg-yellow/20 hover:shadow-glow-yellow-lg transition-all duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.1, rotate: 3 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}

              >
                <service.icon
                  className="w-8 h-8 text-yellow"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Content area with enhanced styling */}
              <div className="flex-1 flex flex-col py-8 px-6">
                <h3
                  className="font-heading font-bold text-fluid-xl mb-3 group-hover:text-yellow transition-colors"
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-400 text-fluid-sm mb-6 leading-relaxed flex-1"
                >
                  {service.description}
                </p>

                {/* Enhanced features list */}
                <ul className="space-y-3 mb-6" role="list">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2.5 rounded-xl bg-white/5 px-4 py-2 text-fluid-sm text-gray-300 hover:bg-yellow/10 hover:text-yellow transition-all duration-300"
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 }}
                      />
                      <span className="flex-1">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Premium hover reveal effect - bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow/5 to-transparent py-2 transition-all duration-500 group-hover:py-4"
                whileHover={{ y: [-20, 0, -20] }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ margin: "0 auto" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          className="text-center mt-12 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <p className="text-gray-400 text-fluid-base mb-6">
            Besoin d'un service spécifique ? Nous étudions votre besoin sur mesure.
          </p>
          <a
            href="#contact"
            className="btn-primary px-10 py-4 rounded-3xl font-bold text-black"
          >
            Demander un devis personnalisé
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}