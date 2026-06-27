import { Product, Manufacturer, Category, VerificationStep } from './types';

export const CATEGORIES: Category[] = [
  { id: 'construction', key: 'categories.construction', iconName: 'HardHat', count: 12, gradient: 'from-blue-600 to-indigo-800' },
  { id: 'electrical', key: 'categories.electrical', iconName: 'Zap', count: 8, gradient: 'from-amber-500 to-orange-600' },
  { id: 'industrial', key: 'categories.industrial', iconName: 'Cpu', count: 9, gradient: 'from-cyan-500 to-blue-600' },
  { id: 'furniture', key: 'categories.furniture', iconName: 'Layers', count: 6, gradient: 'from-purple-500 to-indigo-600' },
  { id: 'medical', key: 'categories.medical', iconName: 'Activity', count: 5, gradient: 'from-emerald-500 to-teal-600' },
  { id: 'agriculture', key: 'categories.agriculture', iconName: 'Leaf', count: 11, gradient: 'from-green-600 to-emerald-700' },
  { id: 'technology', key: 'categories.technology', iconName: 'Monitor', count: 7, gradient: 'from-slate-700 to-slate-900' },
  { id: 'machinery', key: 'categories.machinery', iconName: 'Wrench', count: 10, gradient: 'from-rose-500 to-red-600' },
  { id: 'transport', key: 'categories.transport', iconName: 'Truck', count: 4, gradient: 'from-sky-500 to-blue-600' },
  { id: 'office', key: 'categories.office', iconName: 'Briefcase', count: 14, gradient: 'from-teal-500 to-cyan-600' }
];

