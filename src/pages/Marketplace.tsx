import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShieldCheck, MapPin, Tag, ArrowUpDown, ChevronRight, X, Phone, FileText, Send, Building2, CheckCircle, Scale } from 'lucide-react';
import { PRODUCTS, CATEGORIES, MANUFACTURERS } from '../data';
import { Product } from '../types';
import IconRenderer from '../components/IconRenderer';

export default function Marketplace() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  
  // Rfq Simulation State
  const [rfqSuccess, setRfqSuccess] = useState(false);
  const [rfqQuantity, setRfqQuantity] = useState('');
  const [rfqNotes, setRfqNotes] = useState('');

  // Filtering Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    // Search query matches product name or manufacturer name
    const currentLang = i18n.language;
    const productName = currentLang === 'ru' ? product.nameRu : currentLang === 'uz' ? product.nameUz : product.name;
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.manufacturerName.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter matches
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'priceLow') return a.price - b.price;
    if (sortOrder === 'priceHigh') return b.price - a.price;
    return 0; // default order
  });

  const getProductName = (product: Product) => {
    const currentLang = i18n.language;
    if (currentLang === 'ru') return product.nameRu;
    if (currentLang === 'uz') return product.nameUz;
    return product.name;
  };

  const getProductLocation = (product: Product) => {
    const currentLang = i18n.language;
    if (currentLang === 'ru') return product.locationRu;
    if (currentLang === 'uz') return product.locationUz;
    return product.location;
  };

  const getMinOrder = (product: Product) => {
    const currentLang = i18n.language;
    if (currentLang === 'ru') return product.minOrderRu;
    if (currentLang === 'uz') return product.minOrderUz;
    return product.minOrder;
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfqSuccess(true);
    setTimeout(() => {
      setRfqSuccess(false);
      setRfqQuantity('');
      setRfqNotes('');
      setActiveProduct(null);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
          REAL-TIME PROCUREMENT DIRECTORY
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none mb-3">
          {t('marketplace.title')}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {t('marketplace.subtitle')}
        </p>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search bar */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('marketplace.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900"
            />
          </div>

          {/* Category Selector */}
          <div className="md:col-span-3 relative">
            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-800 appearance-none cursor-pointer"
            >
              <option value="all">{t('marketplace.categoryAll')}</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {t(cat.key)}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting */}
          <div className="md:col-span-3 relative">
            <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-800 appearance-none cursor-pointer"
            >
              <option value="default">{t('marketplace.sortBy')}: {t('marketplace.sortDefault')}</option>
              <option value="priceLow">{t('marketplace.sortPriceLow')}</option>
              <option value="priceHigh">{t('marketplace.sortPriceHigh')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Product Thumbnail */}
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={getProductName(product)}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge overlay */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/75 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  {product.category}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white border border-slate-200/50 px-2 py-0.5 rounded-lg text-[10px] font-bold text-slate-800 flex items-center shadow-sm">
                  ⭐ {product.rating}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="space-y-3.5">
                  {/* Manufacturer Info */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="truncate max-w-[150px]">{product.manufacturerName}</span>
                    
                    {/* Level 10 Badge */}
                    <span className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full text-[9px]">
                      <ShieldCheck size={11} className="mr-0.5" />
                      L10 VERIFIED
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-slate-900 tracking-tight leading-snug line-clamp-2">
                    {getProductName(product)}
                  </h3>

                  {/* Pricing and MOQ summary */}
                  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-200/40 rounded-xl">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {t('misc.price')}
                      </span>
                      <span className="text-sm font-extrabold text-blue-600">
                        ${product.price} <span className="text-[10px] text-slate-400 font-normal">/ tn</span>
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        {t('marketplace.minOrder')}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 truncate block">
                        {getMinOrder(product)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center">
                    <MapPin size={12} className="mr-1 text-slate-400" />
                    {getProductLocation(product).split(',')[0]}
                  </span>
                  
                  <button
                    onClick={() => {
                      setRfqSuccess(false);
                      setActiveProduct(product);
                    }}
                    className="inline-flex items-center space-x-1 py-2 px-3.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-sm shadow-blue-500/10 transition-colors cursor-pointer"
                  >
                    <span>{t('marketplace.viewDetails')}</span>
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
          <p className="text-sm text-slate-400">No products matching the selected criteria were found.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg text-xs font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Product Detail & RFQ Modal Popup */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/50 hover:bg-slate-950 text-white shadow cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Left Column: Visuals & Specifications */}
              <div className="w-full md:w-1/2 p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto border-r border-slate-100">
                <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={activeProduct.image}
                    alt={getProductName(activeProduct)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white font-bold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider flex items-center">
                    <ShieldCheck size={11} className="mr-0.5" />
                    Verified Factory Price
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center">
                    <Scale size={18} className="mr-2 text-blue-500" />
                    {t('marketplace.specs')}
                  </h3>
                  
                  {/* Specifications Table */}
                  <div className="space-y-2.5 text-xs">
                    {Object.entries(
                      i18n.language === 'ru' 
                        ? activeProduct.specificationsRu 
                        : i18n.language === 'uz' 
                          ? activeProduct.specificationsUz 
                          : activeProduct.specifications
                    ).map(([specName, specVal]) => (
                      <div key={specName} className="flex justify-between py-2 border-b border-slate-50">
                        <span className="text-slate-400 font-medium">{specName}</span>
                        <span className="text-slate-900 font-semibold text-right max-w-[200px] truncate" title={specVal}>
                          {specVal}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Shipping & logistics indicators */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block mb-0.5">{t('marketplace.deliveryTime')}</span>
                    <span className="font-bold text-slate-800">
                      ~{activeProduct.deliveryTime} {t('marketplace.days')}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block mb-0.5">Origin Country</span>
                    <span className="font-bold text-slate-800">
                      Uzbekistan (Tashkent)
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: RFQ Form Submission Simulator */}
              <div className="w-full md:w-1/2 p-6 md:p-8 bg-slate-50/50 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-[10px] text-blue-600 font-bold tracking-widest uppercase block mb-1">
                    Direct Quotation Gateway
                  </span>
                  <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight">
                    {getProductName(activeProduct)}
                  </h2>
                  <span className="text-xs text-slate-500">
                    Product listed by: <span className="font-bold text-slate-700">{activeProduct.manufacturerName}</span>
                  </span>
                </div>

                {rfqSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-4"
                  >
                    <CheckCircle className="text-emerald-500 mx-auto" size={44} />
                    <h3 className="text-base font-bold text-emerald-800">
                      RFQ Successfully Dispatched
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your commercial quote request was cryptographically sealed and sent directly to the manufacturer's sales planning board. A dedicated account manager will issue a response within 4 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleRfqSubmit} className="space-y-4">
                    <div className="p-4 bg-white border border-slate-200/50 rounded-2xl flex items-center justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Unit Cost Quote</span>
                        <span className="font-display text-2xl font-black text-blue-600">${activeProduct.price}</span>
                      </div>
                      <div className="text-right flex flex-col">
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Est. Subtotal</span>
                        <span className="font-display text-lg font-bold text-slate-800">
                          ${(activeProduct.price * (Number(rfqQuantity) || 1)).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Required Quantity (in Tons)
                      </label>
                      <input
                        type="number"
                        required
                        value={rfqQuantity}
                        onChange={(e) => setRfqQuantity(e.target.value)}
                        placeholder={`Minimum order: ${getMinOrder(activeProduct)}`}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Specific Requirements / Delivery Deadlines
                      </label>
                      <textarea
                        value={rfqNotes}
                        onChange={(e) => setRfqNotes(e.target.value)}
                        placeholder="Request specific lengths, batch chemical test reports, standard ISO delivery criteria, or customs clearance terms..."
                        rows={3}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/15 flex items-center justify-center space-x-2 transition-transform cursor-pointer hover:-translate-y-0.5"
                      >
                        <Send size={15} />
                        <span>Submit Requisition Request</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 text-[10px] text-slate-400 justify-center">
                      <Building2 size={12} />
                      <span>Request is routed to: {activeProduct.manufacturerName} sales HQ</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
