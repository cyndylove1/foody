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
export interface Category {
  name: string;
  subCategories?: SubCategory[];
}
export interface SubCategory {
  name: string;
  slug: string;
}

// FAQ
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

