import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Globe } from 'lucide-react';
const Hero = () => {
  return <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0f2fe%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                World-Class Medical Care with a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Comfortable Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Combining healthcare excellence with top-notch travel experiences. 
                Your health, our mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" asChild>
                <Link to="/contact">
                  Request Free Consultation
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/treatments">View Treatments</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Successful Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Partner Hospitals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Shield className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Accredited Hospitals</h3>
                  <p className="text-sm text-gray-600">JCI certified medical facilities</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Users className="w-12 h-12 text-cyan-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Doctors</h3>
                  <p className="text-sm text-gray-600">Board-certified specialists</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Globe className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-sm text-gray-600">Worldwide medical tourism</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    24/7
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                  <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;