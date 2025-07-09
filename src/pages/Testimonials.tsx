
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/translations';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United States',
      treatment: 'Cardiac Surgery',
      rating: 5,
      image: '/lovable-uploads/364a7ef3-90d3-4b5d-8729-c1e51570ef26.jpg',
      testimonial: 'The care I received was exceptional. The doctors were highly skilled and the staff was incredibly supportive throughout my entire journey. I saved over $50,000 compared to treatment in the US.',
      hospital: 'Apollo Hospital, Delhi'
    },
    {
      name: 'Ahmed Al-Rashid',
      country: 'Saudi Arabia',
      treatment: 'Orthopedic Surgery',
      rating: 5,
      image: '/lovable-uploads/4b85beb4-2f4a-4e6e-b52a-f568b99d89c0.jpg',
      testimonial: 'Tibbway made my medical journey seamless. From visa assistance to post-surgery care, everything was perfectly coordinated. The quality of treatment exceeded my expectations.',
      hospital: 'Fortis Hospital, Mumbai'
    },
    {
      name: 'Emma Thompson',
      country: 'United Kingdom',
      treatment: 'Fertility Treatment',
      rating: 5,
      image: '/lovable-uploads/364a7ef3-90d3-4b5d-8729-c1e51570ef26.jpg',
      testimonial: 'After years of trying, we finally have our miracle baby thanks to the amazing team at the fertility center. The doctors were compassionate and the treatment was world-class.',
      hospital: 'Manipal Hospital, Bangalore'
    },
    {
      name: 'James Wilson',
      country: 'Canada',
      treatment: 'Cosmetic Surgery',
      rating: 5,
      image: '/lovable-uploads/4b85beb4-2f4a-4e6e-b52a-f568b99d89c0.jpg',
      testimonial: 'The results of my surgery are fantastic. The surgeon was incredibly skilled and the recovery process was smooth. I am very satisfied with my decision to choose India for my treatment.',
      hospital: 'Max Hospital, Delhi'
    },
    {
      name: 'Maria Garcia',
      country: 'Spain',
      treatment: 'Dental Implants',
      rating: 5,
      image: '/lovable-uploads/364a7ef3-90d3-4b5d-8729-c1e51570ef26.jpg',
      testimonial: 'I got a complete smile makeover at a fraction of the cost. The dental team was professional and the facilities were state-of-the-art. Highly recommend Tibbway!',
      hospital: 'Medanta Hospital, Gurgaon'
    },
    {
      name: 'Robert Brown',
      country: 'Australia',
      treatment: 'Spine Surgery',
      rating: 5,
      image: '/lovable-uploads/4b85beb4-2f4a-4e6e-b52a-f568b99d89c0.jpg',
      testimonial: 'I can walk pain-free again thanks to the excellent spine surgery. The medical team was exceptional and the follow-up care was outstanding. Best decision I ever made.',
      hospital: 'AIIMS, Delhi'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('testimonials')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who trusted us with their medical journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                      <p className="text-sm text-blue-600">{testimonial.treatment}</p>
                      <p className="text-xs text-gray-400">{testimonial.hospital}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Thousands of Satisfied Patients
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start your medical journey today and experience world-class healthcare.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50">
            {t('freeConsultation')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
