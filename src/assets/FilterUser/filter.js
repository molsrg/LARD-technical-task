// filters.js
import { computed } from "vue";

export function useEmployeeFilter(
  allEmployees,
  selectedTagsId,
  inputSearch,
  filterValue
) {
  return computed(() => {
    const employeesBySearch = filterEmployeesBySearch(
      allEmployees,
      inputSearch
    );
    const employeesByTags = filterEmployeesByTags(allEmployees, selectedTagsId);
    const employeesByOptions = filterEmployeesByOptions(
      allEmployees,
      filterValue
    );

    const filterBySearchAndTags = compareEmployeeArrays(
      employeesBySearch,
      employeesByTags
    );

    return compareEmployeeArrays(filterBySearchAndTags, employeesByOptions);
  });
}

// Функция фильтрации по тегу
function filterEmployeesByTags(allEmployees, selectedTagsId) {
  let tempEmployees = [];

  if (selectedTagsId.length > 0) {
    tempEmployees = allEmployees.filter((employee) => {
      return selectedTagsId.includes(employee.status.tag_id);
    });
  } else {
    tempEmployees = allEmployees.slice();
  }

  return tempEmployees;
}

// Функция фильтрации по поиску
function filterEmployeesBySearch(allEmployees, inputSearch) {
  let tempEmployees = [];

  if (inputSearch) {
    const searchQuery = inputSearch.toLowerCase();

    tempEmployees = allEmployees.filter((employee) => {
      return employee.full_name.toLowerCase().includes(searchQuery);
    });
  } else {
    tempEmployees = allEmployees.slice();
  }

  return tempEmployees;
}

// Фильтрация по основному фильтру
function filterEmployeesByOptions(allEmployees, filterValue) {
  // Фильтрация по стране
  const filteredByCountry = filterValue.countries
    ? allEmployees.filter(
        (employee) =>
          employee.country.country_id === Number(filterValue.countries)
      )
    : allEmployees;

  // Фильтрация по полу
  const filteredByGender = filterValue.gender
    ? filteredByCountry.filter(
        (employee) => employee.gender.gender_id === Number(filterValue.gender)
      )
    : filteredByCountry;

  // Фильтрация по должности
  const filteredByPosition = filterValue.position
    ? filteredByGender.filter(
        (employee) =>
          employee.position.position_id === Number(filterValue.position)
      )
    : filteredByGender;

  // Фильтрация по типу контракта
  const filteredByContract =
    filterValue.contract.length > 0
      ? filteredByGender.filter((employee) => {
          const contracts = filterValue.contract.map((value) =>
            parseInt(value, 10)
          );
          return contracts.includes(employee.type_contract.type_contract_id);
        })
      : filteredByPosition;

  return filteredByContract;
}

// Выборка из нескольких фильтров
function compareEmployeeArrays(array1, array2) {
  const intersection = array1.filter((employee1) =>
    array2.some((employee2) => employee1.inn === employee2.inn)
  );
  return intersection;
}
