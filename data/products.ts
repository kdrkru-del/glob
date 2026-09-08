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
    slug: "vietnam-arabica-green-washed-screen-16-18",
    name: "Vietnam Green Arabica — Washed Screen 16/18",
    category: "Coffee",
    origin: "Vietnam",
    image: coffeeImage,
    short: "Washed Vietnamese Arabica for roasters, specialty programs and wholesale supply.",
    specs: [
      { label: "Coffee", value: "Arabica" },
      { label: "Format", value: "Green beans" },
      { label: "Processing", value: "Washed" },
      { label: "Screen", value: "16 / 18" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Green beans"],
    packaging: ["Bulk bags", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-roasted-robusta-100",
    name: "Vietnam Robusta 100% — Roasted / Ground",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "100% Vietnamese Robusta supplied as roasted whole beans or ground coffee.",
    specs: [
      { label: "Blend", value: "100% Robusta" },
      { label: "Roast", value: "On specification" },
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
    slug: "vietnam-roasted-arabica-100",
    name: "Vietnam Arabica 100% — Roasted / Ground",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "100% Vietnamese Arabica supplied as roasted whole beans or ground coffee.",
    specs: [
      { label: "Blend", value: "100% Arabica" },
      { label: "Roast", value: "On specification" },
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
    slug: "vietnam-coffee-blend-arabica-80-robusta-20",
    name: "Coffee Blend — 80% Arabica / 20% Robusta",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Medium-roast Arabica-forward blend available as whole beans or ground coffee.",
    specs: [
      { label: "Arabica", value: "80%" },
      { label: "Robusta", value: "20%" },
      { label: "Roast", value: "Medium" },
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
    slug: "vietnam-coffee-blend-arabica-20-robusta-80",
    name: "Coffee Blend — 20% Arabica / 80% Robusta",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Robusta-forward commercial blend available as roasted whole beans or ground coffee.",
    specs: [
      { label: "Arabica", value: "20%" },
      { label: "Robusta", value: "80%" },
      { label: "Roast", value: "On specification" },
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
    name: "Custom Arabica / Robusta Coffee Blend",
    category: "Coffee",
    origin: "Vietnam",
    image: roastedCoffeeImage,
    short: "Custom Arabica and Robusta ratio, roast profile, grind and packaging for B2B and private-label projects.",
    specs: [
      { label: "Blend", value: "Custom Arabica / Robusta ratio" },
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
    slug: "vietnam-black-pepper-500gl",
    name: "Vietnam Black Pepper — Whole 500 g/L",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Whole Vietnamese black pepper for importers, food producers and wholesale distribution.",
    specs: [
      { label: "Pepper", value: "Black" },
      { label: "Format", value: "Whole" },
      { label: "Density", value: "500 g/L" },
      { label: "Supply", value: "B2B bulk" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Whole pepper"],
    packaging: ["Bulk sacks", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-black-pepper-550gl",
    name: "Vietnam Black Pepper — Whole 550 g/L",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Whole Vietnamese black pepper at 550 g/L density for B2B export supply.",
    specs: [
      { label: "Pepper", value: "Black" },
      { label: "Format", value: "Whole" },
      { label: "Density", value: "550 g/L" },
      { label: "Supply", value: "B2B bulk" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Whole pepper"],
    packaging: ["Bulk sacks", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-black-pepper-570gl",
    name: "Vietnam Black Pepper — Whole 570 g/L",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Higher-density whole Vietnamese black pepper for import and food-production programs.",
    specs: [
      { label: "Pepper", value: "Black" },
      { label: "Format", value: "Whole" },
      { label: "Density", value: "570 g/L" },
      { label: "Supply", value: "B2B bulk" }
    ],
    moq: "1 metric ton",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Whole pepper"],
    packaging: ["Bulk sacks", "Buyer specification"],
    featured: true
  },
  {
    slug: "vietnam-ground-black-pepper",
    name: "Vietnam Black Pepper — Ground",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Ground Vietnamese black pepper for food manufacturing, wholesale and private-label supply.",
    specs: [
      { label: "Pepper", value: "Black" },
      { label: "Format", value: "Ground" },
      { label: "Grind", value: "Buyer specification" },
      { label: "Private label", value: "Available" }
    ],
    moq: "By specification",
    availability: "Made to order",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Ground pepper"],
    packaging: ["Bulk", "Food-service", "OEM / private label"],
    featured: true
  },
  {
    slug: "vietnam-white-pepper",
    name: "Vietnam White Pepper",
    category: "Pepper",
    origin: "Vietnam",
    image: pepperImage,
    short: "Vietnamese white pepper supplied subject to current grade and availability confirmation.",
    specs: [
      { label: "Pepper", value: "White" },
      { label: "Format", value: "Whole / ground on request" },
      { label: "Grade", value: "Confirm with quotation" },
      { label: "Supply", value: "B2B" }
    ],
    moq: "By specification",
    availability: "On request",
    incoterms: ["EXW", "FOB", "CIF"],
    requestFormats: ["Whole pepper", "Ground pepper"],
    packaging: ["Bulk", "Buyer specification", "OEM / private label"],
    featured: true
  }
];

export const featuredProducts = products.filter((product) => product.featured);
