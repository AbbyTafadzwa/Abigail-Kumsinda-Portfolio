document.addEventListener('DOMContentLoaded', function () {
  /* ---------------------------
     1) Hero entrance animations
  ---------------------------- */
  const hero = document.querySelector('.hero-animate');
  if (hero) {
    setTimeout(() => hero.classList.add('is-in'), 80);
  }

  const heroMedia = document.querySelector('.hero-media');
  if (heroMedia) {
    setTimeout(() => heroMedia.classList.add('is-in'), 160);
  }

  /* ---------------------------
     2) Smooth scrolling
  ---------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only smooth-scroll for real section links like #home, #projects
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // close mobile menu if open
      if (window.innerWidth < 900) {
        const links = document.querySelector('.nav-links');
        if (links) links.style.display = 'none';
      }
    });
  });

  /* ---------------------------
     3) Mobile nav toggle
  ---------------------------- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      const links = document.querySelector('.nav-links');
      if (!links) return;

      if (getComputedStyle(links).display === 'none') {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.gap = '12px';
        links.style.position = 'absolute';
        links.style.right = '20px';
        links.style.top = '60px';
        links.style.background = 'var(--bg)';
        links.style.padding = '12px';
        links.style.boxShadow = '0 6px 18px rgba(15,23,42,0.18)';
        links.style.borderRadius = '10px';
        links.style.border = '1px solid rgba(100,116,139,0.25)';
      } else {
        links.style.display = 'none';
      }
    });
  }

  /* ---------------------------
     4) Reveal-on-scroll
  ---------------------------- */
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach((section) => {
      const windowHeight = window.innerHeight;
      const elementTop = section.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        section.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  /* ---------------------------
     5) Dark mode toggle (switch)
  ---------------------------- */
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
