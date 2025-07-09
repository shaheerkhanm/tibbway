
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n/translations';
import { MapPin, Star, DollarSign, Clock } from 'lucide-react';

const Destinations = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      country: 'India',
      city: 'Delhi',
      image: '/lovable-uploads/4b85beb4-2f4a-4e6e-b52a-f568b99d89c0.jpg',
      rating: 4.9,
      hospitals: 25,
      savings: '70%',
      specialties: ['Cardiology', 'Orthopedics', 'Oncology', 'Neurology']
    },
    {
      country: 'India',
      city: 'Mumbai',
      image: '/lovable-uploads/364a7ef3-90d3-4b5d-8729-c1e51570ef26.jpg',
      rating: 4.8,
      hospitals: 20,
      savings: '65%',
      specialties: ['Cosmetic Surgery', 'Fertility', 'Dental Care', 'Ayurveda']
    },
    {
      country: 'India',
      city: 'Chennai',
      image: '/lovable-uploads/4b85beb4-2f4a-4e6e-b52a-f568b99d89c0.jpg',
      rating: 4.9,
      hospitals: 18,
      savings: '68%',
      specialties: ['Liver Transplant', 'Spine Surgery', 'Pediatrics', 'Wellness']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('destinations')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class medical destinations offering exceptional healthcare at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={`${destination.city}, ${destination.country}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="w-5 h-5 mr-2 text-red-500" />
                    {destination.city}, {destination.country}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm text-gray-600">{destination.hospitals} Hospitals</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm font-medium text-green-600">Save {destination.savings}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Top Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.specialties.map((specialty, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Explore {destination.city}
                    </Button>
                  </div>
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

export default Destinations;
