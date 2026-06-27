import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Grid, ChevronRight, Package, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data';
import IconRenderer from '../components/IconRenderer';

export default function Categories() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCategoryClick = (catId: string) => {
    // Navigate to marketplace and filter by category (or we can pass state / URL queries)
    navigate('/marketplace', { state: { filterCategory: catId } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          CLASSIFIED B2B SECTORS
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-3">
          {t('categories.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {t('categories.subtitle')}
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
            onClick={() => handleCategoryClick(cat.id)}
            className="group relative rounded-2xl bg-white border border-slate-200/60 p-6 flex items-start justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            {/* Top right subtle background indicator count */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-slate-50 rounded-full flex items-end justify-start p-4 text-xs font-black text-slate-200">
              {cat.count}
            </div>

            <div className="flex items-start space-x-4">
              {/* Dynamic colored icon box based on custom gradient */}
              <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${cat.gradient} text-white shadow-lg shadow-blue-500/5`}>
                <IconRenderer name={cat.iconName} size={24} />
              </div>

              <div className="space-y-1 pr-6">
                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {t(cat.key)}
                </h3>
                <span className="text-xs text-slate-400 font-medium flex items-center">
                  <Package size={12} className="mr-1" />
                  {cat.count} verified products listed
                </span>
                
                {/* Simulated description to enrich */}
                <span className="block text-[11px] text-slate-400 pt-1">
                  Direct quotes, factory test sheets, batch clearances.
                </span>
              </div>
            </div>

            {/* Hover arrow circle indicator */}
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-[#2563EB] group-hover:text-white transition-all flex items-center justify-center self-end">
              <ChevronRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Suggestion banner */}
      <div className="mt-16 bg-blue-500/5 border border-blue-500/15 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-1 mb-4 md:mb-0">
          <h4 className="font-display text-base font-bold text-slate-900 tracking-tight">
            Can't find your specific industrial sector?
          </h4>
          <p className="text-xs text-slate-400">
            Our audit officers expand directories daily. Apply to list a custom factory manufacturing category.
          </p>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-950 text-white font-semibold text-xs rounded-xl flex items-center space-x-1.5 transition-all cursor-pointer"
        >
          <span>Request Custom Class Directory</span>
          <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  );
}
