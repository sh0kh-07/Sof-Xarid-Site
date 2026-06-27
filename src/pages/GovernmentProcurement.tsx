import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Landmark, ShieldAlert, Award, FileCheck2, Scale, Users, FileLock2, HelpCircle, CheckCircle } from 'lucide-react';

export default function GovernmentProcurement() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const benefitsList = [
    { key: 'benefit1', icon: <Scale className="text-blue-500" size={24} /> },
    { key: 'benefit2', icon: <Award className="text-blue-500" size={24} /> },
    { key: 'benefit3', icon: <FileLock2 className="text-blue-500" size={24} /> },
    { key: 'benefit4', icon: <FileCheck2 className="text-blue-500" size={24} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Page Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Landmark size={14} className="mr-1" />
            <span>State Security Standard</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
            {t('gov.title')}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            {t('gov.p1')}
          </p>

          <p className="text-sm text-slate-400">
            * Fully compatible with Uzbekistan public procurement law, standard B2B/B2G tenders, and federal anti-collusion regulations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/10 transition-all cursor-pointer"
            >
              Request State Integration Keys
            </button>
            <button
              onClick={() => navigate('/verification')}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-800 font-semibold text-sm rounded-xl transition-all cursor-pointer hover:bg-slate-50"
            >
              Review Verification System
            </button>
          </div>
        </div>

        {/* Cinematic Illustration of B2G Benefits & Cost Reduction */}
        <div className="relative rounded-3xl bg-white border border-slate-200 p-8 text-slate-900 overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#2563EB]/5 rounded-bl-full" />
          
          <h3 className="font-display text-base font-bold text-slate-900 mb-6 flex items-center tracking-tight">
            <ShieldAlert size={18} className="text-blue-600 mr-2" />
            Taxpayers' Budget Optimization Model
          </h3>

          <div className="space-y-6">
            {/* Standard Broker Margin Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Standard Reseller & Broker Procurement Channel</span>
                <span className="text-rose-600 font-semibold">135% Cost Inflation</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-rose-500 to-rose-600" />
              </div>
              <span className="block text-[10px] text-rose-600 font-medium">
                Includes broker commissions, secondary sub-dealers, fake bids, and tender markup.
              </span>
            </div>

            {/* Sof Xarid Bar */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between text-xs">
                <span className="text-slate-800 font-semibold">Sof Xarid Direct Factory Procurement</span>
                <span className="text-emerald-600 font-black">100% True Base Price</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[74%] h-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              </div>
              <span className="block text-[10px] text-emerald-700 font-semibold">
                Saves up to 35% of budgets by direct API syncing with primary manufacturing plants.
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <span className="block text-xl font-extrabold text-slate-900">35%</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Average Budget Saved</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl">
              <span className="block text-xl font-extrabold text-emerald-600">100%</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Audit Traceability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Detailed Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t('gov.benefitTitle')}
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Engineered from ground up to satisfy state security, audit compliance, and anti-corruption guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsList.map((benefit) => (
            <div
              key={benefit.key}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex items-start space-x-4 hover:border-blue-400 transition-colors"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                {benefit.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                  {t(`gov.${benefit.key}`)}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {t(`gov.${benefit.key}_desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Notice Block */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 flex items-start space-x-4">
        <Landmark className="text-amber-500 flex-shrink-0 mt-0.5" size={24} />
        <div className="space-y-2">
          <h4 className="font-display text-base font-bold text-slate-900 tracking-tight">
            Cryptographic Integrity Audit Notice
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            All procurement contract entries, bid evaluations, and invoice logs are linked with cryptographic timestamps on Sof Xarid server registries. Alteration of historical pricing or compliance metrics is structurally impossible, ensuring total compliance for municipal audits, parliamentary controls, and international state transparency indexes.
          </p>
        </div>
      </div>
    </div>
  );
}
