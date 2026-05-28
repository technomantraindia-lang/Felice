const fs = require('fs');

const filePath = 'c:/Users/Admin/Desktop/Dhruv/Felice/products.html';
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to LF (\n) to make regexes and indexOf reliable across all platforms
content = content.replace(/\r\n/g, '\n');

// 1. CSS grid template columns
const oldGridCSS = `    .horizontal-product-card {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      align-items: center;
      gap: 48px;
      padding: 48px;`;

const newGridCSS = `    .horizontal-product-card {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      align-items: center;
      gap: 40px;
      padding: 40px;`;

content = content.replace(oldGridCSS, newGridCSS);

// 2. Alternating layout on desktop
const oldAlternatingCSS = `    /* Alternating layout on desktop */
    @media (min-width: 1025px) {
      .horizontal-product-card:nth-child(even) {
        grid-template-columns: 1.15fr 1fr;
      }

      .horizontal-product-card:nth-child(even) .card-content-stage {
        grid-column: 2;
      }
    }`;

const newAlternatingCSS = `    /* Alternating layout on desktop */
    @media (min-width: 1025px) {
      .horizontal-product-card:nth-child(even) {
        grid-template-columns: 1fr 1.3fr;
      }

      .horizontal-product-card:nth-child(even) .card-content-stage {
        grid-column: 2;
      }

      .horizontal-product-card:nth-child(even) .card-visual-stage {
        grid-column: 1;
        grid-row: 1;
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        transition: background 0.4s ease, border-color 0.4s ease;
      }
    }`;

content = content.replace(oldAlternatingCSS, newAlternatingCSS);

// 3. Carousel slides styling
const oldCarouselCSS = `    .carousel-slides {
      position: relative;
      width: 100%;
      height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(130deg, rgba(139, 197, 63, 0.06), rgba(255, 179, 26, 0.04));
      border-radius: 28px;
      border: 1px solid rgba(139, 197, 63, 0.08);
      padding: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      overflow: hidden;
    }`;

const newCarouselCSS = `    .carousel-slides {
      position: relative;
      width: 360px;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(130deg, rgba(139, 197, 63, 0.06), rgba(255, 179, 26, 0.04));
      border-radius: 28px;
      border: 1px solid rgba(139, 197, 63, 0.08);
      padding: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      overflow: hidden;
    }

    .product-image-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      width: 360px;
      height: 360px;
      background: linear-gradient(130deg, rgba(139, 197, 63, 0.06), rgba(255, 179, 26, 0.04));
      border-radius: 28px;
      border: 1px solid rgba(139, 197, 63, 0.08);
      padding: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
      overflow: hidden;
    }

    .product-image-container img {
      max-width: 95%;
      max-height: 360px;
      object-fit: contain;
      filter: drop-shadow(0 12px 24px rgba(27, 34, 20, 0.12));
      animation: float-y 6s ease-in-out infinite;
      transition: transform 0.4s ease;
    }

    .horizontal-product-card:hover .product-image-container img {
      transform: scale(1.06) rotate(1deg);
    }`;

content = content.replace(oldCarouselCSS, newCarouselCSS);

// 4. Responsive adjustments (tablet/mobile queries)
const oldResponsiveCSS = `    /* Responsive adjustments */
    @media (max-width: 1200px) {
      .hero-overlay {
        left: max(24px, calc((100vw - var(--container)) / 2));
      }
    }

    @media (max-width: 1024px) {
      .hero-overlay {
        max-width: 460px;
      }

      .hero-title {
        font-size: clamp(1.8rem, 4.5vw, 2.7rem);
      }

      .showcase-header {
        margin-bottom: 56px;
      }

      /* Responsive styles for Horizontal Wide Cards on tablet and mobile */
      .horizontal-cards-container {
        gap: 32px;
      }

      .horizontal-product-card {
        grid-template-columns: 1fr !important;
        gap: 32px;
        padding: 36px;
        border-radius: 32px;
      }

      /* Stack visual stage on top of content stage on smaller screens */
      .card-visual-stage {
        height: 220px;
        padding: 12px;
      }

      .carousel-slides {
        height: 196px;
      }`;

