import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Award, FileText, Check, Landmark, Lock, HelpCircle } from 'lucide-react';
import VerificationTimeline from '../components/VerificationTimeline';

export default function Verification() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck size={14} />
          <span>{t('verification_page.badge')}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
          {t('verification_page.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto">
          {t('verification_page.desc')}
        </p>
      </div>

      {/* Embedded interactive timeline */}
      <div className="bg-slate-50/50 p-6 sm:p-10 rounded-3xl border border-slate-200/40">
        <VerificationTimeline />
      </div>

      {/* Certification Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Lock size={14} className="mr-1" />
            <span>Cryptographic Security Trust</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
            What does a 10-Level Verified Badge signify?
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            The Sof Xarid trusted badge is an official cryptographic verification token stored securely on our directory. It guarantees that the factory's physical plant, manufacturing equipment, capital adequacy, and tax certifications have been thoroughly audited by an independent commission on-site.
          </p>

          {/* Core guarantees list */}
          <ul className="space-y-3.5 text-xs text-slate-600">
            <li className="flex items-start space-x-2.5">
              <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={12} />
              </div>
              <span><strong>Absolute Legal Liability:</strong> No shell structures or unregistered brokers listed.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={12} />
              </div>
              <span><strong>Real Production Capacities:</strong> True maximum output ratios checked on-site via sensor boards and inventories.</span>
            </li>
            <li className="flex items-start space-x-2.5">
              <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Check size={12} />
              </div>
              <span><strong>Contract Fulfilment Escrow:</strong> In case of transaction disputes, funds are secured via state-regulated bank contracts.</span>
            </li>
          </ul>
        </div>

        {/* Visual Mock Card representing verified factory profile certificate */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-2xl relative overflow-hidden max-w-md mx-auto">
          {/* Top banner overlay */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-blue-600 to-indigo-950" />
          
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                SX
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 leading-none">Sof Xarid</span>
                <span className="text-[8px] text-slate-400">Security Certificate</span>
              </div>
            </div>
            <div className="bg-emerald-50 text-emerald-600 text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              AUTHORIZED L10
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-slate-100">
            <div>
              <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Verified Plant</span>
              <span className="text-xs font-bold text-slate-900 block">BEKABAD METALLURGICAL COMBINTATE JV</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[10px]">
              <div>
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">TIN ID (ИНН)</span>
                <span className="font-mono text-slate-700">201485923</span>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Audit Stamp</span>
                <span className="font-mono text-slate-700">SHA256::7e84ab9f</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-center space-x-2">
              <ShieldCheck className="text-emerald-500" size={16} />
              <span className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wide">
                100% Verified Organization
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[8px] text-slate-400">
            <span>Issue Date: 2026-06-26</span>
            <span>Validity: Dec 2028</span>
          </div>
        </div>
      </section>
    </div>
  );
}
