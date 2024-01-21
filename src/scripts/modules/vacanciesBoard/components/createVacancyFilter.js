import { displayVacancies, handleButtonClick } from '../../../api/vacancies/getVacancies'

const vacanciesFilterBtns = document.getElementById('vacanciesFilterBtns');
const vacanciesFilter = document.getElementById('vacanciesFilter');
const clearFilter = document.getElementById('clearFilter');
export const vacanciesContainer = document.getElementById('vacanciesContainer');

export function filterVacancies(vacancies) {
  const selectedCategories = Array.from(vacanciesFilterBtns.children)
    .filter(category => category.classList.contains('button--clear'))
    .map(category => category.getAttribute('data-category').toLowerCase());

  if (selectedCategories.length === 0) {
    displayVacancies(vacancies);
    return;
  }

  const filteredVacancies = selectedCategories.reduce((accum, category) => {
    accum = accum.filter(vacancy => {
      const { role, level, languages, tools } = vacancy;
      const vacancyFilteringProperty = [role, level, ...languages, ...tools].map((el) => el.toLowerCase());
      return vacancyFilteringProperty.includes(category);
    });

    return accum;
  }, vacancies);

  if (filteredVacancies.length > 0) {
    displayVacancies(filteredVacancies);
  } else {
    displayNoResultsMessage();
  }
}

function displayNoResultsMessage() {

}


export function addFilterButton(category, data, selectedCategories) {
  const isCategorySelected = selectedCategories.includes(category);

  if (!isCategorySelected) {
    const newBtn = document.createElement('button');
    newBtn.className = 'button button--primary button--clear';
    newBtn.style.textTransform = 'capitalize';
    newBtn.innerText = category;
    newBtn.setAttribute('data-category', category);

    newBtn.addEventListener('click', function () {
      newBtn.remove();
      updateFilterDisplay();
      filterVacancies(data);
    });

    vacanciesFilterBtns.appendChild(newBtn);
    updateFilterDisplay();
  }
}


export function clearFilterButtons(data) {
  document.querySelectorAll('.button--clear').forEach(btn => btn.remove());
  updateFilterDisplay();
  filterVacancies(data);
}


export function setupFilterEventListeners(data) {
  vacanciesContainer.addEventListener('click', (event) => handleButtonClick(data, event));
  clearFilter.addEventListener('click', () => clearFilterButtons(data));
}


export function updateFilterDisplay() {
  const filterButtons = document.querySelectorAll('.button--clear');
  vacanciesFilter.style.display = filterButtons.length > 0 ? 'flex' : 'none';
}

