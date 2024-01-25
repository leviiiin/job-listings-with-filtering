export function createVacancyFilter(filters, updateFilters) {
  // updateFilters
  // filterBtn = updateFilters([...filters])
  // resetBtn = updateFilters([]);

  let buttonsHTML = filters.map(filter => `<button class="button button--primary button--clear" data-category="${filter.toLowerCase()}">${filter}</button>`).join('');

  const el = document.createElement('div');
  el.className = 'vacancies-filter';
  el.innerHTML = `
    <div class="vacancies-filter__btns" id="filterBtns">
      ${buttonsHTML}
    </div >
    <span class="vacancies-filter__reset">Clear</span>
  `;

  const btns = el.querySelectorAll('.button--clear')

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target.closest('.button--clear');

      if (target) {
        const category = target.getAttribute('data-category');
        const newFilters = filters.filter(filter => filter !== category);
        updateFilters(newFilters);
        target.remove();
      }
    })
  });

  const resetBtn = el.querySelector('.vacancies-filter__reset')
  resetBtn.addEventListener('click', () => {

    updateFilters([]);
  });

  return el;
}

