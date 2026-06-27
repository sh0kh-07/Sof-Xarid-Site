import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Award, Check, ShieldCheck } from 'lucide-react';
import { VERIFICATION_STEPS } from '../data';
import IconRenderer from './IconRenderer';

export default function VerificationTimeline() {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);

  const getStepDetails = (level: number, lang: string) => {
    const isRu = lang === 'ru';
    const isUz = lang === 'uz';

    switch (level) {
      case 1:
        return {
          department: isRu ? 'Департамент правовых вопросов и совет по комплаенсу' : isUz ? 'Huquqiy masalalar va komplayens kengashi departamenti' : 'Legal Affairs & Compliance Board',
          timeRequired: isRu ? '1-2 Рабочих дня' : isUz ? '1-2 Ish kuni' : '1-2 Business Days',
          checks: isRu 
            ? ['Перекрестная проверка госреестра юрлиц', 'Аудит конечных бенефициаров', 'Проверка операционных лицензий', 'Верификация по санкционным спискам'] 
            : isUz 
              ? ['Yuridik shaxslar davlat reyestrini tekshirish', 'Yakuniy benefitsiarlarni aniqlash auditi', 'Faoliyat litsenziyalarini tekshirish', 'Sanksiya ro‘yxatlarini tekshirish'] 
              : ['State entity registry cross-check', 'Beneficiary identification audits', 'Operational license validations', 'Sanction list verification (OFAC, EU, UN)']
        };
      case 2:
        return {
          department: isRu ? 'Департамент налогового регулирования и финансового аудита' : isUz ? 'Soliq tartibga solish va moliyaviy audit departamenti' : 'Fiscal Regulatory & Finance Audit',
          timeRequired: isRu ? '2-3 Рабочих дня' : isUz ? '2-3 Ish kuni' : '2-3 Business Days',
          checks: isRu 
            ? ['Проверка отсутствия налоговой задолженности', 'Проверка долговых обязательств', 'Проверка регистрации НДС', 'Анализ финансовой отчетности'] 
            : isUz 
              ? ['Soliq qarzi yo‘qligini tekshirish', 'Qarz va majburiyatlarni tekshirish', 'QQS to‘lovchisi sifatida tekshirish', 'Moliyaviy hisobotlarni o‘rganish'] 
              : ['Tax clearance verification', 'Debts and liabilities check', 'VAT registration checks', 'Audited balance sheet review']
        };
      case 3:
        return {
          department: isRu ? 'Выездная инженерная комиссия' : isUz ? 'Joylardagi muhandislik komissiyasi' : 'On-Site Engineering Commission',
          timeRequired: isRu ? '3-5 Рабочих дней' : isUz ? '3-5 Ish kuni' : '3-5 Business Days',
          checks: isRu 
            ? ['Проверка физических координат', 'Инспекция производственных цехов', 'Проверка складских помещений', 'Оценка условий безопасности труда'] 
            : isUz 
              ? ['Haqiqiy koordinatalarni tekshirish', 'Ishlab chiqarish sexlarini tekshirish', 'Omborxonalarni tekshirish', 'Mehnat xavfsizligi sharoitlarini baholash'] 
              : ['Physical coordinates verification', 'Manufacturing workshops inspection', 'Warehouse & storage facilities check', 'Worker security & labor safety conditions']
        };
      case 4:
        return {
          department: isRu ? 'Техническое бюро Саноат-Аудит' : isUz ? 'Sanoat-Audit texnik buyrosi' : 'Sanoat-Audit Technical Bureau',
          timeRequired: isRu ? '2-3 Рабочих дня' : isUz ? '2-3 Ish kuni' : '2-3 Business Days',
          checks: isRu 
            ? ['Аудит максимальной производительности', 'Контроль цепочки поставок сырья', 'Калибровка и состояние оборудования', 'Коэффициент загрузки оборудования'] 
            : isUz 
              ? ['Maksimal ishlab chiqarish hajmini tekshirish', 'Xomashyo yetkazib berish zanjiri nazorati', 'Uskunalarning sozligi va holati', 'Uskunalarning yuklama ko‘rsatkichi'] 
              : ['Max throughput rate audit', 'Raw materials chain control', 'Equipment calibration status', 'Machine workload ratio certification']
        };
      case 5:
        return {
          department: isRu ? 'Лаборатория стандартов промышленной продукции' : isUz ? 'Sanoat mahsulotlari standartlari laboratoriyasi' : 'Industrial Product Standards Labs',
          timeRequired: isRu ? '3-7 Рабочих дней' : isUz ? '3-7 Ish kuni' : '3-7 Business Days',
          checks: isRu 
            ? ['Стресс-тестирование партий', 'Химический анализ состава', 'Тест на опасные вещества', 'Акустическая и тепловая сертификация'] 
            : isUz 
              ? ['Partiyalar bo‘yicha stress-testlar', 'Kimyoviy tarkib tahlili', 'Xavfli moddalar borligini tekshirish', 'Akustik va issiqlik sertifikati'] 
              : ['Batch stress testing', 'Chemical composition analysis', 'Hazardous materials test', 'Acoustic / thermal resistance certification']
        };
      case 6:
        return {
          department: isRu ? 'Комитет по регуляторным сертификациям' : isUz ? 'Sertifikatlashtirish qo‘mitasi' : 'Regulatory Certifications Committee',
          timeRequired: isRu ? '1-2 Рабочих дня' : isUz ? '1-2 Ish kuni' : '1-2 Business Days',
          checks: isRu 
            ? ['Валидация качества ISO 9001', 'Экологический контроль ISO 14001', 'Проверка подлинности ГОСТ', 'Соответствие экспортным стандартам CE / EAC'] 
            : isUz 
              ? ['ISO 9001 sifat tizimini tasdiqlash', 'ISO 14001 ekologik nazorat', 'Davlat standartlari haqiqiyligini tekshirish', 'Eksport CE / EAC sertifikatlari mosligi'] 
              : ['ISO 9001 quality validation', 'ISO 14001 ecology control', 'GOST (state standard) authenticity checks', 'Export CE / EAC clearance matching']
        };
      case 7:
        return {
          department: isRu ? 'Совет по управлению рисками и активами' : isUz ? 'Moliyaviy xatarlar va aktivlarni boshqarish kengashi' : 'Risk Management & Liquid Asset Board',
          timeRequired: isRu ? '2 Рабочих дня' : isUz ? '2 Ish kuni' : '2 Business Days',
          checks: isRu 
            ? ['Проверка ликвидности оборотного капитала', 'Анализ банковских гарантий', 'Рейтинг торгового кредита', 'Оценка страховых обязательств'] 
            : isUz 
              ? ['Aylanma mablag‘lar likvidligini tekshirish', 'Bank kafolati xatlarini tahlil qilish', 'Savdo krediti reytingini tekshirish', 'Sug‘urta majburiyatlarini tasdiqlash'] 
              : ['Working capital liquidity check', 'Bank letter of guarantee review', 'Trade credit ratings check', 'Insurance liability validation']
        };
      case 8:
        return {
          department: isRu ? 'Реестр корпоративных споров' : isUz ? 'Korporativ nizolar reyestri' : 'Corporate Relations & Dispute Registry',
          timeRequired: isRu ? '1-2 Рабочих дня' : isUz ? '1-2 Ish kuni' : '1-2 Business Days',
          checks: isRu 
            ? ['Поиск судебных процессов', 'История выполнения контрактов', 'Оценка доли клиентских споров', 'Опросы партнеров B2B/B2G'] 
            : isUz 
              ? ['Sud nizolarini qidirish', 'Shartnomalarni bajarish tarixi', 'Mijozlar bilan nizolar ulushini tekshirish', 'B2B/B2G hamkorlar o‘rtasida so‘rovnomalar'] 
              : ['Litigation and court search', 'Historical contract delivery rates', 'Customer dispute ratio check', 'B2B/B2G partner surveys']
        };
      case 9:
        return {
          department: isRu ? 'Группа по контролю госзакупок' : isUz ? 'Davlat xaridlarini nazorat qilish guruhi' : 'State Procurement Guidelines Team',
          timeRequired: isRu ? '1 Рабочий день' : isUz ? '1 Ish kuni' : '1 Business Day',
          checks: isRu 
            ? ['Проверка на сговор при торгах', 'Логи реестров государственных закупок', 'Соблюдение правил честной торговли', 'Аудит тендерных стандартов'] 
            : isUz 
              ? ['Kelishib olingan savdolarni tekshirish', 'Davlat xaridlari reyestrlari jurnallari', 'Halol savdo qoidalariga rioya qilish', 'Tender standartlari auditi'] 
              : ['Anti-collusion compliance check', 'Public procurement registry logs', 'Fair trade policy compliance', 'Tender standards audit']
        };
      case 10:
        return {
          department: isRu ? 'Центр национальной безопасности' : isUz ? 'Milliy xavfsizlik boshqaruv markazi' : 'National Security Command Center',
          timeRequired: isRu ? '1 Рабочий день' : isUz ? '1 Ish kuni' : '1 Business Day',
          checks: isRu 
            ? ['Итоговое подписание с двойной подписью', 'Выдача криптографического сертификата доверия', 'Включение в доверенный реестр Sof Xarid', 'Активация защищенных API-ключей'] 
            : isUz 
              ? ['Ikki tomonlama yakuniy imzo', 'Kriptografik ishonch sertifikatini berish', 'Sof Xarid ishonchli reyestriga kiritish', 'Xavfsiz API kalitlarini faollashtirish'] 
              : ['Double-signature final signoff', 'Cryptographic verification seal issuance', 'Sof Xarid trusted register inclusion', 'Secure API keys activation']
        };
      default:
        return {
          department: isRu ? 'Общий совет' : isUz ? 'Umumiy kengash' : 'General Board',
          timeRequired: 'N/A',
          checks: []
        };
    }
  };

  const currentDetails = getStepDetails(activeStep, i18n.language);
  const currentStep = VERIFICATION_STEPS.find((s) => s.level === activeStep);

  const isRu = i18n.language === 'ru';
  const isUz = i18n.language === 'uz';

  const auditLayerText = isRu 
    ? `УРОВЕНЬ ПРОВЕРКИ ${activeStep} ИЗ 10` 
    : isUz 
      ? `TEKSHIRUV BOSQICHI ${activeStep} / 10` 
      : `AUDIT LAYER ${activeStep} OF 10`;

  const securedText = isRu 
    ? "100% ЗАЩИЩЕНО" 
    : isUz 
      ? "100% XAVFSIZ" 
      : "100% SECURED";

  const checkpointLabel = isRu 
    ? "Обязательные требования" 
    : isUz 
      ? "Majburiy talablar" 
      : "Mandatory Checkpoints";

  const durationLabel = isRu 
    ? "Ожидаемое время:" 
    : isUz 
      ? "Kutilayotgan vaqt:" 
      : "Estimated duration:";

  const spotCheckText = isRu
    ? "Одобренные заводы проходят ежемесячные случайные точечные проверки на местах."
    : isUz
      ? "Tasdiqlangan zavodlar har oyda kutilmagan to'liq tekshiruvlardan o'tadilar."
      : "Approved plants undergo monthly random verification spot-checks.";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Steps List Timeline - Left Column */}
      <div className="lg:col-span-7 space-y-3">
        {VERIFICATION_STEPS.map((step) => {
          const isCompleted = step.level < activeStep;
          const isActive = step.level === activeStep;
          
          return (
            <motion.div
              key={step.level}
              whileHover={{ x: 4 }}
              onClick={() => setActiveStep(step.level)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                isActive
                  ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white border-slate-200/60 hover:border-blue-400 text-slate-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Step number badge */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
                  isActive
                    ? 'bg-white text-blue-600'
                    : isCompleted
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-slate-100 text-slate-500'
                }`}>
                  {isCompleted ? <Check size={16} /> : step.level}
                </div>

                <div className="flex flex-col">
                  <span className={`text-sm font-semibold tracking-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {t(step.titleKey)}
                  </span>
                  <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                    {step.securityRating}
                  </span>
                </div>
              </div>

              {/* Icon Indicator */}
              <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-500/30 text-white' : 'text-slate-400'}`}>
                <IconRenderer name={step.iconName} size={18} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Panel - Right Column */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#2563EB]" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                {auditLayerText}
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-bold">
                {securedText}
              </span>
            </div>

            <div className="flex items-center space-x-3.5 mb-5">
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600">
                {currentStep ? <IconRenderer name={currentStep.iconName} size={28} /> : <ShieldCheck size={28} />}
              </div>
              <div className="flex flex-col">
                <h4 className="font-display text-lg font-bold text-slate-900 tracking-tight">
                  {currentStep ? t(currentStep.titleKey) : ''}
                </h4>
                <span className="text-xs text-slate-400">
                  {currentDetails.department}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {currentStep ? t(currentStep.descKey) : ''}
            </p>

            {/* Checklists */}
            <div className="space-y-4 border-t border-slate-100 pt-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                {checkpointLabel}
              </span>

              <ul className="space-y-3">
                {currentDetails.checks.map((check, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metadata info */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>{durationLabel}</span>
              <span className="font-semibold text-slate-700">{currentDetails.timeRequired}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Trust Card footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 flex items-center space-x-3"
        >
          <Award size={24} className="text-emerald-500 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              {t('verification_page.footer')}
            </span>
            <span className="text-[11px] text-slate-500">
              {spotCheckText}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
