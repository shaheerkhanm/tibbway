import { Instagram, Twitter, Linkedin, Mail, Globe, Phone, Facebook, Youtube } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Connect = () => {
  const socialLinks = [
    {
      title: 'Instagram',
      description: 'Follow our latest updates',
      url: 'https://instagram.com/tibb_way',
      icon: Instagram,
      color: 'bg-white',
    },
    {
      title: 'X',
      description: 'Join the conversation',
      url: 'https://x.com/tibbway',
      icon: 'custom-x',
      color: 'bg-white',
    },
    {
      title: 'Snapchat',
      description: 'Follow our snaps',
      url: 'https://snapchat.com/add/tibbway',
      icon: 'custom-snapchat',
      color: 'bg-white',
    },
    {
      title: 'LinkedIn',
      description: 'Professional network',
      url: 'https://linkedin.com/company/tibbway',
      icon: Linkedin,
      color: 'bg-white',
    },
    {
      title: 'Facebook',
      description: 'Connect with our community',
      url: 'https://facebook.com/tibbway',
      icon: Facebook,
      color: 'bg-white',
    },
    {
      title: 'YouTube',
      description: 'Watch our latest videos',
      url: 'https://youtube.com/@tibbway',
      icon: Youtube,
      color: 'bg-white',
    },
    {
      title: 'Website',
      description: 'Visit our main site',
      url: 'https://tibbway.com',
      icon: Globe,
      color: 'bg-white',
    },
    {
      title: 'Email Us',
      description: 'Get in touch directly',
      url: 'mailto:info@tibbway.com',
      icon: Mail,
      color: 'bg-white',
    },
    {
      title: 'Call Us',
      description: 'Speak with our team',
      url: 'tel:+916282065943',
      icon: Phone,
      color: 'bg-white',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center p-2">
              <img 
                src="/lovable-uploads/d073daaf-87ef-4b04-93c0-31c77c37c9a6.png" 
                alt="Tibbway Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Tibbway</h1>
            <p className="text-gray-300 text-sm">
              🏥 Medical Tourism & Healthcare Services | Connecting you to world-class treatments 🌍
            </p>
            
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full">
                    <div className="p-4 flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        {link.icon === 'custom-x' ? (
                          <img 
                            src="/lovable-uploads/fab492e1-2858-45d1-8767-491a620b8ad6.png" 
                            alt="X Logo" 
                            className="w-6 h-6 object-contain"
                          />
                        ) : link.icon === 'custom-snapchat' ? (
                          <img 
                            src="/lovable-uploads/118cb44b-2f7e-46c8-9109-7c15244516c3.png" 
                            alt="Snapchat Logo" 
                            className="w-6 h-6 object-contain"
                          />
                        ) : (
                          <link.icon className="w-6 h-6 text-gray-800" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              🌟 Connect with Tibbway
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Your gateway to premium healthcare worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;