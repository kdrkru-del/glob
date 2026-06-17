document.documentElement.classList.add("js");

const translations = {
  ru: {
    "meta.home.title": "GLOBERION GROUP — премиальный экспорт из Вьетнама",
    "meta.home.description": "GLOBERION GROUP — премиальный экспортный оператор из Вьетнама: сорсинг, контроль качества, документы и международная логистика.",
    "meta.catalog.title": "GLOBERION GROUP — каталог экспортных направлений",
    "meta.catalog.description": "Каталог экспортных направлений GLOBERION GROUP: агро, FMCG, текстиль, товары для дома и промышленная продукция из Вьетнама.",
    "meta.importers.title": "GLOBERION GROUP — решения для импортеров",
    "meta.importers.description": "Сорсинг, проверка поставщиков, образцы, коммерческие условия и сопровождение экспортных поставок из Вьетнама для импортеров.",
    "meta.suppliers.title": "GLOBERION GROUP — сотрудничество с поставщиками Вьетнама",
    "meta.suppliers.description": "Приглашение фабрик, производителей и торговых домов Вьетнама к партнерству в международных экспортных поставках.",
    "meta.logistics.title": "GLOBERION GROUP — логистика из Вьетнама",
    "meta.logistics.description": "Маршруты, FCL, LCL, авиадоставка, консолидация и контроль экспортной отгрузки из Вьетнама.",
    "meta.quality.title": "GLOBERION GROUP — контроль качества поставок",
    "meta.quality.description": "Проверка поставщиков, образцов, партий, упаковки, маркировки и экспортной готовности до отгрузки.",
    "meta.documents.title": "GLOBERION GROUP — документы и compliance",
    "meta.documents.description": "Документальный пакет для экспортных поставок из Вьетнама: invoice, packing list, сертификаты, происхождение и требования рынка.",
    "nav.home": "Главная",
    "nav.importers": "Импортерам",
    "nav.suppliers": "Поставщикам",
    "nav.catalog": "Каталог",
    "nav.logistics": "Логистика",
    "nav.quality": "Контроль",
    "nav.documents": "Документы",
    "nav.contacts": "Контакты",
    "nav.request": "Запросить поставку",
    "hero.eyebrow": "Премиальный экспортный оператор из Вьетнама",
    "hero.lead": "Сопровождаем международные поставки из Вьетнама для компаний, которым важны надежные поставщики, чистые документы, контроль партии и спокойная логистика.",
    "hero.primary": "Обсудить поставку",
    "hero.secondary": "Перейти в каталог",
    "hero.intel.route.label": "Маршрут",
    "hero.intel.route.value": "Вьетнам → ваш рынок",
    "hero.intel.mode.label": "Формат",
    "hero.intel.mode.value": "FCL · LCL · Air",
    "hero.intel.control.label": "Контроль",
    "hero.intel.control.value": "Сорсинг · QC · Docs",
    "prestige.item1.label": "Operating model",
    "prestige.item1.value": "Управление поставкой под ключ",
    "prestige.item1.text": "Единый контур коммуникации, сроков и ответственности.",
    "prestige.item2.label": "Supplier due diligence",
    "prestige.item2.value": "Проверенные производственные площадки",
    "prestige.item2.text": "Отбор фабрик по мощности, качеству и экспортной готовности.",
    "prestige.item3.label": "Trade compliance",
    "prestige.item3.value": "Документы под рынок назначения",
    "prestige.item3.text": "Пакет документов под товар, маршрут и страну импорта.",
    "prestige.item4.label": "Shipment governance",
    "prestige.item4.value": "Контроль сроков и отгрузки",
    "prestige.item4.text": "Производство, инспекция, упаковка и передача перевозчику.",
    "markets.kicker": "Портфель направлений",
    "markets.title": "Экспортные направления под рынок, сроки и требования поставки.",
    "markets.text": "Мы собираем поставки под конкретный рынок: от первичного сорсинга и образцов до контроля партии, документов и отгрузки.",
    "markets.agro.title": "Агро и продукты",
    "markets.agro.text": "Кофе, кешью, перец, рис, специи, сушеные фрукты и сырье для переработки.",
    "markets.agro.alt": "Кофейные зерна для экспорта",
    "markets.fmcg.title": "FMCG и private label",
    "markets.fmcg.text": "Готовые продукты, ингредиенты, напитки, упаковка и адаптация этикетки.",
    "markets.fmcg.alt": "Специи и ингредиенты",
    "markets.textile.title": "Текстиль и дом",
    "markets.textile.text": "Ткани, одежда, домашний текстиль, декор и серийные партии.",
    "markets.textile.alt": "Текстильные материалы",
    "markets.industrial.title": "Промышленные товары",
    "markets.industrial.text": "Компоненты, упаковочные материалы, хозяйственные товары и контрактное производство.",
    "markets.industrial.alt": "Производственная линия",
    "supplier.kicker": "Поставщикам Вьетнама",
    "supplier.title": "Приглашаем вьетнамских производителей к международному сотрудничеству.",
    "supplier.text": "GLOBERION GROUP развивает партнерскую сеть фабрик, производителей и торговых домов во Вьетнаме для регулярных экспортных поставок на международные рынки.",
    "supplier.button": "Предложить сотрудничество",
    "supplier.panel.kicker": "Partner requirements",
    "supplier.panel.title": "Что важно для включения в партнерскую сеть",
    "supplier.requirement1": "Стабильное качество продукции",
    "supplier.requirement2": "Готовность к экспортным документам",
    "supplier.requirement3": "Прозрачные коммерческие условия",
    "supplier.requirement4": "Возможность контроля образцов и партии",
    "logistics.kicker": "Логистический контур",
    "logistics.title": "Контролируем путь от производителя до экспортной отгрузки.",
    "logistics.text": "Подбираем схему под объем, сроки и бюджет: FCL, LCL, авиадоставка, консолидация нескольких поставщиков и подготовка к импорту в стране назначения.",
    "logistics.link": "Запросить маршрут поставки",
    "logistics.hcm.city": "Ho Chi Minh City",
    "logistics.hcm.text": "Южный портовый кластер",
    "logistics.haiphong.city": "Haiphong",
    "logistics.haiphong.text": "Северные фабричные зоны",
    "logistics.danang.city": "Da Nang",
    "logistics.danang.text": "Центральные маршруты",
    "assurance.kicker": "Quality intelligence",
    "assurance.title": "Надежность поставки закладывается еще до подписания контракта.",
    "assurance.text": "Проверяем параметры партии, производственный контекст, упаковку, маркировку и документы до того, как груз уйдет в порт.",
    "assurance.card1.title": "Коммерческая проверка",
    "assurance.card1.text": "Сравниваем предложения поставщиков по цене, срокам, MOQ, оплате и экспортной готовности.",
    "assurance.card2.title": "Контроль образцов",
    "assurance.card2.text": "Фиксируем спецификацию, упаковку и критерии приемки до производства партии.",
    "assurance.card3.title": "Инспекция партии",
    "assurance.card3.text": "Организуем проверку количества, внешнего вида, маркировки и соответствия заказу.",
    "assurance.card4.title": "Экспортная готовность",
    "assurance.card4.text": "Проверяем комплект документов и отгрузочную логику перед передачей груза перевозчику.",
    "documents.kicker": "Документы и соответствие",
    "documents.title": "Документальный пакет собирается под товар, рынок и маршрут.",
    "documents.text": "Для каждой поставки заранее фиксируем обязательные формы, чтобы документы не становились слабым местом сделки.",
    "documents.photo.alt": "Документы и договоры на столе",
    "documents.stamp.top": "Prepared for",
    "documents.stamp.bottom": "Export clearance",
    "request.kicker": "Private export desk",
    "request.title": "Расскажите, какую поставку нужно собрать из Вьетнама.",
    "request.text": "Опишите товар, объем и рынок назначения. Мы вернемся с перечнем уточнений, возможными маршрутами и форматом коммерческого предложения.",
    "form.name": "Имя",
    "form.name.placeholder": "Как к вам обращаться",
    "form.contact": "Контакт",
    "form.contact.placeholder": "Email, Telegram или телефон",
    "form.category": "Категория товара",
    "form.category.placeholder": "Выберите направление",
    "form.category.supplier": "Сотрудничество для поставщика",
    "form.details": "Кратко о задаче",
    "form.details.placeholder": "Товар, объем, страна назначения, сроки",
    "form.submit": "Отправить запрос",
    "form.note": "Запрос подготовлен. На следующем этапе форму можно подключить к CRM или почте.",
    "footer.copy": "GLOBERION GROUP. Экспорт товаров из Вьетнама.",
    "footer.quality": "Контроль качества",
    "catalog.hero.eyebrow": "Каталог экспортных направлений",
    "catalog.hero.title": "Товарные группы из Вьетнама для международных закупок.",
    "catalog.hero.text": "Здесь собраны основные категории, по которым GLOBERION GROUP может выстраивать экспортные поставки для международных клиентов.",
    "catalog.agro.title": "Агро и продукты",
    "catalog.agro.text": "Кофе, кешью, перец, рис, специи, сушеные фрукты, кокосовая продукция и сырье для переработки.",
    "catalog.fmcg.title": "FMCG и private label",
    "catalog.fmcg.text": "Готовые продукты, снеки, напитки, ингредиенты, упаковка и адаптация этикетки под рынок назначения.",
    "catalog.textile.title": "Текстиль и товары для дома",
    "catalog.textile.text": "Ткани, одежда, домашний текстиль, плетеные изделия, декор и серийные поставки.",
    "catalog.industrial.title": "Промышленные товары",
    "catalog.industrial.text": "Компоненты, упаковочные материалы, хозяйственные товары и контрактное производство.",
    "catalog.note.kicker": "Подбор под контракт",
    "catalog.note.title": "Каталог не ограничивает запрос.",
    "catalog.note.text": "Если нужной категории нет в списке, команда может проверить рынок Вьетнама под конкретный товар, объем, требования к документам и страну назначения.",
    "catalog.note.button": "Отправить запрос"
  },
  en: {
    "meta.home.title": "GLOBERION GROUP — premium exports from Vietnam",
    "meta.home.description": "GLOBERION GROUP is a premium export operator from Vietnam: sourcing, quality control, documentation, and international logistics.",
    "meta.catalog.title": "GLOBERION GROUP — export categories catalog",
    "meta.catalog.description": "GLOBERION GROUP export category catalog: agriculture, FMCG, textiles, home goods, and industrial products from Vietnam.",
    "meta.importers.title": "GLOBERION GROUP — solutions for importers",
    "meta.importers.description": "Sourcing, supplier checks, samples, commercial terms, and export shipment support from Vietnam for importers.",
    "meta.suppliers.title": "GLOBERION GROUP — cooperation with Vietnamese suppliers",
    "meta.suppliers.description": "Invitation for factories, manufacturers, and trading houses in Vietnam to join international export partnerships.",
    "meta.logistics.title": "GLOBERION GROUP — logistics from Vietnam",
    "meta.logistics.description": "Routes, FCL, LCL, air freight, consolidation, and export shipment control from Vietnam.",
    "meta.quality.title": "GLOBERION GROUP — shipment quality control",
    "meta.quality.description": "Supplier, sample, batch, packaging, labeling, and export readiness checks before dispatch.",
    "meta.documents.title": "GLOBERION GROUP — documents and compliance",
    "meta.documents.description": "Documentation for export shipments from Vietnam: invoice, packing list, certificates, origin, and market requirements.",
    "nav.home": "Home",
    "nav.importers": "Importers",
    "nav.suppliers": "Suppliers",
    "nav.catalog": "Catalog",
    "nav.logistics": "Logistics",
    "nav.quality": "Quality",
    "nav.documents": "Documents",
    "nav.contacts": "Contacts",
    "nav.request": "Request shipment",
    "hero.eyebrow": "Premium export operator from Vietnam",
    "hero.lead": "We manage international shipments from Vietnam for companies that need reliable suppliers, clean documentation, batch control, and calm logistics.",
    "hero.primary": "Discuss shipment",
    "hero.secondary": "Open catalog",
    "hero.intel.route.label": "Route",
    "hero.intel.route.value": "Vietnam → your market",
    "hero.intel.mode.label": "Mode",
    "hero.intel.mode.value": "FCL · LCL · Air",
    "hero.intel.control.label": "Control",
    "hero.intel.control.value": "Sourcing · QC · Docs",
    "prestige.item1.label": "Operating model",
    "prestige.item1.value": "Turnkey shipment management",
    "prestige.item1.text": "One operating loop for communication, deadlines, and responsibility.",
    "prestige.item2.label": "Supplier due diligence",
    "prestige.item2.value": "Vetted production sites",
    "prestige.item2.text": "Factories selected by capacity, quality, and export readiness.",
    "prestige.item3.label": "Trade compliance",
    "prestige.item3.value": "Documents for destination markets",
    "prestige.item3.text": "Documentation aligned with the product, route, and import country.",
    "prestige.item4.label": "Shipment governance",
    "prestige.item4.value": "Timeline and dispatch control",
    "prestige.item4.text": "Production, inspection, packing, and carrier handover under control.",
    "markets.kicker": "Category portfolio",
    "markets.title": "Export categories aligned with your market, timeline, and shipment requirements.",
    "markets.text": "We build shipments around the target market: from sourcing and samples to batch control, documents, and dispatch.",
    "markets.agro.title": "Agricultural goods & food",
    "markets.agro.text": "Coffee, cashew, pepper, rice, spices, dried fruit, and raw materials for processing.",
    "markets.agro.alt": "Coffee beans for export",
    "markets.fmcg.title": "FMCG & private label",
    "markets.fmcg.text": "Finished products, ingredients, beverages, packaging, and label adaptation.",
    "markets.fmcg.alt": "Spices and ingredients",
    "markets.textile.title": "Textiles & home",
    "markets.textile.text": "Fabrics, apparel, home textiles, decor, and production runs.",
    "markets.textile.alt": "Textile materials",
    "markets.industrial.title": "Industrial goods",
    "markets.industrial.text": "Components, packaging materials, household goods, and contract manufacturing.",
    "markets.industrial.alt": "Production line",
    "supplier.kicker": "Vietnamese suppliers",
    "supplier.title": "We invite Vietnamese manufacturers to international cooperation.",
    "supplier.text": "GLOBERION GROUP is developing a partner network of factories, manufacturers, and trading houses in Vietnam for regular export shipments to international markets.",
    "supplier.button": "Propose cooperation",
    "supplier.panel.kicker": "Partner requirements",
    "supplier.panel.title": "What matters for joining the partner network",
    "supplier.requirement1": "Stable product quality",
    "supplier.requirement2": "Readiness for export documentation",
    "supplier.requirement3": "Transparent commercial terms",
    "supplier.requirement4": "Sample and batch inspection availability",
    "logistics.kicker": "Logistics circuit",
    "logistics.title": "We control the route from manufacturer to export shipment.",
    "logistics.text": "We choose the setup around volume, timeline, and budget: FCL, LCL, air freight, supplier consolidation, and preparation for import in the destination country.",
    "logistics.link": "Request shipment route",
    "logistics.hcm.city": "Ho Chi Minh City",
    "logistics.hcm.text": "Southern port cluster",
    "logistics.haiphong.city": "Haiphong",
    "logistics.haiphong.text": "Northern factory zones",
    "logistics.danang.city": "Da Nang",
    "logistics.danang.text": "Central routes",
    "assurance.kicker": "Quality intelligence",
    "assurance.title": "A serious shipment starts before the contract is signed.",
    "assurance.text": "We check batch parameters, production context, packaging, labeling, and documents before the cargo moves to port.",
    "assurance.card1.title": "Commercial review",
    "assurance.card1.text": "We compare supplier offers by price, timing, MOQ, payment terms, and export readiness.",
    "assurance.card2.title": "Sample control",
    "assurance.card2.text": "We lock the specification, packaging, and acceptance criteria before batch production.",
    "assurance.card3.title": "Batch inspection",
    "assurance.card3.text": "We arrange checks for quantity, appearance, labeling, and order compliance.",
    "assurance.card4.title": "Export readiness",
    "assurance.card4.text": "We review the document set and shipping logic before the cargo is handed to the carrier.",
    "documents.kicker": "Documents & compliance",
    "documents.title": "The document set is built for the product, market, and route.",
    "documents.text": "For each shipment, we define the required forms in advance so documentation never becomes the weak point of the deal.",
    "documents.photo.alt": "Documents and contracts on a desk",
    "documents.stamp.top": "Prepared for",
    "documents.stamp.bottom": "Export clearance",
    "request.kicker": "Private export desk",
    "request.title": "Tell us what shipment you need from Vietnam.",
    "request.text": "Describe the product, volume, and destination market. We will return with clarifying questions, possible routes, and a commercial offer format.",
    "form.name": "Name",
    "form.name.placeholder": "How should we address you",
    "form.contact": "Contact",
    "form.contact.placeholder": "Email, Telegram, or phone",
    "form.category": "Product category",
    "form.category.placeholder": "Choose a category",
    "form.category.supplier": "Supplier cooperation",
    "form.details": "Brief task details",
    "form.details.placeholder": "Product, volume, destination country, timing",
    "form.submit": "Send request",
    "form.note": "The request is prepared. At the next stage, the form can be connected to CRM or email.",
    "footer.copy": "GLOBERION GROUP. Exports from Vietnam.",
    "footer.quality": "Quality control",
    "catalog.hero.eyebrow": "Export category catalog",
    "catalog.hero.title": "Product groups from Vietnam for international sourcing.",
    "catalog.hero.text": "Here are the main categories GLOBERION GROUP can source and structure for international export shipments.",
    "catalog.agro.title": "Agricultural goods & food",
    "catalog.agro.text": "Coffee, cashew, pepper, rice, spices, dried fruit, coconut products, and raw materials for processing.",
    "catalog.fmcg.title": "FMCG & private label",
    "catalog.fmcg.text": "Finished products, snacks, beverages, ingredients, packaging, and label adaptation for the destination market.",
    "catalog.textile.title": "Textiles & home goods",
    "catalog.textile.text": "Fabrics, apparel, home textiles, woven goods, decor, and production runs.",
    "catalog.industrial.title": "Industrial goods",
    "catalog.industrial.text": "Components, packaging materials, household goods, and contract manufacturing.",
    "catalog.note.kicker": "Contract-based sourcing",
    "catalog.note.title": "The catalog does not limit the request.",
    "catalog.note.text": "If the required category is not listed, the team can research Vietnam's market for a specific product, volume, document requirements, and destination country.",
    "catalog.note.button": "Send request"
  },
  vi: {
    "meta.home.title": "GLOBERION GROUP — xuất khẩu cao cấp từ Việt Nam",
    "meta.home.description": "GLOBERION GROUP là đơn vị xuất khẩu cao cấp từ Việt Nam: tìm nguồn hàng, kiểm soát chất lượng, chứng từ và logistics quốc tế.",
    "meta.catalog.title": "GLOBERION GROUP — danh mục ngành hàng xuất khẩu",
    "meta.catalog.description": "Danh mục ngành hàng xuất khẩu của GLOBERION GROUP: nông sản, FMCG, dệt may, hàng gia dụng và sản phẩm công nghiệp từ Việt Nam.",
    "meta.importers.title": "GLOBERION GROUP — giải pháp cho nhà nhập khẩu",
    "meta.importers.description": "Tìm nguồn, kiểm tra nhà cung cấp, mẫu, điều kiện thương mại và hỗ trợ lô hàng xuất khẩu từ Việt Nam cho nhà nhập khẩu.",
    "meta.suppliers.title": "GLOBERION GROUP — hợp tác với nhà cung cấp Việt Nam",
    "meta.suppliers.description": "Lời mời nhà máy, nhà sản xuất và công ty thương mại Việt Nam tham gia hợp tác xuất khẩu quốc tế.",
    "meta.logistics.title": "GLOBERION GROUP — logistics từ Việt Nam",
    "meta.logistics.description": "Tuyến vận chuyển, FCL, LCL, hàng không, gom hàng và kiểm soát lô hàng xuất khẩu từ Việt Nam.",
    "meta.quality.title": "GLOBERION GROUP — kiểm soát chất lượng lô hàng",
    "meta.quality.description": "Kiểm tra nhà cung cấp, mẫu, lô hàng, bao bì, nhãn mác và khả năng xuất khẩu trước khi giao hàng.",
    "meta.documents.title": "GLOBERION GROUP — chứng từ và tuân thủ",
    "meta.documents.description": "Bộ chứng từ cho lô hàng xuất khẩu từ Việt Nam: invoice, packing list, chứng nhận, xuất xứ và yêu cầu thị trường.",
    "nav.home": "Trang chủ",
    "nav.importers": "Nhà nhập khẩu",
    "nav.suppliers": "Nhà cung cấp",
    "nav.catalog": "Danh mục",
    "nav.logistics": "Logistics",
    "nav.quality": "Kiểm soát",
    "nav.documents": "Chứng từ",
    "nav.contacts": "Liên hệ",
    "nav.request": "Yêu cầu lô hàng",
    "hero.eyebrow": "Đơn vị xuất khẩu cao cấp từ Việt Nam",
    "hero.lead": "Chúng tôi quản lý các lô hàng quốc tế từ Việt Nam cho doanh nghiệp cần nhà cung cấp đáng tin cậy, chứng từ rõ ràng, kiểm soát lô hàng và logistics ổn định.",
    "hero.primary": "Trao đổi lô hàng",
    "hero.secondary": "Mở danh mục",
    "hero.intel.route.label": "Tuyến",
    "hero.intel.route.value": "Việt Nam → thị trường của bạn",
    "hero.intel.mode.label": "Phương thức",
    "hero.intel.mode.value": "FCL · LCL · Air",
    "hero.intel.control.label": "Kiểm soát",
    "hero.intel.control.value": "Sourcing · QC · Docs",
    "prestige.item1.label": "Operating model",
    "prestige.item1.value": "Quản lý lô hàng trọn gói",
    "prestige.item1.text": "Một quy trình chung cho trao đổi, thời hạn và trách nhiệm.",
    "prestige.item2.label": "Supplier due diligence",
    "prestige.item2.value": "Cơ sở sản xuất đã thẩm định",
    "prestige.item2.text": "Lựa chọn nhà máy theo năng lực, chất lượng và khả năng xuất khẩu.",
    "prestige.item3.label": "Trade compliance",
    "prestige.item3.value": "Chứng từ theo thị trường đích",
    "prestige.item3.text": "Bộ chứng từ phù hợp với hàng hóa, tuyến vận chuyển và nước nhập khẩu.",
    "prestige.item4.label": "Shipment governance",
    "prestige.item4.value": "Kiểm soát tiến độ và giao hàng",
    "prestige.item4.text": "Kiểm soát sản xuất, kiểm định, đóng gói và bàn giao cho đơn vị vận chuyển.",
    "markets.kicker": "Danh mục ngành hàng",
    "markets.title": "Danh mục xuất khẩu theo thị trường, tiến độ và yêu cầu lô hàng.",
    "markets.text": "Chúng tôi xây dựng lô hàng theo thị trường mục tiêu: từ tìm nguồn và mẫu đến kiểm soát lô hàng, chứng từ và giao hàng.",
    "markets.agro.title": "Nông sản và thực phẩm",
    "markets.agro.text": "Cà phê, hạt điều, tiêu, gạo, gia vị, trái cây sấy và nguyên liệu chế biến.",
    "markets.agro.alt": "Hạt cà phê xuất khẩu",
    "markets.fmcg.title": "FMCG và nhãn hàng riêng",
    "markets.fmcg.text": "Sản phẩm hoàn thiện, nguyên liệu, đồ uống, bao bì và điều chỉnh nhãn.",
    "markets.fmcg.alt": "Gia vị và nguyên liệu",
    "markets.textile.title": "Dệt may và nhà ở",
    "markets.textile.text": "Vải, quần áo, dệt gia dụng, trang trí và đơn hàng sản xuất.",
    "markets.textile.alt": "Vật liệu dệt may",
    "markets.industrial.title": "Hàng công nghiệp",
    "markets.industrial.text": "Linh kiện, vật liệu đóng gói, hàng gia dụng và sản xuất theo hợp đồng.",
    "markets.industrial.alt": "Dây chuyền sản xuất",
    "supplier.kicker": "Nhà cung cấp Việt Nam",
    "supplier.title": "Chúng tôi mời các nhà sản xuất Việt Nam hợp tác quốc tế.",
    "supplier.text": "GLOBERION GROUP đang phát triển mạng lưới đối tác gồm nhà máy, nhà sản xuất và công ty thương mại tại Việt Nam cho các lô hàng xuất khẩu thường xuyên ra thị trường quốc tế.",
    "supplier.button": "Đề xuất hợp tác",
    "supplier.panel.kicker": "Partner requirements",
    "supplier.panel.title": "Tiêu chí để tham gia mạng lưới đối tác",
    "supplier.requirement1": "Chất lượng sản phẩm ổn định",
    "supplier.requirement2": "Sẵn sàng về chứng từ xuất khẩu",
    "supplier.requirement3": "Điều kiện thương mại minh bạch",
    "supplier.requirement4": "Có thể kiểm tra mẫu và lô hàng",
    "logistics.kicker": "Mạng lưới logistics",
    "logistics.title": "Kiểm soát hành trình từ nhà sản xuất đến lô hàng xuất khẩu.",
    "logistics.text": "Chúng tôi chọn phương án theo khối lượng, thời gian và ngân sách: FCL, LCL, hàng không, gom hàng từ nhiều nhà cung cấp và chuẩn bị cho nhập khẩu tại nước đến.",
    "logistics.link": "Yêu cầu tuyến vận chuyển",
    "logistics.hcm.city": "TP. Hồ Chí Minh",
    "logistics.hcm.text": "Cụm cảng phía Nam",
    "logistics.haiphong.city": "Hải Phòng",
    "logistics.haiphong.text": "Khu nhà máy phía Bắc",
    "logistics.danang.city": "Đà Nẵng",
    "logistics.danang.text": "Tuyến miền Trung",
    "assurance.kicker": "Quality intelligence",
    "assurance.title": "Một lô hàng nghiêm túc bắt đầu trước khi ký hợp đồng.",
    "assurance.text": "Chúng tôi kiểm tra thông số lô hàng, bối cảnh sản xuất, bao bì, nhãn mác và chứng từ trước khi hàng ra cảng.",
    "assurance.card1.title": "Đánh giá thương mại",
    "assurance.card1.text": "So sánh báo giá theo giá, thời gian, MOQ, thanh toán và khả năng xuất khẩu.",
    "assurance.card2.title": "Kiểm soát mẫu",
    "assurance.card2.text": "Chốt thông số, bao bì và tiêu chí nghiệm thu trước khi sản xuất.",
    "assurance.card3.title": "Kiểm định lô hàng",
    "assurance.card3.text": "Tổ chức kiểm tra số lượng, ngoại quan, nhãn mác và mức độ phù hợp đơn hàng.",
    "assurance.card4.title": "Sẵn sàng xuất khẩu",
    "assurance.card4.text": "Rà soát bộ chứng từ và logic giao hàng trước khi bàn giao cho đơn vị vận chuyển.",
    "documents.kicker": "Chứng từ và tuân thủ",
    "documents.title": "Bộ chứng từ được xây dựng theo hàng hóa, thị trường và tuyến vận chuyển.",
    "documents.text": "Với mỗi lô hàng, chúng tôi xác định trước các mẫu cần thiết để chứng từ không trở thành điểm yếu của giao dịch.",
    "documents.photo.alt": "Chứng từ và hợp đồng trên bàn",
    "documents.stamp.top": "Prepared for",
    "documents.stamp.bottom": "Export clearance",
    "request.kicker": "Private export desk",
    "request.title": "Cho chúng tôi biết lô hàng bạn cần từ Việt Nam.",
    "request.text": "Mô tả sản phẩm, khối lượng và thị trường đến. Chúng tôi sẽ phản hồi với câu hỏi làm rõ, tuyến khả thi và định dạng báo giá thương mại.",
    "form.name": "Tên",
    "form.name.placeholder": "Cách chúng tôi gọi bạn",
    "form.contact": "Liên hệ",
    "form.contact.placeholder": "Email, Telegram hoặc điện thoại",
    "form.category": "Danh mục hàng",
    "form.category.placeholder": "Chọn ngành hàng",
    "form.category.supplier": "Hợp tác nhà cung cấp",
    "form.details": "Tóm tắt nhu cầu",
    "form.details.placeholder": "Sản phẩm, khối lượng, nước đến, thời hạn",
    "form.submit": "Gửi yêu cầu",
    "form.note": "Yêu cầu đã được chuẩn bị. Ở bước tiếp theo, biểu mẫu có thể kết nối với CRM hoặc email.",
    "footer.copy": "GLOBERION GROUP. Xuất khẩu hàng hóa từ Việt Nam.",
    "footer.quality": "Kiểm soát chất lượng",
    "catalog.hero.eyebrow": "Danh mục ngành hàng xuất khẩu",
    "catalog.hero.title": "Nhóm sản phẩm từ Việt Nam cho mua hàng quốc tế.",
    "catalog.hero.text": "Đây là các ngành hàng chính mà GLOBERION GROUP có thể tìm nguồn và xây dựng cho lô hàng xuất khẩu quốc tế.",
    "catalog.agro.title": "Nông sản và thực phẩm",
    "catalog.agro.text": "Cà phê, hạt điều, tiêu, gạo, gia vị, trái cây sấy, sản phẩm dừa và nguyên liệu chế biến.",
    "catalog.fmcg.title": "FMCG và nhãn hàng riêng",
    "catalog.fmcg.text": "Sản phẩm hoàn thiện, snack, đồ uống, nguyên liệu, bao bì và điều chỉnh nhãn cho thị trường đến.",
    "catalog.textile.title": "Dệt may và hàng gia dụng",
    "catalog.textile.text": "Vải, quần áo, dệt gia dụng, sản phẩm đan lát, trang trí và đơn hàng sản xuất.",
    "catalog.industrial.title": "Hàng công nghiệp",
    "catalog.industrial.text": "Linh kiện, vật liệu đóng gói, hàng gia dụng và sản xuất theo hợp đồng.",
    "catalog.note.kicker": "Tìm nguồn theo hợp đồng",
    "catalog.note.title": "Danh mục không giới hạn yêu cầu.",
    "catalog.note.text": "Nếu ngành hàng cần tìm không có trong danh sách, đội ngũ có thể nghiên cứu thị trường Việt Nam theo sản phẩm, khối lượng, yêu cầu chứng từ và nước đến.",
    "catalog.note.button": "Gửi yêu cầu"
  }
};

