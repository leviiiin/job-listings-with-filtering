import {filterVacancies, setupFilterEventListeners, addFilterButton} from './filterVacancies';
import {createVacancyCard} from './createVacancyCard';

const vacanciesContainer = document.getElementById('vacanciesContainer');
const vacanciesFilterBtns = document.getElementById('vacanciesFilterBtns');


// MVC
// Model = API
// View = components
// Controller = initVacanciesBoard()

// api - vacancies - getVacancies(params: filter[]): vacancy[]
// якщо params = empty [] або null, тоді повертаєш всі вакансії
// якщо є массив params - відфільтрований по параметрам массив вакансій

// modules - vacanciesBoard
// - components - createVacancyCard(vacancy): html, createVacancyFilters(params: filter[]): html
// initVacanciesBoard(): void
// перевіряємо чи взагалі треба щось робити! (перевірка наявності контейнера)

// Створюємо дефолтний стан => const filters = [];
// отримуємо данні (всі)
// будуємо template фільтрів
// будуємо template вакансій

// додаємо Listeners на теги вакансій - користувач може викликати Listener
// Оновлюємо стан нашого додатку => const filters = []; => filters.push(selectedCategory);
// отримуємо данні (з вже вибраними фільтрами)
// будуємо template фільтрів
// будуємо template вакансій


export async function getVacanciesData() {
  try {
    if (!vacanciesContainer && !vacanciesFilterBtns) {
      return;
    }

    const response = await fetch("./data.json");
    const vacanciesData = await response.json();

    displayVacancies(vacanciesData);
    setupFilterEventListeners(vacanciesData);
  } catch (error) {
    console.error('Error loading data!', error);
  }
}


export function displayVacancies(data) {
  const vacanciesCard = data.map(vacancy => createVacancyCard(vacancy)).join('');
  vacanciesContainer.innerHTML = vacanciesCard;
}


export function handleButtonClick(data, event) {
  const target = event.target;
  if (target.classList.contains('button--primary')) {
    const category = target.getAttribute('data-category');
    const selectedCategories = Array.from(vacanciesFilterBtns.children)
      .filter(category => category.classList.contains('button--clear'))
      .map(category => category.getAttribute('data-category').toLowerCase());

    addFilterButton(category, data, selectedCategories);
    filterVacancies(data);
  }
}


