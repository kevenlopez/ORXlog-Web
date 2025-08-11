import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Header
      "language.spanish": "Español",
      "language.english": "English", 
      "header.partner": "Únete como partner",
      "header.login": "Ingresa",
      "header.home": "Inicio",
      "header.solution": "Solución", 
      "header.architecture": "Arquitectura",
      "header.faq": "FAQ",
      "header.demo": "Solicita una demo",
      
      // Hero
      "hero.title": "Log Intelligence para decisiones seguras y eficientes",
      "hero.subtitle": "Transforma tus datos de seguridad en inteligencia accionable con nuestra plataforma de next-gen SIEM",
      "hero.cta": "Solicita una demo",
      
      // Benefits Section
      "benefits.tabs.benefits": "Beneficios",
      "benefits.tabs.how": "¿Cómo funciona?",
      "benefits.tabs.architecture": "Arquitectura", 
      "benefits.tabs.usecases": "Casos de Uso",
      "benefits.title.1": "Reduce hasta un 70% en ",
      "benefits.title.2": "almacenamiento y licencias SIEM.",
      "benefits.accelerate": "Acelera investigaciones",
      "benefits.accelerate.desc": " con correlación de eventos y alertas contextuales basadas en Mitre Att&ck.",
      "benefits.integrate": "Integra rápidamente",
      "benefits.integrate.desc": " con las principales soluciones del mercado.",
      "benefits.scalable": "Diseñado para crecer contigo: ",
      "benefits.scalable.desc": "cloud, on-prem o híbrido. Modalidad MSSP.",
      "benefits.stats.1": "+1 MM",
      "benefits.stats.1.desc": "De eventos procesados por día",
      "benefits.stats.2": "-60%",
      "benefits.stats.2.desc": "En volumen de logs promedio por cliente",
      "benefits.stats.3": "+90%",
      "benefits.stats.3.desc": "De detecciones con enriquecimiento automatizado.",
      "benefits.stats.4": "12 min",
      "benefits.stats.4.desc": "De media para un análisis completo post incidente",
      
      // How it works tab
      "how.title.1": "Optimiza, filtra y enriquece tus logs para una ",
      "how.title.2": "seguridad más eficiente.",
      "how.receive": "Recibe logs",
      "how.receive.desc": " desde múltiples fuentes (firewalls, endpoints, nubes, apps).",
      "how.optimize": "Optimiza y normaliza",
      "how.optimize.desc": " datos para reducir volumen y mejorar calidad.",
      "how.threat": "Aplica inteligencia de amenazas",
      "how.threat.desc": " y enriquecimiento contextual.",
      "how.visualize": "Visualiza y responde",
      "how.visualize.desc": " desde dashboards personalizados o integra con tu SIEM.",
      "how.terminal.title": "ORXlog Terminal v2.1",
      "how.compatible": "Compatible con +60 tecnologías:",
      
      // Architecture tab
      "arch.title.1": "Una plataforma modular, escalable y agnóstica, diseñada para integrarse con ",
      "arch.title.2": "cualquier entorno.",
      "arch.description": "ORXlog opera como una capa de inteligencia entre tus fuentes de datos y las plataformas de análisis o respuesta. Se despliega de forma ",
      "arch.description.bold": "on-prem, cloud o híbrida",
      "arch.description.end": ", y está compuesta por tres capas funcionales:",
      "arch.ingestion": "Ingesta universal:",
      "arch.ingestion.desc": " Conectores nativos para más de 60 tecnologías.",
      "arch.processing": "Procesamiento inteligente:",
      "arch.processing.desc": " Motor de reducción, enriquecimiento y correlación de eventos.",
      "arch.delivery": "Entrega y visualización:",
      "arch.delivery.desc": " Dashboards, APIs, Alertas, y forwarding flexible a SIEMs, Data Lakes o herramientas SOAR.",
      "arch.read.more": "Leer más",
      
      // Use Cases tab  
      "usecases.title.1": "Aplicaciones reales. ",
      "usecases.title.2": "Impacto inmediato.",
      "usecases.ciso": "CISO / Seguridad corporativa",
      "usecases.ciso.desc": "Asegura la eficiencia operativa y cumplimiento.",
      "usecases.soc": "SOC Manager / Analistas",
      "usecases.soc.desc": "Aumenta la capacidad de detección sin saturar tu SIEM.",
      "usecases.devsec": "DevSecOps / Cloud Security", 
      "usecases.devsec.desc": "Flujo optimizado de datos para pipelines de seguridad.",
      "usecases.testimonial": "Con ORXlog logramos visibilidad real de nuestros entornos sin disparar los costos de nuestro SIEM",
      "usecases.testimonial.author": "Directora de Seguridad, Sector financiero",
      
      // Data Flow Section
      "dataflow.title": "Reducción de volumen paso a paso",
      "dataflow.step1": "Ingesta Raw Data",
      "dataflow.step2": "Optimización +/-60%", 
      "dataflow.step3": "Filtrado +/-30%",
      "dataflow.step4": "Enriquecimiento +/-40%",
      
      // Footer
      "footer.description": "La inteligencia de logs que impulsa la seguridad del futuro.",
      "footer.contact": "Contacto",
      "footer.email": "contacto@orxlog.com",
      "footer.location": "Barcelona, España",
      "footer.legal": "Términos legales",
      "footer.privacy": "Política de privacidad",
      "footer.rights": "© 2024 ORXlog. Todos los derechos reservados."
    }
  },
  en: {
    translation: {
      // Header
      "language.spanish": "Español", 
      "language.english": "English",
      "header.partner": "Join as partner",
      "header.login": "Login",
      "header.home": "Home", 
      "header.solution": "Solution",
      "header.architecture": "Architecture",
      "header.faq": "FAQ",
      "header.demo": "Request a demo",
      
      // Hero
      "hero.title": "Log Intelligence for secure and efficient decisions",
      "hero.subtitle": "Transform your security data into actionable intelligence with our next-gen SIEM platform",
      "hero.cta": "Request a demo",
      
      // Benefits Section
      "benefits.tabs.benefits": "Benefits",
      "benefits.tabs.how": "How it works?",
      "benefits.tabs.architecture": "Architecture",
      "benefits.tabs.usecases": "Use Cases", 
      "benefits.title.1": "Reduce up to 70% in ",
      "benefits.title.2": "storage and SIEM licenses.",
      "benefits.accelerate": "Accelerate investigations",
      "benefits.accelerate.desc": " with event correlation and contextual alerts based on Mitre Att&ck.",
      "benefits.integrate": "Integrate quickly",
      "benefits.integrate.desc": " with leading market solutions.",
      "benefits.scalable": "Designed to grow with you: ",
      "benefits.scalable.desc": "cloud, on-prem or hybrid. MSSP modality.",
      "benefits.stats.1": "+1 MM",
      "benefits.stats.1.desc": "Events processed per day",
      "benefits.stats.2": "-60%",
      "benefits.stats.2.desc": "Average log volume per client",
      "benefits.stats.3": "+90%",
      "benefits.stats.3.desc": "Detections with automated enrichment.",
      "benefits.stats.4": "12 min",
      "benefits.stats.4.desc": "Average for complete post-incident analysis",
      
      // How it works tab
      "how.title.1": "Optimize, filter and enrich your logs for ",
      "how.title.2": "more efficient security.",
      "how.receive": "Receive logs",
      "how.receive.desc": " from multiple sources (firewalls, endpoints, clouds, apps).",
      "how.optimize": "Optimize and normalize",
      "how.optimize.desc": " data to reduce volume and improve quality.",
      "how.threat": "Apply threat intelligence",
      "how.threat.desc": " and contextual enrichment.",
      "how.visualize": "Visualize and respond",
      "how.visualize.desc": " from custom dashboards or integrate with your SIEM.",
      "how.terminal.title": "ORXlog Terminal v2.1",
      "how.compatible": "Compatible with +60 technologies:",
      
      // Architecture tab
      "arch.title.1": "A modular, scalable and agnostic platform, designed to integrate with ",
      "arch.title.2": "any environment.",
      "arch.description": "ORXlog operates as an intelligence layer between your data sources and analysis or response platforms. It deploys as ",
      "arch.description.bold": "on-prem, cloud or hybrid",
      "arch.description.end": ", and consists of three functional layers:",
      "arch.ingestion": "Universal ingestion:",
      "arch.ingestion.desc": " Native connectors for 60+ technologies.",
      "arch.processing": "Intelligent processing:",
      "arch.processing.desc": " Reduction, enrichment and event correlation engine.",
      "arch.delivery": "Delivery and visualization:",
      "arch.delivery.desc": " Dashboards, APIs, Alerts, and flexible forwarding to SIEMs, Data Lakes or SOAR tools.",
      "arch.read.more": "Read more",
      
      // Use Cases tab
      "usecases.title.1": "Real applications. ",
      "usecases.title.2": "Immediate impact.",
      "usecases.ciso": "CISO / Corporate Security",
      "usecases.ciso.desc": "Ensures operational efficiency and compliance.",
      "usecases.soc": "SOC Manager / Analysts",
      "usecases.soc.desc": "Increases detection capacity without saturating your SIEM.",
      "usecases.devsec": "DevSecOps / Cloud Security",
      "usecases.devsec.desc": "Optimized data flow for security pipelines.",
      "usecases.testimonial": "With ORXlog we achieved real visibility of our environments without skyrocketing our SIEM costs",
      "usecases.testimonial.author": "Security Director, Financial Sector",
      
      // Data Flow Section  
      "dataflow.title": "Step-by-step volume reduction",
      "dataflow.step1": "Raw Data Ingestion", 
      "dataflow.step2": "Optimization +/-60%",
      "dataflow.step3": "Filtering +/-30%",
      "dataflow.step4": "Enrichment +/-40%",
      
      // Footer
      "footer.description": "The log intelligence that powers the security of the future.",
      "footer.contact": "Contact",
      "footer.email": "contact@orxlog.com", 
      "footer.location": "Barcelona, Spain",
      "footer.legal": "Legal terms",
      "footer.privacy": "Privacy policy",
      "footer.rights": "© 2024 ORXlog. All rights reserved."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
