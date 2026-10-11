// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress bar + sticky nav shadow
const progressBar = document.getElementById('progressBar');
const nav = document.getElementById('nav');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
  nav.classList.toggle('scrolled', scrollTop > 10);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Note: section entrance animation is handled entirely by a CSS
// load-time keyframe (see .reveal / @keyframes fadeInUp in styles.css),
// not scroll-triggered JS -- this guarantees content is visible
// regardless of scroll position, JS execution, or how a crawler/
// screenshot tool captures the page.
