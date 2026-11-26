/**
 * Globerion Group B2B Catalog Engine
 * Handles product rendering, category cards, interactive filtering, and universal quote modal.
 */

(function () {
  const getCatalog = () => window.GLOBERION_CATALOG;

  const getCurrentLanguage = () => {
    const lang = (document.documentElement.lang || "en").toLowerCase();
    return ["en", "ru", "vi"].includes(lang) ? lang : "en";
  };

  const getLocalizedText = (textObj, lang) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || Object.values(textObj)[0] || "";
  };

  const i18nCatalog = {
    en: {
      origin: "Origin",
      moq: "MOQ",
      priceOnRequest: "Price on request",
      indicativePrice: "Indicative price",
      fromPrice: "From",
      viewProduct: "View Product",
      requestQuote: "Request a Quote",
      exploreCategory: "View Products",
      allCategories: "All Products",
      noProductsFound: "No products found in this category.",
      modalTitle: "Request a B2B Quotation",
      modalSubtitle: "Direct supply, private label & export solutions from Vietnam.",
      selectedProductLabel: "Selected Product",
      generalInquiry: "General Product Inquiry",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. John Doe",
      companyLabel: "Company Name",
      companyPlaceholder: "e.g. Global Trade Ltd.",
      countryLabel: "Country",
      countryPlaceholder: "e.g. Germany, UAE, USA",
      emailLabel: "Business Email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone / WhatsApp",
      phonePlaceholder: "+1 234 567 8900",
      quantityLabel: "Required Quantity",
      quantityPlaceholder: "e.g. 1x20ft FCL / 10 MT",
      destinationLabel: "Destination Port / City",
      destinationPlaceholder: "e.g. Hamburg Port, CIF",
      messageLabel: "Specific Requirements / Specifications",
      messagePlaceholder: "Grade requirements, packing specifications, target delivery date, or private label details...",
      submitButton: "Send Quotation Request",
      submitting: "Submitting...",
      submitSuccess: "Thank you! Your quotation request has been received. Our export desk will contact you within 24 hours.",
      submitError: "Failed to send request. Please email us directly at info@globeriongroup.com or contact us via WhatsApp."
    },
    ru: {
      origin: "Происхождение",
      moq: "Мин. заказ",
      priceOnRequest: "Цена по запросу",
      indicativePrice: "Ориентировочная цена",
      fromPrice: "От",
      viewProduct: "Подробнее",
      requestQuote: "Запросить КП",
      exploreCategory: "Смотреть продукцию",
      allCategories: "Все товары",
      noProductsFound: "В данной категории пока нет товаров.",
      modalTitle: "Запрос коммерческого предложения",
      modalSubtitle: "Прямые оптовые поставки, Private Label и экспорт из Вьетнама.",
      selectedProductLabel: "Выбранный товар",
      generalInquiry: "Общий запрос по каталогу",
      nameLabel: "Имя и фамилия",
      namePlaceholder: "Иван Иванов",
      companyLabel: "Компания",
      companyPlaceholder: "ООО «Импорт Трейд»",
      countryLabel: "Страна",
      countryPlaceholder: "Россия, Беларусь, Казахстан...",
      emailLabel: "Корпоративный Email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Телефон / WhatsApp / Telegram",
      phonePlaceholder: "+7 999 123-45-67",
      quantityLabel: "Требуемый объем",
      quantityPlaceholder: "например, 1x20ft FCL (~19 т) или 500 кг",
      destinationLabel: "Пункт / Порт назначения",
      destinationPlaceholder: "например, порт Владивосток / Новороссийск, CIF/FOB",
      messageLabel: "Требования к товару и упаковке",
      messagePlaceholder: "Укажите сорт, требования к фракции, фасовку, Private Label или желаемые сроки поставки...",
      submitButton: "Отправить запрос КП",
      submitting: "Отправка...",
      submitSuccess: "Спасибо! Запрос на расчет успешно отправлен. Экспортный отдел свяжется с вами в течение 24 часов.",
      submitError: "Не удалось отправить форму. Пожалуйста, напишите на info@globeriongroup.com или в WhatsApp."
    },
    vi: {
      origin: "Xuất xứ",
      moq: "Đơn hàng tối thiểu",
      priceOnRequest: "Giá theo yêu cầu",
      indicativePrice: "Giá tham khảo",
      fromPrice: "Từ",
      viewProduct: "Xem chi tiết",
      requestQuote: "Nhận báo giá B2B",
      exploreCategory: "Xem sản phẩm",
      allCategories: "Tất cả sản phẩm",
      noProductsFound: "Chưa có sản phẩm trong danh mục này.",
      modalTitle: "Yêu Cầu Báo Giá Xuất Khẩu B2B",
      modalSubtitle: "Cung ứng số lượng lớn, gia công nhãn riêng và xuất khẩu từ Việt Nam.",
      selectedProductLabel: "Sản phẩm quan tâm",
      generalInquiry: "Yêu cầu thông tin chung",
      nameLabel: "Họ và tên",
      namePlaceholder: "Nguyễn Văn A",
      companyLabel: "Tên công ty / Doanh nghiệp",
      companyPlaceholder: "Công ty TNHH Thương Mại",
      countryLabel: "Quốc gia",
      countryPlaceholder: "Việt Nam, Hàn Quốc, Nhật Bản...",
      emailLabel: "Email công việc",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Số điện thoại / WhatsApp / Zalo",
      phonePlaceholder: "+84 901 234 567",
      quantityLabel: "Số lượng dự kiến",
      quantityPlaceholder: "ví dụ: 1 container 20ft / 10 tấn",
      destinationLabel: "Cảng đến / Điểm giao hàng",
      destinationPlaceholder: "ví dụ: Cảng Cát Lái, Cảng Busan (FOB/CIF)",
      messageLabel: "Yêu cầu kỹ thuật & Quy cách",
      messagePlaceholder: "Tiêu chuẩn sàng, độ ẩm, quy cách bao bì, nhãn riêng hoặc thời gian giao hàng...",
      submitButton: "Gửi yêu cầu báo giá",
      submitting: "Đang gửi...",
      submitSuccess: "Cảm ơn quý khách! Yêu cầu báo giá đã được tiếp nhận. Đội ngũ xuất khẩu sẽ liên hệ lại trong 24 giờ.",
      submitError: "Có lỗi khi gửi yêu cầu. Vui lòng gửi email tới info@globeriongroup.com hoặc liên hệ WhatsApp."
    }
  };

  const getT = (key, lang) => {
    const l = lang || getCurrentLanguage();
    return (i18nCatalog[l] && i18nCatalog[l][key]) || (i18nCatalog.en && i18nCatalog.en[key]) || key;
  };

  const formatPrice = (product, lang) => {
    const l = lang || getCurrentLanguage();
    const unit = product.unit || "kg";
    const unitLabel = l === "ru" && unit === "kg" ? "кг" : unit;

    if (product.priceMode === "fixed" && product.price) {
      return `${getT("fromPrice", l)} $${product.price}/${unitLabel}`;
    }
    if (product.priceMode === "indicative" && product.price) {
      return `${getT("indicativePrice", l)}: $${product.price}/${unitLabel}`;
    }
    return getT("priceOnRequest", l);
  };

  const resolvePath = (path) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
      return path;
    }
    const isSubdir = window.location.pathname.includes("/products/");
    return isSubdir ? "../" + path : path;
  };

  const renderProductCard = (product, lang, options = {}) => {
    const l = lang || getCurrentLanguage();
    const productName = getLocalizedText(product.name, l);
    const categoryName = product.category;
    const originText = product.originShort || product.origin;
    const priceText = formatPrice(product, l);
    const isDetailLink = options.detailLinkPrefix || "products/";
    const detailUrl = `${isDetailLink}${product.categorySlug}/${product.slug}/`;

    const specsHtml = (product.specifications || [])
      .slice(0, 4)
      .map((spec) => {
        const label = getLocalizedText(spec.label, l);
        return `
          <div class="product-spec-row">
            <span class="product-spec-label">${label}:</span>
            <strong class="product-spec-value">${spec.value}</strong>
          </div>
        `;
      })
      .join("");

    const priceClass = product.priceMode === "request" ? "price-request" : "price-valued";

    return `
      <article class="product-b2b-card" data-slug="${product.slug}" data-category="${product.categorySlug}" data-reveal>
        <div class="product-b2b-media">
          <img
            src="${resolvePath(product.image)}"
            alt="${productName}"
            loading="lazy"
            decoding="async"
            class="product-b2b-img"
          />
          <div class="product-b2b-badges">
            <span class="product-b2b-badge badge-category">${categoryName}</span>
            <span class="product-b2b-badge badge-origin">${originText}</span>
          </div>
        </div>

        <div class="product-b2b-body">
          <div class="product-b2b-header">
            <h3 class="product-b2b-title">${productName}</h3>
            <p class="product-b2b-origin-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${product.origin}</span>
            </p>
          </div>

          <div class="product-b2b-specs">
            ${specsHtml}
          </div>

          <div class="product-b2b-meta">
            ${product.moq ? `
              <div class="product-b2b-moq">
                <span class="moq-label">${getT("moq", l)}:</span>
                <span class="moq-value">${product.moq}</span>
              </div>
            ` : ""}
            <div class="product-b2b-price ${priceClass}">
              <span>${priceText}</span>
            </div>
          </div>

          <div class="product-b2b-actions">
            <a href="${resolvePath(detailUrl)}" class="btn btn-secondary btn-sm btn-view-product" data-product-slug="${product.slug}">
              <span>${getT("viewProduct", l)}</span>
            </a>
            <button
              type="button"
              class="btn btn-primary btn-sm btn-request-quote"
              data-open-quote
              data-product-name="${productName}"
              data-product-slug="${product.slug}"
              data-product-origin="${product.originShort || product.origin}"
              data-product-category="${categoryName}"
            >
              <span>${getT("requestQuote", l)}</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  };

  const renderCategoryCard = (category, lang) => {
    const l = lang || getCurrentLanguage();
    const catName = getLocalizedText(category.name, l);
    const tagline = getLocalizedText(category.tagline, l);
    const shortDesc = getLocalizedText(category.shortDesc, l);
    const targetUrl = resolvePath(`products/${category.slug}/`);

    return `
      <article class="category-b2b-card" data-category-slug="${category.slug}" data-reveal>
        <div class="category-b2b-media">
          <img
            src="${resolvePath(category.image)}"
            alt="${catName}"
            loading="lazy"
            decoding="async"
            class="category-b2b-img"
          />
          <div class="category-b2b-overlay"></div>
        </div>
        <div class="category-b2b-content">
          <span class="category-b2b-tagline">${tagline}</span>
          <h3 class="category-b2b-title">${catName}</h3>
          <p class="category-b2b-desc">${shortDesc}</p>
          <a href="${targetUrl}" class="category-b2b-btn">
            <span>${getT("exploreCategory", l)}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </article>
    `;
  };

  /* Universal Quote Modal */
  let activeModal = null;

  const getOrCreateModal = () => {
    let modalEl = document.getElementById("universal-quote-modal");
    if (modalEl) return modalEl;

    modalEl = document.createElement("div");
    modalEl.id = "universal-quote-modal";
    modalEl.className = "quote-modal-overlay";
    modalEl.setAttribute("aria-hidden", "true");
    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-modal", "true");

    document.body.appendChild(modalEl);
    updateModalMarkup(modalEl, getCurrentLanguage());

    return modalEl;
  };

  const updateModalMarkup = (modalEl, lang) => {
    const l = lang || getCurrentLanguage();
    modalEl.innerHTML = `
      <div class="quote-modal-card" role="document">
        <button type="button" class="quote-modal-close" aria-label="Close dialog" data-close-quote>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="quote-modal-header">
          <span class="section-kicker">${getT("selectedProductLabel", l)}</span>
          <h2 class="quote-modal-title" id="quote-modal-heading">${getT("modalTitle", l)}</h2>
          <p class="quote-modal-subtitle">${getT("modalSubtitle", l)}</p>

          <div class="quote-modal-selected-badge" id="modal-selected-product-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span id="modal-product-display-name">${getT("generalInquiry", l)}</span>
          </div>
        </div>

        <form
          class="quote-modal-form"
          action="https://formspree.io/f/mdavqgga"
          method="POST"
          accept-charset="UTF-8"
        >
          <input type="hidden" name="_subject" value="B2B Quote Request — GLOBERION GROUP" />
          <input type="hidden" name="language" value="${l.toUpperCase()}" />
          <input type="hidden" name="sourcePage" value="${window.location.href}" />
          <input type="hidden" name="product" id="modal-input-product" value="" />
          <input type="hidden" name="productSlug" id="modal-input-slug" value="" />

          <!-- Honeypot -->
          <div class="form-honeypot" aria-hidden="true" style="display:none;">
            <label for="quote-modal-gotcha">Do not fill</label>
            <input id="quote-modal-gotcha" name="_gotcha" type="text" tabindex="-1" autocomplete="off" />
          </div>

          <div class="quote-modal-grid">
            <div class="quote-field">
              <label for="quote-name">${getT("nameLabel", l)} *</label>
              <input id="quote-name" name="name" type="text" required placeholder="${getT("namePlaceholder", l)}" autocomplete="name" />
            </div>

            <div class="quote-field">
              <label for="quote-company">${getT("companyLabel", l)} *</label>
              <input id="quote-company" name="company" type="text" required placeholder="${getT("companyPlaceholder", l)}" autocomplete="organization" />
            </div>

            <div class="quote-field">
              <label for="quote-country">${getT("countryLabel", l)} *</label>
              <input id="quote-country" name="country" type="text" required placeholder="${getT("countryPlaceholder", l)}" autocomplete="country-name" />
            </div>

            <div class="quote-field">
              <label for="quote-email">${getT("emailLabel", l)} *</label>
              <input id="quote-email" name="email" type="email" required placeholder="${getT("emailPlaceholder", l)}" autocomplete="email" />
            </div>

            <div class="quote-field">
              <label for="quote-phone">${getT("phoneLabel", l)} *</label>
              <input id="quote-phone" name="phone" type="tel" required placeholder="${getT("phonePlaceholder", l)}" autocomplete="tel" />
            </div>

            <div class="quote-field">
              <label for="quote-quantity">${getT("quantityLabel", l)}</label>
              <input id="quote-quantity" name="quantity" type="text" placeholder="${getT("quantityPlaceholder", l)}" />
            </div>

            <div class="quote-field quote-field-full">
              <label for="quote-destination">${getT("destinationLabel", l)}</label>
              <input id="quote-destination" name="destination" type="text" placeholder="${getT("destinationPlaceholder", l)}" />
            </div>

            <div class="quote-field quote-field-full">
              <label for="quote-message">${getT("messageLabel", l)}</label>
              <textarea id="quote-message" name="message" rows="3" placeholder="${getT("messagePlaceholder", l)}"></textarea>
            </div>
          </div>

          <div class="quote-modal-footer">
            <button class="btn btn-primary btn-block quote-submit-btn" type="submit">
              <span>${getT("submitButton", l)}</span>
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
            <p class="quote-form-note" role="status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    `;

    bindModalEvents(modalEl);
  };

  const bindModalEvents = (modalEl) => {
    const closeBtn = modalEl.querySelector("[data-close-quote]");
    const form = modalEl.querySelector(".quote-modal-form");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeQuoteModal);
    }

    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) {
        closeQuoteModal();
      }
    });

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const l = getCurrentLanguage();
        const note = form.querySelector(".quote-form-note");
        const submitBtn = form.querySelector(".quote-submit-btn");

        if (note) {
          note.textContent = "";
          note.className = "quote-form-note";
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector("span").textContent = getT("submitting", l);
        }

        const formData = new FormData(form);
        formData.set("language", l.toUpperCase());
        formData.set("sourcePage", window.location.href);

        try {
          const res = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" }
          });

          if (!res.ok) throw new Error("Submission failed");

          if (note) {
            note.textContent = getT("submitSuccess", l);
            note.classList.add("is-success");
          }
          form.reset();

          setTimeout(() => {
            closeQuoteModal();
            if (note) {
              note.textContent = "";
              note.className = "quote-form-note";
            }
          }, 3500);
        } catch (err) {
          if (note) {
            note.textContent = getT("submitError", l);
            note.classList.add("is-error");
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector("span").textContent = getT("submitButton", l);
          }
        }
      });
    }
  };

  const openQuoteModal = (productName, productSlug, details = {}) => {
    const modalEl = getOrCreateModal();
    const l = getCurrentLanguage();

    const displayEl = modalEl.querySelector("#modal-product-display-name");
    const inputProd = modalEl.querySelector("#modal-input-product");
    const inputSlug = modalEl.querySelector("#modal-input-slug");

    const resolvedName = productName || getT("generalInquiry", l);
    if (displayEl) displayEl.textContent = resolvedName;
    if (inputProd) inputProd.value = resolvedName;
    if (inputSlug) inputSlug.value = productSlug || "general-inquiry";

    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const firstInput = modalEl.querySelector("#quote-name");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 150);
    }
  };

  const closeQuoteModal = () => {
    const modalEl = document.getElementById("universal-quote-modal");
    if (modalEl) {
      modalEl.classList.remove("is-open");
      modalEl.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuoteModal();
    }
  });

  /* Global delegate for opening quote modal */
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-quote]");
    if (trigger) {
      e.preventDefault();
      const pName = trigger.dataset.productName || "";
      const pSlug = trigger.dataset.productSlug || "";
      openQuoteModal(pName, pSlug);
    }
  });

  /* Initialization functions */
  const initFeaturedProducts = () => {
    const container = document.getElementById("featured-products-container");
    if (!container) return;

    const catalog = getCatalog();
    if (!catalog) return;

    const lang = getCurrentLanguage();
    const featured = catalog.getFeaturedProducts();

    container.innerHTML = featured
      .map((product) => renderProductCard(product, lang))
      .join("");
  };

  const initCategoryShowcase = () => {
    const container = document.getElementById("category-showcase-container");
    if (!container) return;

    const catalog = getCatalog();
    if (!catalog) return;

    const lang = getCurrentLanguage();
    container.innerHTML = catalog.CATEGORIES
      .map((cat) => renderCategoryCard(cat, lang))
      .join("");
  };

  const initProductsPage = () => {
    const grid = document.getElementById("catalog-products-grid");
    const filterContainer = document.getElementById("catalog-category-filter");
    if (!grid) return;

    const catalog = getCatalog();
    if (!catalog) return;

    const lang = getCurrentLanguage();
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get("category") || "all";

    const renderFiltered = (catSlug) => {
      const items = catalog.getProductsByCategory(catSlug);
      if (!items || items.length === 0) {
        grid.innerHTML = `
          <div class="catalog-empty-state">
            <p>${getT("noProductsFound", lang)}</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = items
        .map((p) => renderProductCard(p, lang))
        .join("");

      // Re-observe reveal elements if IntersectionObserver is available
      if (window.__refreshReveal) {
        window.__refreshReveal();
      }
    };

    if (filterContainer) {
      const buttons = filterContainer.querySelectorAll("[data-filter-category]");
      buttons.forEach((btn) => {
        const cat = btn.dataset.filterCategory;
        if (cat === initialCategory) {
          buttons.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
        }

        btn.addEventListener("click", () => {
          buttons.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const selected = btn.dataset.filterCategory;

          const currentUrl = new URL(window.location.href);
          if (selected === "all") {
            currentUrl.searchParams.delete("category");
          } else {
            currentUrl.searchParams.set("category", selected);
          }
          window.history.replaceState({}, "", currentUrl.toString());

          renderFiltered(selected);
        });
      });
    }

    renderFiltered(initialCategory);
  };

  const updateAllDynamicComponents = (lang) => {
    const modalEl = document.getElementById("universal-quote-modal");
    if (modalEl) {
      updateModalMarkup(modalEl, lang);
    }
    initFeaturedProducts();
    initCategoryShowcase();
    initProductsPage();
  };

  document.addEventListener("DOMContentLoaded", () => {
    initFeaturedProducts();
    initCategoryShowcase();
    initProductsPage();
  });

  window.GLOBERION_ENGINE = {
    renderProductCard: renderProductCard,
    renderCategoryCard: renderCategoryCard,
    openQuoteModal: openQuoteModal,
    closeQuoteModal: closeQuoteModal,
    updateAllDynamicComponents: updateAllDynamicComponents,
    formatPrice: formatPrice,
    getT: getT
  };
})();
