import { convertTime } from './utils/convertTime';

export function createVacancyCard(vacancy) {
    return `
        <div class="vacancy__card ${vacancy.featured ? 'vacancy__card--featured' : ''}" data-role="${vacancy.role}" data-level="${vacancy.level}">
            <img src="${vacancy.logo}" class="vacancy__img">
            
            <div class="vacancy__info">
                <div class="vacancy__tags">
                    <span class="tag vacancy__tag">${vacancy.company}</span>
                    ${vacancy.new ? '<span class="tag tag--new vacancy__tag">New!</span>' : ''}
                    ${vacancy.featured ? '<span class="tag tag--featured vacancy__tag">featured</span>' : ''}
                </div>
                
                <h2 class="vacancy__title">
                    <a href=""> ${vacancy.position} </a>
                </h2>
                
                <div class="vacancy__description">
                    <span class="vacancy__postedAt">${convertTime(vacancy.postedAt)}</span>
                    <span class="vacancy__contract">${vacancy.contract}</span>
                    <span class="vacancy__location">${vacancy.location}</span>
                </div>
            </div>
            
            <div class="vacancy__buttons">
                <button class="button--primary vacancy__btn" data-category="${vacancy.role.toLowerCase()}">${vacancy.role}</button>
                <button class="button--primary vacancy__btn" data-category="${vacancy.level.toLowerCase()}">${vacancy.level}</button>
                ${vacancy.languages.map(language => `<button class="button--primary vacancy__btn" data-category="${language.toLowerCase()}">${language}</button>`).join('')}
                ${vacancy.tools.map(tol => `<button class="button--primary vacancy__btn" data-category="${tol.toLowerCase()}">${tol}</button>`).join('')}
            </div>
        </div>
    `;
}
