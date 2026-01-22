import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/i18n/translations';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t
  } = useTranslation();
  const navigation = [{
    name: t('home'),
    href: '/'
  }, {
    name: t('about'),
    href: '/about'
  }, {
    name: t('treatments'),
    href: '/treatments'
  // }, {
  //   name: t('destinations'),
  //   href: '/destinations'
  // }, 
    {
    name: t('patientJourney'),
    href: '/patient-journey'
  }, {
    name: t('testimonials'),
    href: '/testimonials'
  }, {
    name: t('contact'),
    href: '/contact'
  }];
  return <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img alt="Tibbway Logo" className="object-contain h-full w-[120px]" src="/lovable-uploads/d073daaf-87ef-4b04-93c0-31c77c37c9a6.png" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-0">
            {navigation.map(item => <Link key={item.name} to={item.href} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {item.name}
              </Link>)}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" asChild>
              <Link to="/contact">{t('freeConsultation')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => <Link key={item.name} to={item.href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-4 pb-2 flex justify-between items-center">
                <LanguageSwitcher />
                <Button variant="outline" className="flex-1 ml-4" asChild>
                  <Link to="/contact">{t('freeConsultation')}</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;
