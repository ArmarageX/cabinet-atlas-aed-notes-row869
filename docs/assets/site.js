(() => {
  'use strict';
  const toggle = document.querySelector('.guide-toggle');
  const panel = document.getElementById('guide-panel');
  if (!toggle || !panel) return;
  const setOpen = (open, returnFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      panel.querySelector('a').focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setOpen(false, true);
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-area')) setOpen(false);
  });
  document.addEventListener('focusin', (event) => {
    if (!event.target.closest('.nav-area')) setOpen(false);
  });
  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
})();
