import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Factory, Layers, Award, Shield, Headphones } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  target: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ icon, label, target, suffix, duration = 2000 }: StatItemProps) {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    const step = Math.ceil(end / (totalMiliseconds / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formatCount = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden"
    >
      {/* Decorative colored glow corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -z-10" />

      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {t('stats.system_metric')}
        </span>
      </div>

      <div className="flex items-baseline space-x-0.5">
        <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {formatCount(count)}
        </span>
        <span className="font-display text-2xl font-bold text-blue-600">
          {suffix}
        </span>
      </div>

      <p className="text-sm font-medium text-slate-600 mt-2">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-slate-50/50 border-y border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatedCounter
            icon={<Factory size={22} />}
            label={t('stats.factories')}
            target={500}
            suffix="+"
          />
          <AnimatedCounter
            icon={<Layers size={22} />}
            label={t('stats.products')}
            target={25000}
            suffix="+"
          />
          <AnimatedCounter
            icon={<Award size={22} />}
            label={t('stats.purchases')}
            target={15000}
            suffix="+"
          />
          <AnimatedCounter
            icon={<Shield size={22} />}
            label={t('stats.organizations')}
            target={100}
            suffix="%"
          />
          <AnimatedCounter
            icon={<Headphones size={22} />}
            label={t('stats.support')}
            target={24}
            suffix="/7"
            duration={1000}
          />
        </div>
      </div>
    </section>
  );
}
