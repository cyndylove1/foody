import { Category, FaqItem, GroceryItem, MarketCategory, Product } from "./types";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
//  collections
export const premiumCollectionData: GroceryItem[] = [
  {
    id: "1",
    imageSrc: "/assets/poundo.jpg",
    price: 229.96,
    name: "Poundo Yam Flour",
    description:
      "Premium quality, smooth-stretching yam flour. Perfectly milled to deliver the authentic taste and texture of traditional pounded yam without the stress.",
    category: "Food items",
  },
  {
    id: "2",
    imageSrc: "/assets/pap.jpg",
    price: 329.96,
    name: "OGI (Akamu)",
    description:
      "Traditional wet-milled fermented corn starch. Silky smooth, naturally tangy, and processed under strict hygienic conditions for a comforting breakfast meal.",
    category: "Grocery",
  },
  {
    id: "3",
    imageSrc: "/assets/maggi.jpg",
    price: 169.99,
    name: "Star Maggi",
    description:
      "The classic, aromatic seasoning cubes packed with rich culinary depth. An essential flavor foundation for authentic stews, soups, and jollof rice dishes.",
    category: "Seasoning",
  },
  {
    id: "4",
    imageSrc: "/assets/indomie.jpg",
    price: 169.99,
    name: "Indomie Instant Noodles",
    description:
      "The ultimate quick-cook comfort food. Infused with a distinct blend of aromatic savory spices for a delicious, satisfying taste profile ready in minutes.",
    category: "Grocery",
  },
  {
    id: "5",
    imageSrc: "/assets/malt.jpg",
    price: 169.99,
    name: "Maltina Classic",
    description:
      "A rich, smooth, and nourishing non-alcoholic malt drink. Packed with essential vitamins and minerals to deliver absolute refreshment with every sip.",
    category: "Drinks",
  },
  {
    id: "6",
    imageSrc: "/assets/oha.jpg",
    price: 169.99,
    name: "Oha Leaf (Dried)",
    description:
      "Carefully air-dried Oha leaves that completely retain their rich earthy aroma and nutritional integrity. Ideal for preparing authentic, traditional Oha soup.",
    category: "Food items",
  },
];
// Market Collection
export const categories: MarketCategory[] = [
  {
    id: 1,
    title: "Frozen Foods",
    badge: "Chilled Proteins",
    imageSrc: "/assets/fish.jpg",
    imageAlt: "Frozen fish, chicken, beef, turkey, and other chilled proteins",
    buttonText: "Find Your Fit",
    priority: true,
  },
  {
    id: 2,
    title: "Seasoning, Spices and Dry Foods",
    badge: "Essential Spices",
    imageSrc: "/assets/ogbono.png",
    imageAlt:
      "Ogbono, crayfish, pepper, curry, thyme, locust beans, and other African dry food ingredients",
    buttonText: "Get Your Pack",
  },
  {
    id: 3,
    title: "Seasoning, Spices",
    badge: "Seasoning",
    imageSrc: "/assets/openyi.png",
    imageAlt:
      "Traditional African seasonings, spices, bouillon cubes, and cooking condiments",
    buttonText: "Shop Seasonings",
  },
  {
    id: 4,
    title: "Seafoods",
    badge: "Smoked Fish",
    imageSrc: "/assets/smokedfish.jpg",
    imageAlt:
      "Smoked fish, stockfish, dried fish, prawns, and other premium seafood",
    buttonText: "Shop Seafoods",
  },
];
// Trending Products
export const products: Product[] = [
  { id: 1, name: "Spinach", image: "/assets/spinach.jpg" },
  { id: 2, name: "Frozen Fish", image: "/assets/fish.jpg" },
  { id: 3, name: "Noodles (Indomie)", image: "/assets/indomie.jpg" },
  { id: 4, name: "Black Soap", image: "/assets/dudu.jpg" },
  { id: 5, name: "turning Stick", image: "/assets/stick.jpg" },
  { id: 6, name: "pepper", image: "/assets/pepper.jpg" },
  { id: 7, name: "Egusi (melon)", image: "/assets/egusi.jpg" },
  { id: 8, name: "Ogi (pap)", image: "/assets/pap.jpg" },
];

// Footer links
export const socialLinks = [
  {
    id: "twitter",
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    id: "facebook",
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    id: "linkedin",
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
];

// links for footer section
export const categoryLinks = [
  { name: "Seasoning", href: "/category/seasoning" },
  { name: "Spices", href: "/category/spices" },
  { name: "Food Items", href: "/shop/food-items" },
  { name: "Grocery", href: "/shop/grocery" },
  { name: "Beauty", href: "/shop/beauty" },
  { name: "Frozen Foods", href: "/category/frozen-foods" },
];

export const legalLinks = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Term and Condition", href: "/legal/terms" },
  { name: "Refund Policy", href: "/legal/refunds" },
];

export const helpLinks = [
  { name: "How To Order", href: "/help/how-to-order" },
  { name: "Track Order", href: "/help/track-order" },
  { name: "Return & Exchanges", href: "/help/returns" },
  { name: "Help", href: "/help" },
  { name: "Contact Us", href: "/contact" },
];

