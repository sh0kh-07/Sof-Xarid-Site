import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Compass } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 bg-[#F9FBFF]">
      {/* Hero Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          {t('about_page.story_badge')}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          {t('about_page.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {t('about_page.subtitle')}
        </p>
      </div>

      {/* Grid: Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm space-y-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl inline-block">
            <Target size={24} />
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 tracking-tight">
            {t('about_page.purpose_title')}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t('about_page.purpose_text')}
          </p>
        </div>

        <div className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-sm space-y-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl inline-block">
            <Compass size={24} />
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 tracking-tight">
            {t('about_page.policy_title')}
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t('about_page.policy_text')}
          </p>
        </div>
      </div>

      {/* B2G Core Pillars */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t('about_page.principles_title')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            {t('about_page.principles_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-white border border-slate-200/50 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">{t('about_page.principle1_title')}</h3>
            <p className="text-xs text-slate-500">{t('about_page.principle1_desc')}</p>
          </div>
          <div className="p-5 bg-white border border-slate-200/50 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">{t('about_page.principle2_title')}</h3>
            <p className="text-xs text-slate-500">{t('about_page.principle2_desc')}</p>
          </div>
          <div className="p-5 bg-white border border-slate-200/50 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">{t('about_page.principle3_title')}</h3>
            <p className="text-xs text-slate-500">{t('about_page.principle3_desc')}</p>
          </div>
          <div className="p-5 bg-white border border-slate-200/50 rounded-xl space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900">{t('about_page.principle4_title')}</h3>
            <p className="text-xs text-slate-500">{t('about_page.principle4_desc')}</p>
          </div>
        </div>
      </section>

      {/* Advisory Council / Leadership Section */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t('about_page.board_title')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            {t('about_page.board_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
              alt="Chairman"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-sm font-bold text-slate-900">Prof. Shoxrux Tashkentov</h3>
            <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-widest block mb-2">
              {t('about_page.board_member1_role')}
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('about_page.board_member1_desc')}
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
              alt="Lead Engineer"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-sm font-bold text-slate-900 font-sans">Elena Petrova, PhD</h3>
            <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-widest block mb-2">
              {t('about_page.board_member2_role')}
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('about_page.board_member2_desc')}
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
              alt="Finance Expert"
              className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-sm font-bold text-slate-900">Ulugbek Jalolov</h3>
            <span className="text-[10px] text-blue-600 font-semibold uppercase tracking-widest block mb-2">
              {t('about_page.board_member3_role')}
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t('about_page.board_member3_desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
