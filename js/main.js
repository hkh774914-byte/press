document.addEventListener('DOMContentLoaded', () => {
  const MotionLib = window.Motion || window.motion;

  // Create Scroll Progress Indicator
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.prepend(progressBar);

  // Fade-in Main container on page load
  const main = document.querySelector('main');
  if (main && MotionLib) {
    MotionLib.animate(main, { opacity: [0, 1] }, { duration: 0.4 });
  }

  if (MotionLib) {
    const { animate, inView, scroll } = MotionLib;

    // 1. Top Scroll Progress Indicator
    scroll(animate(progressBar, { scaleX: [0, 1] }));

    // 2. Target ALL key elements for Universal Viewport Fade-In
    const animateTargets = [
      '.badge-tag',
      '.hero-title',
      '.hero-subtitle',
      '.hero-actions',
      '.trust-item',
      '.section-header',
      '.glass-card',
      '.stat-number',
      '.stat-label',
      '.cta-banner',
      '.footer-grid > div',
      'form label',
      'form input',
      'form select',
      'form textarea',
      'form button'
    ];

    animateTargets.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        el.classList.add('motion-fade');
        inView(el, () => {
          animate(el, 
            { opacity: [0, 1], y: [24, 0] }, 
            { duration: 0.55, delay: (index % 4) * 0.08, easing: [0.22, 1, 0.36, 1] }
          );
        });
      });
    });

    // 3. Floating Showcase Card subtle float animation
    const showcaseCard = document.querySelector('.showcase-frame');
    if (showcaseCard) {
      inView(showcaseCard, () => {
        animate(showcaseCard, { opacity: [0, 1], scale: [0.94, 1] }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] });
      });
    }

    // 4. Spring Hover Animations on Pills & Buttons
    const interactiveElements = document.querySelectorAll('.home-circle, .nav-pill, .logo-badge');
    interactiveElements.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        animate(btn, { scale: 1.04 }, { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] });
      });
      btn.addEventListener('mouseleave', () => {
        animate(btn, { scale: 1 }, { duration: 0.2 });
      });
    });
  }

  // Sticky Navbar Scroll Handler
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Auto-inject Mobile Drawer Menu if not in HTML
  let mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu && navbar) {
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    // Copy nav links from desktop navbar
    const activePath = window.location.pathname.split('/').pop() || 'index.html';
    mobileMenu.innerHTML = `
      <ul class="mobile-nav-links">
        <li><a href="index.html" class="mobile-nav-link ${activePath === 'index.html' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html" class="mobile-nav-link ${activePath === 'about.html' ? 'active' : ''}">About</a></li>
        <li><a href="products.html" class="mobile-nav-link ${activePath === 'products.html' ? 'active' : ''}">Products</a></li>
        <li><a href="services.html" class="mobile-nav-link ${activePath === 'services.html' ? 'active' : ''}">Services</a></li>
        <li><a href="portfolio.html" class="mobile-nav-link ${activePath === 'portfolio.html' ? 'active' : ''}">Portfolio</a></li>
        <li><a href="faq.html" class="mobile-nav-link ${activePath === 'faq.html' ? 'active' : ''}">FAQ</a></li>
        <li><a href="contact.html" class="mobile-nav-link ${activePath === 'contact.html' ? 'active' : ''}">Contact</a></li>
      </ul>
      <div style="margin-top: 24px; padding: 0 16px;">
        <a href="contact.html" class="home-circle" style="width: 100%; justify-content: center; padding: 14px; font-size: 15px;">
          Order Now &rarr;
        </a>
      </div>
    `;
    navbar.appendChild(mobileMenu);
  }

  // Mobile Menu Toggle Click Handler
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      }
    });
  }

  // Interactive Glass Card Mouse Tracking Radial Glow
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
