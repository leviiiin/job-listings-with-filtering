import {getVacancies} from "../../api/vacancies/getVacancies";
import {createVacancyFilter} from "./components/createVacancyFilter";
import {createVacancyCard} from "./components/createVacancyCard";

function createVacancies(vacancies, selectFilter) {
  if (Array.isArray(vacancies) && vacancies.length > 0) {
    // Fragment
    return vacancies.map(vacancy => createVacancyCard(vacancy, selectFilter)).join('');
  } else {
    //.div 'List of vacancies empty'
  }
}

export const initVacanciesBoard = async () => {
  const vacanciesContainer = document.getElementById('vacanciesContainer');
  const vacanciesFilterContainer = document.getElementById('vacanciesFilter');
  if (!vacanciesContainer || !vacanciesFilterContainer) {
    return;
  }

  let filters = [];

  const createVacanciesBoard = async () => {
    try {
      const vacancies = await getVacancies(filters);

      const filtersHTML = createVacancyFilter(filters, updateFilters);
      const vacanciesHTML = createVacancies(vacancies, selectFilter);

      vacanciesFilterContainer.innerHTML = filtersHTML;
      vacanciesContainer.innerHTML = vacanciesHTML;
    } catch (e) {
      vacanciesContainer.innerHTML = `<div>Sorry! Something went wrong!</div>`;
    }
  }
  const updateFilters = async (newFilters) => {
    filters = newFilters;
    await createVacanciesBoard();
  }
  const selectFilter = async (filter) => {
    filters.push(filter);
    await createVacanciesBoard();
  }

  await createVacanciesBoard();
}
