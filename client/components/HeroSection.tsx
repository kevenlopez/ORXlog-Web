import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-16 px-6 min-h-[800px] flex items-center">
      {/* Background hero image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5502203a3a7de9a122266533fc21fe0ee897e033?width=2560"
          alt="ORXlog background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orx-main"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-orx-primary">Log </span>
          <span className="text-orx-sky">Intelligence</span>
          <span className="text-orx-primary"> para<br className="hidden sm:inline" /> decisiones seguras y eficientes</span>
        </h1>

        <p className="text-lg md:text-xl text-orx-primary max-w-2xl mx-auto mb-8 leading-relaxed">
          ORXlog transforma el caos de los datos en inteligencia accionable para equipos de ciberseguridad.
          Optimiza, correlaciona y entrega visibilidad profunda desde un solo punto.
        </p>

        <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-orx-blue/90 transition-colors">
          Solicita una demo
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
