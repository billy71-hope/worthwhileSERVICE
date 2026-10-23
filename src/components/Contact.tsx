"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const formFields = [
  { name: "name", label: "Nom complet", type: "text", placeholder: "Votre nom", icon: null, required: true },
  { name: "email", label: "Email", type: "email", placeholder: "votre@email.com", icon: Mail, required: true },
  { name: "phone", label: "Téléphone / WhatsApp", type: "tel", placeholder: "+229 XX XX XX XX XX", icon: Phone, required: true },
  { name: "subject", label: "Type de demande", type: "select", placeholder: "Sélectionnez", icon: null, required: true, options: [
    { value: "", label: "Type de demande" },
    { value: "maintenance", label: "Maintenance préventive / corrective" },
    { value: "btp", label: "Réparation engins BTP" },
    { value: "poids-lourds", label: "Réparation poids lourds" },
    { value: "hydraulique", label: "Hydraulique / Moteur diesel" },
    { value: "depannage", label: "Dépannage urgence 24/7" },
    { value: "pieces", label: "Vente pièces / Devis pièces" },
    { value: "autre", label: "Autre" },
  ]},
  { name: "message", label: "Détails de votre besoin", type: "textarea", placeholder: "Marque, modèle, année, type de panne, localisation...", icon: null, required: true, rows: 5 },
];

