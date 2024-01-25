import { convertTime } from '../../../utils/convertTime';

export function createVacancyCard(vacancy, selectFilter) {
    // зібрати в один масив всі категорії дял фільтрації
    // пройтись по масиву і на основі цих категорій зробити кнопки

    const { role, level, languages, tools } = vacancy;
    const catogories = [role, level, ...languages, ...tools].map((el) => el);

    const el = document.createElement('div');
    el.className = `vacancy__card ${vacancy.featured ? 'vacancy__card--featured' : ''}`;

    el.innerHTML = `
    <img src="${vacancy.logo}" class="vacancy__img" alt="">
    <div class="vacancy__info">
        <div class="vacancy__tags">
            <span class="tag vacancy__tag">${vacancy.company}</span>
            ${vacancy.new ? '<span class="tag tag--new vacancy__tag">New!</span>' : ''}
            ${vacancy.featured ? '<span class="tag tag--featured vacancy__tag">featured</span>' : ''}
        </div>

        <h2 class="vacancy__title">
            <a href="" title=""> ${vacancy.position} </a>
        </h2>

        <div class="vacancy__description">
            <span class="vacancy__description-item">${convertTime(vacancy.postedAt)}</span>
            <span class="vacancy__description-item">${vacancy.contract}</span>
            <span class="vacancy__description-item">${vacancy.location}</span>
        </div>
    </div>
    <div class="vacancy__buttons">
        ${catogories.map(category => `
            <button 
                type="button" 
                class="button button--primary vacancy__btn" 
                data-category="${category.toLowerCase()}"
            >
                ${category}
            </button>
        `).join('')}
    </div>
    `;

    const btns = el.querySelectorAll('.vacancy__btn');

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault;
            const target = event.target.closest('.vacancy__btn');
            const category = target.getAttribute('data-category');
            selectFilter(category);
        })
    })

    return el;
}
