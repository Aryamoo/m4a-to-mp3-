// Header shadow on scroll
const header = document.querySelector('[data-elevate-on-scroll]');
let lastScrollY = 0;
const onScroll = () => {
  const y = window.scrollY || 0;
  if (!header) return;
  if (y > 10 && !header.classList.contains('scrolled')) header.classList.add('scrolled');
  else if (y <= 10 && header.classList.contains('scrolled')) header.classList.remove('scrolled');
  lastScrollY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Carousel
function setupCarousel(root) {
  if (!root) return;
  const slidesWrapper = root.querySelector('.slides');
  const slides = Array.from(root.querySelectorAll('.slide'));
  const prevBtn = root.querySelector('[data-dir="prev"]');
  const nextBtn = root.querySelector('[data-dir="next"]');
  const indicators = Array.from(root.querySelectorAll('.indicators [role="tab"]'));
  const autoplay = root.dataset.autoplay === 'true';
  const interval = Number(root.dataset.interval || 5000);

  let index = 0;
  let timerId = null;

  const setActive = (i, opts = { user: false }) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === index));
    indicators.forEach((dot, idx) => {
      const active = idx === index;
      dot.setAttribute('aria-selected', String(active));
      dot.tabIndex = active ? 0 : -1;
    });
    if (opts.user && autoplay) restart();
  };

  const next = () => setActive(index + 1);
  const prev = () => setActive(index - 1);

  const start = () => {
    if (!autoplay) return;
    stop();
    timerId = setInterval(next, interval);
  };
  const stop = () => { if (timerId) clearInterval(timerId); timerId = null; };
  const restart = () => { stop(); start(); };

  nextBtn?.addEventListener('click', () => setActive(index + 1, { user: true }));
  prevBtn?.addEventListener('click', () => setActive(index - 1, { user: true }));
  indicators.forEach((btn, i) => btn.addEventListener('click', () => setActive(i, { user: true })));

  // Pause on hover
  slidesWrapper?.addEventListener('pointerenter', stop);
  slidesWrapper?.addEventListener('pointerleave', start);

  // Keyboard support
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') next();
    if (e.key === 'ArrowRight') prev();
  });

  start();
}

setupCarousel(document.querySelector('.carousel'));

