export async function getVacancies(filters) {
  const response = await fetch("./data.json");
  const vacancies = await response.json();

  return filters.reduce((accum, category) => {
    accum = accum.filter(vacancy => {
      const { role, level, languages, tools } = vacancy;
      const vacancyFilteringProperty = [role, level, ...languages, ...tools].map((el) => el.toLowerCase());
      return vacancyFilteringProperty.includes(category);
    });

    return accum;
  }, vacancies);
}