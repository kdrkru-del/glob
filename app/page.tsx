import { featuredProducts, products } from "@/data/products";

const categories = [
  { name: "Coffee", count: products.filter((p) => p.category === "Coffee").length },
  { name: "Spices", count: products.filter((p) => p.category === "Spices").length },
  { name: "Nuts", count: products.filter((p) => p.category === "Nuts").length },
  { name: "Dried Fruit", count: products.filter((p) => p.category === "Dried Fruit").length },
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Globerion Group home">
          <img src="https://globeriongroup.com/assets/logo-mark.png" alt="" />
          <span><strong>Globerion Group</strong><small>B2B Trade Platform</small></span>
        </a>
        <nav>
          <a href="#products">Products</a>
          <a href="#how">How it works</a>
          <a href="#services">Trade services</a>
          <a href="#about">Company</a>
        </nav>
        <a className="headerCta" href="#request">Request quote</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Vietnam → international B2B markets</p>
          <h1>Source real products from Vietnam.</h1>
          <p className="lead">Browse specific products, compare supply terms and send one structured request for price, samples, packaging and delivery.</p>
          <div className="heroActions">
            <a className="primary" href="#products">Browse products</a>
            <a className="secondary" href="#request">Start a trade request</a>
          </div>
          <div className="trustRow">
            <span>Supplier sourcing</span><span>Quality control</span><span>Export documents</span><span>Logistics</span>
          </div>
        </div>

        <div className="tradePanel" aria-label="Trade request preview">
          <div className="panelHead"><span>TRADE REQUEST</span><strong>GLB / NEW</strong></div>
          <label>Product<input value="Vietnam Robusta Screen 18" readOnly /></label>
          <div className="fieldGrid">
            <label>Volume<input value="20 tons" readOnly /></label>
            <label>Destination<input value="Moscow" readOnly /></label>
          </div>
          <div className="fieldGrid">
            <label>Supply term<input value="FOB / CIF" readOnly /></label>
            <label>Sample<input value="Required" readOnly /></label>
          </div>
          <div className="statusLine"><span className="dot" /> Ready for quotation</div>
          <a href="#request">Build your request →</a>
        </div>
      </section>

      <section className="categoryStrip" aria-label="Product categories">
        {categories.map((category) => <a href="#products" key={category.name}><strong>{category.name}</strong><small>{category.count} listed products</small></a>)}
      </section>

      <section className="section productsSection" id="products">
        <div className="sectionHead">
          <div><p className="eyebrow">Product catalog</p><h2>Products available for B2B supply.</h2></div>
          <p>Not broad categories — concrete product positions with specifications, MOQ, packaging, origin and supply terms.</p>
        </div>
        <div className="productGrid">
          {featuredProducts.map((product) => (
            <article className="productCard" key={product.slug}>
              <div className="productMedia"><img src={product.image} alt={product.name} /><span>{product.category}</span></div>
              <div className="productBody">
                <small>{product.origin}</small>
                <h3>{product.name}</h3>
                <p>{product.short}</p>
                <dl>{product.specs.slice(0, 3).map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
                <div className="productMeta"><span><small>MOQ</small><strong>{product.moq}</strong></span><span><small>Availability</small><strong>{product.availability}</strong></span></div>
                <div className="cardActions"><a href="#request">Request price</a><button type="button">Add to inquiry</button></div>
              </div>
            </article>
          ))}
        </div>
        <div className="catalogCta"><a className="secondary" href="#request">View full catalog →</a></div>
      </section>

      <section className="section howSection" id="how">
        <div className="sectionHead"><div><p className="eyebrow">How ordering works</p><h2>From product selection to shipment.</h2></div></div>
        <div className="steps">
          {[['01','Choose products','Select one or several products from the catalog.'],['02','Set requirements','Add volume, destination, packaging, Incoterm and sample request.'],['03','Receive quotation','We confirm supplier, current price, lead time and commercial terms.'],['04','Approve & ship','Samples, documents, QC, production and logistics are coordinated.']].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="section servicesSection" id="services">
        <div className="sectionHead">
          <div><p className="eyebrow">Trade services</p><h2>Services support the product — not the other way around.</h2></div>
          <p>Once the buyer finds the right product, Globerion coordinates the work required to make the transaction happen.</p>
        </div>
        <div className="serviceGrid">
          {['Supplier verification','Samples & specifications','Quality control','Export documentation','Freight & logistics','OEM / private label'].map((service) => <article key={service}><h3>{service}</h3><p>Integrated into the same trade request and coordinated around the selected product.</p></article>)}
        </div>
      </section>

      <section className="section requestSection" id="request">
        <div>
          <p className="eyebrow">Start a request</p>
          <h2>Tell us what you want to buy.</h2>
          <p>We will return with product availability, current commercial terms and the next practical step.</p>
        </div>
        <form>
          <div className="fieldGrid"><label>Product<input placeholder="e.g. Robusta Screen 18" /></label><label>Quantity<input placeholder="e.g. 20 tons" /></label></div>
          <div className="fieldGrid"><label>Destination<input placeholder="City, country" /></label><label>Company email<input type="email" placeholder="name@company.com" /></label></div>
          <label>Requirements<textarea placeholder="Packaging, Incoterm, target price, samples, certificates…" /></label>
          <button className="primary" type="button">Request quotation</button>
        </form>
      </section>

      <footer id="about"><strong>GLOBERION GROUP</strong><p>Vietnam-based B2B sourcing, supply coordination and international trade operations.</p><small>Product catalog prototype · Globerion 2.0</small></footer>
    </main>
  );
}
