"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle, Award, Users, Truck, Clock, Wrench } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: 500, suffix: "+", label: "Engins réparés", delay: 0 },
  { icon: Award, value: 15, suffix: " ans", label: "D'expérience", delay: 0.1 },
  { icon: Users, value: 50, suffix: "+", label: "Techniciens certifiés", delay: 0.2 },
  { icon: Truck, value: 1200, suffix: "+", label: "Poids lourds entretenus", delay: 0.3 },
  { icon: Clock, value: 24, suffix: "/7", label: "Disponibilité", delay: 0.4 },
  { icon: Wrench, value: 98, suffix: "%", label: "Taux de satisfaction", delay: 0.5 },
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

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    if (isAnimating) return;
    setIsAnimating(true);

    const target = stat.value;
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic easing for smooth counter animation
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsAnimating(false);
      }
    };

    const timer = setTimeout(animate, stat.delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, stat.value, stat.delay]);

  const formattedCount = count.toLocaleString("fr-FR");

  return (
    <motion.div
      ref={ref}
      className="text-center p-8 sm:p-10 relative"
      variants={itemVariants}
    >
      {/* Stat container with premium glass effect */}
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-8 rounded-3xl bg-yellow/10 backdrop-blur-lg flex items-center justify-center"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: stat.delay + 0.2,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow" aria-hidden="true" />
      </motion.div>

      {/* Animated counter display */}
      <motion.div
        className="font-heading font-extrabold text-fluid-5xl sm:text-fluid-6xl text-white mb-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: stat.delay + 0.6,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {formattedCount}
        <span className="text-yellow text-fluid-3xl sm:text-fluid-4xl font-bold ml-2">
          {stat.suffix}
        </span>
      </motion.div>

      {/* Label with subtle animation */}
      <motion.p
        className="text-gray-400 text-fluid-sm sm:text-fluid-base font-medium tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: stat.delay + 0.8,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {stat.label}
      </motion.p>

      {/* Decorative glowing underline */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[200px] h-[2px] bg-gradient-to-r from-transparent via-yellow/40 to-transparent rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: stat.delay + 1,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="stats-title"
    >
      {/* Abstract gradient background with subtle movement */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255,180,0,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,180,0,0.03) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Floating decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-yellow/5 blur-3xl opacity-60"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-yellow/3 blur-3xl opacity-50"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Subtle border accents */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow/20 to-transparent"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="section-header max-w-2xl mb-16"
          initial {{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="section-tag">Chiffres Clés</span>
          <h2 id="stats-title" className="section-title">
            Notre <span className="gradient-text-yellow">Impact</span>
          </h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de la
            confiance de nos clients dans toute la région.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Statistiques de l'entreprise"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} role="listitem">
              <StatItem stat={stat} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}