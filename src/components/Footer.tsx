import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img alt="Tibbway Logo" className="h-12 w-auto mb-4 object-contain" src="/lovable-uploads/443c0abb-63e9-4827-9845-2ddadf2c148d.png" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in global healthcare. We connect patients with top hospitals 
              and certified specialists around the world, ensuring seamless medical treatments 
              combined with safe, pleasant travel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/treatments" className="text-gray-300 hover:text-white transition-colors">Treatments</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/patient-journey" className="text-gray-300 hover:text-white transition-colors">Patient Journey</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@tibbway.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">‭+91 6282065943‬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tibbway. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm">Medical Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;