const newResponsiveCSS = `    /* Responsive adjustments */
    @media (max-width: 1200px) {
      .hero-overlay {
        left: max(24px, calc((100vw - var(--container)) / 2));
      }
    }

    @media (max-width: 1024px) {
      .hero-slideshow {
        min-height: 0 !important;
        height: auto !important;
        aspect-ratio: 16 / 9;
        margin-bottom: 48px;
      }

      .hero-overlay {
        top: 50%;
        max-width: 460px;
      }

      .hero-title {
        font-size: clamp(1.8rem, 4.5vw, 2.7rem);
      }

      .showcase-header {
        margin-bottom: 56px;
      }

      /* Responsive styles for Horizontal Wide Cards on tablet and mobile */
      .horizontal-cards-container {
        gap: 32px;
      }

      .horizontal-product-card {
        grid-template-columns: 1fr !important;
        gap: 32px;
        padding: 36px;
        border-radius: 32px;
      }

      /* Stack visual stage on top of content stage on smaller screens */
      .card-visual-stage {
        height: auto;
        padding: 0;
      }

      .carousel-slides,
      .product-image-container {
        width: 280px !important;
        height: 280px !important;
        margin: 0 auto;
      }

      .product-image-container img {
        max-height: 180px;
      }
    }

    @media (max-width: 760px) {
      .carousel-slides,
      .product-image-container {
        width: 220px !important;
        height: 220px !important;
        margin: 0 auto;
      }
    }`;

content = content.replace(oldResponsiveCSS, newResponsiveCSS);

// 5. Product Showcase HTML replacing with Carousels Markup
const oldShowcaseHTMLStart = `    <!-- Product Showcase Section -->
    <section class="product-showcase">`;
const oldShowcaseHTMLEnd = `    </section>

    <!-- Premium CTA Section -->`;

const newShowcaseHTML = `    <!-- Product Showcase Section -->
    <section class="product-showcase">
      <div class="showcase-header">
        <h2>Our <span>Product Collection</span></h2>
        <p>Discover our expertly crafted personal care essentials designed for everyday wellness and sustainable living.
        </p>
      </div>

      <div class="horizontal-cards-container scroll-reveal reveal-scale">
        <!-- Product 1: Paper Stick -->
        <div class="horizontal-product-card">
          <div class="card-content-stage">
            <div class="card-number-badge">01</div>
            <h3 class="product-title">Paper Stick Cotton Buds</h3>
            <p class="product-desc">100% biodegradable everyday essentials with pure organic cotton tips and
              eco-friendly paper stems. Available in different packings of 100 and 200 sticks.</p>
            <div class="product-features" style="margin-bottom: 20px;">
              <span class="feature-tag">Pure Cotton</span>
              <span class="feature-tag">Eco-Friendly</span>
              <span class="feature-tag">100/200 Sticks</span>
              <span class="feature-tag">Dual Tips</span>
            </div>
            <a href="product-paper-buds.html" class="view-details-btn">
              View Specification
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="card-visual-stage">
            <div class="visual-glow-circle"></div>
            <div class="product-carousel">
              <div class="carousel-slides">
                <div class="carousel-slide active">
                  <img src="image&amp;video/products/paper%20stick%20product.png"
                    alt="Paper Stick Cotton Buds Packaging 1" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/paper%20stick%201.png" alt="Paper Stick Cotton Buds Packaging 2" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/your%20brand%20.png" alt="Paper Stick Cotton Buds Private Label" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 2: Bamboo Sticks -->
        <div class="horizontal-product-card">
          <div class="card-content-stage">
            <div class="card-number-badge">02</div>
            <h3 class="product-title">Bamboo Stick Cotton Buds</h3>
            <p class="product-desc">Naturally sturdy bamboo stems with premium organic cotton and zero-plastic footprint
              for conscious care. Available in different packings of 100 and 200 sticks.</p>
            <div class="product-features" style="margin-bottom: 20px;">
              <span class="feature-tag">Bamboo Core</span>
              <span class="feature-tag">Zero Plastic</span>
              <span class="feature-tag">100/200 Packs</span>
              <span class="feature-tag">Lint-Free</span>
            </div>
            <a href="product-bamboo-buds.html" class="view-details-btn">
              View Specification
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="card-visual-stage">
            <div class="visual-glow-circle"></div>
            <div class="product-carousel">
              <div class="carousel-slides">
                <div class="carousel-slide active">
                  <img src="image&amp;video/products/bamboo%20stick%20product.png"
                    alt="Bamboo Stick Cotton Buds Packaging 1" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/bamboo%20stick%20product%202%20.png"
                    alt="Bamboo Stick Cotton Buds Packaging 2" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/bamboo%204%20.png" alt="Bamboo Stick Cotton Buds Packaging 3" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/bambbo%203.png" alt="Bamboo Stick Cotton Buds Packaging 4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 3: Toothbrush -->
        <div class="horizontal-product-card">
          <div class="card-content-stage">
            <div class="card-number-badge">03</div>
            <h3 class="product-title">Organic Toothbrush</h3>
            <p class="product-desc">Premium ergonomic design with soft, BPA-free bristles for effective oral care and
              gum health.</p>
            <div class="product-features" style="margin-bottom: 20px;">
              <span class="feature-tag">Soft Bristles</span>
              <span class="feature-tag">Ergonomic</span>
              <span class="feature-tag">Eco-Friendly</span>
              <span class="feature-tag">Dentist OK</span>
            </div>
            <a href="product-toothbrush.html" class="view-details-btn">
              View Specification
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="card-visual-stage">
            <div class="visual-glow-circle"></div>
            <div class="product-carousel">
              <div class="carousel-slides">
                <div class="carousel-slide active">
                  <img src="image&amp;video/products/brush%201.png" alt="Organic Toothbrush Packaging 1" />
                </div>
                <div class="carousel-slide">
                  <img src="image&amp;video/products/brush%202%20.png" alt="Organic Toothbrush Packaging 2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product 4: Cotton Balls -->
        <div class="horizontal-product-card">
          <div class="card-content-stage">
            <div class="card-number-badge">04</div>
            <h3 class="product-title">Organic Cotton Balls</h3>
            <p class="product-desc">Feather-soft, sterilized pure cotton spheres for delicate facial cleansing and
              pediatric skincare.</p>
            <div class="product-features" style="margin-bottom: 20px;">
              <span class="feature-tag">100% Pure</span>
              <span class="feature-tag">Sterilized</span>
              <span class="feature-tag">Baby Safe</span>
              <span class="feature-tag">Hypoallergenic</span>
            </div>
            <a href="product-cotton-balls.html" class="view-details-btn">
              View Specification
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div class="card-visual-stage">
            <div class="visual-glow-circle"></div>
            <div class="product-image-container">
              <img src="image&amp;video/products/cotton%20balls.png" alt="Organic Cotton Balls" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium CTA Section -->`;

