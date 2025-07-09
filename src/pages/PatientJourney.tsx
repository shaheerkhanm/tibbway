
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/translations';
import { MessageCircle, FileText, Plane, Hospital, Heart, Home } from 'lucide-react';

const PatientJourney = () => {
  const { t } = useTranslation();

  const journeySteps = [
    {
      step: 1,
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Initial Consultation',
      description: 'Free consultation with our medical experts to understand your needs and medical history.',
      duration: '30-60 minutes'
    },
    {
      step: 2,
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Medical Review',
      description: 'Our specialists review your medical records and recommend the best treatment options.',
      duration: '2-3 days'
    },
    {
      step: 3,
      icon: <Plane className="w-8 h-8 text-purple-500" />,
      title: 'Travel Planning',
      description: 'We handle visa assistance, flight bookings, and accommodation arrangements.',
      duration: '1-2 weeks'
    },
    {
      step: 4,
      icon: <Hospital className="w-8 h-8 text-red-500" />,
      title: 'Treatment Phase',
      description: 'Receive world-class treatment at our partner hospitals with dedicated support.',
      duration: 'Varies by treatment'
    },
    {
      step: 5,
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'Recovery Support',
      description: 'Post-treatment care and monitoring during your recovery period.',
      duration: '1-4 weeks'
    },
    {
      step: 6,
      icon: <Home className="w-8 h-8 text-cyan-500" />,
      title: 'Follow-up Care',
      description: 'Continued support and follow-up consultations after returning home.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('patientJourney')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your complete medical journey, from consultation to recovery, managed with care and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-gray-200 hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Step Number and Icon */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-shrink-0">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">Duration: {step.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and personalized treatment plan tailored to your needs.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            {t('requestConsultation')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientJourney;
