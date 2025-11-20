
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from '@/i18n/translations';

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    country: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: '',
      country: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Mail className="w-6 h-6 text-blue-600" />
                      <span>{t('emailUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">info@tibbway.com</p>
                    <p className="text-gray-600">support@tibbway.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Phone className="w-6 h-6 text-green-600" />
                      <span>{t('callUs')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">+91 6282065943‬</p>
                    <p className="text-gray-600">+91 9539825916‬</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-purple-600" />
                      <span>{t('workingHours')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{t('emergencySupport')}</p>
                    <p className="text-gray-600">{t('mondayFriday')}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-red-600" />
                      <span>{t('ourLocations')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">India</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{t('getConsultation')}</CardTitle>
                  <p className="text-gray-600">
                    {t('consultationDesc')}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('fullName')} *
                        </label>
                        <Input 
                          id="name" 
                          name="name" 
                          type="text" 
                          required 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Enter your full name" 
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('emailAddress')} *
                        </label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="Enter your email" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('phoneNumber')} *
                        </label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="Enter your phone number" 
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('country')} *
                        </label>
                        <Input 
                          id="country" 
                          name="country" 
                          type="text" 
                          required 
                          value={formData.country} 
                          onChange={handleChange} 
                          placeholder="Enter your country" 
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('treatmentRequired')} *
                      </label>
                      <Input 
                        id="treatment" 
                        name="treatment" 
                        type="text" 
                        required 
                        value={formData.treatment} 
                        onChange={handleChange} 
                        placeholder={t('treatmentPlaceholder')} 
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('additionalInfo')}
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder={t('messagePlaceholder')} 
                        className="resize-none" 
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      <Send className="w-5 h-5 mr-2" />
                      {t('sendMessage')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
