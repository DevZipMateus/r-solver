
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResolverHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className={`relative transition-all duration-300 ${
              !isScrolled ? 'bg-white/15 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 shadow-lg border border-white/20' : ''
            }`}>
              <img 
                src="/lovable-uploads/661a5537-04e5-47cc-8fff-c12fad4d94f2.png" 
                alt="Resolver - Soluções Elétricas Inteligentes" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 sm:h-10 lg:h-12' : 'h-10 sm:h-12 lg:h-14'
                } drop-shadow-lg`}
              />
              {!isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-lg blur-sm -z-10"></div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm xl:text-base font-medium transition-colors hover:text-orange-500 ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 sm:h-6 sm:w-6 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`} />
            ) : (
              <Menu className={`h-5 w-5 sm:h-6 sm:w-6 ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-orange-100 shadow-lg">
            <nav className="px-3 sm:px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm sm:text-base font-medium text-gray-900 hover:text-orange-500 transition-colors py-2 px-2 rounded-md hover:bg-orange-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ResolverHeader;
