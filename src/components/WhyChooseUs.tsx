
import { Check, Shield, Globe, DollarSign, Heart, Headphones } from 'lucide-react';
import { useTranslation } from '@/i18n/translations';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t('accreditedHospitals'),
      description: t('accreditedDesc')
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: t('englishSpeaking'),
      description: t('englishDesc')
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-600" />,
      title: t('affordablePackages'),
      description: t('affordableDesc')
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: t('personalizedCare'),
      description: t('personalizedDesc')
    },
    {
      icon: <Headphones className="w-8 h-8 text-cyan-600" />,
      title: t('supportTitle'),
      description: t('supportDesc24')
    }
  ];

  const journeyPoints = [
    t('freeConsultationPoint'),
    t('medicalReview'),
    t('transparentCost'),
    t('visaAssistance'),
    t('accommodation'),
    t('followUp')
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('whyChooseTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChooseSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 rounded-full p-3 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('healthJourneyTitle')}
              </h3>
              <div className="space-y-4">
                {journeyPoints.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium mb-6">{t('patientSatisfaction')}</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">100+</div>
                    <div className="text-sm text-gray-600">Happy Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">50+</div>
                    <div className="text-sm text-gray-600">Partner Hospitals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
