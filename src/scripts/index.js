// import { Notyf } from 'notyf';
// import { wait } from "./utils";
import {initVacanciesBoard} from "./modules/vacanciesBoard";

const App = function () {
  initVacanciesBoard();
}

App();


// const notyf = new Notyf();
// const testFn = async () => {
//   await wait(300);
//   notyf.error('Please fill out the form');
// }
// testFn();
