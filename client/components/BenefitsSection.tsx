import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TabType = 'benefits' | 'how' | 'architecture' | 'usecases';

export default function BenefitsSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('benefits');

  const tabs: TabType[] = ['benefits', 'how', 'architecture', 'usecases'];
  const currentIndex = tabs.indexOf(activeTab);

  const goToPreviousTab = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const goToNextTab = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const renderBenefitsContent = () => (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1 lg:pr-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          <span className="text-orx-primary">{t('benefits.title.1')}</span>
          <span className="text-orx-blue">{t('benefits.title.2')}</span>
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('benefits.accelerate')}</span>
              {t('benefits.accelerate.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('benefits.integrate')}</span>
              {t('benefits.integrate.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('benefits.scalable')}</span>
              {t('benefits.scalable.desc')}
            </p>
          </div>
        </div>

        <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors">
          {t('header.demo')}
        </button>
      </div>

      {/* Right Cards */}
      <div className="flex-shrink-0 w-full lg:w-[472px]">
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-orx-bg2 rounded-3xl p-4">
            <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">{t('benefits.stats.1')}</div>
            <p className="text-orx-primary text-sm leading-tight">{t('benefits.stats.1.desc')}</p>
          </div>

          <div className="bg-orx-bg2 rounded-3xl p-4">
            <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">{t('benefits.stats.2')}</div>
            <p className="text-orx-primary text-sm leading-tight">{t('benefits.stats.2.desc')}</p>
          </div>

          <div className="bg-orx-bg2 rounded-3xl p-4">
            <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">{t('benefits.stats.3')}</div>
            <p className="text-orx-primary text-sm leading-tight">{t('benefits.stats.3.desc')}</p>
          </div>

          <div className="bg-orx-bg2 rounded-3xl p-4">
            <div className="text-3xl lg:text-5xl font-normal text-orx-primary mb-2">{t('benefits.stats.4')}</div>
            <p className="text-orx-primary text-sm leading-tight">{t('benefits.stats.4.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHowContent = () => (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1 lg:pr-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          <span className="text-orx-primary">{t('how.title.1')}</span>
          <span className="text-orx-blue">{t('how.title.2')}</span>
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('how.receive')}</span>
              {t('how.receive.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('how.optimize')}</span>
              {t('how.optimize.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('how.threat')}</span>
              {t('how.threat.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('how.visualize')}</span>
              {t('how.visualize.desc')}
            </p>
          </div>
        </div>

        <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors">
          {t('header.demo')}
        </button>
      </div>

      {/* Right Terminal */}
      <div className="flex-shrink-0 w-full lg:w-[472px] flex flex-col items-center gap-6">
        <div className="bg-gray-800 rounded-3xl p-8 w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-4">{t('how.terminal.title')}</span>
          </div>
          
          <div className="space-y-4 text-sm font-mono">
            <div className="text-green-400">$ orxlog process --realtime</div>
            <div className="text-cyan-400">Processing 1.2M logs/sec...</div>
            <div className="text-blue-400">✓ Filtered 89% noise (1.07M events)</div>
            <div className="text-purple-400">✓ Enriched with threat intel</div>
            <div className="text-green-400">✓ Pipeline active - 94% cost reduction achieved</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-orx-primary text-lg mb-4">{t('how.compatible')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Technology logos would go here */}
            <div className="h-8 bg-gray-200 rounded px-4 flex items-center text-xs">CrowdStrike</div>
            <div className="h-8 bg-gray-200 rounded px-4 flex items-center text-xs">Fortinet</div>
            <div className="h-8 bg-gray-200 rounded px-4 flex items-center text-xs">Palo Alto</div>
            <div className="h-8 bg-gray-200 rounded px-4 flex items-center text-xs">Azure</div>
            <div className="h-8 bg-gray-200 rounded px-4 flex items-center text-xs">AWS</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderArchitectureContent = () => (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1 lg:pr-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          <span className="text-orx-primary">{t('arch.title.1')}</span>
          <span className="text-orx-blue">{t('arch.title.2')}</span>
        </h2>

        <p className="text-orx-primary leading-relaxed mb-6">
          {t('arch.description')}
          <span className="font-bold">{t('arch.description.bold')}</span>
          {t('arch.description.end')}
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('arch.ingestion')}</span>
              {t('arch.ingestion.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('arch.processing')}</span>
              {t('arch.processing.desc')}
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-orx-primary leading-relaxed">
              <span className="font-bold">{t('arch.delivery')}</span>
              {t('arch.delivery.desc')}
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors">
            {t('header.demo')}
          </button>
          <button className="border border-gray-300 text-orx-primary px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            {t('arch.read.more')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Architecture Diagram */}
      <div className="flex-shrink-0 w-full lg:w-[472px]">
        <div className="bg-orx-bg2 rounded-3xl p-6 h-[600px] flex flex-col justify-between">
          {/* Ingestion Layer */}
          <div className="border border-purple-300 rounded-2xl p-4 bg-purple-50">
            <h3 className="text-sm font-medium mb-3">Ingesta inteligente</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">Servers</div>
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">Security</div>
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">Cloud</div>
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">Apps</div>
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">Data Bases</div>
              <div className="bg-purple-100 rounded-lg p-2 text-center text-xs">End Points</div>
            </div>
          </div>

          {/* Processing Layer */}
          <div className="border border-sky-300 rounded-2xl p-4 bg-sky-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-8 bg-sky-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-bold">ORXlog</span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div>Procesamiento</div>
                <div>Optimización</div>
                <div>Enriquecimiento</div>
                <div>Enrutamiento</div>
              </div>
            </div>
          </div>

          {/* Distribution Layer */}
          <div className="border border-blue-300 rounded-2xl p-4 bg-blue-50">
            <h3 className="text-sm font-medium mb-3">Distribución</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-100 rounded-lg p-2 text-center text-xs">Cloud</div>
              <div className="bg-blue-100 rounded-lg p-2 text-center text-xs">SIEM</div>
              <div className="bg-blue-100 rounded-lg p-2 text-center text-xs">Sentinel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUseCasesContent = () => (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1 lg:pr-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          <span className="text-orx-primary">{t('usecases.title.1')}</span>
          <span className="text-orx-blue">{t('usecases.title.2')}</span>
        </h2>

        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="text-orx-primary leading-relaxed">
                <span className="font-bold">{t('usecases.ciso')}</span>
              </p>
              <p className="text-orx-primary leading-relaxed">{t('usecases.ciso.desc')}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="text-orx-primary leading-relaxed">
                <span className="font-bold">{t('usecases.soc')}</span>
              </p>
              <p className="text-orx-primary leading-relaxed">{t('usecases.soc.desc')}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-orx-blue flex items-center justify-center mt-1 flex-shrink-0">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="text-orx-primary leading-relaxed">
                <span className="font-bold">{t('usecases.devsec')}</span>
              </p>
              <p className="text-orx-primary leading-relaxed">{t('usecases.devsec.desc')}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <button className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors">
            {t('header.demo')}
          </button>
          <button className="border border-gray-300 text-orx-primary px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            {t('arch.read.more')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Testimonial */}
      <div className="flex-shrink-0 w-full lg:w-[472px] flex flex-col items-center gap-6">
        <div className="bg-orx-bg2 rounded-3xl p-8 w-full">
          <div className="flex gap-4 mb-6">
            <svg className="w-12 h-12 text-orx-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <div>
              <p className="text-orx-primary text-xl mb-4">{t('usecases.testimonial')}</p>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/04d4a55c1f713526d9173de9a7fe254348d8c60d?width=80"
                  alt="Testimonial"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-gray-600 text-sm">{t('usecases.testimonial.author')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-10 h-3 bg-orx-blue rounded-full"></div>
          <div className="w-3 h-3 bg-orx-bg2 rounded-full"></div>
          <div className="w-3 h-3 bg-orx-bg2 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'benefits':
        return renderBenefitsContent();
      case 'how':
        return renderHowContent();
      case 'architecture':
        return renderArchitectureContent();
      case 'usecases':
        return renderUseCasesContent();
      default:
        return renderBenefitsContent();
    }
  };

  return (
    <section className="px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[40px] p-8">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap">
            <button 
              className={`flex items-center gap-2 px-3 py-3 rounded-full border ${
                activeTab === 'benefits' 
                  ? 'border-orx-blue bg-orx-bg1 text-orx-blue' 
                  : 'border-gray-300 text-orx-primary'
              }`}
              onClick={() => setActiveTab('benefits')}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M13.8332 9.66669V4.33335C13.8332 3.07602 13.8332 2.44802 13.4425 2.05735C13.0518 1.66669 12.4238 1.66669 11.1665 1.66669H5.83317C4.57584 1.66669 3.94784 1.66669 3.55717 2.05735C3.1665 2.44802 3.1665 3.07602 3.1665 4.33335V9.66669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.83337 5.596H5.94137C6.48203 5.596 6.7527 5.596 6.95937 5.712C7.16603 5.828 7.25803 6.032 7.44403 6.44066L7.66803 6.934C7.79003 7.20333 7.85137 7.33733 7.95003 7.33333C8.0487 7.32933 8.09137 7.19066 8.17737 6.91333L8.9487 4.43133C9.03737 4.146 9.08203 4.00333 9.18137 4C9.2807 3.99666 9.3407 4.13533 9.45937 4.41333L9.5947 4.72866C9.7747 5.14733 9.86403 5.35666 10.0727 5.476C10.2814 5.59533 10.5567 5.596 11.1074 5.596H11.1667M2.83203 10.3433L3.18003 9.66666H13.8014L14.168 10.3433C15.13 12.118 15.37 13.0053 15.004 13.6693C14.638 14.3333 13.6694 14.3333 11.7307 14.3333H5.26937C3.33003 14.3333 2.3607 14.3333 1.99537 13.6693C1.62937 13.0053 1.86937 12.118 2.83203 10.3433Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-medium">{t('benefits.tabs.benefits')}</span>
            </button>
            
            <button 
              className={`flex items-center gap-2 px-3 py-3 rounded-full border ${
                activeTab === 'how' 
                  ? 'border-orx-blue bg-orx-bg1 text-orx-blue' 
                  : 'border-gray-300 text-orx-primary'
              }`}
              onClick={() => setActiveTab('how')}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M9.83333 2.66665H11.1667C12.1093 2.66665 12.5807 2.66665 12.8733 2.95998C13.1667 3.25198 13.1667 3.72331 13.1667 4.66665M7.16667 2.66665H5.83333C4.89067 2.66665 4.41933 2.66665 4.12667 2.95998C3.83333 3.25198 3.83333 3.72331 3.83333 4.66665M7.16667 13.3333H5.83333C4.89067 13.3333 4.41933 13.3333 4.12667 13.04C3.83333 12.748 3.83333 12.2766 3.83333 11.3333M9.83333 13.3333H11.1667C12.1093 13.3333 12.5807 13.3333 12.8733 13.04C13.1667 12.7473 13.1667 12.276 13.1667 11.3333M7.16667 7.99998H9.83333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm">{t('benefits.tabs.how')}</span>
            </button>
            
            <button 
              className={`flex items-center gap-2 px-3 py-3 rounded-full border ${
                activeTab === 'architecture' 
                  ? 'border-orx-blue bg-orx-bg1 text-orx-blue' 
                  : 'border-gray-300 text-orx-primary'
              }`}
              onClick={() => setActiveTab('architecture')}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M7.78418 13.0469L7.87305 13.332L7.1123 12.3955L7.5127 12.1807L7.78418 13.0469ZM9.88672 12.3955L9.12598 13.332L9.21582 13.0469L9.48633 12.1807L9.88672 12.3955Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span className="text-sm">{t('benefits.tabs.architecture')}</span>
            </button>
            
            <button 
              className={`flex items-center gap-2 px-3 py-3 rounded-full border ${
                activeTab === 'usecases' 
                  ? 'border-orx-blue bg-orx-bg1 text-orx-blue' 
                  : 'border-gray-300 text-orx-primary'
              }`}
              onClick={() => setActiveTab('usecases')}
            >
              <span className="text-sm">{t('benefits.tabs.usecases')}</span>
            </button>
          </div>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex-1 h-px bg-gradient-to-r from-white to-gray-300"></div>
            <div className="flex gap-4">
              <button
                onClick={goToPreviousTab}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentIndex === 0
                    ? 'bg-gray-100 cursor-not-allowed'
                    : 'bg-orx-blue hover:bg-orx-blue/90 cursor-pointer'
                }`}
              >
                <ChevronLeft className={`w-4 h-4 ${currentIndex === 0 ? 'text-gray-400' : 'text-white'}`} />
              </button>
              <button
                onClick={goToNextTab}
                disabled={currentIndex === tabs.length - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentIndex === tabs.length - 1
                    ? 'bg-gray-100 border border-gray-200 cursor-not-allowed'
                    : 'bg-white border border-orx-blue hover:bg-orx-blue/5 cursor-pointer'
                }`}
              >
                <ChevronRight className={`w-4 h-4 ${currentIndex === tabs.length - 1 ? 'text-gray-400' : 'text-orx-blue'}`} />
              </button>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-white to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
