import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Factory, ShieldCheck, Check, Building2, TrendingDown, Clock, Percent, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  // Auto-rotate the featured live deal product every 4 seconds to make the UI feel alive
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = PRODUCTS[activeProductIndex];

  const getProductName = (product: typeof currentProduct) => {
    const currentLang = i18n.language;
    if (currentLang === 'ru') return product.nameRu;
    if (currentLang === 'uz') return product.nameUz;
    return product.name;
  };

  const getProductLocation = (product: typeof currentProduct) => {
    const currentLang = i18n.language;
    if (currentLang === 'ru') return product.locationRu;
    if (currentLang === 'uz') return product.locationUz;
    return product.location;
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#F1F5F9] via-[#F8FAFC] to-[#F8FAFC] overflow-hidden">
      {/* Decorative background grids and light orbs */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear Text & Simple Action Buttons */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <ShieldCheck size={14} className="text-emerald-600" />
              <span className="text-[10px] tracking-widest">{t('misc.trustedBadge')}</span>
            </motion.div>

            {/* Clear, bold, simple welcome text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E293B] tracking-tight leading-tight"
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed font-normal"
              >
                {t('hero.subtitle')}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => navigate('/marketplace')}
                className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/15 transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <span>{t('hero.btnStart')}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center space-x-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm font-bold rounded-xl transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <Factory size={15} className="text-blue-600" />
                <span>{t('hero.btnBecome')}</span>
              </button>
            </motion.div>

            {/* Core trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60"
            >
              {[
                { label: t('hero.badgePrices'), desc: "Direct from furnace" },
                { label: t('hero.badgeVerified'), desc: "State level check" },
                { label: t('hero.badgeGov'), desc: "Anti-corruption" },
                { label: t('hero.badgeLevel'), desc: "10-Tier standard" }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 shrink-0" />
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium pl-3">{badge.desc}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Visual Interactive Live Mockup Board */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative bg-white border border-slate-200/80 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Decorative side accent lines */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full" />
              
              {/* Live Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Live Factory Feed
                  </span>
                </div>
                <div className="flex items-center space-x-1 bg-blue-50 text-blue-600 text-[9px] font-bold px-2 py-0.5 rounded-full">
                  <Clock size={10} />
                  <span>UPDATED JUST NOW</span>
                </div>
              </div>

              {/* Interactive Product Slide Show with absolute smooth height transitions */}
              <div className="min-h-[160px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProduct.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {/* Manufacturer info & rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Building2 size={14} className="text-slate-400" />
                        <span className="text-xs font-bold text-slate-700">
                          {currentProduct.manufacturerName}
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-500 font-bold">
                        ⭐ {currentProduct.rating}
                      </span>
                    </div>

                    {/* Product visual + info row */}
                    <div className="flex items-center space-x-4 p-3 bg-slate-50 border border-slate-200/40 rounded-2xl">
                      <img
                        src={currentProduct.image}
                        alt={getProductName(currentProduct)}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {getProductName(currentProduct)}
                        </h4>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {getProductLocation(currentProduct)}
                        </span>
                        <span className="inline-flex items-center text-[9px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded mt-1.5">
                          Verified Price • Min order: {currentProduct.minOrder}
                        </span>
                      </div>
                    </div>

                    {/* Cost transparency visualization bar */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-slate-400 font-medium">B2B Broker markup eliminated:</span>
                        <span className="text-emerald-600 font-black">SAVE UP TO 35%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                        <div className="w-[100%] h-full bg-gradient-to-r from-blue-600 to-emerald-500" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sealed Certificate Badge Section at the bottom */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-slate-900 uppercase tracking-tight leading-none">
                      LEVEL 10 SEALED
                    </span>
                    <span className="text-[9px] text-slate-400 font-semibold block mt-0.5">
                      Uzbekistan Gov Audited Standard
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/marketplace')}
                  className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Browse Catalog
                </button>
              </div>

            </motion.div>

            {/* Behind layout accents */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-tr-full z-0 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  );
}
