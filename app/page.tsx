import { featuredProducts, products } from "@/data/products";

const categories = [
  { name: "Coffee", count: products.filter((p) => p.category === "Coffee").length },
  { name: "Pepper", count: products.filter((p) => p.category === "Pepper").length },
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Globerion Group home">
          <img src="https://globeriongroup.com/assets/logo-mark.png" alt="" />
          <span><strong>Globerion Group</strong><small>B2B Product Supply</small></span>
        </a>
        <nav>
          <a href="#products">Products</a>
          <a href="#how">How it works</a>
          <a href="#services">Trade services</a>
          <a href="#about">Company</a>
        </nav>
        <a className="headerCta" href="#products">Request product</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Vietnam → international B2B markets</p>
          <h1>Choose a product. Send a direct request.</h1>
          <p className="lead">Globerion presents specific products for international supply. Each position has its own request table for quantity, format, packaging and destination.</p>
          <div className="heroActions">
            <a className="primary" href="#products">Browse products</a>
            <a className="secondary" href="#how">How supply works</a>
          </div>
          <div className="trustRow">
            <span>Coffee</span><span>Pepper</span><span>OEM / private label</span><span>Export logistics</span>
          </div>
        </div>

        <div className="tradePanel" aria-label="Product request preview">
          <div className="panelHead"><span>PRODUCT REQUEST</span><strong>GLB / RFQ</strong></div>
          <label>Product<input value="Coffee Blend — 20% Arabica / 80% Robusta" readOnly /></label>
          <div className="fieldGrid">
            <label>Format<input value="Roasted whole bean" readOnly /></label>
            <label>Quantity<input value="10 tons" readOnly /></label>
          </div>
          <div className="fieldGrid">
            <label>Packaging<input value="1 kg bags" readOnly /></label>
            <label>Destination<input value="Moscow, Russia" readOnly /></label>
          </div>
          <div className="statusLine"><span className="dot" /> Ready for quotation</div>
          <a href="#products">Choose a product →</a>
        </div>
      </section>

      <section className="categoryStrip" aria-label="Product categories">
        {categories.map((category) => (
          <a href={`#${category.name.toLowerCase()}`} key={category.name}>
            <strong>{category.name}</strong>
            <small>{category.count} product positions</small>
          </a>
        ))}
      </section>

      <section className="section productsSection" id="products">
        <div className="sectionHead">
          <div><p className="eyebrow">Product catalog</p><h2>Specific products available for B2B request.</h2></div>
          <p>There is no shopping cart. The buyer sends a direct request from the product position they are interested in.</p>
        </div>

        <div className="catalogGroups">
          {["Coffee", "Pepper"].map((category) => (
            <section className="catalogGroup" id={category.toLowerCase()} key={category}>
              <div className="catalogGroupHead">
                <p className="eyebrow">{category}</p>
                <h3>{category === "Coffee" ? "Vietnamese coffee for wholesale and private-label supply." : "Vietnamese pepper for wholesale and food-production supply."}</h3>
              </div>

              <div className="productList">
                {featuredProducts.filter((product) => product.category === category).map((product) => (
                  <article className="productRow" key={product.slug}>
                    <div className="productOverview">
                      <div className="productMedia"><img src={product.image} alt={product.name} /><span>{product.category}</span></div>
                      <div className="productBody">
                        <small>{product.origin}</small>
                        <h3>{product.name}</h3>
                        <p>{product.short}</p>
                        <dl>{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
                        <div className="productMeta"><span><small>MOQ</small><strong>{product.moq}</strong></span><span><small>Availability</small><strong>{product.availability}</strong></span></div>
                        <p className="incoterms"><strong>Incoterms:</strong> {product.incoterms.join(" · ")}</p>
                      </div>
                    </div>

                    <form className="productRequest" action="#request-sent">
                      <input type="hidden" name="product" value={product.name} />
                      <div className="requestHead">
                        <span>REQUEST THIS PRODUCT</span>
                        <strong>Request quotation</strong>
                      </div>
                      <label>
                        Quantity
                        <input name="quantity" placeholder="e.g. 10 tons" required />
                      </label>
                      <label>
                        Product format
                        <select name="format" defaultValue="">
                          <option value="" disabled>Select format</option>
                          {product.requestFormats.map((format) => <option key={format}>{format}</option>)}
                        </select>
                      </label>
                      <label>
                        Packaging
                        <select name="packaging" defaultValue="">
                          <option value="" disabled>Select packaging</option>
                          {product.packaging.map((pack) => <option key={pack}>{pack}</option>)}
                        </select>
                      </label>
                      <label>
                        Destination
                        <input name="destination" placeholder="City, country" required />
                      </label>
                      <label>
                        Company / contact
                        <input name="contact" placeholder="Name, company, email or WhatsApp" required />
                      </label>
                      <label>
                        Requirements
                        <textarea name="requirements" placeholder="Target price, roast profile, grind, certificates, OEM requirements…" />
                      </label>
                      <button className="primary" type="submit">Send product request</button>
                      <small className="requestNote">Current price, availability and commercial terms are confirmed individually for each request.</small>
                    </form>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section howSection" id="how">
        <div className="sectionHead"><div><p className="eyebrow">How ordering works</p><h2>A direct B2B request, not an online checkout.</h2></div></div>
        <div className="steps">
          {[
            ["01","Choose a product","Open the exact coffee or pepper position you need."],
            ["02","Fill the request table","Specify quantity, format, packaging, destination and requirements."],
            ["03","Receive quotation","We confirm current price, supplier, MOQ, lead time and commercial terms."],
            ["04","Approve & ship","Samples, documents, QC, production and logistics are coordinated after approval."]
          ].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionHead">
          <div><p className="eyebrow">Trade services</p><h2>Services come after the product.</h2></div>
          <p>The product catalog is the primary entry point. Globerion then coordinates the work required to complete the international supply.</p>
        </div>
        <div className="serviceGrid">
          {["Supplier verification","Samples & specifications","Quality control","Export documentation","Freight & logistics","OEM / private label"].map((service) => <article key={service}><h3>{service}</h3><p>Applied to the selected product and buyer requirements as part of the supply project.</p></article>)}
        </div>
      </section>

      <section className="requestSent" id="request-sent">
        <strong>Product request prepared</strong>
        <p>The next integration step will connect these product forms to Globerion email / CRM so every request arrives with the selected product and specifications.</p>
      </section>

      <footer id="about"><strong>GLOBERION GROUP</strong><p>Vietnam-based B2B product sourcing, supply coordination and international trade operations.</p><small>Globerion 2.0 · Product-first architecture</small></footer>
    </main>
  );
}
