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

    scroll(animate(progressBar, { scaleX: [0, 1] }));

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

    const showcaseCard = document.querySelector('.showcase-frame');
    if (showcaseCard) {
      inView(showcaseCard, () => {
        animate(showcaseCard, { opacity: [0, 1], scale: [0.94, 1] }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] });
      });
    }

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

  // Ensure Mobile Toggle Button Exists in Navbar Container
  const navContainer = document.querySelector('.nav-container');
  let menuToggle = document.querySelector('.menu-toggle');
  if (!menuToggle && navContainer) {
    menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle Navigation Menu');
    menuToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <span style="font-size: 13px; font-weight: 700; font-family: var(--font-display);">Menu</span>
    `;
    navContainer.appendChild(menuToggle);
  }

  // Inject Mobile Menu Drawer if not present
  let mobileMenu = document.querySelector('.mobile-menu');
  if (!mobileMenu && navbar) {
    mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const activePath = window.location.pathname.split('/').pop() || 'index.html';
    mobileMenu.innerHTML = `
      <ul class="mobile-nav-links">
        <li><a href="index.html" class="mobile-nav-link ${activePath === 'index.html' || activePath === '' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html" class="mobile-nav-link ${activePath === 'about.html' ? 'active' : ''}">About Us</a></li>
        <li><a href="products.html" class="mobile-nav-link ${activePath === 'products.html' ? 'active' : ''}">Products Catalog</a></li>
        <li><a href="services.html" class="mobile-nav-link ${activePath === 'services.html' ? 'active' : ''}">Services</a></li>
        <li><a href="portfolio.html" class="mobile-nav-link ${activePath === 'portfolio.html' ? 'active' : ''}">Portfolio</a></li>
        <li><a href="faq.html" class="mobile-nav-link ${activePath === 'faq.html' ? 'active' : ''}">FAQ</a></li>
        <li><a href="contact.html" class="mobile-nav-link ${activePath === 'contact.html' ? 'active' : ''}">Contact & Location</a></li>
      </ul>
      <div style="margin-top: 20px; padding: 0 4px;">
        <a href="contact.html" class="home-circle" style="width: 100%; justify-content: center; padding: 14px; font-size: 15px;">
          Order Now &rarr;
        </a>
      </div>
    `;
    navbar.appendChild(mobileMenu);
  }

  // Handle Mobile Menu Open/Close Toggling
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      } else {
        mobileMenu.classList.add('open');
        menuToggle.classList.add('active');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      }
    });

    // Close when clicking any link inside mobile menu
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      });
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