// Customer Feedback
export const ratings = [
  { stars: 5, count: 11 },
  { stars: 4, count: 8 },
  { stars: 3, count: 5 },
  { stars: 2, count: 3 },
  { stars: 1, count: 1 },
];

export const comments = [
  {
    rating: 4,
    title: "It was okay",
    text: "I liked the texture",
    date: "12-01-2025",
  },
  {
    rating: 2,
    title: "Too light",
    text: "The material looks too light. Can be worn for big occasions",
    date: "10-08-2025",
  },
  {
    rating: 3,
    title: "It was okay",
    text: "I liked the texture",
    date: "12-01-2025",
  },
  {
    rating: 3,
    title: "It was okay",
    text: "I liked the texture",
    date: "12-01-2025",
  },
];
//  MenuList sidebar
export const categoriesData: Category[] = [
  {
    name: "Soups",
    subCategories: [
      { id: 2, name: "Seasonings", slug: "seasonings" },
      { id: 3, name: "Spices", slug: "spices" },
      { id: 4, name: "Dry Food", slug: "dry-food" },
      { id: 5, name: "Utensils", slug: "utensils" },
    ],
  },
  {
    name: "Drinks & Snacks",
    subCategories: [
      { id: 8, name: "Drinks", slug: "drinks" },
      { id: 7, name: "Snack", slug: "snack" },
      { id: 25, name: "Candy", slug: "candy" },
    ],
  },
  {
    name: "Frozen Foods",
    subCategories: [
      { id: 11, name: "Meat & Poultry", slug: "meat-poultry" },
      { id: 12, name: "Fish", slug: "fish" },
      { id: 13, name: "Vegetables", slug: "vegetables" },
    ],
  },
  {
    name: "Grocery",
    subCategories: [
      { id: 15, name: "Grain", slug: "grain" },
      { id: 16, name: "Flours", slug: "flours" },
      { id: 14, name: "Cooking Oils", slug: "cooking-oil" },
      { id: 18, name: "Fresh Produce", slug: "fresh-produce" },
      { id: 19, name: "Beverages & Cereals", slug: "beverages-cereals" },
      { id: 17, name: "Baked Foods", slug: "baked-foods" },
    ],
  },
  {
    name: "Beauty & Health",
    subCategories: [
      { id: 123, name: "Personal Care", slug: "personal-care" },
      { id: 23, name: "Hair", slug: "hair" },
      { id: 20, name: "Apparel", slug: "apparel" },
    ],
  }
]

// Category
export const productsMock = [
  {
    id: "1",
    name: "Scotch Bonnet Pepper",
    imageSrc: "/assets/bonnet.jpg",
    originalPrice: 7.99,
    currentPrice: 5.99,
    colors: [
      { hex: "#dc2626", name: "Red" },
      { hex: "#ea580c", name: "Orange" },
      { hex: "#ca8a04", name: "Yellow" },
    ],
  },
  {
    id: "2",
    name: "Maggi",
    imageSrc: "/assets/maggi.jpg",
    originalPrice: 10.5,
    currentPrice: 8.99,
    colors: [{ hex: "#ca8a04", name: "Gold" }],
  },
  {
    id: "3",
    name: "Poundo Yam Flour",
    imageSrc: "/assets/poundo.jpg",
    originalPrice: 55.0,
    currentPrice: 51.0,
    colors: [{ hex: "#fef08a", name: "Off-White" }],
  },
  {
    id: "4",
    name: "Pap (Ogi)",
    imageSrc: "/assets/pap.jpg",
    originalPrice: 2.5,
    currentPrice: 1.99,
    colors: [{ hex: "#78350f", name: "Brown" }],
  },
];

// FAQ
export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What types of items can I find on MotherLand International?",
    answer:
      "MotherLand International is your one-stop online destination for premium authentic seasonings, traditional soup ingredients (like authentic soup bases and thickeners), everyday grocery essentials, and natural beauty products sourced to keep you feeling vibrant inside and out.",
  },
  {
    id: 2,
    question:
      "Are your seasoning blends and soup ingredients completely authentic?",
    answer:
      "Yes, absolutely! We take pride in sourcing our seasonings, flours, and soup ingredients directly from local producers and trusted suppliers to guarantee the traditional flavors and premium quality your kitchen deserves.",
  },
  {
    id: 3,
    question:
      "How should I store my MotherLand International grocery purchases?",
    answer:
      "We recommend keeping dry goods, ground seasonings, and flour blends in a cool, dry place away from direct sunlight, ideally inside airtight containers. Fresh ingredients or specialized pastes should be refrigerated immediately upon arrival.",
  },
  {
    id: 4,
    question:
      "Can I bundle grocery items and beauty products in a single delivery?",
    answer:
      "You sure can! You can seamlessly checkout with your favorite kitchen ingredients and personal care beauty essentials in one cart. Everything is carefully packaged together so your groceries and beauty products arrive safely at your doorstep.",
  },
];