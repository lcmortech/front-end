// script.js (ES6+ module) — controls theme, menu toggling, and small client-side behaviors.
// No third-party libs. Progressive enhancement for contact form (client-side demo).

const htmlEl = document.documentElement;
const menuToggle = document.getElementById('menu-toggle');
const primaryMenu = document.getElementById('primary-menu');
const themeToggle = document.getElementById('theme-toggle');
const yearSpan = document.getElementById('year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// ---- Init: set current year
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ---- Theme handling
const THEME_KEY = 'author_theme_preference';

function getPreferredTheme() {
  // 1. localStorage preference
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;

  // 2. system preference
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme) {
  // set attribute on root for CSS variables override
  htmlEl.setAttribute('data-theme', theme);
  // update toggle aria
  if (themeToggle) {
    const pressed = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(pressed));
    themeToggle.title = pressed ? 'Dark mode' : 'Light mode';
  }
}

// initialize theme early
applyTheme(getPreferredTheme());

// clicking theme toggle
themeToggle?.addEventListener('click', () => {
  const current = htmlEl.getAttribute('data-theme') || getPreferredTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

// ---- Responsive menu toggle (accessible)
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  if (primaryMenu) {
    if (expanded) {
      primaryMenu.hidden = true;
    } else {
      primaryMenu.hidden = false;
      // focus first link for keyboard users
      const firstLink = primaryMenu.querySelector('a');
      firstLink?.focus();
    }
  }
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  if (!menuToggle || !primaryMenu) return;
  const isClickInside = menuToggle.contains(e.target) || primaryMenu.contains(e.target);
  if (!isClickInside && !primaryMenu.hidden) {
    primaryMenu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// Close menu on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (primaryMenu && !primaryMenu.hidden) {
      primaryMenu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  }
});

// ---- Contact form (client-side validation + demo submit) ---
// Note: this is a demo. In a production site, submit to a backend or service (e.g., Formspree, Netlify Forms).

contactForm?.addEventListener('submit', (ev) => {
  ev.preventDefault();

  // Basic built-in validation check
  if (!contactForm.reportValidity()) {
    formStatus.hidden = false;
    formStatus.textContent = 'Please check the form fields highlighted.';
    return;
  }

  // Gather data
  const data = new FormData(contactForm);
  const payload = Object.fromEntries(data.entries());

  // Provide immediate feedback
  formStatus.hidden = false;
  formStatus.textContent = 'Sending…';
  contactForm.querySelector('button[type="submit"]').disabled = true;

  // Simulate async send (demo) — do not actually send here
  setTimeout(() => {
    // success path (for demo)
    formStatus.textContent = 'Thanks! Your message has been recorded locally for this demo. Integrate a backend to receive messages.';
    contactForm.reset();
    contactForm.querySelector('button[type="submit"]').disabled = false;

    // For real integrations: send "payload" via fetch() to your API endpoint here.
    // Example (server required):
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload), headers: {'Content-Type':'application/json'} })
    //   .then(res => res.json()).then(...).catch(...);
  }, 700);
});

// Improve keyboard UX: ensure the main element receives focus from skip link
document.getElementById('main')?.addEventListener('keydown', (e) => {
  // no-op, reserved for future; keep for progressive enhancement hook
});

// Expose a small API for adding stories/reviews/news dynamically (optional)
export function addNews({ dateISO, text }) {
  const newsSection = document.querySelector('#news .timeline');
  if (!newsSection) return;
  const li = document.createElement('li');
  const time = document.createElement('time');
  time.setAttribute('datetime', dateISO);
  time.textContent = new Date(dateISO).toLocaleDateString();
  li.appendChild(time);
  const p = document.createElement('p');
  p.textContent = text;
  li.appendChild(p);
  newsSection.prepend(li);
}
