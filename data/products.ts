export type Product = {
  slug: string;
  name: string;
  category: string;
  origin: string;
  image: string;
  short: string;
  specs: { label: string; value: string }[];
  moq: string;
  availability: string;
  incoterms: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "vietnam-robusta-screen-18",
    name: "Vietnam Robusta Green Coffee — Screen 18",
    category: "Coffee",
    origin: "Dak Lak, Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-green-coffee.jpg",
    short: "Export-grade green Robusta for roasters, distributors and private-label projects.",
    specs: [
      { label: "Grade", value: "Screen 18" },
      { label: "Moisture", value: "≤ 12.5%" },
      { label: "Packaging", value: "60 kg bags" },
      { label: "Supply", value: "B2B / bulk" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    featured: true
  },
  {
    slug: "vietnam-robusta-screen-16",
    name: "Vietnam Robusta Green Coffee — Screen 16",
    category: "Coffee",
    origin: "Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-coffee-spices.jpg",
    short: "Commercial green Robusta for roasting, blending and wholesale supply.",
    specs: [
      { label: "Grade", value: "Screen 16" },
      { label: "Format", value: "Green beans" },
      { label: "Packaging", value: "Bulk bags" },
      { label: "Supply", value: "B2B / bulk" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    featured: true
  },
  {
    slug: "vietnam-arabica-green-coffee",
    name: "Vietnam Arabica Green Coffee",
    category: "Coffee",
    origin: "Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-green-coffee.jpg",
    short: "Vietnamese Arabica for specialty, commercial and private-label roasting projects.",
    specs: [
      { label: "Format", value: "Green beans" },
      { label: "Origin", value: "Vietnam" },
      { label: "Packaging", value: "Bulk bags" },
      { label: "Samples", value: "Available by request" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    featured: true
  },
  {
    slug: "vietnam-black-pepper-550gl",
    name: "Vietnam Black Pepper — 550 GL",
    category: "Spices",
    origin: "Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-black-pepper.jpg",
    short: "Whole black pepper for importers, food producers, distributors and repacking.",
    specs: [
      { label: "Density", value: "550 GL" },
      { label: "Format", value: "Whole pepper" },
      { label: "Packaging", value: "Bulk / buyer specification" },
      { label: "Supply", value: "B2B export" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    featured: true
  },
  {
    slug: "vietnam-cashew-kernels",
    name: "Vietnam Cashew Kernels",
    category: "Nuts",
    origin: "Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-nuts-dried.jpg",
    short: "Cashew kernels for wholesale, food-service, retail packing and OEM supply.",
    specs: [
      { label: "Format", value: "Kernels" },
      { label: "Packaging", value: "Vacuum / cartons" },
      { label: "Private label", value: "Available" },
      { label: "Supply", value: "Wholesale" }
    ],
    moq: "By specification",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"]
  },
  {
    slug: "vietnam-dried-mango",
    name: "Vietnam Dried Mango",
    category: "Dried Fruit",
    origin: "Vietnam",
    image: "https://globeriongroup.com/assets/products/vietnam-dried-fruits.jpg",
    short: "Dried mango for distributors, food-service, retail packing and private-label programs.",
    specs: [
      { label: "Format", value: "Dried fruit" },
      { label: "Packaging", value: "Bulk / retail" },
      { label: "Private label", value: "Available" },
      { label: "Samples", value: "Available by request" }
    ],
    moq: "By specification",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"]
  }
];

export const featuredProducts = products.filter((product) => product.featured);
