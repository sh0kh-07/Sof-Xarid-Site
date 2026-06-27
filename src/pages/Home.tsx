import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Layers, BadgePercent, Cpu, Landmark, Sparkles, Clock, FileText, Check, Award, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import VerificationTimeline from '../components/VerificationTimeline';
import { TESTIMONIALS } from '../data';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Why choose cards mapping
  const whyCards = [
    { key: 'c1', icon: <BadgePercent className="text-blue-500" size={24} /> },
    { key: 'c2', icon: <ShieldCheck className="text-blue-500" size={24} /> },
    { key: 'c3', icon: <Zap className="text-blue-500" size={24} /> },
    { key: 'c4', icon: <Layers className="text-blue-500" size={24} /> },
    { key: 'c5', icon: <Landmark className="text-blue-500" size={24} /> },
    { key: 'c6', icon: <Sparkles className="text-blue-500" size={24} /> },
    { key: 'c7', icon: <Clock className="text-blue-500" size={24} /> },
    { key: 'c8', icon: <FileText className="text-blue-500" size={24} /> },
    { key: 'c9', icon: <Layers className="text-blue-500" size={24} /> },
    { key: 'c10', icon: <Award className="text-blue-500" size={24} /> },
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Direct-Procurement About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <span>{t('about.title')}</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              {t('about.subtitle')}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              {t('about.p1')}
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Micro comparison badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/30">
                <span className="block text-lg font-bold text-slate-900">0%</span>
                <span className="text-xs text-slate-500">{t('home.dealers_brokers')}</span>
              </div>
              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/30">
                <span className="block text-lg font-bold text-emerald-600">100%</span>
                <span className="text-xs text-slate-500">{t('home.verified_factories')}</span>
              </div>
            </div>
          </div>

          {/* Graphical/Illustrative representation of B2B/B2G direct connection */}
          <div className="relative p-8 rounded-2xl bg-white border border-slate-200/60 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-bl-full" />
            
            <h3 className="font-display text-lg font-bold text-slate-900 mb-6 tracking-tight">
              {t('home.ecosystem_direct_link')}
            </h3>

            <div className="space-y-6 relative">
              {/* Manufacturer Node */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200/50">
                <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center text-white font-bold">
                  🏭
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t('home.verified_factory')}</h4>
                  <p className="text-xs text-slate-500">{t('home.authentic_producers')}</p>
                </div>
                <div className="ml-auto bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {t('home.seller')}
                </div>
              </div>

              {/* Secure Bridge Line */}
              <div className="flex justify-center -my-3">
                <div className="w-0.5 h-10 border-r border-dashed border-blue-400 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-100 rounded-full border border-blue-600 flex items-center justify-center text-[8px] text-blue-600 font-bold">
                    🛡️
                  </div>
                </div>
              </div>

              {/* Gov/Enterprise Node */}
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200/50">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold">
                  🏛️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t('home.state_org')}</h4>
                  <p className="text-xs text-slate-500">{t('home.procurement_gateway')}</p>
                </div>
                <div className="ml-auto bg-blue-500/10 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {t('home.buyer')}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-400 block mb-3">
                {t('home.transparent_contracts_tag')}
              </span>
              <button
                onClick={() => navigate('/government-procurement')}
                className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline"
              >
                <span>{t('home.learn_gov_standards')}</span>
                <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <Stats />

      {/* 4. Why Choose Sof Xarid Section */}
      <section className="bg-slate-50/70 py-24 border-y border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
              {t('home.sof_xarid_edge')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('why.title')}
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyCards.map((card) => (
              <motion.div
                key={card.key}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/60 rounded-2xl p-5 hover:border-blue-600 shadow-sm transition-all"
              >
                <div className="p-2.5 bg-blue-50 rounded-xl inline-block mb-4 text-blue-600">
                  {card.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 mb-2 tracking-tight">
                  {t(`why.${card.key}_title`)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(`why.${card.key}_desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 10-Level Verification Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">
            {t('home.verification_paradigm')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('verification_page.title')}
          </h2>
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            {t('verification_page.subtitle')}
          </p>
        </div>

        {/* Render timeline component */}
        <VerificationTimeline />

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/verification')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
          >
            <span>{t('home.see_criteria')}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>


      {/* 7. Premium Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-gradient-to-tr from-blue-50/70 via-white to-blue-50/30 p-12 text-center overflow-hidden border border-slate-200 shadow-xl">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('home.ready_title')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {t('home.ready_subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/marketplace')}
                className="px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/15 hover:scale-105 transition-all w-full sm:w-auto cursor-pointer"
              >
                {t('home.access_catalog')}
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm font-semibold rounded-xl hover:scale-105 transition-all w-full sm:w-auto cursor-pointer"
              >
                {t('home.talk_officer')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
