import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Search, MapPin, Building2, Calendar, Users,
  Award, ShieldCheck, ArrowUpRight, ChevronDown, ChevronUp
} from 'lucide-react';
import { MANUFACTURERS, PRODUCTS } from '../data';
import { Manufacturer, Product } from '../types';

export default function Manufacturers() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Фильтрация производителей
  const filteredManufacturers = MANUFACTURERS.filter((man) =>
    man.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    man.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Получение локализованных полей
  const getDesc = (man: Manufacturer) => {
    const lang = i18n.language;
    if (lang === 'ru') return man.descriptionRu;
    if (lang === 'uz') return man.descriptionUz;
    return man.description;
  };

  const getCapacity = (man: Manufacturer) => {
    const lang = i18n.language;
    if (lang === 'ru') return man.annualCapacityRu;
    if (lang === 'uz') return man.annualCapacityUz;
    return man.annualCapacity;
  };

  const getCountry = (man: Manufacturer) => {
    const lang = i18n.language;
    if (lang === 'ru') return man.countryRu;
    if (lang === 'uz') return man.countryUz;
    return man.country;
  };

  const getProductName = (product: Product) => {
    const lang = i18n.language;
    if (lang === 'ru') return product.nameRu;
    if (lang === 'uz') return product.nameUz;
    return product.name;
  };

  // Товары выбранного производителя
  const getProductsForManufacturer = (manufacturerId: string): Product[] =>
    PRODUCTS.filter(p => p.manufacturerId === manufacturerId);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Заголовок */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          AUDITED MANUFACTURERS DIRECTORY
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-3">
          {t('manufacturers.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {t('manufacturers.subtitle')}
        </p>
      </div>

      {/* Поиск */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('manufacturers.search')}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-blue-500 shadow-sm text-slate-900"
          />
        </div>
      </div>

      {/* Сетка производителей */}
      {filteredManufacturers.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredManufacturers.map((man) => {
            const isExpanded = expandedId === man.id;
            const products = getProductsForManufacturer(man.id);

            return (
              <motion.div
                layout
                key={man.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Баннер */}
                <div className="relative h-48 bg-slate-100">
                  <img
                    src={man.factoryPhoto}
                    alt={man.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center space-x-4">
                    <img
                      src={man.logo}
                      alt={`${man.name} logo`}
                      className="w-12 h-12 rounded-xl object-cover bg-white p-0.5 border border-white/20 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h2 className="font-display text-lg font-bold text-white tracking-tight leading-none mb-1">
                        {man.name}
                      </h2>
                      <span className="text-[10px] text-slate-300 flex items-center">
                        <MapPin size={10} className="mr-0.5 text-blue-400" />
                        {man.location}, {getCountry(man)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-500/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center uppercase shadow-sm">
                    <ShieldCheck size={12} className="mr-1" />
                    LEVEL {man.verificationLevel} AUDITED
                  </div>
                </div>

                {/* Тело карточки */}
                <div className="p-6 space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getDesc(man)}
                  </p>

                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center">
                        <Users size={10} className="mr-1 text-slate-400" />
                        {t('manufacturers.employees')}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {man.employees} +
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center">
                        <Calendar size={10} className="mr-1 text-slate-400" />
                        {t('manufacturers.established')}
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {man.established}
                      </span>
                    </div>
                    <div className="flex flex-col col-span-1">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center">
                        <Building2 size={10} className="mr-1 text-slate-400" />
                        Capacity
                      </span>
                      <span className="text-xs font-semibold text-slate-800 truncate" title={getCapacity(man)}>
                        {getCapacity(man).split('of')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">
                      Verified Regulatory Certificates
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {man.certificates.map((cert) => (
                        <span
                          key={cert}
                          className="inline-flex items-center text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200/20"
                        >
                          <Award size={10} className="mr-1 text-blue-500" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>


                {/* Раскрывающийся блок с товарами */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pt-2 border-t border-slate-100 bg-white"
                  >
                    {products.length > 0 ? (
                      <ul className="space-y-3">
                        {products.map((product) => (
                          <li
                            key={product.id}
                            className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0"
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={product.image}
                                alt={getProductName(product)}
                                className="w-12 h-12 object-cover rounded-lg"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <p className="text-sm font-medium text-slate-800">
                                  {getProductName(product)}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {product.category} • {product.minOrder}
                                </p>
                              </div>
                            </div>
                            <span className="text-sm font-bold text-blue-600">
                              ${product.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-400 text-center py-4">
                        No products available for this manufacturer.
                      </p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
          <p className="text-sm text-slate-400">No factory profiles match your search filter.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
}