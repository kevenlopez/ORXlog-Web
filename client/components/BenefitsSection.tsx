import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[40px] p-8">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-6 mb-10">
            <button className="flex items-center gap-2 px-3 py-3 rounded-full border border-orx-blue bg-orx-bg1">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M13.8332 9.66669V4.33335C13.8332 3.07602 13.8332 2.44802 13.4425 2.05735C13.0518 1.66669 12.4238 1.66669 11.1665 1.66669H5.83317C4.57584 1.66669 3.94784 1.66669 3.55717 2.05735C3.1665 2.44802 3.1665 3.07602 3.1665 4.33335V9.66669" stroke="#598CDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.83337 5.596H5.94137C6.48203 5.596 6.7527 5.596 6.95937 5.712C7.16603 5.828 7.25803 6.032 7.44403 6.44066L7.66803 6.934C7.79003 7.20333 7.85137 7.33733 7.95003 7.33333C8.0487 7.32933 8.09137 7.19066 8.17737 6.91333L8.9487 4.43133C9.03737 4.146 9.08203 4.00333 9.18137 4C9.2807 3.99666 9.3407 4.13533 9.45937 4.41333L9.5947 4.72866C9.7747 5.14733 9.86403 5.35666 10.0727 5.476C10.2814 5.59533 10.5567 5.596 11.1074 5.596H11.1667M2.83203 10.3433L3.18003 9.66666H13.8014L14.168 10.3433C15.13 12.118 15.37 13.0053 15.004 13.6693C14.638 14.3333 13.6694 14.3333 11.7307 14.3333H5.26937C3.33003 14.3333 2.3607 14.3333 1.99537 13.6693C1.62937 13.0053 1.86937 12.118 2.83203 10.3433Z" stroke="#598CDC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-orx-blue text-sm font-medium">Beneficios</span>
            </button>
            
            <button className="flex items-center gap-2 px-3 py-3 rounded-full border border-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M9.83333 2.66665H11.1667C12.1093 2.66665 12.5807 2.66665 12.8733 2.95998C13.1667 3.25198 13.1667 3.72331 13.1667 4.66665M7.16667 2.66665H5.83333C4.89067 2.66665 4.41933 2.66665 4.12667 2.95998C3.83333 3.25198 3.83333 3.72331 3.83333 4.66665M7.16667 13.3333H5.83333C4.89067 13.3333 4.41933 13.3333 4.12667 13.04C3.83333 12.748 3.83333 12.2766 3.83333 11.3333M9.83333 13.3333H11.1667C12.1093 13.3333 12.5807 13.3333 12.8733 13.04C13.1667 12.7473 13.1667 12.276 13.1667 11.3333M7.16667 7.99998H9.83333" stroke="#1E1B31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-orx-primary text-sm">¿Cómo funciona?</span>
            </button>
            
            <button className="flex items-center gap-2 px-3 py-3 rounded-full border border-gray-300">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M7.78418 13.0469L7.87305 13.332L7.1123 12.3955L7.5127 12.1807L7.78418 13.0469ZM9.88672 12.3955L9.12598 13.332L9.21582 13.0469L9.48633 12.1807L9.88672 12.3955Z" stroke="#1E1B31" strokeWidth="1.5"/>
              </svg>
              <span className="text-orx-primary text-sm">Arquitectura</span>
            </button>
            
            <button className="flex items-center gap-2 px-3 py-3 rounded-full border border-gray-300">
              <span className="text-orx-primary text-sm">Casos de Uso</span>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Content */}
            <div className="flex-1 lg:pr-6">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                <span className="text-orx-primary">Reduce hasta un 70% en </span>
                <span className="text-orx-blue">almacenamiento y licencias SIEM.</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-orx-primary leading-relaxed">
                    <span className="font-bold">Acelera investigaciones</span> con correlación de eventos y alertas contextuales basadas en Mitre Att&ck.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-orx-primary leading-relaxed">
                    <span className="font-bold">Integra rápidamente</span> con las principales soluciones del mercado.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-orx-primary leading-relaxed">
                    <span className="font-bold">Diseñado para crecer contigo: </span>cloud, on-prem o híbrido. Modaldad MSSP.
                  </p>
                </div>
              </div>

              <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors">
                Solicita una demo
              </button>
            </div>

            {/* Right Cards */}
            <div className="flex-shrink-0 w-full lg:w-[472px]">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-orx-bg2 rounded-3xl p-4">
                  <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">+1 MM</div>
                  <p className="text-orx-primary text-sm leading-tight">De eventos procesados por día</p>
                </div>

                <div className="bg-orx-bg2 rounded-3xl p-4">
                  <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">-60%</div>
                  <p className="text-orx-primary text-sm leading-tight">En volumen de logs promedio por cliente</p>
                </div>

                <div className="bg-orx-bg2 rounded-3xl p-4">
                  <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">+90%</div>
                  <p className="text-orx-primary text-sm leading-tight">De detecciones con enriquecimiento automatizado.</p>
                </div>

                <div className="bg-orx-bg2 rounded-3xl p-4">
                  <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">12 min</div>
                  <p className="text-orx-primary text-sm leading-tight">De media para un análisis completo post incidente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex-1 h-px bg-gradient-to-r from-white to-gray-300"></div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-orx-primary" />
              </button>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-white to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
