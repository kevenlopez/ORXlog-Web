import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type TabType = 'optimization' | 'rationalization' | 'execution';

interface TabContent {
  title: string;
  subtitle: string;
  cards: Array<{
    number: string;
    text: string;
  }>;
}

const Solution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('optimization');
  const navigate = useNavigate();

  const tabsContent: Record<TabType, TabContent> = {
    optimization: {
      title: 'Optimización',
      subtitle: 'Máxima eficiencia, mínimo desperdicio',
      cards: [
        {
          number: '#1',
          text: 'Filtrado inteligente que elimina ruido y conserva eventos críticos.'
        },
        {
          number: '#2', 
          text: 'Compresión avanzada sin pérdida de información relevante'
        },
        {
          number: '#3',
          text: 'Normalización automática para acelerar el procesamiento'
        }
      ]
    },
    rationalization: {
      title: 'Racionalización',
      subtitle: 'Control total y trazabilidad completa',
      cards: [
        {
          number: '#1',
          text: 'Gobernanza de datos con copias fieles de información original'
        },
        {
          number: '#2',
          text: 'Routing inteligente hacia Data Lakes para cumplimiento'
        },
        {
          number: '#3',
          text: 'Gestión granular de flujos de datos'
        }
      ]
    },
    execution: {
      title: 'Ejecución',
      subtitle: 'Procesamiento agnóstico y orquestación avanzada',
      cards: [
        {
          number: '#1',
          text: 'Mapeo automático con MITRE ATT&CK'
        },
        {
          number: '#2',
          text: 'Alertas personalizadas basadas en reglas configurables'
        },
        {
          number: '#3',
          text: 'Compatible con cualquier fuente de datos y destino'
        }
      ]
    }
  };

  const handleDemoClick = () => {
    navigate('/contacto');
    window.scrollTo(0, 0);
  };

  const handleExpertClick = () => {
    navigate('/contacto');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-orx-bg1">
      <Header />
      
      <main className="pt-32">
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-orx-primary mb-6 leading-tight">
              La solución que
              <br />
              <span className="text-orx-blue">revoluciona</span> tu SIEM
            </h1>
            <p className="text-xl text-orx-primary mb-8 max-w-lg mx-auto leading-relaxed">
              Orxlog transforma tu infraestructura de logs en una máquina eficiente que reduce costos, mejora la detección de amenazas y acelera la respuesta a incidentes.
            </p>
            <button
              onClick={handleDemoClick}
              className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              Solicita una demo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Solution Section */}
          <div className="mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orx-primary mb-6">
                La Solución ORXlog
              </h2>
              
              {/* Tab Buttons */}
              <div className="flex justify-center gap-6 mb-6">
                <button
                  onClick={() => setActiveTab('optimization')}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'optimization'
                      ? 'bg-orx-primary text-white'
                      : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                  }`}
                >
                  Optimización
                </button>
                <button
                  onClick={() => setActiveTab('rationalization')}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'rationalization'
                      ? 'bg-orx-primary text-white'
                      : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                  }`}
                >
                  Racionalización
                </button>
                <button
                  onClick={() => setActiveTab('execution')}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'execution'
                      ? 'bg-orx-primary text-white'
                      : 'border border-gray-300 text-orx-primary hover:bg-gray-50'
                  }`}
                >
                  Ejecución
                </button>
              </div>

              {/* Subtitle */}
              <h3 className="text-2xl text-orx-blue mb-8">
                {tabsContent[activeTab].subtitle}
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {tabsContent[activeTab].cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-200 p-6 text-center"
                >
                  <div className="text-2xl text-orx-blue mb-4 font-normal">
                    {card.number}
                  </div>
                  <p className="text-orx-primary leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="text-center mb-20">
            <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f299b185e3adb9ce86cf9b72c8105c36db841c58?width=2000"
                alt="ORXlog Dashboard"
                className="w-full h-auto rounded-2xl"
              />
              <div className="flex justify-center items-center gap-2 mt-4">
                <div className="w-10 h-3 bg-orx-blue rounded-full"></div>
                <div className="w-3 h-3 bg-orx-sky/20 rounded-full"></div>
                <div className="w-3 h-3 bg-orx-sky/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orx-blue rounded-3xl p-16 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para transformar tu SIEM?
              </h2>
              <p className="text-lg font-bold mb-8 leading-relaxed">
                Descubre exactamente cuánto puedes ahorrar con una evaluación personalizada de tu infraestructura actual.
              </p>
              <button
                onClick={handleExpertClick}
                className="bg-white text-orx-blue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                ¡Habla con un experto!
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solution;