const autoTranslations = {
  en: {
    "Структура работы": "Work structure",
    "Разделы для разных участников поставки.": "Sections for every participant in the shipment.",
    "Главная страница дает обзор, а детали вынесены в отдельные направления сайта.": "The home page gives an overview, while the details live in dedicated site sections.",
    "Импортерам": "Importers",
    "Сорсинг, проверка поставщиков, условия сделки и сопровождение заказа.": "Sourcing, supplier checks, deal terms, and order support.",
    "Поставщикам Вьетнама": "Vietnamese suppliers",
    "Приглашение фабрик, производителей и торговых домов к сотрудничеству.": "An invitation for factories, manufacturers, and trading houses to cooperate.",
    "Логистика": "Logistics",
    "Маршруты, FCL, LCL, авиадоставка, консолидация и контроль отгрузки.": "Routes, FCL, LCL, air freight, consolidation, and dispatch control.",
    "Контроль качества": "Quality control",
    "Проверка поставщика, образцов, партии, упаковки и маркировки.": "Supplier, sample, batch, packaging, and labeling checks.",

    "Для импортеров": "For importers",
    "Поставки из Вьетнама с управляемым процессом закупки.": "Shipments from Vietnam with a controlled procurement process.",
    "Помогаем импортерам найти поставщика, проверить коммерческие условия, зафиксировать требования к партии и довести поставку до экспортной отгрузки.": "We help importers find suppliers, review commercial terms, lock batch requirements, and bring the shipment to export dispatch.",
    "Procurement desk": "Procurement desk",
    "Когда нужен локальный экспортный контур во Вьетнаме.": "When you need a local export desk in Vietnam.",
    "Рынок Вьетнама может быть сильным источником товара, но требует внимательной проверки: поставщик, образцы, сроки производства, документы, упаковка и готовность к экспорту должны быть согласованы до оплаты.": "Vietnam can be a strong sourcing market, but it requires careful checks: supplier, samples, production timing, documents, packaging, and export readiness should be aligned before payment.",
    "GLOBERION GROUP работает как операционная команда на стороне сделки: собирает предложения, сравнивает условия, помогает проверить поставщика и удерживает процесс в понятной логике.": "GLOBERION GROUP works as an operating team on the deal side: collecting offers, comparing terms, helping verify suppliers, and keeping the process clear.",
    "Для каких задач": "Use cases",
    "Первичный поиск производителей и торговых домов": "Initial search for manufacturers and trading houses",
    "Сравнение предложений по цене, MOQ и срокам": "Offer comparison by price, MOQ, and timing",
    "Организация образцов и фиксация спецификации": "Sample handling and specification lock-in",
    "Контроль партии перед передачей перевозчику": "Batch control before carrier handover",
    "Рабочий объем": "Scope of work",
    "Закрываем ключевые этапы до, во время и после заказа.": "We cover key stages before, during, and after the order.",
    "Каждый проект можно собрать как полный цикл или как отдельный модуль под конкретную задачу импортера.": "Each project can be structured as a full cycle or as a separate module for a specific importer task.",
    "Сорсинг и shortlist": "Sourcing and shortlist",
    "Подбираем релевантных поставщиков, уточняем производственные возможности и первичные коммерческие условия.": "We identify relevant suppliers and clarify production capacity and initial commercial terms.",
    "Коммерческая проверка": "Commercial review",
    "Сравниваем цену, сроки, MOQ, оплату, упаковку, экспортную готовность и устойчивость коммуникации.": "We compare price, timing, MOQ, payment, packaging, export readiness, and communication stability.",
    "Образцы и спецификация": "Samples and specification",
    "Фиксируем параметры товара, упаковку, маркировку и критерии приемки до запуска партии.": "We lock product parameters, packaging, labeling, and acceptance criteria before batch launch.",
    "Контроль исполнения": "Execution control",
    "Отслеживаем производство, готовность документов, инспекцию партии и передачу груза в логистику.": "We track production, document readiness, batch inspection, and cargo handover to logistics.",
    "Запрос": "Request",
    "Фиксируем товар, объем, рынок назначения, сроки и требования к документам.": "We define the product, volume, destination market, timeline, and document requirements.",
    "Поставщики": "Suppliers",
    "Собираем предложения и выделяем поставщиков, с которыми есть смысл продолжать переговоры.": "We collect offers and identify suppliers worth continuing negotiations with.",
    "Условия": "Terms",
    "Согласуем спецификацию, оплату, сроки, упаковку, образцы и контроль партии.": "We align specification, payment, timing, packaging, samples, and batch control.",
    "Отгрузка": "Dispatch",
    "Проверяем готовность партии, документов и логистики перед передачей груза перевозчику.": "We check batch, document, and logistics readiness before cargo handover to the carrier.",
    "Начать проект": "Start a project",
    "Опишите товар и рынок назначения.": "Describe the product and destination market.",
    "Мы вернемся с перечнем уточнений, возможной логикой поиска и форматом сопровождения.": "We will return with clarifying questions, possible sourcing logic, and a support format.",
    "Запросить поставку": "Request shipment",

    "Приглашаем производителей Вьетнама к международному сотрудничеству.": "We invite Vietnamese manufacturers to international cooperation.",
    "GLOBERION GROUP развивает партнерскую сеть фабрик, производителей и торговых домов для регулярных экспортных поставок на международные рынки.": "GLOBERION GROUP is developing a partner network of factories, manufacturers, and trading houses for regular export shipments to international markets.",
    "Partner network": "Partner network",
    "Мы ищем поставщиков, с которыми можно строить долгосрочную экспортную работу.": "We are looking for suppliers with whom long-term export work can be built.",
    "Для международного клиента важны не только цена и наличие товара. Значение имеют стабильное качество, понятные сроки, готовность к проверке партии, корректные документы и прозрачная коммуникация.": "For an international client, price and availability are not enough. Stable quality, clear timing, readiness for batch inspection, correct documents, and transparent communication matter.",
    "Если ваша компания производит или экспортирует товары из Вьетнама и готова работать по профессиональным требованиям международных поставок, мы открыты к диалогу.": "If your company manufactures or exports goods from Vietnam and is ready to work under professional international shipment requirements, we are open to dialogue.",
    "Критерии партнера": "Partner criteria",
    "Стабильное качество и повторяемость партии": "Stable quality and repeatable batches",
    "Понятная производственная или торговая структура": "Clear production or trading structure",
    "Готовность к образцам, инспекции и документам": "Readiness for samples, inspection, and documents",
    "Прозрачные условия оплаты, упаковки и сроков": "Transparent payment, packaging, and timing terms",
    "Формат сотрудничества": "Cooperation format",
    "Партнерство строится вокруг готовности к экспорту.": "Partnership is built around export readiness.",
    "Мы помогаем поставщику быть понятным для международного покупателя и сохранять дисциплину сделки.": "We help suppliers become clear to international buyers and keep deal discipline.",
    "Профиль поставщика": "Supplier profile",
    "Фиксируем категории товара, мощности, MOQ, упаковку, сертификаты и экспортный опыт.": "We define product categories, capacity, MOQ, packaging, certificates, and export experience.",
    "Коммерческая витрина": "Commercial presentation",
    "Готовим понятную структуру предложения для международных клиентов: спецификации, цены и сроки.": "We prepare a clear offer structure for international clients: specifications, prices, and timelines.",
    "Контроль доверия": "Trust control",
    "Согласуем правила образцов, инспекции, фотоотчетов, маркировки и подготовки партии.": "We align rules for samples, inspection, photo reports, labeling, and batch preparation.",
    "Экспортная связка": "Export coordination",
    "Синхронизируем документы, отгрузку и коммуникацию между поставщиком, клиентом и логистикой.": "We synchronize documents, dispatch, and communication between supplier, client, and logistics.",
    "Заявка": "Application",
    "Поставщик отправляет профиль компании, товарные группы и экспортные возможности.": "The supplier sends the company profile, product groups, and export capabilities.",
    "Проверка": "Review",
    "Мы уточняем документы, производственную базу, качество, цены, MOQ и условия работы.": "We clarify documents, production base, quality, prices, MOQ, and working terms.",
    "Партнерский профиль": "Partner profile",
    "Формируем понятное описание поставщика для будущих международных запросов.": "We prepare a clear supplier profile for future international requests.",
    "Запросы клиентов": "Client requests",
    "Подключаем поставщика к релевантным проектам, где совпадают товар, объем и требования.": "We connect the supplier to relevant projects where product, volume, and requirements match.",
    "Стать партнером": "Become a partner",
    "Представьте компанию и товарные категории.": "Introduce your company and product categories.",
    "Кнопка ведет к общей форме, где можно выбрать пункт «Сотрудничество для поставщика».": "The button leads to the general form, where Supplier cooperation can be selected.",
    "Предложить сотрудничество": "Propose cooperation",

    "Маршрут поставки проектируется под объем, сроки и рынок назначения.": "The shipment route is designed around volume, timing, and destination market.",
    "Подбираем формат перевозки из Вьетнама, контролируем экспортную отгрузку, консолидацию, документы и передачу груза перевозчику.": "We select the freight format from Vietnam and control export dispatch, consolidation, documents, and carrier handover.",
    "Shipment planning": "Shipment planning",
    "Логистика начинается до того, как груз готов к отправке.": "Logistics starts before the cargo is ready to ship.",
    "Схема перевозки влияет на упаковку, маркировку, документы, сроки производства и требования к приемке. Поэтому логистический контур подключается до финального подтверждения заказа.": "The freight setup affects packaging, labeling, documents, production timing, and acceptance requirements. That is why logistics is involved before final order confirmation.",
    "Мы сопоставляем объем, срочность, бюджет, страну назначения и готовность поставщика к экспортной процедуре, чтобы выбрать реалистичную схему движения груза.": "We match volume, urgency, budget, destination country, and supplier export readiness to select a realistic cargo movement setup.",
    "Форматы перевозки": "Freight formats",
    "FCL для контейнерных партий": "FCL for container shipments",
    "LCL для сборных поставок": "LCL for consolidated shipments",
    "Air для срочных и легких партий": "Air for urgent and light shipments",
    "Консолидация нескольких поставщиков": "Multi-supplier consolidation",
    "Операционный контур": "Operating framework",
    "Контролируем точки, где чаще всего появляются задержки.": "We control the points where delays most often appear.",
    "Каждый маршрут собирается не по шаблону, а по реальным ограничениям товара, поставщика и рынка.": "Each route is built around real product, supplier, and market constraints rather than a template.",
    "Маршрут и порт": "Route and port",
    "Согласуем порт отправки, доступные линии, сроки, частоту отправлений и требования к бронированию.": "We align departure port, available lines, timing, sailing frequency, and booking requirements.",
    "Консолидация": "Consolidation",
    "Планируем сбор грузов от нескольких поставщиков, чтобы снизить хаос в сроках и документах.": "We plan cargo collection from several suppliers to reduce timing and document chaos.",
    "Отгрузочная готовность": "Dispatch readiness",
    "Проверяем упаковку, маркировку, количество мест, вес, объем и готовность документов.": "We check packaging, labeling, number of packages, weight, volume, and document readiness.",
    "Статус груза": "Cargo status",
    "Фиксируем ключевые этапы: готовность партии, pickup, порт, выпуск документов и отправку.": "We track key stages: batch readiness, pickup, port, document release, and departure.",
    "Маршрут поставки": "Shipment route",
    "Опишите объем, сроки и страну назначения.": "Describe volume, timing, and destination country.",
    "Мы предложим возможную схему движения груза и список уточнений по упаковке и документам.": "We will suggest a possible cargo movement setup and a list of packaging and document clarifications.",
    "Запросить маршрут": "Request route",

    "Надежность поставки закладывается до подписания контракта.": "Shipment reliability is built before the contract is signed.",
    "Проверяем коммерческие условия, образцы, спецификацию, упаковку, маркировку и партию до того, как груз уйдет в экспортную логистику.": "We check commercial terms, samples, specification, packaging, labeling, and batch before the cargo moves into export logistics.",
    "Quality intelligence": "Quality intelligence",
    "Контроль нужен не только в день инспекции.": "Control is needed beyond the inspection day.",
    "Если критерии приемки не зафиксированы заранее, инспекция превращается в спор после производства. Поэтому мы начинаем с проверки поставщика, образца, спецификации и упаковки.": "If acceptance criteria are not fixed in advance, inspection becomes a dispute after production. That is why we start with supplier, sample, specification, and packaging checks.",
    "Задача контроля — снизить риск несоответствия партии, задержек, некорректной маркировки и документов, которые могут повлиять на импорт в стране назначения.": "The purpose of control is to reduce the risk of batch mismatch, delays, incorrect labeling, and documents that can affect import in the destination country.",
    "Что проверяем": "What we check",
    "Поставщика и коммерческую готовность": "Supplier and commercial readiness",
    "Образцы и критерии приемки": "Samples and acceptance criteria",
    "Количество, внешний вид и упаковку": "Quantity, appearance, and packaging",
    "Маркировку и экспортную готовность": "Labeling and export readiness",
    "Этапы контроля": "Control stages",
    "Проверка строится вокруг конкретного товара и риска.": "The check is built around the specific product and risk.",
    "Не каждый проект требует одинаковой глубины контроля, поэтому объем проверки задается под сделку.": "Not every project needs the same depth of control, so the scope is set for the deal.",
    "Коммерческий фильтр": "Commercial filter",
    "Сравниваем предложения и проверяем, насколько поставщик готов к реальной экспортной сделке.": "We compare offers and check how ready the supplier is for a real export deal.",
    "Контроль образца": "Sample control",
    "Фиксируем параметры товара, упаковку, маркировку и критерии приемки до производства партии.": "We lock product parameters, packaging, labeling, and acceptance criteria before batch production.",
    "Инспекция партии": "Batch inspection",
    "Организуем проверку количества, внешнего вида, соответствия заказу и готовности к отгрузке.": "We arrange checks for quantity, appearance, order compliance, and dispatch readiness.",
    "Отчетность": "Reporting",
    "Передаем структурированный статус по результатам проверки и вопросам, которые нужно закрыть.": "We provide a structured status on check results and questions to close.",
    "Проверить поставку": "Check a shipment",
    "Опишите товар и текущий этап сделки.": "Describe the product and current deal stage.",
    "Мы предложим, что стоит проверить до оплаты, производства или передачи груза перевозчику.": "We will suggest what should be checked before payment, production, or carrier handover.",
    "Запросить проверку": "Request check",

    "Документы и compliance": "Documents and compliance",
    "Документальный пакет собирается под товар, маршрут и рынок назначения.": "The document set is built around the product, route, and destination market.",
    "Помогаем заранее определить, какие документы нужны для экспортной поставки из Вьетнама и какие требования могут повлиять на импорт в стране назначения.": "We help define in advance which documents are needed for an export shipment from Vietnam and which requirements can affect import in the destination country.",
    "Trade documents": "Trade documents",
    "Документы не должны становиться слабым местом сделки.": "Documents should not become the weak point of the deal.",
    "Ошибки в invoice, packing list, сертификатах или описании товара могут задержать выпуск груза, усложнить импорт и создать дополнительные расходы.": "Mistakes in invoice, packing list, certificates, or product description can delay cargo release, complicate import, and create additional costs.",
    "Поэтому документальный контур строится заранее: до производства, упаковки и передачи партии перевозчику.": "That is why the document framework is built in advance: before production, packaging, and batch handover to the carrier.",
    "Базовый пакет": "Basic set",
    "Bill of Lading или Air Waybill": "Bill of Lading or Air Waybill",
    "Документы зависят от товара, маршрута и требований импортера.": "Documents depend on the product, route, and importer requirements.",
    "Для отдельных категорий могут потребоваться дополнительные сертификаты, декларации или специальные формы.": "Certain categories may require additional certificates, declarations, or special forms.",
    "Коммерческие документы": "Commercial documents",
    "Согласуем invoice, packing list, описание товара, количество мест, вес, объем и условия поставки.": "We align invoice, packing list, product description, package count, weight, volume, and delivery terms.",
    "Происхождение": "Origin",
    "Проверяем необходимость Certificate of Origin и корректность данных для страны назначения.": "We check whether a Certificate of Origin is needed and whether the data is correct for the destination country.",
    "Сертификаты": "Certificates",
    "Уточняем фитосанитарные, качественные, лабораторные или иные документы под категорию товара.": "We clarify phytosanitary, quality, laboratory, or other documents required for the product category.",
    "Отгрузочные данные": "Shipping data",
    "Синхронизируем документы с упаковкой, маркировкой, маршрутом и данными перевозчика.": "We synchronize documents with packaging, labeling, route, and carrier data.",
    "Проверить документы": "Check documents",
    "Сообщите товар и страну импорта.": "Tell us the product and import country.",
    "Мы подскажем, какие документы стоит предусмотреть до запуска партии и отгрузки.": "We will advise which documents should be prepared before batch launch and dispatch.",
    "Запросить перечень": "Request list"
  },
  vi: {
    "Структура работы": "Cấu trúc làm việc",
    "Разделы для разных участников поставки.": "Các mục dành cho từng bên tham gia lô hàng.",
    "Главная страница дает обзор, а детали вынесены в отдельные направления сайта.": "Trang chủ cung cấp tổng quan, còn chi tiết nằm trong các mục riêng của website.",
    "Импортерам": "Nhà nhập khẩu",
    "Сорсинг, проверка поставщиков, условия сделки и сопровождение заказа.": "Tìm nguồn, kiểm tra nhà cung cấp, điều kiện giao dịch và hỗ trợ đơn hàng.",
    "Поставщикам Вьетнама": "Nhà cung cấp Việt Nam",
    "Приглашение фабрик, производителей и торговых домов к сотрудничеству.": "Lời mời hợp tác dành cho nhà máy, nhà sản xuất và công ty thương mại.",
    "Логистика": "Logistics",
    "Маршруты, FCL, LCL, авиадоставка, консолидация и контроль отгрузки.": "Tuyến vận chuyển, FCL, LCL, hàng không, gom hàng và kiểm soát giao hàng.",
    "Контроль качества": "Kiểm soát chất lượng",
    "Проверка поставщика, образцов, партии, упаковки и маркировки.": "Kiểm tra nhà cung cấp, mẫu, lô hàng, bao bì và nhãn mác.",

    "Для импортеров": "Dành cho nhà nhập khẩu",
    "Поставки из Вьетнама с управляемым процессом закупки.": "Lô hàng từ Việt Nam với quy trình mua hàng được kiểm soát.",
    "Помогаем импортерам найти поставщика, проверить коммерческие условия, зафиксировать требования к партии и довести поставку до экспортной отгрузки.": "Chúng tôi giúp nhà nhập khẩu tìm nhà cung cấp, kiểm tra điều kiện thương mại, chốt yêu cầu lô hàng và đưa lô hàng đến bước xuất khẩu.",
    "Procurement desk": "Bộ phận mua hàng",
    "Когда нужен локальный экспортный контур во Вьетнаме.": "Khi cần một bộ phận xuất khẩu tại Việt Nam.",
    "Рынок Вьетнама может быть сильным источником товара, но требует внимательной проверки: поставщик, образцы, сроки производства, документы, упаковка и готовность к экспорту должны быть согласованы до оплаты.": "Thị trường Việt Nam có thể là nguồn hàng mạnh, nhưng cần kiểm tra kỹ: nhà cung cấp, mẫu, thời gian sản xuất, chứng từ, bao bì và khả năng xuất khẩu cần được thống nhất trước khi thanh toán.",
    "GLOBERION GROUP работает как операционная команда на стороне сделки: собирает предложения, сравнивает условия, помогает проверить поставщика и удерживает процесс в понятной логике.": "GLOBERION GROUP hoạt động như đội ngũ vận hành của giao dịch: thu thập báo giá, so sánh điều kiện, hỗ trợ kiểm tra nhà cung cấp và giữ quy trình rõ ràng.",
    "Для каких задач": "Phù hợp cho các nhiệm vụ",
    "Первичный поиск производителей и торговых домов": "Tìm kiếm ban đầu nhà sản xuất và công ty thương mại",
    "Сравнение предложений по цене, MOQ и срокам": "So sánh báo giá theo giá, MOQ và thời gian",
    "Организация образцов и фиксация спецификации": "Tổ chức mẫu và chốt thông số kỹ thuật",
    "Контроль партии перед передачей перевозчику": "Kiểm soát lô hàng trước khi bàn giao cho đơn vị vận chuyển",
    "Рабочий объем": "Phạm vi công việc",
    "Закрываем ключевые этапы до, во время и после заказа.": "Chúng tôi xử lý các giai đoạn chính trước, trong và sau đơn hàng.",
    "Каждый проект можно собрать как полный цикл или как отдельный модуль под конкретную задачу импортера.": "Mỗi dự án có thể được xây dựng thành chu trình đầy đủ hoặc module riêng cho nhiệm vụ cụ thể.",
    "Сорсинг и shortlist": "Tìm nguồn và danh sách rút gọn",
    "Подбираем релевантных поставщиков, уточняем производственные возможности и первичные коммерческие условия.": "Chúng tôi chọn nhà cung cấp phù hợp, làm rõ năng lực sản xuất và điều kiện thương mại ban đầu.",
    "Коммерческая проверка": "Đánh giá thương mại",
    "Сравниваем цену, сроки, MOQ, оплату, упаковку, экспортную готовность и устойчивость коммуникации.": "So sánh giá, thời gian, MOQ, thanh toán, bao bì, khả năng xuất khẩu và độ ổn định trong trao đổi.",
    "Образцы и спецификация": "Mẫu và thông số",
    "Фиксируем параметры товара, упаковку, маркировку и критерии приемки до запуска партии.": "Chốt thông số sản phẩm, bao bì, nhãn mác và tiêu chí nghiệm thu trước khi sản xuất.",
    "Контроль исполнения": "Kiểm soát thực hiện",
    "Отслеживаем производство, готовность документов, инспекцию партии и передачу груза в логистику.": "Theo dõi sản xuất, chứng từ, kiểm định lô hàng và bàn giao hàng cho logistics.",
    "Запрос": "Yêu cầu",
    "Фиксируем товар, объем, рынок назначения, сроки и требования к документам.": "Xác định sản phẩm, khối lượng, thị trường đích, thời hạn và yêu cầu chứng từ.",
    "Поставщики": "Nhà cung cấp",
    "Собираем предложения и выделяем поставщиков, с которыми есть смысл продолжать переговоры.": "Thu thập báo giá và chọn nhà cung cấp phù hợp để tiếp tục đàm phán.",
    "Условия": "Điều kiện",
    "Согласуем спецификацию, оплату, сроки, упаковку, образцы и контроль партии.": "Thống nhất thông số, thanh toán, thời gian, bao bì, mẫu và kiểm soát lô hàng.",
    "Отгрузка": "Giao hàng",
    "Проверяем готовность партии, документов и логистики перед передачей груза перевозчику.": "Kiểm tra lô hàng, chứng từ và logistics trước khi bàn giao cho đơn vị vận chuyển.",
    "Начать проект": "Bắt đầu dự án",
    "Опишите товар и рынок назначения.": "Mô tả sản phẩm và thị trường đích.",
    "Мы вернемся с перечнем уточнений, возможной логикой поиска и форматом сопровождения.": "Chúng tôi sẽ phản hồi với các câu hỏi làm rõ, logic tìm nguồn và hình thức hỗ trợ.",
    "Запросить поставку": "Yêu cầu lô hàng",

    "Приглашаем производителей Вьетнама к международному сотрудничеству.": "Chúng tôi mời các nhà sản xuất Việt Nam hợp tác quốc tế.",
    "GLOBERION GROUP развивает партнерскую сеть фабрик, производителей и торговых домов для регулярных экспортных поставок на международные рынки.": "GLOBERION GROUP phát triển mạng lưới đối tác gồm nhà máy, nhà sản xuất và công ty thương mại cho các lô hàng xuất khẩu thường xuyên ra thị trường quốc tế.",
    "Partner network": "Mạng lưới đối tác",
    "Мы ищем поставщиков, с которыми можно строить долгосрочную экспортную работу.": "Chúng tôi tìm kiếm nhà cung cấp có thể xây dựng hợp tác xuất khẩu dài hạn.",
    "Для международного клиента важны не только цена и наличие товара. Значение имеют стабильное качество, понятные сроки, готовность к проверке партии, корректные документы и прозрачная коммуникация.": "Đối với khách hàng quốc tế, giá và hàng có sẵn chưa đủ. Chất lượng ổn định, thời gian rõ ràng, sẵn sàng kiểm tra lô hàng, chứng từ đúng và trao đổi minh bạch đều quan trọng.",
    "Если ваша компания производит или экспортирует товары из Вьетнама и готова работать по профессиональным требованиям международных поставок, мы открыты к диалогу.": "Nếu công ty của bạn sản xuất hoặc xuất khẩu hàng hóa từ Việt Nam và sẵn sàng làm việc theo yêu cầu chuyên nghiệp của lô hàng quốc tế, chúng tôi sẵn sàng trao đổi.",
    "Критерии партнера": "Tiêu chí đối tác",
    "Стабильное качество и повторяемость партии": "Chất lượng ổn định và lô hàng đồng nhất",
    "Понятная производственная или торговая структура": "Cơ cấu sản xuất hoặc thương mại rõ ràng",
    "Готовность к образцам, инспекции и документам": "Sẵn sàng cung cấp mẫu, kiểm định và chứng từ",
    "Прозрачные условия оплаты, упаковки и сроков": "Điều kiện thanh toán, bao bì và thời gian minh bạch",
    "Формат сотрудничества": "Hình thức hợp tác",
    "Партнерство строится вокруг готовности к экспорту.": "Hợp tác được xây dựng quanh khả năng xuất khẩu.",
    "Мы помогаем поставщику быть понятным для международного покупателя и сохранять дисциплину сделки.": "Chúng tôi giúp nhà cung cấp trở nên rõ ràng với người mua quốc tế và giữ kỷ luật giao dịch.",
    "Профиль поставщика": "Hồ sơ nhà cung cấp",
    "Фиксируем категории товара, мощности, MOQ, упаковку, сертификаты и экспортный опыт.": "Xác định ngành hàng, năng lực, MOQ, bao bì, chứng nhận và kinh nghiệm xuất khẩu.",
    "Коммерческая витрина": "Hồ sơ thương mại",
    "Готовим понятную структуру предложения для международных клиентов: спецификации, цены и сроки.": "Chuẩn bị cấu trúc chào hàng rõ ràng cho khách hàng quốc tế: thông số, giá và thời gian.",
    "Контроль доверия": "Kiểm soát độ tin cậy",
    "Согласуем правила образцов, инспекции, фотоотчетов, маркировки и подготовки партии.": "Thống nhất quy tắc mẫu, kiểm định, báo cáo ảnh, nhãn mác và chuẩn bị lô hàng.",
    "Экспортная связка": "Điều phối xuất khẩu",
    "Синхронизируем документы, отгрузку и коммуникацию между поставщиком, клиентом и логистикой.": "Đồng bộ chứng từ, giao hàng và trao đổi giữa nhà cung cấp, khách hàng và logistics.",
    "Заявка": "Đăng ký",
    "Поставщик отправляет профиль компании, товарные группы и экспортные возможности.": "Nhà cung cấp gửi hồ sơ công ty, nhóm sản phẩm và năng lực xuất khẩu.",
    "Проверка": "Kiểm tra",
    "Мы уточняем документы, производственную базу, качество, цены, MOQ и условия работы.": "Chúng tôi làm rõ chứng từ, cơ sở sản xuất, chất lượng, giá, MOQ và điều kiện làm việc.",
    "Партнерский профиль": "Hồ sơ đối tác",
    "Формируем понятное описание поставщика для будущих международных запросов.": "Tạo mô tả rõ ràng về nhà cung cấp cho các yêu cầu quốc tế trong tương lai.",
    "Запросы клиентов": "Yêu cầu khách hàng",
    "Подключаем поставщика к релевантным проектам, где совпадают товар, объем и требования.": "Kết nối nhà cung cấp với dự án phù hợp về sản phẩm, khối lượng và yêu cầu.",
    "Стать партнером": "Trở thành đối tác",
    "Представьте компанию и товарные категории.": "Giới thiệu công ty và nhóm sản phẩm.",
    "Кнопка ведет к общей форме, где можно выбрать пункт «Сотрудничество для поставщика».": "Nút này dẫn đến biểu mẫu chung, nơi có thể chọn mục Hợp tác nhà cung cấp.",
    "Предложить сотрудничество": "Đề xuất hợp tác",

    "Маршрут поставки проектируется под объем, сроки и рынок назначения.": "Tuyến lô hàng được thiết kế theo khối lượng, thời gian và thị trường đích.",
    "Подбираем формат перевозки из Вьетнама, контролируем экспортную отгрузку, консолидацию, документы и передачу груза перевозчику.": "Chúng tôi chọn phương thức vận chuyển từ Việt Nam và kiểm soát xuất hàng, gom hàng, chứng từ và bàn giao cho đơn vị vận chuyển.",
    "Shipment planning": "Lập kế hoạch lô hàng",
    "Логистика начинается до того, как груз готов к отправке.": "Logistics bắt đầu trước khi hàng sẵn sàng xuất.",
    "Схема перевозки влияет на упаковку, маркировку, документы, сроки производства и требования к приемке. Поэтому логистический контур подключается до финального подтверждения заказа.": "Phương án vận chuyển ảnh hưởng đến bao bì, nhãn mác, chứng từ, thời gian sản xuất và yêu cầu nghiệm thu. Vì vậy logistics được kết nối trước khi xác nhận đơn hàng cuối cùng.",
    "Мы сопоставляем объем, срочность, бюджет, страну назначения и готовность поставщика к экспортной процедуре, чтобы выбрать реалистичную схему движения груза.": "Chúng tôi đối chiếu khối lượng, độ gấp, ngân sách, nước đến và khả năng xuất khẩu của nhà cung cấp để chọn phương án vận chuyển thực tế.",
    "Форматы перевозки": "Hình thức vận chuyển",
    "FCL для контейнерных партий": "FCL cho lô hàng nguyên container",
    "LCL для сборных поставок": "LCL cho lô hàng ghép",
    "Air для срочных и легких партий": "Hàng không cho lô hàng gấp và nhẹ",
    "Консолидация нескольких поставщиков": "Gom hàng từ nhiều nhà cung cấp",
    "Операционный контур": "Khung vận hành",
    "Контролируем точки, где чаще всего появляются задержки.": "Chúng tôi kiểm soát các điểm thường gây chậm trễ.",
    "Каждый маршрут собирается не по шаблону, а по реальным ограничениям товара, поставщика и рынка.": "Mỗi tuyến được xây dựng theo hạn chế thực tế của sản phẩm, nhà cung cấp và thị trường, không theo mẫu cứng.",
    "Маршрут и порт": "Tuyến và cảng",
    "Согласуем порт отправки, доступные линии, сроки, частоту отправлений и требования к бронированию.": "Thống nhất cảng đi, tuyến tàu, thời gian, tần suất và yêu cầu đặt chỗ.",
    "Консолидация": "Gom hàng",
    "Планируем сбор грузов от нескольких поставщиков, чтобы снизить хаос в сроках и документах.": "Lập kế hoạch gom hàng từ nhiều nhà cung cấp để giảm rủi ro về thời gian và chứng từ.",
    "Отгрузочная готовность": "Sẵn sàng xuất hàng",
    "Проверяем упаковку, маркировку, количество мест, вес, объем и готовность документов.": "Kiểm tra bao bì, nhãn mác, số kiện, trọng lượng, thể tích và chứng từ.",
    "Статус груза": "Trạng thái hàng",
    "Фиксируем ключевые этапы: готовность партии, pickup, порт, выпуск документов и отправку.": "Theo dõi các mốc chính: lô hàng sẵn sàng, pickup, cảng, phát hành chứng từ và khởi hành.",
    "Маршрут поставки": "Tuyến lô hàng",
    "Опишите объем, сроки и страну назначения.": "Mô tả khối lượng, thời gian và nước đến.",
    "Мы предложим возможную схему движения груза и список уточнений по упаковке и документам.": "Chúng tôi sẽ đề xuất phương án vận chuyển và danh sách điểm cần làm rõ về bao bì, chứng từ.",
    "Запросить маршрут": "Yêu cầu tuyến vận chuyển",

    "Надежность поставки закладывается до подписания контракта.": "Độ tin cậy của lô hàng được xây dựng trước khi ký hợp đồng.",
    "Проверяем коммерческие условия, образцы, спецификацию, упаковку, маркировку и партию до того, как груз уйдет в экспортную логистику.": "Chúng tôi kiểm tra điều kiện thương mại, mẫu, thông số, bao bì, nhãn mác và lô hàng trước khi hàng đi vào logistics xuất khẩu.",
    "Quality intelligence": "Thông tin kiểm soát chất lượng",
    "Контроль нужен не только в день инспекции.": "Kiểm soát không chỉ diễn ra vào ngày kiểm định.",
    "Если критерии приемки не зафиксированы заранее, инспекция превращается в спор после производства. Поэтому мы начинаем с проверки поставщика, образца, спецификации и упаковки.": "Nếu tiêu chí nghiệm thu không được chốt trước, kiểm định sẽ trở thành tranh luận sau sản xuất. Vì vậy chúng tôi bắt đầu từ nhà cung cấp, mẫu, thông số và bao bì.",
    "Задача контроля — снизить риск несоответствия партии, задержек, некорректной маркировки и документов, которые могут повлиять на импорт в стране назначения.": "Mục tiêu kiểm soát là giảm rủi ro lô hàng không phù hợp, chậm trễ, nhãn mác và chứng từ sai có thể ảnh hưởng đến nhập khẩu.",
    "Что проверяем": "Nội dung kiểm tra",
    "Поставщика и коммерческую готовность": "Nhà cung cấp và mức sẵn sàng thương mại",
    "Образцы и критерии приемки": "Mẫu và tiêu chí nghiệm thu",
    "Количество, внешний вид и упаковку": "Số lượng, ngoại quan và bao bì",
    "Маркировку и экспортную готовность": "Nhãn mác và khả năng xuất khẩu",
    "Этапы контроля": "Các giai đoạn kiểm soát",
    "Проверка строится вокруг конкретного товара и риска.": "Kiểm tra được xây dựng theo sản phẩm và rủi ro cụ thể.",
    "Не каждый проект требует одинаковой глубины контроля, поэтому объем проверки задается под сделку.": "Không phải dự án nào cũng cần cùng mức kiểm soát, nên phạm vi kiểm tra được đặt theo giao dịch.",
    "Коммерческий фильтр": "Bộ lọc thương mại",
    "Сравниваем предложения и проверяем, насколько поставщик готов к реальной экспортной сделке.": "So sánh báo giá và kiểm tra mức độ sẵn sàng của nhà cung cấp cho giao dịch xuất khẩu thực tế.",
    "Контроль образца": "Kiểm soát mẫu",
    "Фиксируем параметры товара, упаковку, маркировку и критерии приемки до производства партии.": "Chốt thông số sản phẩm, bao bì, nhãn mác và tiêu chí nghiệm thu trước khi sản xuất.",
    "Инспекция партии": "Kiểm định lô hàng",
    "Организуем проверку количества, внешнего вида, соответствия заказу и готовности к отгрузке.": "Tổ chức kiểm tra số lượng, ngoại quan, mức phù hợp đơn hàng và sẵn sàng xuất.",
    "Отчетность": "Báo cáo",
    "Передаем структурированный статус по результатам проверки и вопросам, которые нужно закрыть.": "Cung cấp trạng thái có cấu trúc về kết quả kiểm tra và các vấn đề cần xử lý.",
    "Проверить поставку": "Kiểm tra lô hàng",
    "Опишите товар и текущий этап сделки.": "Mô tả sản phẩm và giai đoạn hiện tại của giao dịch.",
    "Мы предложим, что стоит проверить до оплаты, производства или передачи груза перевозчику.": "Chúng tôi sẽ đề xuất những điểm nên kiểm tra trước thanh toán, sản xuất hoặc bàn giao cho đơn vị vận chuyển.",
    "Запросить проверку": "Yêu cầu kiểm tra",

    "Документы и compliance": "Chứng từ và tuân thủ",
    "Документальный пакет собирается под товар, маршрут и рынок назначения.": "Bộ chứng từ được xây dựng theo sản phẩm, tuyến vận chuyển và thị trường đích.",
    "Помогаем заранее определить, какие документы нужны для экспортной поставки из Вьетнама и какие требования могут повлиять на импорт в стране назначения.": "Chúng tôi giúp xác định trước chứng từ cần cho lô hàng xuất khẩu từ Việt Nam và các yêu cầu có thể ảnh hưởng đến nhập khẩu.",
    "Trade documents": "Chứng từ thương mại",
    "Документы не должны становиться слабым местом сделки.": "Chứng từ không nên trở thành điểm yếu của giao dịch.",
    "Ошибки в invoice, packing list, сертификатах или описании товара могут задержать выпуск груза, усложнить импорт и создать дополнительные расходы.": "Sai sót trong invoice, packing list, chứng nhận hoặc mô tả hàng hóa có thể làm chậm giải phóng hàng, gây khó nhập khẩu và phát sinh chi phí.",
    "Поэтому документальный контур строится заранее: до производства, упаковки и передачи партии перевозчику.": "Vì vậy khung chứng từ được xây dựng trước: trước sản xuất, đóng gói và bàn giao lô hàng.",
    "Базовый пакет": "Bộ chứng từ cơ bản",
    "Bill of Lading или Air Waybill": "Bill of Lading hoặc Air Waybill",
    "Документы зависят от товара, маршрута и требований импортера.": "Chứng từ phụ thuộc vào sản phẩm, tuyến vận chuyển và yêu cầu của nhà nhập khẩu.",
    "Для отдельных категорий могут потребоваться дополнительные сертификаты, декларации или специальные формы.": "Một số ngành hàng có thể cần thêm chứng nhận, khai báo hoặc biểu mẫu đặc biệt.",
    "Коммерческие документы": "Chứng từ thương mại",
    "Согласуем invoice, packing list, описание товара, количество мест, вес, объем и условия поставки.": "Thống nhất invoice, packing list, mô tả hàng, số kiện, trọng lượng, thể tích và điều kiện giao hàng.",
    "Происхождение": "Xuất xứ",
    "Проверяем необходимость Certificate of Origin и корректность данных для страны назначения.": "Kiểm tra nhu cầu Certificate of Origin và tính đúng của dữ liệu cho nước đến.",
    "Сертификаты": "Chứng nhận",
    "Уточняем фитосанитарные, качественные, лабораторные или иные документы под категорию товара.": "Làm rõ chứng từ kiểm dịch thực vật, chất lượng, phòng thí nghiệm hoặc chứng từ khác theo ngành hàng.",
    "Отгрузочные данные": "Dữ liệu giao hàng",
    "Синхронизируем документы с упаковкой, маркировкой, маршрутом и данными перевозчика.": "Đồng bộ chứng từ với bao bì, nhãn mác, tuyến vận chuyển và dữ liệu đơn vị vận chuyển.",
    "Проверить документы": "Kiểm tra chứng từ",
    "Сообщите товар и страну импорта.": "Cho biết sản phẩm và nước nhập khẩu.",
    "Мы подскажем, какие документы стоит предусмотреть до запуска партии и отгрузки.": "Chúng tôi sẽ gợi ý chứng từ nên chuẩn bị trước khi sản xuất và xuất hàng.",
    "Запросить перечень": "Yêu cầu danh sách"
  }
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("globerion-language");
  } catch {
    return null;
  }
};

