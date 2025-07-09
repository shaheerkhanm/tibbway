
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TreatmentGrid from '@/components/TreatmentGrid';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TreatmentGrid />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