export const MANUFACTURERS: Manufacturer[] = [
  {
    id: 'm1',
    name: 'Tashkent Furniture Factory',
    logo: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=150&q=80',
    factoryPhoto: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    description: 'Leading manufacturer of modern office and home furniture in Central Asia. Specializes in ergonomic desks, chairs, and modular storage systems.',
    descriptionRu: 'Ведущий производитель современной офисной и домашней мебели в Центральной Азии. Специализируется на эргономичных столах, стульях и модульных системах хранения.',
    descriptionUz: 'Markaziy Osiyodagi yetakchi zamonaviy ofis va uy mebellari ishlab chiqaruvchisi. Ergonomic stollar, stullar va modulli saqlash tizimlariga ixtisoslashgan.',
    country: 'Uzbekistan',
    countryRu: 'Узбекистан',
    countryUz: 'O‘zbekiston',
    location: 'Tashkent, Sergeli district',
    employees: 320,
    established: 2005,
    annualCapacity: '120,000 units of furniture',
    annualCapacityRu: '120 000 единиц мебели в год',
    annualCapacityUz: 'Yillik 120 000 dona mebel',
    certificates: ['ISO 9001:2015', 'FSC Certified', 'Eco-Friendly Standard'],
    verificationLevel: 10,
    rating: 4.8,
    featuredProductIds: ['p1']
  },
  {
    id: 'm2',
    name: 'Uzbek Tech Assembling',
    logo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80',
    factoryPhoto: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    description: 'Official assembler and distributor of high-performance desktop computers, laptops, and peripherals for educational and corporate sectors.',
    descriptionRu: 'Официальный сборщик и дистрибьютор высокопроизводительных компьютеров, ноутбуков и периферии для образования и бизнеса.',
    descriptionUz: 'Ta’lim va korporativ sektor uchun yuqori unumli shaxsiy kompyuterlar, noutbuklar va periferiya mahsulotlarining rasmiy yig‘uvchisi va distribyutori.',
    country: 'Uzbekistan',
    countryRu: 'Узбекистан',
    countryUz: 'O‘zbekiston',
    location: 'Tashkent, Yakkasaray district',
    employees: 180,
    established: 2015,
    annualCapacity: '25,000 PCs and laptops',
    annualCapacityRu: '25 000 ПК и ноутбуков в год',
    annualCapacityUz: 'Yillik 25 000 kompyuter va noutbuk',
    certificates: ['ISO 9001', 'CE', 'RoHS Compliant'],
    verificationLevel: 10,
    rating: 4.9,
    featuredProductIds: ['p2']
  },
  {
    id: 'm3',
    name: 'Fergana Paper Mill',
    logo: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=150&q=80',
    factoryPhoto: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=800&q=80',
    description: 'One of the largest producers of office paper, notebooks, and stationery in Uzbekistan. Supplies premium A4 paper and custom print materials.',
    descriptionRu: 'Один из крупнейших производителей офисной бумаги, тетрадей и канцтоваров в Узбекистане. Поставляет бумагу формата А4 премиум-класса и полиграфическую продукцию.',
    descriptionUz: 'O‘zbekistondagi eng yirik ofis qog‘ozi, daftar va ish yuritish buyumlari ishlab chiqaruvchilaridan biri. Premium A4 qog‘oz va bosma materiallar yetkazib beradi.',
    country: 'Uzbekistan',
    countryRu: 'Узбекистан',
    countryUz: 'O‘zbekiston',
    location: 'Fergana, Fergana region',
    employees: 400,
    established: 1992,
    annualCapacity: '150,000 tons of paper products',
    annualCapacityRu: '150 000 тонн бумажной продукции в год',
    annualCapacityUz: 'Yillik 150 000 tonna qog‘oz mahsulotlari',
    certificates: ['ISO 14001', 'FSC Certified', 'Eco-Label'],
    verificationLevel: 10,
    rating: 4.7,
    featuredProductIds: ['p3']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    nameKey: 'products.p1.name',
    name: 'Ergonomic Office Desk (160x80 cm)',
    nameRu: 'Эргономичный офисный стол (160x80 см)',
    nameUz: 'Ergonomic ofis stoli (160x80 sm)',
    category: 'furniture',
    manufacturerId: 'm1',
    manufacturerName: 'Tashkent Furniture Factory',
    price: 320,
    minOrder: '1 Unit',
    minOrderRu: '1 шт',
    minOrderUz: '1 ta',
    deliveryTime: 10,
    location: 'Tashkent, Sergeli district',
    locationRu: 'г. Ташкент, Сергелийский район',
    locationUz: 'Toshkent, Sergeli tumani',
    image: 'https://cervany.com/cdn/shop/files/Standing_desk_oak_veneer_3_600x.jpg',
    isVerified: true,
    rating: 4.8,
    specifications: {
      'Material': 'Laminated chipboard (E1 class) + Steel frame',
      'Dimensions': '160 x 80 x 75 cm',
      'Load capacity': 'Up to 150 kg',
      'Color': 'Walnut / White (customizable)',
      'Assembly': 'Includes instruction manual and tools'
    },
    specificationsRu: {
      'Материал': 'Ламинированная ДСП (класс E1) + стальной каркас',
      'Габариты': '160 x 80 x 75 см',
      'Нагрузка': 'До 150 кг',
      'Цвет': 'Орех / Белый (на выбор)',
      'Сборка': 'Инструкция и инструменты в комплекте'
    },
    specificationsUz: {
      'Material': 'Laminirlangan DSP (E1 klassi) + po‘lat karkas',
      'O‘lchamlari': '160 x 80 x 75 sm',
      'Yuk ko‘tara olish': '150 kg gacha',
      'Rangi': 'Yong‘oq / Oq (tanlov bo‘yicha)',
      'Yig‘ish': 'Ko‘rsatma va asboblar qo‘shilgan'
    }
  },
  {
    id: 'p2',
    nameKey: 'products.p2.name',
    name: 'Desktop PC (Intel Core i5, 16GB RAM, 512GB SSD)',
    nameRu: 'Настольный ПК (Intel Core i5, 16 ГБ ОЗУ, 512 ГБ SSD)',
    nameUz: 'Kompyuter (Intel Core i5, 16GB RAM, 512GB SSD)',
    category: 'electronics',
    manufacturerId: 'm2',
    manufacturerName: 'Uzbek Tech Assembling',
    price: 850,
    minOrder: '1 Unit',
    minOrderRu: '1 шт',
    minOrderUz: '1 ta',
    deliveryTime: 5,
    location: 'Tashkent, Yakkasaray district',
    locationRu: 'г. Ташкент, Яккасарайский район',
    locationUz: 'Toshkent, Yakkasaroy tumani',
    image: 'https://cdn.mediapark.uz/imgs/800aacab-93f2-48d4-a119-1c0de1127cba_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-1_1300.webp',
    isVerified: true,
    rating: 4.9,
    specifications: {
      'Processor': 'Intel Core i5-12400 (6 cores, 12 threads)',
      'RAM': '16 GB DDR4 3200 MHz',
      'Storage': '512 GB NVMe SSD',
      'Graphics': 'Intel UHD Graphics 730 (upgradable)',
      'OS': 'Windows 11 Pro (pre-installed)',
      'Warranty': '3 years (onsite service)'
    },
    specificationsRu: {
      'Процессор': 'Intel Core i5-12400 (6 ядер, 12 потоков)',
      'ОЗУ': '16 ГБ DDR4 3200 МГц',
      'Накопитель': '512 ГБ NVMe SSD',
      'Графика': 'Intel UHD Graphics 730 (возможна замена)',
      'ОС': 'Windows 11 Pro (предустановлена)',
      'Гарантия': '3 года (выездное обслуживание)'
    },
    specificationsUz: {
      'Protsessor': 'Intel Core i5-12400 (6 yadro, 12 oqim)',
      'RAM': '16 GB DDR4 3200 MHz',
      'Xotira': '512 GB NVMe SSD',
      'Grafika': 'Intel UHD Graphics 730 (yangilanish mumkin)',
      'OT': 'Windows 11 Pro (oldindan o‘rnatilgan)',
      'Kafolat': '3 yil (joyiga xizmat ko‘rsatish)'
    }
  },
  {
    id: 'p3',
    nameKey: 'products.p3.name',
    name: 'Premium A4 Copy Paper (80 g/m², 500 sheets)',
    nameRu: 'Офисная бумага А4 премиум-класса (80 г/м², 500 листов)',
    nameUz: 'Premium A4 qog‘oz (80 g/m², 500 varag)',
    category: 'office_supplies',
    manufacturerId: 'm3',
    manufacturerName: 'Fergana Paper Mill',
    price: 8,
    minOrder: '10 Boxes (5,000 sheets)',
    minOrderRu: '10 коробок (5 000 листов)',
    minOrderUz: '10 quti (5 000 varaq)',
    deliveryTime: 3,
    location: 'Fergana, Fergana region',
    locationRu: 'г. Фергана, Ферганская область',
    locationUz: 'Farg‘ona, Farg‘ona viloyati',
    image: 'https://images.uzum.uz/d50j9c0jsv1neacpdqg0/t_product_540_high.jpg',
    isVerified: true,
    rating: 4.7,
    specifications: {
      'Size': 'A4 (210 x 297 mm)',
      'Grammage': '80 g/m²',
      'Whiteness': 'CIE 160% (extra bright)',
      'Opacity': '≥ 92%',
      'Certifications': 'FSC, Eco-Label, acid-free',
      'Packaging': '500 sheets per ream, 5 reams per box'
    },
    specificationsRu: {
      'Формат': 'А4 (210 x 297 мм)',
      'Плотность': '80 г/м²',
      'Белизна': 'CIE 160% (супербелая)',
      'Непрозрачность': '≥ 92%',
      'Сертификаты': 'FSC, Eco-Label, бескислотная',
      'Упаковка': '500 листов в пачке, 5 пачек в коробке'
    },
    specificationsUz: {
      'O‘lchami': 'A4 (210 x 297 mm)',
      'Zichlik': '80 g/m²',
      'Oqligi': 'CIE 160% (juda yorqin)',
      'Shaffof emaslik': '≥ 92%',
      'Sertifikatlar': 'FSC, Eco-Label, kislotasiz',
      'Qadoqlash': '500 varaq bir o‘ramda, 5 o‘ram bir qutida'
    }
  }
];

