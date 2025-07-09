
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Bone, Smile, Baby, Stethoscope, Sparkles } from 'lucide-react';

const TreatmentGrid = () => {
  const treatments = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      title: "Cosmetic Surgery",
      description: "Enhance your appearance with world-class cosmetic procedures",
      procedures: ["Rhinoplasty", "Liposuction", "Hair Transplant", "Facelift"],
      gradient: "from-pink-100 to-purple-100"
    },
    {
      icon: <Bone className="w-8 h-8 text-green-600" />,
      title: "Orthopedic Surgery",
      description: "Advanced bone and joint treatments for better mobility",
      procedures: ["Knee Replacement", "Hip Replacement", "Spine Surgery"],
      gradient: "from-green-100 to-emerald-100"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Cardiology",
      description: "Comprehensive heart care from leading cardiac specialists",
      procedures: ["Bypass Surgery", "Angioplasty", "Heart Valve Replacement"],
      gradient: "from-red-100 to-pink-100"
    },
    {
      icon: <Baby className="w-8 h-8 text-blue-600" />,
      title: "Fertility Treatments",
      description: "Helping you build the family of your dreams",
      procedures: ["IVF Treatment", "Egg/Sperm Donation", "Surrogacy Services"],
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      icon: <Smile className="w-8 h-8 text-yellow-600" />,
      title: "Dental Care",
      description: "Complete dental solutions for a perfect smile",
      procedures: ["Dental Implants", "Root Canal", "Cosmetic Dentistry"],
      gradient: "from-yellow-100 to-amber-100"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-600" />,
      title: "Wellness & Ayurveda",
      description: "Holistic healing and wellness treatments",
      procedures: ["Ayurvedic Treatments", "Wellness Programs", "Detox Therapy"],
      gradient: "from-purple-100 to-indigo-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Medical Treatments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of medical treatments performed by world-class specialists 
            in accredited hospitals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className={`bg-gradient-to-br ${treatment.gradient} rounded-t-lg`}>
                <div className="flex items-center space-x-3">
                  {treatment.icon}
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {treatment.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-700 font-medium">
                  {treatment.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 mb-6">
                  {treatment.procedures.map((procedure, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {procedure}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  asChild
                >
                  <Link to="/treatments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" asChild>
            <Link to="/treatments">View All Treatments</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGrid;
