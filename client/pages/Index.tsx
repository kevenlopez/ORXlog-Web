import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import DashboardSection from '../components/DashboardSection';
import BenefitsSection from '../components/BenefitsSection';
import DataFlowSection from '../components/DataFlowSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-orx-main font-sans">
      <Header />
      <main>
        <HeroSection />
        <DashboardSection />
        <BenefitsSection />
        <DataFlowSection />
      </main>
      <Footer />
    </div>
  );
}
