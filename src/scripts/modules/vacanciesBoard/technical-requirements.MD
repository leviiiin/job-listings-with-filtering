// MVC
// Model = API
// View = components
// Controller = initVacanciesBoard()

**Requirements:**
MODEL
// api - vacancies - getVacancies(params: filter[]): vacancy[]
// якщо params = empty [] або null, тоді повертаєш всі вакансії
// якщо є массив params - відфільтрований по параметрам массив вакансій


CONTROLLER
// modules - vacanciesBoard
// - (VIEW) components - createVacancyCard(vacancy): html, createVacancyFilters(params: filter[]): html
// initVacanciesBoard(): void
// перевіряємо чи взагалі треба щось робити! (перевірка наявності контейнера)


**User cases:**
// Створюємо дефолтний стан => const filters = [];
// отримуємо данні (всі)
// будуємо template фільтрів
// будуємо template вакансій

// додаємо Listeners на теги вакансій - користувач може викликати Listener
// Оновлюємо стан нашого додатку => const filters = []; => filters.push(selectedCategory);
// отримуємо данні (з вже вибраними фільтрами)
// будуємо template фільтрів
// будуємо template вакансій


- Model - API - отримує вимоги (фільтри) і повертає відфільтровані дані
- View - components/render fn - тупі! функції, які на основі отриманих даних віддають шматки HTML
- Controller
- - ініціалізація (дефолтний стан => filters = [])
- - отримав дані з Model
- - перевірка данних (1. апі повернуло помилку - сповіщаєш користувача, що щось пішло не так; 2. відтсутні данні (порожній массив) - сповіщаєм користувача, що по його запитах нічого немає)
- - створення на основі даних компонентів - виклик функції з отриманими даними
- - створив темплейт на основі цих компонентів
- - слідкуєш за діями користувача і оновлюєш дані після його взаємодії
