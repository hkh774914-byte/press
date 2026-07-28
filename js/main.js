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
        // Initial hidden style for smooth reveal
        el.classList.add('motion-fade');

        // Viewport trigger using Motion inView
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
        animate(btn, { scale: 1.05 }, { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] });
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

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }

  // Interactive Glass Card Mouse Tracking Radial Glow
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
