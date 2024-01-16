// import { Notyf } from 'notyf';
// import { wait } from "./utils";
import { getVacanciesData } from './getVacanciesData'
const App = function () {
  getVacanciesData();
  
}

App();


// const notyf = new Notyf();
// const testFn = async () => {
//   await wait(300);
//   notyf.error('Please fill out the form');
// }
// testFn();