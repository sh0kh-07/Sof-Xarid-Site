import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Globe, ArrowRight, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const isRu = i18n.language === 'ru';
  const isUz = i18n.language === 'uz';

  const auditedText = isRu 
    ? 'Криптографический аудит' 
    : isUz 
      ? 'Kriptografik tekshirilgan' 
      : 'Cryptographically Audited';

  const legalSupportLabel = isRu 
    ? 'Юридическая помощь' 
    : isUz 
      ? 'Yuridik yordam' 
      : 'Legal & Support';

  const centralHqLabel = isRu 
    ? 'Главный офис и контакты' 
    : isUz 
      ? 'Bosh ofis va aloqa' 
      : 'Central Advisory HQ';

  const newsletterLabel = isRu 
    ? 'Новостная рассылка' 
    : isUz 
      ? 'Xabarnomalar' 
      : 'Newsletter';

  const joinLabel = isRu 
    ? 'Подписаться' 
    : isUz 
      ? 'Qo\'shilish' 
      : 'Join';

  const emailPlaceholder = isRu 
    ? 'pochta@organizatsiya.com' 
    : isUz 
      ? 'pochta@tashkilot.com' 
      : 'name@organization.com';

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Info and Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/10">
                SX
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                Sof Xarid
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 max-w-xs">
              <Shield className="text-emerald-600 flex-shrink-0" size={18} />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {t('misc.badge100')}
                </span>
                <span className="text-[10px] text-slate-500">
                  {auditedText}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/marketplace" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.marketplace')}
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.manufacturers')}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.categories')}
                </Link>
              </li>
              <li>
                <Link to="/government-procurement" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.govProcurement')}
                </Link>
              </li>
              <li>
                <Link to="/verification" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.verification')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">
              {legalSupportLabel}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('footer.support')}
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 text-slate-600 transition-colors flex items-center">
                  <ArrowRight size={12} className="mr-2 text-slate-300" />
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
              {centralHqLabel}
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{t('contact.addressVal')}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-blue-600 flex-shrink-0" />
                <span>{t('contact.phoneVal')}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                <span>{t('contact.emailVal')}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                {newsletterLabel}
              </span>
              <div className="flex">
                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-l-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={() => console.log('Successfully subscribed!')}
                  className="bg-[#2563EB] hover:bg-blue-700 text-white px-4 rounded-r-lg text-xs font-semibold transition-colors flex items-center cursor-pointer"
                >
                  {joinLabel}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <span>
            © 2026 Sof Xarid. {t('footer.rights')}
          </span>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#linkedin" className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-blue-600 rounded-lg transition-all animate-none" aria-label="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="#github" className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-blue-600 rounded-lg transition-all animate-none" aria-label="GitHub">
              <Github size={14} />
            </a>
            <a href="#telegram" className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-blue-600 rounded-lg transition-all animate-none" aria-label="Telegram">
              <MessageSquare size={14} />
            </a>
            <a href="#globe" className="p-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-500 hover:text-blue-600 rounded-lg transition-all animate-none" aria-label="Global Network">
              <Globe size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