export default function Contact() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateField = (name: string, value: string) => {
    if (!value.trim() && formFields.find(f => f.name === name)?.required) {
      return "Ce champ est requis";
    }
    if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Email invalide";
    }
    if (name === "phone" && value && !/^[\d\s+()-]{8,}$/.test(value)) {
      return "Numéro invalide";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    formFields.forEach(field => {
      if (field.required) {
        const error = validateField(field.name, formData[field.name] || "");
        if (error) {
          newErrors[field.name] = error;
          hasErrors = true;
        }
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setSubmitStatus("loading");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In production, replace with actual API call
    // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    setSubmitStatus("success");
    setFormData({});
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Abstract gradient background with subtle geometric patterns */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255,180,0,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,180,0,0.03) 0%, transparent 50%), linear-gradient(180deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.9) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-yellow/5 blur-3xl opacity-70"
          animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow/3 blur-3xl opacity-60"
          animate={{ x: [0, -50, 0], y: [0, 50, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Subtle gradient border accents */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow/25 to-transparent"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 min-h-fit">
        {/* Left Side - Info & Contact Methods */}
        <motion.div
          className="lg:col-span-2 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <span className="section-tag mb-6">Contact</span>
          <h2 id="contact-title" className="section-title mb-8">
            Demandez Votre <span className="gradient-text-yellow">Devis Gratuit</span>
          </h2>
          <p className="text-gray-400 text-fluid-lg lg:text-xl leading-relaxed mb-12 max-w-2xl">
            Décrivez votre besoin. Nous vous recontactons sous 2h ouvrées avec un
            devis détaillé, sans engagement. Urgence ? Appelez directement.
          </p>

          {/* Contact Methods Section */}
          <div className="space-y-6 mb-12">
            {/* Direct Call */}
            <a
              href="tel:+2290197643212"
              className="flex items-center gap-4 px-6 py-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-yellow/30 transition-all duration-500 group"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
              >
                <Phone className="w-8 h-8 text-yellow" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-500 text-fluid-xs uppercase tracking-widest">
                  Appel Direct
                </p>
                <p className="font-heading font-semibold text-fluid-lg lg:text-xl text-white group-hover:text-yellow transition-colors">
                  +229 01 97 64 32 12
                </p>
              </div>
            </a>

            {/* WhatsApp Urgency */}
            <a
              href="tel:+2290151125456"
              className="flex items-center gap-4 px-6 py-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-yellow/30 transition-all duration-500 group"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
              >
                <Phone className="w-8 h-8 text-yellow" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-500 text-fluid-xs uppercase tracking-widest">
                  WhatsApp Urgence
                </p>
                <p className="font-heading font-semibold text-fluid-lg lg:text-xl text-white group-hover:text-yellow transition-colors">
                  +229 01 51 12 54 56
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:gdbilly71@gmail.com"
              className="flex items-center gap-4 px-6 py-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-yellow/30 transition-all duration-500 group"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-yellow/10 flex items-center justify-center group-hover:bg-yellow/20 transition-colors"
              >
                <Mail className="w-8 h-8 text-yellow" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-500 text-fluid-xs uppercase tracking-widest">
                  Email
                </p>
                <p className="font-heading font-semibold text-fluid-lg lg:text-xl text-white group-hover:text-yellow transition-colors">
                  gdbilly71@gmail.com
                </p>
              </div>
            </a>

            {/* Atelier Location */}
            <div className="flex items-center gap-4 px-6 py-5 rounded-3xl bg-white/5">
              <div
                className="w-14 h-14 rounded-xl bg-yellow/10 flex items-center justify-center"
              >
                <MapPin className="w-7 h-7 text-yellow" aria-hidden="true" />
              </div>
              <div>
                <p className="text-gray-500 text-fluid-xs uppercase tracking-widest">
                  Atelier
                </p>
                <p className="font-heading font-semibold text-fluid-lg text-white">
                  Abomey-Calavi / Cotonou
                </p>
                <p className="text-gray-400 text-fluid-sm">
                  Intervention sur site partout au Bénin
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-xl bg-yellow/10 text-yellow text-fluid-sm font-heading font-semibold">
              Réponse < 2h
            </span>
            <span className="px-4 py-2 rounded-xl bg-yellow/10 text-yellow text-fluid-sm font-heading font-semibold">
              Devis gratuit
            </span>
            <span className="px-4 py-2 rounded-xl bg-yellow/10 text-yellow text-fluid-sm font-heading font-semibold">
              Sans engagement
            </span>
            <span className="px-4 py-2 rounded-xl bg-yellow/10 text-yellow text-fluid-sm font-heading font-semibold">
              Garantie 12 mois
            </span>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="col-span-2 lg:col-span-2 card-premium p-8 sm:p-10 lg:p-12 rounded-3xl"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <h3 className="font-heading font-bold text-fluid-2xl lg:text-3xl gradient-text mb-8">
            Envoyez-nous un message
          </h3>

          {/* Success state */}
          {submitStatus === "success" ? (
            <motion.div
              key="success"
              className="text-center py-14"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-yellow/10 backdrop-blur-lg flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                <CheckCircle className="w-12 h-12 text-yellow" aria-hidden="true" />
              </motion.div>
              <h4 className="font-heading font-bold text-fluid-xl lg:text-2xl mb-4">
                Message envoyé !
              </h4>
              <p className="text-gray-400 text-fluid-base lg:text-xl mb-6">
                Nous vous recontactons sous 2h ouvrées. Pour toute urgence,
                appelez le <a href="tel:+2290197643212" className="text-yellow hover:underline">
                  +229 01 97 64 32 12
                </a>
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="btn-primary px-8 py-3 rounded-2xl font-bold text-black transition-all duration-300 hover:shadow-glow-yellow-lg"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {formFields.map((field) => {
                // Render icon prefix if present
                const hasIcon = field.icon !== null;

                return (
                  <div key={field.name} className="relative">
                    {/* Icon prefix */}
                    {hasIcon && (
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-500 pointer-events-none transition-colors"
                      >
                        <field.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    )}

                    {/* Form Field - Select */}
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-12 py-5 rounded-3xl bg-white/5 border-2 transition-all duration-500
                          ${errors[field.name] ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-yellow focus:shadow-glow-yellow"}
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow/20`}
                        required={field.required}
                        aria-invalid={!!errors[field.name]}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                        style={{
                          appearance: "none",
                          backgroundImage: "url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><path fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 d=%22M6 8l4 4 4-4M6 12l4 4 4-4M6 16l4 4 4-4%22></path></svg>')",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "16px",
                        }}
                        placeholder={field.options?.[0]?.label || field.placeholder}
                      >
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={field.rows || 6}
                        className={`w-full px-12 py-5 rounded-3xl bg-white/5 border-2 transition-all duration-500 resize-none
                          ${errors[field.name] ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-yellow focus:shadow-glow-yellow"}
                          text-white placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow/20`}
                        required={field.required}
                        aria-invalid={!!errors[field.name]}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                        placeholder={field.placeholder}
                        style={{
                          minHeight: "180px",
                          lineHeight: 1.75,
                        }}
                      />
                    ) : (
                      <input
                        name={field.name}
                        type={field.type}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-12 py-5 rounded-3xl bg-white/5 border-2 transition-all duration-500
                          ${errors[field.name] ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-yellow focus:shadow-glow-yellow"}
                          text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow/20`}
                        required={field.required}
                        aria-invalid={!!errors[field.name]}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                        placeholder={field.placeholder}
                        style={{
                          height: "56px",
                          fontSize: "inherit",
                        }}
                      />
                    )}

                    {/* Label */}
                    <label
                      htmlFor={field.name}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 pointer-events-none transition-all duration-300
                        ${formData[field.name] || errors[field.name] ? "-top-4 text-[10px] text-yellow" : ""}"
                    >
                      {field.label}
                    </label>

                    {/* Error message */}
                    {errors[field.name] && (
                      <p
                        className="absolute left-4 bottom-full mb-2 text-red-400 text-xs flex items-center gap-1"
                        style={{ marginBottom: 0 }}
                      >
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              })}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="btn-primary w-full px-8 py-4 rounded-3xl font-bold text-black transition-all duration-300
                  hover:shadow-glow-yellow-lg active:scale-[0.98]"
              >
                {submitStatus === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 me-2 animate-spin" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </button>

              {/* Privacy link */}
              <p className="text-center text-sm text-gray-500 mt-4">
                En soumettant, vous acceptez notre{" "}
                <a href="#" className="text-yellow hover:underline transition-colors">
                  politique de confidentialité
                </a>
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}