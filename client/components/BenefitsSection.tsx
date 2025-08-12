import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type TabType = 'benefits' | 'how' | 'architecture' | 'usecases';

export default function BenefitsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
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

        <button
          onClick={() => {
            navigate('/contacto');
            window.scrollTo(0, 0);
          }}
          className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors"
        >
          {t('header.demo')}
        </button>
      </div>

      {/* Right Cards */}
      <div className="flex-shrink-0 w-full lg:w-[472px]">
        <div className="grid grid-cols-2 gap-3 lg:gap-5">
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

        <button
          onClick={() => {
            navigate('/contacto');
            window.scrollTo(0, 0);
          }}
          className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors"
        >
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
          <button
            onClick={() => {
            navigate('/contacto');
            window.scrollTo(0, 0);
          }}
            className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors"
          >
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
          <button
            onClick={() => {
            navigate('/contacto');
            window.scrollTo(0, 0);
          }}
            className="bg-orx-blue text-white px-6 py-3 rounded-full font-medium hover:bg-orx-blue/90 transition-colors"
          >
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
          <div className="mb-10">
            {/* Desktop tabs */}
            <div className="hidden lg:flex justify-center gap-6 flex-wrap">
              <button
                className={`flex items-center gap-2 px-3 py-3 rounded-full border ${
                  activeTab === 'benefits'
                    ? 'border-orx-blue bg-orx-bg1 text-orx-blue'
                    : 'border-gray-300 text-orx-primary'
                }`}
                onClick={() => setActiveTab('benefits')}
              >
                <svg className="w-4 h-4" viewBox="0 0 17 16" fill="none">
                  <path d="M13.8334 9.6665V4.33317C13.8334 3.07584 13.8334 2.44784 13.4427 2.05717C13.0521 1.6665 12.4241 1.6665 11.1667 1.6665H5.83341C4.57608 1.6665 3.94808 1.6665 3.55741 2.05717C3.16675 2.44784 3.16675 3.07584 3.16675 4.33317V9.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83337 5.59606H5.94137C6.48203 5.59606 6.7527 5.59606 6.95937 5.71206C7.16603 5.82806 7.25803 6.03206 7.44403 6.44073L7.66803 6.93406C7.79003 7.20339 7.85137 7.33739 7.95003 7.33339C8.0487 7.32939 8.09137 7.19073 8.17737 6.91339L8.9487 4.43139C9.03737 4.14606 9.08203 4.00339 9.18137 4.00006C9.2807 3.99673 9.3407 4.13539 9.45937 4.41339L9.5947 4.72873C9.7747 5.14739 9.86403 5.35673 10.0727 5.47606C10.2814 5.59539 10.5567 5.59606 11.1074 5.59606H11.1667M2.83203 10.3434L3.18003 9.66673H13.8014L14.168 10.3434C15.13 12.1181 15.37 13.0054 15.004 13.6694C14.638 14.3334 13.6694 14.3334 11.7307 14.3334H5.26937C3.33003 14.3334 2.3607 14.3334 1.99537 13.6694C1.62937 13.0054 1.86937 12.1181 2.83203 10.3434Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg className="w-4 h-4" viewBox="0 0 17 16" fill="none">
                  <path d="M9.83333 2.66683H11.1667C12.1093 2.66683 12.5807 2.66683 12.8733 2.96016C13.1667 3.25216 13.1667 3.7235 13.1667 4.66683M7.16667 2.66683H5.83333C4.89067 2.66683 4.41933 2.66683 4.12667 2.96016C3.83333 3.25216 3.83333 3.7235 3.83333 4.66683M7.16667 13.3335H5.83333C4.89067 13.3335 4.41933 13.3335 4.12667 13.0402C3.83333 12.7482 3.83333 12.2768 3.83333 11.3335M9.83333 13.3335H11.1667C12.1093 13.3335 12.5807 13.3335 12.8733 13.0402C13.1667 12.7475 13.1667 12.2762 13.1667 11.3335M7.16667 8.00016H9.83333M9.16667 1.3335H7.83333C7.65652 1.3335 7.48695 1.40373 7.36193 1.52876C7.2369 1.65378 7.16667 1.82335 7.16667 2.00016V3.3335C7.16667 3.51031 7.2369 3.67988 7.36193 3.8049C7.48695 3.92992 7.65652 4.00016 7.83333 4.00016H9.16667C9.34348 4.00016 9.51305 3.92992 9.63807 3.8049C9.7631 3.67988 9.83333 3.51031 9.83333 3.3335V2.00016C9.83333 1.82335 9.7631 1.65378 9.63807 1.52876C9.51305 1.40373 9.34348 1.3335 9.16667 1.3335ZM9.16667 12.0002H7.83333C7.65652 12.0002 7.48695 12.0704 7.36193 12.1954C7.2369 12.3204 7.16667 12.49 7.16667 12.6668V14.0002C7.16667 14.177 7.2369 14.3465 7.36193 14.4716C7.48695 14.5966 7.65652 14.6668 7.83333 14.6668H9.16667C9.34348 14.6668 9.51305 14.5966 9.63807 14.4716C9.7631 14.3465 9.83333 14.177 9.83333 14.0002V12.6668C9.83333 12.49 9.7631 12.3204 9.63807 12.1954C9.51305 12.0704 9.34348 12.0002 9.16667 12.0002ZM14.5 8.66683V7.3335C14.5 7.15669 14.4298 6.98712 14.3047 6.86209C14.1797 6.73707 14.0101 6.66683 13.8333 6.66683H12.5C12.3232 6.66683 12.1536 6.73707 12.0286 6.86209C11.9036 6.98712 11.8333 7.15669 11.8333 7.3335V8.66683C11.8333 8.84364 11.9036 9.01321 12.0286 9.13823C12.1536 9.26326 12.3232 9.3335 12.5 9.3335H13.8333C14.0101 9.3335 14.1797 9.26326 14.3047 9.13823C14.4298 9.01321 14.5 8.84364 14.5 8.66683ZM5.16667 8.66683V7.3335C5.16667 7.15669 5.09643 6.98712 4.9714 6.86209C4.84638 6.73707 4.67681 6.66683 4.5 6.66683H3.16667C2.98986 6.66683 2.82029 6.73707 2.69526 6.86209C2.57024 6.98712 2.5 7.15669 2.5 7.3335V8.66683C2.5 8.84364 2.57024 9.01321 2.69526 9.13823C2.82029 9.26326 2.98986 9.3335 3.16667 9.3335H4.5C4.67681 9.3335 4.84638 9.26326 4.9714 9.13823C5.09643 9.01321 5.16667 8.84364 5.16667 8.66683Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                <svg className="w-4 h-4" viewBox="0 0 17 16" fill="none">
                  <path d="M11.5 13.375C11.8429 13.375 12.125 13.6571 12.125 14C12.125 14.3429 11.8429 14.625 11.5 14.625C11.1571 14.625 10.875 14.3429 10.875 14C10.875 13.6571 11.1571 13.375 11.5 13.375ZM5 4.375C5.01658 4.375 5.0374 4.37899 5.06641 4.39453L5.94824 4.91797L5.9502 4.91895L6.61523 5.30859L6.62598 5.31445L6.6377 5.32031L7.16602 5.63477L7.03906 5.84961L6.50684 5.5332L6.49512 5.52539L6.48242 5.51953L5.83008 5.13672H5.8291L5.19141 4.75781L5 4.64453L4.80859 4.75684L2.30859 6.2373L2.125 6.34668V9.65332L2.30859 9.7627L4.80859 11.2432L5 11.3555L5.19141 11.2422L5.8291 10.8623L5.83008 10.8633L6.48242 10.4805L6.49512 10.4746L6.50684 10.4668L7.03906 10.1494L7.16602 10.3643L6.6377 10.6797L6.62598 10.6855L6.61523 10.6914L5.9502 11.0811L5.94824 11.082L5.06641 11.6045C5.03719 11.6202 5.01666 11.625 5 11.625C4.99131 11.625 4.98134 11.6243 4.96973 11.6211L4.92871 11.6035L1.9375 9.83301C1.8988 9.80953 1.875 9.76544 1.875 9.72461V6.27539C1.875 6.23456 1.8988 6.19047 1.9375 6.16699L1.93652 6.16602L4.92871 4.39648C4.96011 4.37883 4.98256 4.375 5 4.375ZM11.625 4.375V5C11.6252 5.41593 11.5416 5.82773 11.3799 6.21094C11.2182 6.59414 10.9817 6.94143 10.6836 7.23145L10.0215 7.875H12.625V8.125H10.0244L10.6826 8.76855C11.2638 9.33632 11.625 10.1256 11.625 11V11.625H11.375V11C11.375 9.41289 10.0871 8.125 8.5 8.125H5.375V7.875H8.5C10.0871 7.875 11.375 6.58711 11.375 5V4.375H11.625ZM15 7.375C15.3429 7.375 15.625 7.65711 15.625 8C15.625 8.34289 15.3429 8.625 15 8.625C14.6571 8.625 14.375 8.34289 14.375 8C14.375 7.65711 14.6571 7.375 15 7.375ZM11.5 1.375C11.8429 1.375 12.125 1.65711 12.125 2C12.125 2.34289 11.8429 2.625 11.5 2.625C11.1571 2.625 10.875 2.34289 10.875 2C10.875 1.65711 11.1571 1.375 11.5 1.375Z" stroke="currentColor" strokeWidth="0.75"/>
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
                <svg className="w-4 h-4" viewBox="0 0 17 16" fill="none">
                  <path d="M7.78394 13.0469L7.8728 13.332L7.11206 12.3955L7.51245 12.1807L7.78394 13.0469ZM9.88647 12.3955L9.12573 13.332L9.21558 13.0469L9.48608 12.1807L9.88647 12.3955Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className="text-sm">{t('benefits.tabs.usecases')}</span>
              </button>
            </div>

            {/* Mobile tabs - Icons only with conditional text */}
            <div className="lg:hidden grid grid-cols-4 gap-2 max-w-sm mx-auto">
              <button
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${
                  activeTab === 'benefits'
                    ? 'bg-orx-bg1 text-orx-blue'
                    : 'text-orx-primary'
                }`}
                onClick={() => setActiveTab('benefits')}
              >
                <svg className="w-6 h-6" viewBox="0 0 17 16" fill="none">
                  <path d="M13.8334 9.6665V4.33317C13.8334 3.07584 13.8334 2.44784 13.4427 2.05717C13.0521 1.6665 12.4241 1.6665 11.1667 1.6665H5.83341C4.57608 1.6665 3.94808 1.6665 3.55741 2.05717C3.16675 2.44784 3.16675 3.07584 3.16675 4.33317V9.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83337 5.59606H5.94137C6.48203 5.59606 6.7527 5.59606 6.95937 5.71206C7.16603 5.82806 7.25803 6.03206 7.44403 6.44073L7.66803 6.93406C7.79003 7.20339 7.85137 7.33739 7.95003 7.33339C8.0487 7.32939 8.09137 7.19073 8.17737 6.91339L8.9487 4.43139C9.03737 4.14606 9.08203 4.00339 9.18137 4.00006C9.2807 3.99673 9.3407 4.13539 9.45937 4.41339L9.5947 4.72873C9.7747 5.14739 9.86403 5.35673 10.0727 5.47606C10.2814 5.59539 10.5567 5.59606 11.1074 5.59606H11.1667M2.83203 10.3434L3.18003 9.66673H13.8014L14.168 10.3434C15.13 12.1181 15.37 13.0054 15.004 13.6694C14.638 14.3334 13.6694 14.3334 11.7307 14.3334H5.26937C3.33003 14.3334 2.3607 14.3334 1.99537 13.6694C1.62937 13.0054 1.86937 12.1181 2.83203 10.3434Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {activeTab === 'benefits' && <span className="text-xs text-center leading-tight">{t('benefits.tabs.benefits')}</span>}
              </button>

              <button
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${
                  activeTab === 'how'
                    ? 'bg-orx-bg1 text-orx-blue'
                    : 'text-orx-primary'
                }`}
                onClick={() => setActiveTab('how')}
              >
                <svg className="w-6 h-6" viewBox="0 0 17 16" fill="none">
                  <path d="M9.83333 2.66683H11.1667C12.1093 2.66683 12.5807 2.66683 12.8733 2.96016C13.1667 3.25216 13.1667 3.7235 13.1667 4.66683M7.16667 2.66683H5.83333C4.89067 2.66683 4.41933 2.66683 4.12667 2.96016C3.83333 3.25216 3.83333 3.7235 3.83333 4.66683M7.16667 13.3335H5.83333C4.89067 13.3335 4.41933 13.3335 4.12667 13.0402C3.83333 12.7482 3.83333 12.2768 3.83333 11.3335M9.83333 13.3335H11.1667C12.1093 13.3335 12.5807 13.3335 12.8733 13.0402C13.1667 12.7475 13.1667 12.2762 13.1667 11.3335M7.16667 8.00016H9.83333M9.16667 1.3335H7.83333C7.65652 1.3335 7.48695 1.40373 7.36193 1.52876C7.2369 1.65378 7.16667 1.82335 7.16667 2.00016V3.3335C7.16667 3.51031 7.2369 3.67988 7.36193 3.8049C7.48695 3.92992 7.65652 4.00016 7.83333 4.00016H9.16667C9.34348 4.00016 9.51305 3.92992 9.63807 3.8049C9.7631 3.67988 9.83333 3.51031 9.83333 3.3335V2.00016C9.83333 1.82335 9.7631 1.65378 9.63807 1.52876C9.51305 1.40373 9.34348 1.3335 9.16667 1.3335ZM9.16667 12.0002H7.83333C7.65652 12.0002 7.48695 12.0704 7.36193 12.1954C7.2369 12.3204 7.16667 12.49 7.16667 12.6668V14.0002C7.16667 14.177 7.2369 14.3465 7.36193 14.4716C7.48695 14.5966 7.65652 14.6668 7.83333 14.6668H9.16667C9.34348 14.6668 9.51305 14.5966 9.63807 14.4716C9.7631 14.3465 9.83333 14.177 9.83333 14.0002V12.6668C9.83333 12.49 9.7631 12.3204 9.63807 12.1954C9.51305 12.0704 9.34348 12.0002 9.16667 12.0002ZM14.5 8.66683V7.3335C14.5 7.15669 14.4298 6.98712 14.3047 6.86209C14.1797 6.73707 14.0101 6.66683 13.8333 6.66683H12.5C12.3232 6.66683 12.1536 6.73707 12.0286 6.86209C11.9036 6.98712 11.8333 7.15669 11.8333 7.3335V8.66683C11.8333 8.84364 11.9036 9.01321 12.0286 9.13823C12.1536 9.26326 12.3232 9.3335 12.5 9.3335H13.8333C14.0101 9.3335 14.1797 9.26326 14.3047 9.13823C14.4298 9.01321 14.5 8.84364 14.5 8.66683ZM5.16667 8.66683V7.3335C5.16667 7.15669 5.09643 6.98712 4.9714 6.86209C4.84638 6.73707 4.67681 6.66683 4.5 6.66683H3.16667C2.98986 6.66683 2.82029 6.73707 2.69526 6.86209C2.57024 6.98712 2.5 7.15669 2.5 7.3335V8.66683C2.5 8.84364 2.57024 9.01321 2.69526 9.13823C2.82029 9.26326 2.98986 9.3335 3.16667 9.3335H4.5C4.67681 9.3335 4.84638 9.26326 4.9714 9.13823C5.09643 9.01321 5.16667 8.84364 5.16667 8.66683Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {activeTab === 'how' && <span className="text-xs text-center leading-tight">{t('benefits.tabs.how')}</span>}
              </button>

              <button
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${
                  activeTab === 'architecture'
                    ? 'bg-orx-bg1 text-orx-blue'
                    : 'text-orx-primary'
                }`}
                onClick={() => setActiveTab('architecture')}
              >
                <svg className="w-6 h-6" viewBox="0 0 17 16" fill="none">
                  <path d="M11.5 13.375C11.8429 13.375 12.125 13.6571 12.125 14C12.125 14.3429 11.8429 14.625 11.5 14.625C11.1571 14.625 10.875 14.3429 10.875 14C10.875 13.6571 11.1571 13.375 11.5 13.375ZM5 4.375C5.01658 4.375 5.0374 4.37899 5.06641 4.39453L5.94824 4.91797L5.9502 4.91895L6.61523 5.30859L6.62598 5.31445L6.6377 5.32031L7.16602 5.63477L7.03906 5.84961L6.50684 5.5332L6.49512 5.52539L6.48242 5.51953L5.83008 5.13672H5.8291L5.19141 4.75781L5 4.64453L4.80859 4.75684L2.30859 6.2373L2.125 6.34668V9.65332L2.30859 9.7627L4.80859 11.2432L5 11.3555L5.19141 11.2422L5.8291 10.8623L5.83008 10.8633L6.48242 10.4805L6.49512 10.4746L6.50684 10.4668L7.03906 10.1494L7.16602 10.3643L6.6377 10.6797L6.62598 10.6855L6.61523 10.6914L5.9502 11.0811L5.94824 11.082L5.06641 11.6045C5.03719 11.6202 5.01666 11.625 5 11.625C4.99131 11.625 4.98134 11.6243 4.96973 11.6211L4.92871 11.6035L1.9375 9.83301C1.8988 9.80953 1.875 9.76544 1.875 9.72461V6.27539C1.875 6.23456 1.8988 6.19047 1.9375 6.16699L1.93652 6.16602L4.92871 4.39648C4.96011 4.37883 4.98256 4.375 5 4.375ZM11.625 4.375V5C11.6252 5.41593 11.5416 5.82773 11.3799 6.21094C11.2182 6.59414 10.9817 6.94143 10.6836 7.23145L10.0215 7.875H12.625V8.125H10.0244L10.6826 8.76855C11.2638 9.33632 11.625 10.1256 11.625 11V11.625H11.375V11C11.375 9.41289 10.0871 8.125 8.5 8.125H5.375V7.875H8.5C10.0871 7.875 11.375 6.58711 11.375 5V4.375H11.625ZM15 7.375C15.3429 7.375 15.625 7.65711 15.625 8C15.625 8.34289 15.3429 8.625 15 8.625C14.6571 8.625 14.375 8.34289 14.375 8C14.375 7.65711 14.6571 7.375 15 7.375ZM11.5 1.375C11.8429 1.375 12.125 1.65711 12.125 2C12.125 2.34289 11.8429 2.625 11.5 2.625C11.1571 2.625 10.875 2.34289 10.875 2C10.875 1.65711 11.1571 1.375 11.5 1.375Z" stroke="currentColor" strokeWidth="0.75"/>
                </svg>
                {activeTab === 'architecture' && <span className="text-xs text-center leading-tight">{t('benefits.tabs.architecture')}</span>}
              </button>

              <button
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl ${
                  activeTab === 'usecases'
                    ? 'bg-orx-bg1 text-orx-blue'
                    : 'text-orx-primary'
                }`}
                onClick={() => setActiveTab('usecases')}
              >
                <svg className="w-6 h-6" viewBox="0 0 17 16" fill="none">
                  <path d="M7.78394 13.0469L7.8728 13.332L7.11206 12.3955L7.51245 12.1807L7.78394 13.0469ZM9.88647 12.3955L9.12573 13.332L9.21558 13.0469L9.48608 12.1807L9.88647 12.3955Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {activeTab === 'usecases' && <span className="text-xs text-center leading-tight">{t('benefits.tabs.usecases')}</span>}
              </button>
            </div>
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