export const VERIFICATION_STEPS: VerificationStep[] = [
  {
    level: 1,
    titleKey: 'verification_page.step1_title',
    descKey: 'verification_page.step1_desc',
    iconName: 'FileText',
    securityRating: 'CRITICAL'
  },
  {
    level: 2,
    titleKey: 'verification_page.step2_title',
    descKey: 'verification_page.step2_desc',
    iconName: 'Award',
    securityRating: 'CRITICAL'
  },
  {
    level: 3,
    titleKey: 'verification_page.step3_title',
    descKey: 'verification_page.step3_desc',
    iconName: 'MapPin',
    securityRating: 'MANDATORY'
  },
  {
    level: 4,
    titleKey: 'verification_page.step4_title',
    descKey: 'verification_page.step4_desc',
    iconName: 'Activity',
    securityRating: 'MANDATORY'
  },
  {
    level: 5,
    titleKey: 'verification_page.step5_title',
    descKey: 'verification_page.step5_desc',
    iconName: 'ShieldCheck',
    securityRating: 'HIGH_COMPLIANCE'
  },
  {
    level: 6,
    titleKey: 'verification_page.step6_title',
    descKey: 'verification_page.step6_desc',
    iconName: 'BadgeCheck',
    securityRating: 'HIGH_COMPLIANCE'
  },
  {
    level: 7,
    titleKey: 'verification_page.step7_title',
    descKey: 'verification_page.step7_desc',
    iconName: 'Layers',
    securityRating: 'SECURE_LIQUIDITY'
  },
  {
    level: 8,
    titleKey: 'verification_page.step8_title',
    descKey: 'verification_page.step8_desc',
    iconName: 'HeartHandshake',
    securityRating: 'ESTABLISHED'
  },
  {
    level: 9,
    titleKey: 'verification_page.step9_title',
    descKey: 'verification_page.step9_desc',
    iconName: 'Briefcase',
    securityRating: 'GOVERNMENT_STANDARD'
  },
  {
    level: 10,
    titleKey: 'verification_page.step10_title',
    descKey: 'verification_page.step10_desc',
    iconName: 'Lock',
    securityRating: 'SOF_XARID_SEAL'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Shavkat Karimov',
    roleKey: 'testimonials.role1',
    textKey: 'testimonials.t1',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
    company: 'Ministry of Infrastructure Dev'
  },
  {
    id: 't2',
    name: 'Andrey Smirnov',
    roleKey: 'testimonials.role2',
    textKey: 'testimonials.t2',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    company: 'Metallurgical Industries JV'
  },
  {
    id: 't3',
    name: 'Dilshod Ruziev',
    roleKey: 'testimonials.role3',
    textKey: 'testimonials.t3',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    company: 'UzStroyLogistics Association'
  }
];
