
export interface GroceryItem {
  id: string;
  imageSrc: string;
  price: number;
  name: string;
  description: string;
  category: string;
}

export const premiumCollectionData: GroceryItem[] = [
  {
    id: "1",
    imageSrc: "/assets/poundo.jpg",
    price: 229.96,
    name: "Poundo Yam Flour",
    description: "Premium quality, smooth-stretching yam flour. Perfectly milled to deliver the authentic taste and texture of traditional pounded yam without the stress.",
    category: "Food items",
  },
  {
    id: "2",
    imageSrc: "/assets/pap.jpg",
    price: 329.96,
    name: "OGI (Akamu)",
    description: "Traditional wet-milled fermented corn starch. Silky smooth, naturally tangy, and processed under strict hygienic conditions for a comforting breakfast meal.",
    category: "Grocery",
  },
  {
    id: "3",
    imageSrc: "/assets/maggi.jpg",
    price: 169.99,
    name: "Star Maggi",
    description: "The classic, aromatic seasoning cubes packed with rich culinary depth. An essential flavor foundation for authentic stews, soups, and jollof rice dishes.",
    category: "Seasoning",
  },
  {
    id: "4",
    imageSrc: "/assets/indomie.jpg",
    price: 169.99,
    name: "Indomie Instant Noodles",
    description: "The ultimate quick-cook comfort food. Infused with a distinct blend of aromatic savory spices for a delicious, satisfying taste profile ready in minutes.",
    category: "Grocery",
  },
  {
    id: "5",
    imageSrc: "/assets/malt.jpg",
    price: 169.99,
    name: "Maltina Classic",
    description: "A rich, smooth, and nourishing non-alcoholic malt drink. Packed with essential vitamins and minerals to deliver absolute refreshment with every sip.",
    category: "Drinks",
  },
  {
    id: "6",
    imageSrc: "/assets/oha.jpg",
    price: 169.99,
    name: "Oha Leaf (Dried)",
    description: "Carefully air-dried Oha leaves that completely retain their rich earthy aroma and nutritional integrity. Ideal for preparing authentic, traditional Oha soup.",
    category: "Food items",
  },
];