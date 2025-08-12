import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function DataFlowSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="px-6 mb-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-orx-primary mb-6">
          {t('dataflow.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-6">
            <div className="text-left">
              <p className="text-orx-primary text-sm mb-8">{t('dataflow.step1')}</p>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-normal text-orx-primary">26.12</span>
                <span className="text-xl lg:text-2xl text-orx-blue absolute bottom-2 ml-2">GB</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-6">
            <div className="text-left">
              <p className="text-orx-primary text-sm mb-8">{t('dataflow.step2')}</p>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-normal text-orx-primary">18.29</span>
                <span className="text-xl lg:text-2xl text-orx-blue absolute bottom-2 ml-2">GB</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-6">
            <div className="text-left">
              <p className="text-orx-primary text-sm mb-8">{t('dataflow.step3')}</p>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-normal text-orx-primary">13.06</span>
                <span className="text-xl lg:text-2xl text-orx-blue absolute bottom-2 ml-2">GB</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-6">
            <div className="text-left">
              <p className="text-orx-primary text-sm mb-8">{t('dataflow.step4')}</p>
              <div className="relative">
                <span className="text-4xl lg:text-6xl font-normal text-orx-primary">7.84</span>
                <span className="text-xl lg:text-2xl text-orx-blue absolute bottom-2 ml-2">GB</span>
              </div>
            </div>
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
    </section>
  );
}
