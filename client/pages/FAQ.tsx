import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type TabType = 'ciso' | 'soc' | 'devsecops' | 'procurement';

interface FAQItem {
  question: string;
  answer: string;
}

interface TabContent {
  title: string;
  icon: string;
  faqs: FAQItem[];
}

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ciso');
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const navigate = useNavigate();

  const tabsContent: Record<TabType, TabContent> = {
    ciso: {
      title: 'Para CISOs y ejecutivos de seguridad',
      icon: '🛡️',
      faqs: [
        {
          question: '¿Cuánto puedo ahorrar realmente en mi presupuesto de SIEM?',
          answer: 'Ahorro promedio del 70% en costos de licenciamiento SIEM. Si gastas $500K anuales, podrías ahorrar $350K. El ROI se materializa en 3-6 meses. Liberamos presupuesto para threat hunting, IR tools y nuevas tecnologías de seguridad que realmente agregan valor.'
        },
        {
          question: '¿Qué riesgo operacional representa cambiar nuestra infraestructura de logs?',
          answer: 'Riesgo mínimo. ORXlog opera como un colector transparente sin modificar tu arquitectura existente. Implementamos en modo "mirror" inicialmente, permitiendo rollback inmediato. Mantenemos copias íntegras de todos los datos originales para garantizar continuidad operacional.'
        },
        {
          question: '¿Mejora realmente la detección o solo reduce costos?',
          answer: 'Ambos simultáneamente. Eliminamos 85% de falsos positivos mientras enriquecemos alertas reales con contexto MITRE ATT&CK. Resultado: analistas detectan más amenazas reales en menos tiempo. MTTD mejora 40% promedio.'
        },
        {
          question: '¿Qué pasa si necesito cambiar de SIEM en el futuro?',
          answer: 'Total portabilidad. ORXlog es agnóstico de plataforma. Cambiar de Splunk a Sentinel toma 1 día vs. 6 meses tradicionales. Tus reglas, configuraciones y datos históricos se migran automáticamente. No hay vendor lock-in.'
        }
      ]
    },
    soc: {
      title: 'Para equipos SOC y analistas',
      icon: '👨‍💻',
      faqs: [
        {
          question: '¿ORXlog va a eliminar alertas importantes o generar blind spots?',
          answer: 'Nunca. ORXlog usa ML entrenado específicamente en patrones de amenazas para preservar 100% de eventos críticos. De hecho, mejora la detección al eliminar ruido y enriquecer contexto con mapeo MITRE ATT&CK automático. Los analistas ven menos alertas pero de mayor calidad.'
        },
        {
          question: '¿Cómo afecta mi flujo de trabajo diario en el SOC?',
          answer: 'ORXlog mejora dramáticamente la experiencia del analista. En lugar de revisar 1000+ alertas diarias (95% falsos positivos), procesas ~150 alertas pre-validadas con contexto enriquecido. Esto permite enfocarse en threat hunting real y análisis profundo de incidentes.'
        },
        {
          question: '¿Puedo configurar reglas personalizadas o solo usa las predefinidas?',
          answer: 'Totalmente personalizable. Incluye rule builder visual para crear detecciones específicas de tu entorno, importar reglas Sigma existentes, y configurar alertas basadas en comportamiento. Mantienes control total sobre qué se filtra y qué se escala.'
        },
        {
          question: '¿Cómo integra con mis herramientas actuales (SOAR, ticketing, etc.)?',
          answer: 'Integración nativa con +60 herramientas SOC: ServiceNow, Jira, PagerDuty, Phantom, Demisto, TheHive, MISP, y más. APIs REST completas para integraciones custom. Webhooks configurables para cualquier flujo de trabajo existente.'
        },
        {
          question: '¿Qué pasa con la investigación forense? ¿Pierdo datos históricos?',
          answer: 'ORXlog mejora la capacidad forense manteniendo una copia íntegra de todos los logs originales con indexación avanzada. Búsquedas forenses son más rápidas que en el SIEM tradicional, con capacidad de drill-down completo a eventos originales.'
        }
      ]
    },
    devsecops: {
      title: 'Para DevSecOps y equipos técnicos',
      icon: '🔧',
      faqs: [
        {
          question: '¿Cómo se integra ORXlog en nuestro pipeline CI/CD existente?',
          answer: 'ORXlog incluye APIs nativas para DevSecOps: webhooks para eventos de deployment, integración con GitLab/GitHub Actions, alertas automáticas en pipelines de seguridad, y correlación de eventos de aplicación con contexto de código deployment.'
        },
        {
          question: '¿Soporta contenedores y Kubernetes? ¿Qué pasa con logs ephemeral?',
          answer: 'Soporte nativo para Kubernetes, Docker, OpenShift y todos los orquestadores principales. Recolección automática de logs de pods efímeros con correlation cross-container. Integración con Prometheus, Grafana y herramientas cloud-native.'
        },
        {
          question: '¿Qué latencia introduce ORXlog en nuestro logging pipeline?',
          answer: 'Latencia promedio <100ms end-to-end. Procesamiento en paralelo y arquitectura distribuida aseguran que ORXlog nunca sea el cuello de botella. De hecho, reduce latencia total al optimizar la carga del SIEM downstream.'
        },
        {
          question: '¿Cómo manejamos logs con formatos custom o aplicaciones legacy?',
          answer: 'Parser engine extensible que maneja cualquier formato: JSON, CEF, LEEF, XML, custom regex, y formatos propietarios. SDK disponible para parsers custom. Capacidad de transformación en tiempo real sin impacto en performance.'
        },
        {
          question: '¿Qué pasa si necesitamos escalar durante picos de tráfico o incidentes?',
          answer: 'Auto-scaling automático basado en volumen y latencia. Capacidad elástica que se expande 10x en minutos durante incidentes. Load balancing inteligente distribuye carga óptimamente entre nodos disponibles.'
        }
      ]
    },
    procurement: {
      title: 'Procurement / Compras',
      icon: '💼',
      faqs: [
        {
          question: '¿Cuál es el modelo de pricing y cómo se calcula?',
          answer: 'Pricing basado en volumen procesado con tiers progresivos. Típicamente 60-80% menos que costo de procesar mismo volumen en SIEM. No hay costos por usuarios, conectores, o dashboards. Pricing transparente sin sorpresas.'
        },
        {
          question: '¿Hay costos ocultos de implementación o licencias adicionales?',
          answer: 'Precio all-inclusive. Implementación, training, soporte 24/7, y todas las funcionalidades incluidas. No hay costos por professional services, conectores premium, o features avanzadas. Un solo precio predecible.'
        },
        {
          question: '¿Qué flexibilidad contractual ofrecen?',
          answer: 'Contratos desde 1 año con opción de scaling. Términos de terminación favorables (90 días notice). SLAs garantizados: 99.9% uptime, <15min response críticos. Descuentos por contratos multi-año disponibles.'
        },
        {
          question: '¿Cómo se compara el TCO vs. soluciones alternativas?',
          answer: 'TCO 3 años típicamente 50% menor vs. Cribl, Logz.io o soluciones custom. Incluimos análisis comparativo detallado con alternativas específicas que estés evaluando.'
        },
        {
          question: '¿Por qué ORXlog vs. construir solución interna?',
          answer: 'Time-to-value y expertise. Solución interna toma 18-24 meses y $2M+ en desarrollo. ORXlog deploy en 2-4 semanas con expertise de 200+ implementaciones. Tu equipo se enfoca en seguridad core, no en desarrollo de herramientas.'
        }
      ]
    }
  };

  const handleAccordionClick = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setOpenAccordion(0); // Reset to first question when switching tabs
  };

  const handleDemoClick = () => {
    navigate('/contacto');
  };

  return (
    <div className="min-h-screen bg-orx-bg1">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orx-primary mb-4">
              Preguntas más frecuentes
            </h1>
            <p className="text-lg text-orx-primary mb-12">
              Selecciona tu perfil
            </p>
            
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <button
                onClick={() => handleTabClick('ciso')}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'ciso'
                    ? 'bg-orx-primary text-white'
                    : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                }`}
              >
                🛡️ CISO/Ejecutivo
              </button>
              <button
                onClick={() => handleTabClick('soc')}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'soc'
                    ? 'bg-orx-primary text-white'
                    : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                }`}
              >
                👨‍💻 SOC/Analista
              </button>
              <button
                onClick={() => handleTabClick('devsecops')}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'devsecops'
                    ? 'bg-orx-primary text-white'
                    : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                }`}
              >
                🔧 DevSecOps/IT
              </button>
              <button
                onClick={() => handleTabClick('procurement')}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'procurement'
                    ? 'bg-orx-primary text-white'
                    : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                }`}
              >
                💼 Procurement
              </button>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8">
            <h2 className="text-2xl font-medium text-orx-primary mb-6 flex items-center gap-2">
              {tabsContent[activeTab].icon} {tabsContent[activeTab].title}
            </h2>
            
            {/* Accordion */}
            <div className="space-y-4 mb-8">
              {tabsContent[activeTab].faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg bg-white"
                >
                  <button
                    onClick={() => handleAccordionClick(index)}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-orx-primary pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === index && (
                    <div className="px-4 pb-4">
                      <p className="text-orx-primary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Demo Button */}
            <button
              onClick={handleDemoClick}
              className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Solicita una demo
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