// Find where showcase section is
const startIdx = content.indexOf(oldShowcaseHTMLStart);
const endIdx = content.indexOf(oldShowcaseHTMLEnd);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newShowcaseHTML + content.substring(endIdx + oldShowcaseHTMLEnd.length - 30); // 30 is length of '    <!-- Premium CTA Section -->'
  console.log('Successfully replaced showcase section HTML');
} else {
  console.error('Failed to find showcase section index');
}

// 6. Header logo and footer logo
content = content.replace(/image&video\/new%20logo%20%20in%20white\.png/g, 'image&video/products/final%20logo.png');
content = content.replace(/image&amp;video\/new%20logo%20%20in%20white\.png/g, 'image&amp;video/products/final%20logo.png');

// Update brand logo dimensions by 10%
content = content.replace(/width:\s*306px;\s*height:\s*106px;/g, 'width: 275px; height: 95px;');
content = content.replace(/width:\s*208px;\s*height:\s*78px;/g, 'width: 187px; height: 70px;');

// Standardize brand img CSS
content = content.replace(/\.brand\s+img\s*\{\s*position:\s*absolute;\s*width:\s*306px;\s*height:\s*306px;[\s\S]*?top:\s*-85px;[\s\S]*?\}/g, `.brand img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
      top: 0;
      left: 0;
      display: block;
      margin: 0;
    }`);

// Standardize footer logo wrapping container
content = content.replace(/<div class="footer-logo-wrap" style="margin-bottom: 6px; width: 240px; height: 95px; overflow: hidden; position: relative;">[\s\S]*?<\/div>/gi, `<div class="footer-logo-wrap" style="margin-bottom: 6px; width: 240px; height: 95px; overflow: hidden; position: relative; display: flex; align-items: center;">
          <img src="image&amp;video/products/final%20logo.png" alt="Felice new logo"
            style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 4px 10px rgba(139, 197, 63, 0.15));" />
        </div>`);

// Footer updates: Services to Products
content = content.replace(/Services\s*<span style="position: absolute; left: 0; bottom: 0; width: 30px; height: 2px; background: var\(--felice-green\);"><\/span>/g, `Products
          <span style="position: absolute; left: 0; bottom: 0; width: 30px; height: 2px; background: var(--felice-green);"></span>`);

// Remove LinkedIn social link from footer
const oldLinkedInLink = `          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>`;
content = content.replace(oldLinkedInLink, '');

// Save the modified file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully completed restoration of products.html');
