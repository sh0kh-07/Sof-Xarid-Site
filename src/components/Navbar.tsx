import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Check, ChevronDown } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  // Force light mode permanently for the "white format"
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  // Switch Language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  const getLangName = (lng: string) => {
    switch (lng) {
      case 'ru': return 'Русский';
      case 'uz': return 'Oʻzbekcha';
      case 'en': return 'English';
      default: return 'Русский';
    }
  };

  const getLangFlag = (lng: string) => {
    switch (lng) {
      case 'ru': return '🇷🇺';
      case 'uz': return '🇺🇿';
      case 'en': return '🇬🇧';
      default: return '🇷🇺';
    }
  };

  // Nav Links
  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.marketplace'), path: '/marketplace' },
    { name: t('nav.manufacturers'), path: '/manufacturers' },
    { name: t('nav.categories'), path: '/categories' },
    { name: t('nav.govProcurement'), path: '/government-procurement' },
    // { name: t('nav.verification'), path: '/verification' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      {/* Floating fixed header at the top */}
      <header className="fixed top-4 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md border border-slate-100/90 rounded-2xl shadow-lg shadow-slate-200/40 transition-all duration-300">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-20">
              {/* Premium Inline Logo */}
              <Link to="/" className="flex items-center">
                <Logo showSubtitle={true} size="md" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                        isActive
                          ? 'text-[#1B3A6B] bg-slate-50'
                          : 'text-slate-600 hover:text-[#1B3A6B] hover:bg-slate-50/50'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1B3A6B] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Utility buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Language Switcher */}
                <div className="relative">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 border border-slate-100 transition-all"
                  >
                    <Globe size={14} className="text-[#1B3A6B]" />
                    <span>{getLangFlag(i18n.language)}</span>
                    <span>{getLangName(i18n.language).slice(0, 3)}</span>
                    <ChevronDown size={12} className={`text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {langDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-xl py-1 z-50"
                      >
                        {['ru', 'uz', 'en'].map((lng) => (
                          <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className="flex items-center justify-between w-full px-4 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              <span>{getLangFlag(lng)}</span>
                              <span>{getLangName(lng)}</span>
                            </div>
                            {i18n.language === lng && <Check size={14} className="text-[#1B3A6B]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <div className="flex items-center space-x-2 xl:hidden">
                <div className="relative mr-2">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                    className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 border border-slate-100"
                  >
                    <span>{getLangFlag(i18n.language)}</span>
                    <ChevronDown size={10} className="text-slate-400" />
                  </button>

                  <AnimatePresence>
                    {langDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-32 bg-white border border-slate-100 rounded-xl shadow-xl py-1 z-50"
                      >
                        {['ru', 'uz', 'en'].map((lng) => (
                          <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className="flex items-center justify-between w-full px-3 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center space-x-1.5">
                              <span>{getLangFlag(lng)}</span>
                              <span>{getLangName(lng).slice(0, 3)}</span>
                            </div>
                            {i18n.language === lng && <Check size={12} className="text-[#1B3A6B]" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl text-slate-600 hover:bg-slate-50 focus:outline-none transition-all"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1B3A6B] transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
