document.addEventListener('DOMContentLoaded', () => {
  const widget = document.querySelector('.sticky-widget-div');
  const button = document.querySelector('.sticky-widget-div-button');

  if (!widget || !button) return;

  const toggleWidgetVisibility = () => {
    const SCROLL_THRESHOLD = 500;

    if (window.scrollY > SCROLL_THRESHOLD) {
      widget.classList.add('sticky-widget-visible');
    } else {
      widget.classList.remove('sticky-widget-visible');
    }
  };

  window.addEventListener('scroll', toggleWidgetVisibility);
  toggleWidgetVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
