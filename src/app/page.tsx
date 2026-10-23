import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Main viewport */}
      <Hero />

      {/* Page content - sections accessible via navigation anchors */}
      <div className="pt-32">
        {/* Services Section */}
        <section
          id="services"
          className="py-24 sm:py-32 lg:py-40 overflow-hidden"
          style={{ scrollMarginTop: "80px" }}
        >
          <Services />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-24 sm:py-32 lg:py-40 overflow-hidden"
          style={{ scrollMarginTop: "80px" }}
        >
          <About />
        </section>

        {/* Stats Section */}
        <section
          id="stats"
          className="py-24 sm:py-32 overflow-hidden"
          style={{ scrollMarginTop: "80px" }}
        >
          <Stats />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 sm:py-32 lg:py-40 overflow-hidden"
          style={{ scrollMarginTop: "80px" }}
        >
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}