// collection
export interface GroceryItem {
  id: string;
  imageSrc: string;
  price: number;
  name: string;
  description: string;
  category: string;
}
// market category
export interface MarketCategory {
  id: number;
  title: string;
  badge: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  priority?: boolean;
}
// trending product
export interface Product {
  id: number;
  name: string;
  image: string;
}
// menuList Sidebar
export interface SubCategory {
  category_id: number;
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  subCategories?: SubCategory[];
}

// FAQ
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProductCategory {
  id: number;
  parent_id: number | null;
  name: string;
  slug: string;
  image?: string;
}

export interface ProductItem {
  id: number;
  name: string;
  price: number;

  image?: string;
  image_url?: string;
  thumbnail?: string;

  category_id?: number;

  category?: ProductCategory;

  slug?: string;

  description?: string;
  short_description?: string;

  average_rating?: number;
  reviews_count?: number;

  effective_price?: number;
  sale_price?: number | null;

  product_type?: string;

  featured?: boolean;

  in_stock?: boolean;
  stock?: number;

  status?: string;

  sku?: string;

  brand?: unknown;

  gallery?: string[];
  images?: unknown[];

  tags?: string[];

  wholesale_enabled?: boolean;
  wholesale_min_qty?: number;
  wholesale_price?: number | null;

  weight?: number | null;
  dimensions?: unknown;

  created_at?: string;
  updated_at?: string;
}