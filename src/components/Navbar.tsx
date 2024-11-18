import { School, Home, PlayCircle, Users, Lightbulb, Info, Heart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = location.pathname === '/';
  const navLinks = [
    { name: t('nav.home'), icon: Home, path: '/' },
    { name: t('nav.activities'), icon: PlayCircle, path: '/#activities' },
    { name: t('nav.sponsorship'), icon: Users, path: '/sponsorship' },
    { name: t('nav.pr50'), icon: Lightbulb, path: '/#pr50' },
    { name: t('nav.about'), icon: Info, path: '/#about-us' },
    { 
      name: t('nav.donate'), 
      icon: Heart, 
      path: '/donate',
      iconClassName: 'fill-current text-orange-500'
    },
  ];

  const handleNavClick = (path: string) => {
    if (path === '/') {
      scrollToTop();
    } else if (path === '/donate') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || !isHomePage ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={scrollToTop}
          >
            <School className={`h-8 w-8 ${
              scrolled || !isHomePage ? 'text-indigo-600' : 'text-white'
            }`} />
            <span className={`ml-2 text-xl font-bold ${
              scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
            }`}>
              {t('hero.title')}
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navLinks.map(({ name, icon: Icon, path, iconClassName }) => {
                const isHashLink = path.includes('#');
                const Component = isHashLink ? 'a' : Link;
                const props = isHashLink ? { href: path } : { to: path };

                return (
                  <Component
                    key={name}
                    {...props}
                    onClick={() => handleNavClick(path)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all
                      ${scrolled || !isHomePage
                        ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                        : 'text-white hover:text-orange-300 hover:bg-white/10'
                      }`}
                  >
                    <Icon className={`h-4 w-4 mr-1 ${iconClassName || ''}`} />
                    {name}
                  </Component>
                );
              })}
            </div>
            <div className="flex items-center ml-4">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${
                  scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                }`} />
              ) : (
                <Menu className={`h-6 w-6 ${
                  scrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                }`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ name, icon: Icon, path, iconClassName }) => {
              const isHashLink = path.includes('#');
              const Component = isHashLink ? 'a' : Link;
              const props = isHashLink ? { href: path } : { to: path };

              return (
                <Component
                  key={name}
                  {...props}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick(path);
                  }}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl"
                >
                  <Icon className={`h-5 w-5 mr-3 ${iconClassName || ''}`} />
                  {name}
                </Component>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}