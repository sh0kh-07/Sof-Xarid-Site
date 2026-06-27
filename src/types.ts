export interface Product {
  id: string;
  nameKey: string; // Dynamic i18n key or simple text (we will support fallback to direct name if not translation key)
  name: string; // Hardcoded default for easy displaying
  nameRu: string;
  nameUz: string;
  category: string;
  manufacturerId: string;
  manufacturerName: string;
  price: number;
  minOrder: string;
  minOrderRu: string;
  minOrderUz: string;
  deliveryTime: number; // in days
  location: string;
  locationRu: string;
  locationUz: string;
  image: string;
  isVerified: boolean;
  rating: number;
  specifications: Record<string, string>;
  specificationsRu: Record<string, string>;
  specificationsUz: Record<string, string>;
}

export interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  factoryPhoto: string;
  description: string;
  descriptionRu: string;
  descriptionUz: string;
  country: string;
  countryRu: string;
  countryUz: string;
  location: string;
  employees: number;
  established: number;
  annualCapacity: string;
  annualCapacityRu: string;
  annualCapacityUz: string;
  certificates: string[];
  verificationLevel: number; // 1-10
  rating: number;
  featuredProductIds: string[];
}

export interface Category {
  id: string;
  key: string; // Translation key
  iconName: string; // Lucide icon name
  count: number;
  gradient: string;
}

export interface VerificationStep {
  level: number;
  titleKey: string;
  descKey: string;
  iconName: string;
  securityRating: string;
}
