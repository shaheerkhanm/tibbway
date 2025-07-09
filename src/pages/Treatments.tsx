
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/translations';
import { Heart, Bone, Smile, Baby, Stethoscope, Flower } from 'lucide-react';

const Treatments = () => {
  const { t } = useTranslation();

  const treatments = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: t('cardiology'),
      description: t('cardiologyDesc'),
      procedures: ['Bypass Surgery', 'Angioplasty', 'Valve Replacement', 'Pacemaker']
    },
    {
      icon: <Bone className="w-12 h-12 text-blue-500" />,
      title: t('orthopedicSurgery'),
      description: t('orthopedicDesc'),
      procedures: ['Knee Replacement', 'Hip Replacement', 'Spine Surgery', 'Sports Medicine']
    },
    {
      icon: <Smile className="w-12 h-12 text-green-500" />,
      title: t('cosmeticSurgery'),
      description: t('cosmeticDesc'),
      procedures: ['Rhinoplasty', 'Breast Augmentation', 'Liposuction', 'Facelift']
    },
    {
      icon: <Baby className="w-12 h-12 text-pink-500" />,
      title: t('fertilityTreatments'),
      description: t('fertilityDesc'),
      procedures: ['IVF', 'IUI', 'Egg Freezing', 'Fertility Counseling']
    },
    {
      icon: <Smile className="w-12 h-12 text-cyan-500" />,
      title: t('dentalCare'),
      description: t('dentalDesc'),
      procedures: ['Implants', 'Veneers', 'Orthodontics', 'Oral Surgery']
    },
    {
      icon: <Flower className="w-12 h-12 text-purple-500" />,
      title: t('wellness'),
      description: t('wellnessDesc'),
      procedures: ['Ayurveda', 'Yoga Therapy', 'Detox Programs', 'Spa Treatments']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('popularTreatments')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('treatmentsSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {treatment.icon}
                  </div>
                  <CardTitle className="text-2xl">{treatment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{treatment.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Common Procedures:</h4>
                    <ul className="space-y-1">
                      {treatment.procedures.map((procedure, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {procedure}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6">
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatments;