const setStoredLanguage = (language) => {
  try {
    localStorage.setItem("globerion-language", language);
  } catch {
    return null;
  }
};

const pageName = document.body.dataset.page || "home";
const descriptionMeta = document.querySelector('meta[name="description"]');
const languageButtons = document.querySelectorAll("[data-lang]");
const navigation = document.querySelector(".nav");
const navigationToggle = document.querySelector(".nav-toggle");

const translate = (language, key) => {
  return translations[language]?.[key] || translations.ru[key] || "";
};

const normalizeText = (text) => text.replace(/\s+/g, " ").trim();

const shouldTranslateTextNode = (node) => {
  const text = normalizeText(node.nodeValue || "");
  const parent = node.parentElement;

  if (!text || !parent) {
    return false;
  }

  return !parent.closest("script, style, noscript, textarea, input, select, [data-i18n], [data-year]");
};

const applyAutoTextTranslations = (language) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => shouldTranslateTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const sourceText = node._globerionSourceText || normalizeText(node.nodeValue || "");
    const translatedText = language === "ru" ? sourceText : autoTranslations[language]?.[sourceText];

    node._globerionSourceText = sourceText;

    if (translatedText) {
      node.nodeValue = translatedText;
    }
  });
};

const applyLanguage = (language) => {
  const currentLanguage = translations[language] ? language : "ru";

  document.documentElement.lang = currentLanguage;
  document.title = translate(currentLanguage, `meta.${pageName}.title`);
  descriptionMeta?.setAttribute("content", translate(currentLanguage, `meta.${pageName}.description`));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = translate(currentLanguage, element.dataset.i18n);
    if (text) {
      element.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const text = translate(currentLanguage, element.dataset.i18nPlaceholder);
    if (text) {
      element.setAttribute("placeholder", text);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const text = translate(currentLanguage, element.dataset.i18nAlt);
    if (text) {
      element.setAttribute("alt", text);
    }
  });

  applyAutoTextTranslations(currentLanguage);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll(".form-note").forEach((note) => {
    note.textContent = "";
  });

  setStoredLanguage(currentLanguage);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

navigationToggle?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  navigationToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    navigationToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-request-category]").forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(() => {
      const category = document.querySelector("#category");
      const option = category?.querySelector(`[data-i18n="${link.dataset.requestCategory}"]`);

      if (category && option) {
        category.value = option.value || option.textContent;
      }
    }, 120);
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll(".request-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentLanguage = document.documentElement.lang || "ru";
    const note = form.querySelector(".form-note");

    if (note) {
      note.textContent = translate(currentLanguage, "form.note");
    }

    form.reset();
  });
});

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

applyLanguage(getStoredLanguage() || "ru");
