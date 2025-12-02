// js/header.js
(() => {
  const refs = {
    openBtn: document.querySelector('[data-menu-open]'),
    closeBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  if (!refs.openBtn || !refs.menu) return;

  const toggleMenu = () => {
    const isOpen = refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll', isOpen);
    refs.openBtn.setAttribute('aria-expanded', String(isOpen));
  };

  refs.openBtn.addEventListener('click', toggleMenu);
  refs.closeBtn?.addEventListener('click', toggleMenu);

  refs.menu.addEventListener('click', event => {
    const link = event.target.closest('.mobile-menu-nav-list-item-link');
    if (!link) return;
    toggleMenu();
  });
})();
