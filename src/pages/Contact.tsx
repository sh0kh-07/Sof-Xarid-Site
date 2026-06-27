import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ShieldCheck, Globe, Star } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          CONTACT CENTRE & ONBOARDING OFFICE
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          {t('contact.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info & Interactive Vector Map - Left Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
              Central Advisory Office
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3.5">
                <MapPin className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">{t('contact.address')}</span>
                  <span className="text-slate-800 font-medium leading-relaxed">{t('contact.addressVal')}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">{t('contact.phoneLabel')}</span>
                  <span className="text-slate-800 font-medium">{t('contact.phoneVal')}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">{t('contact.emailLabel')}</span>
                  <span className="text-slate-800 font-medium">{t('contact.emailVal')}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Clock className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                <div className="flex flex-col space-y-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">{t('contact.hours')}</span>
                  <span className="text-slate-800 font-medium">{t('contact.hoursVal')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Styled Multilingual Vector Map Placeholder */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 text-slate-900 relative overflow-hidden h-64 flex flex-col justify-between shadow-sm">
            {/* Background Map Graphic Lines representing Tashkent */}
            <div className="absolute inset-0 opacity-15">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,50 Q100,20 200,80 T400,30 T600,90 T800,40" fill="none" stroke="#2563EB" strokeWidth="2" />
                <path d="M50,0 Q120,150 200,300" fill="none" stroke="#2563EB" strokeWidth="1.5" />
                <path d="M250,0 Q300,100 350,300" fill="none" stroke="#1B3A6B" strokeWidth="2.5" />
                <circle cx="180" cy="110" r="15" fill="#2563EB" opacity="0.3" />
                <circle cx="180" cy="110" r="4" fill="#2563EB" />
                <circle cx="340" cy="160" r="2" fill="#22C55E" />
                <circle cx="120" cy="220" r="2" fill="#22C55E" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600">
                {t('contact.mapPlaceholder')}
              </span>
              <span className="bg-emerald-50 border border-emerald-500/20 text-emerald-600 text-[8px] font-bold px-2 py-0.5 rounded-full">
                ACTIVE COORDS
              </span>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-600 flex-shrink-0" size={16} />
                <span className="text-xs font-bold text-slate-900">HQ Tashkent (Amur Temur Ave, 77)</span>
              </div>
              <p className="text-[10px] text-slate-500 max-w-xs leading-relaxed">
                Clicking map in production opens Google Maps Platform API direction routers configured with GOST compliance flags.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 border-t border-slate-100 pt-3">
              <span>LAT: 41.311081</span>
              <span>LNG: 69.240562</span>
            </div>
          </div>
        </div>

        {/* Messaging & Onboarding Request Form - Right Column */}
        <div className="lg:col-span-7 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm relative overflow-hidden">
          {/* Top banner glow */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-800" />

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-4 max-w-md mx-auto"
            >
              <CheckCircle className="text-emerald-500 mx-auto" size={48} />
              <h3 className="font-display text-lg font-bold text-slate-900">
                Message Received Securely
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t('contact.success')} Your message has been cryptographically signed and routed to our central procurement advisory desk.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-display text-lg font-bold text-slate-900 tracking-tight mb-2">
                {t('contact.formTitle')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Shavkat Ergashev"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. procurement@organization.uz"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +998 90 123-45-67"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. OOO Tashkent Cement Works"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your manufacturing scope, required certifications (ISO, GOST), target products or estimated monthly volume requisition requirements..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                <ShieldCheck size={14} className="text-emerald-500 flex-shrink-0" />
                <span>All submitted communications are encrypted under state cyber-security regulations.</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/15 flex items-center justify-center space-x-2 transition-transform cursor-pointer hover:-translate-y-0.5"
                >
                  <Send size={15} />
                  <span>{t('contact.send')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
