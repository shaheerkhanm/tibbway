
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { useTranslation } from '@/i18n/translations';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('aboutSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('ourMission')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('missionText1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('missionText2')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">{t('patientsServed')}</div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">{t('partnerHospitals')}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">{t('countries')}</div>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-6 text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">{t('satisfactionRate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ourValues')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('compassion')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('compassionDesc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('excellence')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('excellenceDesc')}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('transparency')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('transparencyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
