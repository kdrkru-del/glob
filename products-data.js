/**
 * Globerion Group B2B Catalog Data
 * Designed for easy migration to headless CMS / REST API in Stage 2.
 */

(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.GLOBERION_CATALOG = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const CATEGORIES = [
    {
      id: "coffee",
      slug: "coffee",
      name: {
        en: "Coffee",
        ru: "Кофе",
        vi: "Cà phê"
      },
      tagline: {
        en: "Vietnam Robusta & Specialty Arabica",
        ru: "Вьетнамская робуста и спешелти арабика",
        vi: "Robusta và Arabica đặc sản Việt Nam"
      },
      shortDesc: {
        en: "Green beans, roasted beans, ground coffee, and private label blends sourced directly from Dak Lak and Lam Dong plantations.",
        ru: "Зеленый и жареный кофе, молотый кофе и авторские бленды напрямую с плантаций Даклака и Ламдонга.",
        vi: "Cà phê nhân xanh, cà phê rang xay và các dòng blend xuất khẩu trực tiếp từ Đắk Lắk và Lâm Đồng."
      },
      image: "assets/products/vietnam-green-coffee.jpg",
      subcategories: [
        { id: "green-coffee", slug: "green-coffee", name: { en: "Green Coffee", ru: "Зеленый кофе", vi: "Cà phê nhân" } },
        { id: "roasted-coffee", slug: "roasted-coffee", name: { en: "Roasted Coffee", ru: "Жареный кофе", vi: "Cà phê rang" } },
        { id: "coffee-blends", slug: "coffee-blends", name: { en: "Coffee Blends", ru: "Кофейные бленды", vi: "Cà phê Blend" } },
        { id: "ground-coffee", slug: "ground-coffee", name: { en: "Ground Coffee", ru: "Молотый кофе", vi: "Cà phê bột" } },
        { id: "instant-coffee", slug: "instant-coffee", name: { en: "Instant Coffee", ru: "Растворимый кофе", vi: "Cà phê hòa tan" } }
      ]
    },
    {
      id: "spices",
      slug: "spices",
      name: {
        en: "Spices",
        ru: "Специи и пряности",
        vi: "Gia vị"
      },
      tagline: {
        en: "Black Pepper & Cinnamon",
        ru: "Черный перец и корица",
        vi: "Hồ tiêu và quế xuất khẩu"
      },
      shortDesc: {
        en: "High-density black pepper (FAQ / Clean 500-550 g/l) and split cassia cinnamon selected for industrial and spice processors.",
        ru: "Черный перец высокой плотности (500–550 г/л) и расколотая корица кассия для пищевых и упаковочных производств.",
        vi: "Hồ tiêu đen dung trọng cao (500–550 g/l) và quế chẻ, quế ống xuất khẩu."
      },
      image: "assets/products/vietnam-black-pepper.jpg",
      subcategories: [
        { id: "black-pepper", slug: "black-pepper", name: { en: "Black Pepper", ru: "Черный перец", vi: "Tiêu đen" } },
        { id: "cinnamon", slug: "cinnamon", name: { en: "Cinnamon", ru: "Корица", vi: "Quế" } }
      ]
    },
    {
      id: "cashew",
      slug: "cashew",
      name: {
        en: "Nuts & Cashew",
        ru: "Орехи и кешью",
        vi: "Hạt điều & Các loại hạt"
      },
      tagline: {
        en: "Binh Phuoc Premium Cashew",
        ru: "Премиальный кешью из Биньфыок",
        vi: "Hạt điều chất lượng cao Bình Phước"
      },
      shortDesc: {
        en: "Export grades W240, W320, LP, and roasted salted cashew packed in vacuum bags or bulk master cartons.",
        ru: "Экспортные сорта кешью W240, W320, LP в вакуумной упаковке или коробках для пищевых производств и ритейла.",
        vi: "Hạt điều xuất khẩu tiêu chuẩn W240, W320, LP đóng gói chân không hoặc thùng carton."
      },
      image: "assets/products/vietnam-nuts-dried.jpg",
      subcategories: [
        { id: "cashew", slug: "cashew", name: { en: "Cashew", ru: "Кешью", vi: "Hạt điều" } }
      ]
    },
    {
      id: "dried-fruits",
      slug: "dried-fruits",
      name: {
        en: "Dried Fruits",
        ru: "Сушеные фрукты",
        vi: "Trái cây sấy"
      },
      tagline: {
        en: "Tropical Soft-Dried Fruits",
        ru: "Тропические сушеные фрукты",
        vi: "Trái cây nhiệt đới sấy dẻo"
      },
      shortDesc: {
        en: "Low-sugar soft-dried Keo and Cat Chu mango, dragon fruit, and passion fruit packed for bulk wholesale and private label.",
        ru: "Сушеное манго сортов Кео и Катчу, питахайя и маракуйя с низким содержанием сахара для опта и Private Label.",
        vi: "Xoài sấy dẻo ít đường, thanh long và chanh leo sấy xuất khẩu cho thị trường quốc tế."
      },
      image: "assets/products/vietnam-dried-fruits.jpg",
      subcategories: [
        { id: "dried-mango", slug: "dried-mango", name: { en: "Dried Mango", ru: "Сушеное манго", vi: "Xoài sấy dẻo" } }
      ]
    },
    {
      id: "coconut",
      slug: "coconut",
      name: {
        en: "Coconut Products",
        ru: "Кокосовая продукция",
        vi: "Sản phẩm từ dừa"
      },
      tagline: {
        en: "Ben Tre Coconut Processing",
        ru: "Продукция из кокоса из провинции Бенче",
        vi: "Sản phẩm dừa chế biến Bến Tre"
      },
      shortDesc: {
        en: "High-fat desiccated coconut, extra virgin coconut oil, and coconut milk for confectionery and food manufacturers.",
        ru: "Кокосовая стружка высокой жирности, масло первого отжима и кокосовое молоко для кондитерских производств.",
        vi: "Cơm dừa sấy béo cao, dầu dừa tinh khiết và nước cốt dừa cho ngành công nghiệp thực phẩm."
      },
      image: "assets/products/vietnam-shelf-stable-food.jpg",
      subcategories: [
        { id: "desiccated-coconut", slug: "desiccated-coconut", name: { en: "Desiccated Coconut", ru: "Кокосовая стружка", vi: "Cơm dừa sấy" } },
        { id: "coconut-oil", slug: "coconut-oil", name: { en: "Coconut Oil", ru: "Кокосовое масло", vi: "Dầu dừa" } }
      ]
    }
  ];

  const PRODUCTS = [
    {
      id: "vietnam-robusta-screen-16",
      slug: "vietnam-robusta-screen-16",
      name: {
        en: "Vietnam Robusta Screen 16",
        ru: "Вьетнамская робуста Screen 16",
        vi: "Cà phê Robusta Việt Nam Sàng 16"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Green Coffee",
      subcategorySlug: "green-coffee",
      origin: "Dak Lak, Central Highlands, Vietnam",
      originShort: "Dak Lak, Vietnam",
      image: "assets/products/vietnam-green-coffee.jpg",
      price: "3.80",
      priceMode: "indicative", // indicative | fixed | request
      unit: "kg",
      moq: "1x20ft FCL (~19.2 MT)",
      featured: true,
      specifications: [
        { label: { en: "Screen Size", ru: "Размер зерна", vi: "Kích cỡ sàng" }, value: "Screen 16 (6.3mm min 90%)" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 12.5%" },
        { label: { en: "Black & Broken", ru: "Черные и битые", vi: "Đen vỡ" }, value: "Max 5.0%" },
        { label: { en: "Foreign Matter", ru: "Примеси", vi: "Tạp chất" }, value: "Max 0.5%" }
      ],
      description: {
        en: "Commercial Grade 2 clean green Robusta coffee from the volcanic plateau of Dak Lak. Clean cup, bold chocolate notes, suitable for high-volume instant coffee and commercial espresso blends.",
        ru: "Коммерческий зеленый кофе робуста Grade 2 с вулканического плато Даклак. Плотное тело, насыщенные шоколадные тона, идеален для растворимого кофе и коммерческих эспрессо-смесей.",
        vi: "Cà phê Robusta nhân sống loại 2 chế biến sạch từ vùng cao nguyên Đắk Lắk. Thể chất dày, vị đắng sô-cô-la rõ nét, phù hợp chế biến cà phê hòa tan và blend espresso."
      }
    },
    {
      id: "vietnam-robusta-screen-18",
      slug: "vietnam-robusta-screen-18",
      name: {
        en: "Vietnam Robusta Screen 18",
        ru: "Вьетнамская робуста Screen 18",
        vi: "Cà phê Robusta Việt Nam Sàng 18"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Green Coffee",
      subcategorySlug: "green-coffee",
      origin: "Lam Dong / Dak Lak, Vietnam",
      originShort: "Lam Dong, Vietnam",
      image: "assets/products/vietnam-green-coffee.jpg",
      price: "4.10",
      priceMode: "fixed", // "From $4.10/kg"
      unit: "kg",
      moq: "1x20ft FCL (~19.2 MT)",
      featured: true,
      specifications: [
        { label: { en: "Screen Size", ru: "Размер зерна", vi: "Kích cỡ sàng" }, value: "Screen 18 (7.1mm min 90%)" },
        { label: { en: "Processing", ru: "Обработка", vi: "Phương pháp sơ chế" }, value: "Wet Polished / Cleaned" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 12.5%" },
        { label: { en: "Black & Broken", ru: "Черные и битые", vi: "Đen vỡ" }, value: "Max 2.0%" }
      ],
      description: {
        en: "Grade 1 premium green Robusta, wet polished to remove silver skin. Exceptional visual uniformity, minimal defects, delivering deep crema and smooth nutty profile.",
        ru: "Премиальная зеленая робуста Grade 1 мокрой полировки. Высокая визуальная калибровка, минимум дефектов, густая крема и глубокий орехово-карамельный профиль.",
        vi: "Robusta xuất khẩu loại 1 đánh bóng ướt loại bỏ sạch vỏ lụa. Độ đồng đều cao, tỷ lệ lỗi thấp, tạo lớp crema dày và hương thơm ngậy đặc trưng."
      }
    },
    {
      id: "vietnam-green-arabica",
      slug: "vietnam-green-arabica",
      name: {
        en: "Vietnam Green Arabica",
        ru: "Вьетнамская зеленая арабика",
        vi: "Cà phê Arabica Nhân Cầu Đất"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Green Coffee",
      subcategorySlug: "green-coffee",
      origin: "Cau Dat, Da Lat (1,500m+ ASL), Vietnam",
      originShort: "Da Lat, Vietnam",
      image: "assets/products/vietnam-green-coffee.jpg",
      price: null,
      priceMode: "request", // Price on request
      unit: "kg",
      moq: "5 MT (LCL or FCL)",
      featured: true,
      specifications: [
        { label: { en: "Altitude", ru: "Высота произрастания", vi: "Độ cao" }, value: "1,500 – 1,650 m" },
        { label: { en: "Variety", ru: "Разновидность", vi: "Giống" }, value: "Catimor / Bourbon" },
        { label: { en: "Processing", ru: "Обработка", vi: "Phương pháp sơ chế" }, value: "Full Washed / Sun-dried" },
        { label: { en: "Cupping Score", ru: "Оценка SCA", vi: "Điểm Cupping" }, value: "82 – 84+ SCA" }
      ],
      description: {
        en: "Highland Arabica grown in the misty mountain terroir of Cau Dat, Da Lat. Bright citric acidity, delicate floral aromas, sweet caramel body, and balanced clean aftertaste.",
        ru: "Высокогорная арабика из горного региона Каудат (Далат). Свежая цитрусовая кислинка, цветочные ноты, сладковатое карамельное тело и чистый сбалансированный финиш.",
        vi: "Arabica trồng tại vùng núi Cầu Đất, Đà Lạt với khí hậu mát mẻ quanh năm. Hương hoa thanh nhã, độ chua sáng tinh tế và hậu vị ngọt caramel kéo dài."
      }
    },
    {
      id: "roasted-robusta",
      slug: "roasted-robusta",
      name: {
        en: "Roasted Robusta",
        ru: "Жареная робуста",
        vi: "Cà phê Robusta Rang Hạt"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Roasted Coffee",
      subcategorySlug: "roasted-coffee",
      origin: "Central Highlands, Vietnam",
      originShort: "Dak Lak, Vietnam",
      image: "assets/products/vietnam-roasted-coffee.jpg",
      price: "5.20",
      priceMode: "indicative",
      unit: "kg",
      moq: "500 kg (Private Label available)",
      featured: true,
      specifications: [
        { label: { en: "Roast Profile", ru: "Профиль обжарки", vi: "Mức độ rang" }, value: "Medium-Dark (Full City)" },
        { label: { en: "Format", ru: "Формат", vi: "Quy cách" }, value: "Whole Bean or Custom Ground" },
        { label: { en: "Packaging", ru: "Упаковка", vi: "Đóng gói" }, value: "1kg / 500g Valve foil bags" },
        { label: { en: "Shelf Life", ru: "Срок хранения", vi: "Hạn sử dụng" }, value: "18 months" }
      ],
      description: {
        en: "Expertly roasted Vietnamese Robusta beans crafted for bold traditional drip (Phin), commercial espresso, and instant extract production. Rich dark chocolate and roasted nut flavor.",
        ru: "Профессионально обжаренная вьетнамская робуста для традиционного фильтра, крепкого эспрессо и HoReCa. Густой вкус горького шоколада и жареного фундука.",
        vi: "Robusta rang mộc chuẩn gu Việt và quốc tế, thích hợp pha phin truyền thống hoặc phối trộn máy espresso công nghiệp."
      }
    },
    {
      id: "roasted-arabica",
      slug: "roasted-arabica",
      name: {
        en: "Roasted Arabica",
        ru: "Жареная арабика",
        vi: "Cà phê Arabica Rang Mộc"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Roasted Coffee",
      subcategorySlug: "roasted-coffee",
      origin: "Da Lat Highlands, Vietnam",
      originShort: "Da Lat, Vietnam",
      image: "assets/products/vietnam-roasted-coffee.jpg",
      price: "7.80",
      priceMode: "fixed",
      unit: "kg",
      moq: "300 kg",
      featured: true,
      specifications: [
        { label: { en: "Roast Profile", ru: "Профиль обжарки", vi: "Mức độ rang" }, value: "Medium Roast (City+)" },
        { label: { en: "Flavor Profile", ru: "Дескрипторы", vi: "Hương vị" }, value: "Citrus, Caramel, Cocoa" },
        { label: { en: "Packaging", ru: "Упаковка", vi: "Đóng gói" }, value: "Degassing valve bags / Kraft" },
        { label: { en: "Private Label", ru: "Private Label", vi: "Nhãn riêng" }, value: "OEM packaging supported" }
      ],
      description: {
        en: "100% Arabica roasted on modern drum roasters to highlight the natural sweetness and vibrant aroma of Da Lat beans. Clean, aromatic, and low bitterness.",
        ru: "100% арабика бережной обжарки, подчеркивающая природную сладость и насыщенный аромат высокогорного урожая Далата. Бархатистый вкус с мягкой цитрусовой нотой.",
        vi: "100% Arabica rang trên hệ thống máy hiện đại giúp tối ưu hương quả chín, caramel và hạn chế vị chát đắng gắt."
      }
    },
    {
      id: "arabica-robusta-blend",
      slug: "arabica-robusta-blend",
      name: {
        en: "Arabica & Robusta Blend",
        ru: "Бленд арабики и робусты",
        vi: "Cà phê Phối Trộn Arabica & Robusta"
      },
      category: "Coffee",
      categorySlug: "coffee",
      subcategory: "Coffee Blends",
      subcategorySlug: "coffee-blends",
      origin: "Lam Dong & Dak Lak, Vietnam",
      originShort: "Vietnam Highlands",
      image: "assets/products/vietnam-roasted-coffee.jpg",
      price: null,
      priceMode: "request",
      unit: "kg",
      moq: "500 kg (Custom ratios available)",
      featured: true,
      specifications: [
        { label: { en: "Standard Ratio", ru: "Базовая пропорция", vi: "Tỷ lệ chuẩn" }, value: "70% Robusta / 30% Arabica" },
        { label: { en: "Customization", ru: "Кастомизация", vi: "Tùy chỉnh" }, value: "Any ratio upon client spec" },
        { label: { en: "Target Profile", ru: "Целевой профиль", vi: "Ứng dụng" }, value: "Italian Espresso / Coffee Chains" },
        { label: { en: "Certification", ru: "Сертификация", vi: "Chứng nhận" }, value: "Phytosanitary, Certificate of Origin" }
      ],
      description: {
        en: "Balanced signature blend marrying the intense body and golden crema of highland Robusta with the fragrant acidity and caramel notes of Da Lat Arabica. Fully customizable for retail and HoReCa.",
        ru: "Сбалансированный фирменный бленд, объединяющий плотное тело и золотистую крема робусты с ароматом и мягкой кислинкой арабики. Любые пропорции по ТЗ заказчика под Private Label.",
        vi: "Dòng sản phẩm phối trộn hoàn hảo giữa thể chất đậm đà của Robusta và hương thơm tinh tế của Arabica, phù hợp cho chuỗi cà phê và bán lẻ quốc tế."
      }
    },
    {
      id: "vietnam-black-pepper-500gl",
      slug: "vietnam-black-pepper-500gl",
      name: {
        en: "Vietnam Black Pepper 500-550 g/l",
        ru: "Черный перец Вьетнам 500-550 г/л",
        vi: "Hồ tiêu đen Việt Nam 500-550 g/l"
      },
      category: "Spices",
      categorySlug: "spices",
      subcategory: "Black Pepper",
      subcategorySlug: "black-pepper",
      origin: "Dak Lak / Binh Phuoc, Vietnam",
      originShort: "Central Highlands, Vietnam",
      image: "assets/products/vietnam-black-pepper.jpg",
      price: "6.40",
      priceMode: "indicative",
      unit: "kg",
      moq: "1x20ft FCL (~15 MT)",
      featured: false,
      specifications: [
        { label: { en: "Bulk Density", ru: "Плотность", vi: "Dung trọng" }, value: "500 g/l or 550 g/l min" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 12.5%" },
        { label: { en: "Foreign Matter", ru: "Примеси", vi: "Tạp chất" }, value: "Max 0.5% (Clean / Machine Clean)" },
        { label: { en: "Grade", ru: "Стандарт", vi: "Tiêu chuẩn" }, value: "FAQ or Spiral Cleaned" }
      ],
      description: {
        en: "Sun-dried natural black pepper berries with high piperine content, pungent aroma, and high bulk density. Machine cleaned and fumigated for international spice packing.",
        ru: "Натуральный черный перец естественной сушки с высоким содержанием пиперина и выраженным ароматом. Машинная очистка, калибровка и подготовка экспортных документов.",
        vi: "Hạt tiêu đen phơi khô tự nhiên, hàm lượng piperine cao, hạt chắc mẩy được làm sạch bằng máy đạt chuẩn xuất khẩu."
      }
    },
    {
      id: "vietnam-cassia-cinnamon",
      slug: "vietnam-cassia-cinnamon",
      name: {
        en: "Vietnamese Cassia Cinnamon",
        ru: "Вьетнамская корица кассия",
        vi: "Quế Thanh & Quế Ống Việt Nam"
      },
      category: "Spices",
      categorySlug: "spices",
      subcategory: "Cinnamon",
      subcategorySlug: "cinnamon",
      origin: "Yen Bai Province, Vietnam",
      originShort: "Yen Bai, Vietnam",
      image: "assets/products/vietnam-black-pepper.jpg",
      price: null,
      priceMode: "request",
      unit: "kg",
      moq: "5 MT",
      featured: false,
      specifications: [
        { label: { en: "Volatile Oil", ru: "Эфирные масла", vi: "Hàm lượng tinh dầu" }, value: "Min 2.5% – 4.0%" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 13.5%" },
        { label: { en: "Formats", ru: "Форматы", vi: "Quy cách" }, value: "Split, Stick, Cigarette, Powder" },
        { label: { en: "Thickness", ru: "Толщина коры", vi: "Độ dày" }, value: "1.2 mm – 2.5 mm" }
      ],
      description: {
        en: "High-grade Yen Bai cassia bark known for sweet pungent aroma and exceptional volatile oil content. Available as split bark, rolled sticks, or finely milled powder.",
        ru: "Отборная корица кассия из провинции Йенбай с высоким содержанием эфирных масел. Доступна в виде расколотой коры, сигарет (трубочек) или тонкого помола.",
        vi: "Quế Yên Bái nổi tiếng với hàm lượng tinh dầu cao, vị ngọt cay đậm đà, được sơ chế theo quy cách quế chẻ, quế sáo và quế bột."
      }
    },
    {
      id: "raw-cashew-w320",
      slug: "raw-cashew-w320",
      name: {
        en: "Raw Cashew Kernels W320",
        ru: "Ядра кешью сорт W320",
        vi: "Hạt Điều Nhân Trắng W320"
      },
      category: "Nuts",
      categorySlug: "cashew",
      subcategory: "Cashew",
      subcategorySlug: "cashew",
      origin: "Binh Phuoc, Vietnam",
      originShort: "Binh Phuoc, Vietnam",
      image: "assets/products/vietnam-nuts-dried.jpg",
      price: "7.20",
      priceMode: "indicative",
      unit: "kg",
      moq: "1x20ft FCL (~16 MT)",
      featured: false,
      specifications: [
        { label: { en: "Kernel Grade", ru: "Сорт ядер", vi: "Tiêu chuẩn hạt" }, value: "White Wholes W320 (300–320/lb)" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 5.0%" },
        { label: { en: "Broken Kernels", ru: "Битые ядра", vi: "Tỷ lệ vỡ" }, value: "Max 5.0%" },
        { label: { en: "Packaging", ru: "Упаковка", vi: "Đóng gói" }, value: "Vacuum PE bag in carton (50 lbs / 22.68 kg)" }
      ],
      description: {
        en: "Premium whole white cashew kernels from Binh Phuoc, the cashew capital of Vietnam. Crisp texture, creamy taste, processed under strict HACCP and ISO food safety protocols.",
        ru: "Цельные отборные ядра кешью сорта W320 из провинции Биньфыок. Сливочный вкус, хрустящая текстура, контроль качества по стандарту AFI и упаковка в вакуумные мешки.",
        vi: "Hạt điều nhân trắng nguyên hạt tiêu chuẩn W320 nguồn gốc Bình Phước. Chế biến trên dây chuyền HACCP/ISO, đóng gói chân không bảo quản tươi ngon."
      }
    },
    {
      id: "soft-dried-mango",
      slug: "soft-dried-mango",
      name: {
        en: "Soft-Dried Mango (Low Sugar)",
        ru: "Сушеное манго (с пониженным сахаром)",
        vi: "Xoài Sấy Dẻo Xuất Khẩu"
      },
      category: "Dried Fruits",
      categorySlug: "dried-fruits",
      subcategory: "Dried Mango",
      subcategorySlug: "dried-mango",
      origin: "Dong Thap / Mekong Delta, Vietnam",
      originShort: "Mekong Delta, Vietnam",
      image: "assets/products/vietnam-dried-fruits.jpg",
      price: "5.90",
      priceMode: "fixed",
      unit: "kg",
      moq: "1,000 kg",
      featured: false,
      specifications: [
        { label: { en: "Fruit Variety", ru: "Сорт манго", vi: "Giống xoài" }, value: "Keo Mango / Cat Chu" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "18% – 22%" },
        { label: { en: "Sugar Content", ru: "Содержание сахара", vi: "Hàm lượng đường" }, value: "Low sugar (< 5%) or No added sugar" },
        { label: { en: "Shelf Life", ru: "Срок хранения", vi: "Hạn sử dụng" }, value: "12 months" }
      ],
      description: {
        en: "Tender, vibrant orange dried mango slices produced with gentle low-temperature drying technology. Retains natural vitamins, rich tropical taste, and pliable chewy texture.",
        ru: "Ломтики спелого манго сортов Кео и Катчу бережной низкотемпературной сушки. Сохраняет натуральный яркий цвет, природные витамины и мягкую нежную текстуру.",
        vi: "Xoài sấy dẻo công nghệ sấy nhiệt độ thấp giữ trọn màu vàng tươi, hương thơm tự nhiên và độ dẻo mềm đặc trưng không bị xơ cứng."
      }
    },
    {
      id: "desiccated-coconut-high-fat",
      slug: "desiccated-coconut-high-fat",
      name: {
        en: "Desiccated Coconut High Fat",
        ru: "Кокосовая стружка высокой жирности",
        vi: "Cơm Dừa Sấy Béo Cao"
      },
      category: "Coconut",
      categorySlug: "coconut",
      subcategory: "Desiccated Coconut",
      subcategorySlug: "desiccated-coconut",
      origin: "Ben Tre, Vietnam",
      originShort: "Ben Tre, Vietnam",
      image: "assets/products/vietnam-shelf-stable-food.jpg",
      price: "2.30",
      priceMode: "indicative",
      unit: "kg",
      moq: "1x20ft FCL (~12.5 MT)",
      featured: false,
      specifications: [
        { label: { en: "Fat Content", ru: "Жирность", vi: "Hàm lượng béo" }, value: "Min 63% – 65%" },
        { label: { en: "Granulation", ru: "Помол", vi: "Độ mịn" }, value: "Fine or Medium Grade" },
        { label: { en: "Moisture", ru: "Влажность", vi: "Độ ẩm" }, value: "Max 3.0%" },
        { label: { en: "Packaging", ru: "Упаковка", vi: "Đóng gói" }, value: "3-ply Kraft bag with inner PE (25 kg / 50 kg)" }
      ],
      description: {
        en: "Pure white high-fat desiccated coconut produced from freshly selected Ben Tre coconuts. Sweet nutty flavor, free from chemicals, sulfur, and foreign flavors.",
        ru: "Белоснежная кокосовая стружка высокой жирности (63%+) из свежих кокосов Бенче. Без химических добавок и диоксида серы, для кондитерских и хлебопекарных предприятий.",
        vi: "Cơm dừa sấy béo cao dạng hạt mịn hoặc vừa sản xuất từ dừa tươi Bến Tre, thơm ngậy tự nhiên không chứa chất bảo quản."
      }
    }
  ];

  return {
    CATEGORIES: CATEGORIES,
    PRODUCTS: PRODUCTS,
    getFeaturedProducts: function () {
      return PRODUCTS.filter(function (p) { return p.featured; });
    },
    getProductsByCategory: function (categorySlug) {
      if (!categorySlug || categorySlug === "all") return PRODUCTS;
      return PRODUCTS.filter(function (p) {
        return p.categorySlug === categorySlug || (categorySlug === "cashew" && p.categorySlug === "cashew");
      });
    },
    getProductBySlug: function (slug) {
      return PRODUCTS.find(function (p) { return p.slug === slug; });
    },
    getCategoryBySlug: function (slug) {
      return CATEGORIES.find(function (c) { return c.slug === slug; });
    }
  };
});
