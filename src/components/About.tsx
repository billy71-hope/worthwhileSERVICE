"use client";

import { motion } from "framer-motion";
import { CheckCircle, Truck, Wrench, MapPin, Phone, Mail, Clock } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Diagnostic Précis",
    description: "Équipements de diagnostic multimarque dernière génération. Identification rapide de la panne = temps d'arrêt minimisé.",
  },
  {
    icon: Wrench,
    title: "Pièces OEM & Qualité Premium",
    description: "Approvisionnement direct constructeurs et distributeurs agréés. Garantie constructeur préservée. Stock stratégique sur site.",
  },
  {
    icon: Truck,
    title: "Intervention Sur Site 24/7",
    description: "Ateliers mobiles entièrement équipés : gruette, compresseur, groupe électrogène, outillage complet. Partout au Bénin.",
  },
  {
    icon: MapPin,
    title: "Ancrage Local, Standards Internationaux",
    description: "Basés Abomey-Calavi / Cotonou. Connaissance du terrain, du climat, des contraintes locales. Réactivité imbattable.",
  },
];

const values = [
  { title: "Excellence Technique", desc: "Formation continue, certifications constructeurs, veille technologique permanente." },
  { title: "Transparence Totale", desc: "Devis détaillé avant intervention, photos avant/après, rapport complet remis au client." },
  { title: "Engagement Durable", desc: "Solutions pérennes pas rustines. Optimisation durée de vie, réduction conso carburant." },
  { title: "Service Client Premium", desc: "Interlocuteur unique, suivi dossier, rappels maintenance, assistance prioritaire flottes." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, x: -30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.7, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Abstract gradient background with subtle movement */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,180,0,0.03) 0%, transparent 50%), linear-gradient(45deg, rgba(255,180,0,0.02) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-2xl bg-yellow/5 blur-xl opacity-80"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] rounded-2xl bg-yellow/3 blur-xl opacity-70"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10 min-h-fit">
        {/* Section Header with enhanced animation */}
        <motion.div
          className="section-header mb-20"
          initial={{ opacity: 0, y: 50, x: -30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="section-tag">Pourquoi Nous</span>
          <h2 id="about-title" className="section-title">
            L'Excellence <span className="gradient-text-yellow">Mécanique</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Plus qu'un garage, un partenaire technique pour la performance et la
            longévité de votre parc. 15 ans d'expertise terrain au service de votre
            productivité.
          </p>
        </motion.div>

        {/* Features Grid - Premium Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="card-premium p-8 relative overflow-hidden hover-scale"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              {/* Decorative left accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-r from-transparent via-yellow/40 to-transparent"
                transition={{ x: [0, 20, 0] }}
                whileHover={{ x: [-20, 0, -20] }}
                aria-hidden="true"
              />

              {/* Icon with premium glow */}
              <div
                className="w-14 h-14 rounded-2xl bg-yellow/10 flex items-center justify-center mb-6 mx-auto"
                style={{
                  transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <feature.icon
                  className="w-7 h-7 text-yellow"
                  aria-hidden="true"
                />
              </div>

              {/* Feature content */}
              <div>
                <h3 className="font-heading font-bold text-fluid-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-fluid-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Values & Contact Section - dual column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Values Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="font-heading font-bold text-fluid-2xl gradient-text mb-8">
              Nos Valeurs
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex gap-4 p-7 rounded-2xl glass-yellow hover:border-yellow/25 hover:bg-yellow/5 transition-all duration-500"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-yellow/20 flex items-center justify-center flex-shrink-0"
                    style={{
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(4px) scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0) scale(1)";
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-fluid-lg mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-fluid-sm">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Card - Premium Glass */}
          <motion.div
            className="card-premium p-8 lg:p-10 h-fit"
            initial={{ opacity: 0, y: 50, x: 30 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h3 className="font-heading font-bold text-fluid-2xl gradient-text mb-8">
              Nous Contacter
            </h3>
            <div className="space-y-6">
              {/* Phone Link */}
              <a
                href="tel:+2290197643212"
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 group"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
                >
                  <Phone className="w-6 h-6 text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-500 text-fluid-xs uppercase tracking-wide">
                    Téléphone Principal
                  </p>
                  <p className="font-heading font-semibold text-fluid-lg text-white group-hover:text-yellow transition-colors">
                    +229 01 97 64 32 12
                  </p>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a
                href="tel:+2290151125456"
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 group"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
                >
                  <Phone className="w-6 h-6 text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-500 text-fluid-xs uppercase tracking-wide">
                    WhatsApp / Urgence
                  </p>
                  <p className="font-heading font-semibold text-fluid-lg text-white group-hover:text-yellow transition-colors">
                    +229 01 51 12 54 56
                  </p>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:gdbilly71@gmail.com"
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 group"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
                >
                  <Mail className="w-6 h-6 text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-500 text-fluid-xs uppercase tracking-wide">
                    Email
                  </p>
                  <p className="font-heading font-semibold text-fluid-lg text-white group-hover:text-yellow transition-colors">
                    gdbilly71@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5">
                <div
                  className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center"
                >
                  <MapPin className="w-6 h-6 text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-500 text-fluid-xs uppercase tracking-wide">
                    Adresse
                  </p>
                  <p className="font-heading font-semibold text-fluid-lg text-white">
                    Abomey-Calavi / Cotonou, Bénin
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5">
                <div
                  className="w-12 h-12 rounded-xl bg-yellow/10 flex items-center justify-center"
                >
                  <Clock className="w-6 h-6 text-yellow" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-500 text-fluid-xs uppercase tracking-wide">
                    Horaires
                  </p>
                  <p className="font-heading font-semibold text-fluid-lg text-white">
                    Lun-Sam : 7h30 - 19h
                  </p>
                  <p className="text-yellow text-fluid-xs font-medium">
                    Dépannage 24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}