import { filterVacancies, setupFilterEventListeners, addFilterButton } from './filterVacancies';
import { createVacancyCard } from './createVacancyCard';

const vacanciesContainer = document.getElementById('vacanciesContainer');
const vacanciesFilterBtns = document.getElementById('vacanciesFilterBtns');


export async function getVacanciesData() {
    try {
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


