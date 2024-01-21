import { getVacancies } from "../../api/vacancies/getVacancies";
import { vacanciesContainer } from './components/createVacancyFilter'

const vacanciesError = document.getElementById('vacanciesError');

export const initVacanciesBoard = () => {
  if (vacanciesContainer) {
    getVacancies();
  } else {
    vacanciesError.innerHTML = `
      <h1>404</h1>
      <p>
        An error has occurred. Contact support or try again later
      </p>
    `
    vacanciesError.className = 'vacancies-error'
  }
}
