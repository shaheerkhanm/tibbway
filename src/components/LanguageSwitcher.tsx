
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
