export type Product = {
  slug: string;
  name: string;
  category: "Coffee" | "Pepper";
  origin: string;
  image: string;
  short: string;
  specs: { label: string; value: string }[];
  moq: string;
  availability: string;
  incoterms: string[];
  requestFormats: string[];
  packaging: string[];
  featured?: boolean;
};

const coffeeImage = "https://globeriongroup.com/assets/products/vietnam-green-coffee.jpg";
const roastedCoffeeImage = "https://globeriongroup.com/assets/products/vietnam-coffee-spices.jpg";
const pepperImage = "https://globeriongroup.com/assets/products/vietnam-black-pepper.jpg";

export const products: Product[] = [
  {
    slug: "vietnam-robusta-green-screen-18",
    name: "Vietnam Green Robusta — Screen 18",
    category: "Coffee",
    origin: "Vietnam",
    image: coffeeImage,
    short: "Green Robusta beans for roasters, importers and wholesale supply.",
    specs: [
      { label: "Coffee", value: "Robusta" },
      { label: "Format", value: "Green beans" },
      { label: "Screen", value: "18" },
      { label: "Moisture", value: "≤ 12.5%" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Green beans"],
    packaging: ["60 kg bags", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-robusta-green-screen-16",
    name: "Vietnam Green Robusta — Screen 16",
    category: "Coffee",
    origin: "Vietnam",
    image: coffeeImage,
    short: "Commercial green Robusta for roasting, blending and wholesale projects.",
    specs: [
      { label: "Coffee", value: "Robusta" },
      { label: "Format", value: "Green beans" },
      { label: "Screen", value: "16" },
      { label: "Moisture", value: "≤ 12.5%" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Green beans"],
    packaging: ["60 kg bags", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-arabica-green",
    name: "Vietnam Green Arabica",
    category: "Coffee",
    origin: "Vietnam",
    image: coffeeImage,
    short: "Vietnamese green Arabica for roasting, blending and wholesale supply.",
    specs: [
      { label: "Coffee", value: "Arabica" },
      { label: "Format", value: "Green beans" },
      { label: "Grade", value: "Confirmed with quotation" },
      { label: "Samples", value: "Available on request" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Green beans"],
    packaging: ["Bulk bags", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-robusta-100-roasted-ground",
    name: "Vietnam Robusta 100% — Roasted / Ground",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "100% Vietnamese Robusta supplied as roasted whole beans or ground coffee.",
    specs: [
      { label: "Blend", value: "100% Robusta" },
      { label: "Roast", value: "Buyer specification" },
      { label: "Formats", value: "Whole bean / ground" },
      { label: "Private label", value: "Available" }
    ],
    moq: "From 500 kg",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Roasted whole bean", "Ground coffee"],
    packaging: ["1 kg bags", "Wholesale packaging", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-arabica-100-roasted-ground",
    name: "Vietnam Arabica 100% — Roasted / Ground",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "100% Vietnamese Arabica supplied as roasted whole beans or ground coffee.",
    specs: [
      { label: "Blend", value: "100% Arabica" },
      { label: "Roast", value: "Buyer specification" },
      { label: "Formats", value: "Whole bean / ground" },
      { label: "Private label", value: "Available" }
    ],
    moq: "From 500 kg",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Roasted whole bean", "Ground coffee"],
    packaging: ["1 kg bags", "Wholesale packaging", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-blend-arabica-80-robusta-20",
    name: "Coffee Blend — 80% Arabica / 20% Robusta",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Arabica-forward coffee blend supplied roasted whole bean or ground.",
    specs: [
      { label: "Arabica", value: "80%" },
      { label: "Robusta", value: "20%" },
      { label: "Roast", value: "Buyer specification" },
      { label: "Formats", value: "Whole bean / ground" }
    ],
    moq: "From 500 kg",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Roasted whole bean", "Ground coffee"],
    packaging: ["1 kg bags", "Wholesale packaging", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-blend-arabica-20-robusta-80",
    name: "Coffee Blend — 20% Arabica / 80% Robusta",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Robusta-forward coffee blend supplied roasted whole bean or ground.",
    specs: [
      { label: "Arabica", value: "20%" },
      { label: "Robusta", value: "80%" },
      { label: "Roast", value: "Buyer specification" },
      { label: "Formats", value: "Whole bean / ground" }
    ],
    moq: "From 500 kg",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Roasted whole bean", "Ground coffee"],
    packaging: ["1 kg bags", "Wholesale packaging", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-custom-arabica-robusta-blend",
    name: "Custom Arabica / Robusta Blend",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Custom Arabica and Robusta ratio, roast profile, grind and packaging for B2B or private-label projects.",
    specs: [
      { label: "Blend", value: "Custom ratio" },
      { label: "Roast", value: "Custom" },
      { label: "Grind", value: "Custom" },
      { label: "Private label", value: "Available" }
    ],
    moq: "From 500 kg",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Roasted whole bean", "Ground coffee"],
    packaging: ["1 kg bags", "Wholesale packaging", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-black-pepper",
    name: "Vietnam Black Pepper",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Vietnamese black pepper for importers, distributors and food-production buyers.",
    specs: [
      { label: "Pepper", value: "Black" },
      { label: "Format", value: "Whole / ground on request" },
      { label: "Grade", value: "Confirmed with quotation" },
      { label: "Supply", value: "B2B bulk / OEM" }
    ],
    moq: "By specification",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Whole pepper", "Ground pepper"],
    packaging: ["Bulk sacks", "Food-service", "Buyer specification", "OEM / private label"],
    featured: true
  }
];

export const featuredProducts = products.filter((product) => product.featured);
