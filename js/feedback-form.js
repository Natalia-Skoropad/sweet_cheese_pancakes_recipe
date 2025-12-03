(() => {
  const form = document.querySelector('.feedback-section-form');
  if (!form) return;

  const submitBtn = form.querySelector('.feedback-section-form-button');
  if (!submitBtn) return;

  const requiredSelectors = [
    'input[name="username"]',
    'input[name="user_email"]',
    'textarea[name="description"]',
    'select[name="dish_opinion"]',
    'input[name="consent"]',
  ];

  const getRequiredFields = () =>
    requiredSelectors
      .map(selector => form.querySelector(selector))
      .filter(Boolean);

  const getRatingInputs = () =>
    Array.from(form.querySelectorAll('input[name="rating"]'));

  const isRatingValid = () => getRatingInputs().some(radio => radio.checked);

  const checkValidity = () => {
    const fields = getRequiredFields();

    const baseValid = fields.every(field => {
      if (field.type === 'checkbox') {
        return field.checked;
      }

      const value = field.value.trim();
      return value.length > 0 && field.checkValidity();
    });

    const allValid = baseValid && isRatingValid();

    submitBtn.disabled = !allValid;
  };

  form.addEventListener('input', checkValidity);
  form.addEventListener('change', checkValidity);

  // початкова перевірка
  checkValidity();
})();
