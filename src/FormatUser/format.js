// Файл format.js содержит набор утилитарных функций для работы с данными о сотрудниках.

// Описание одной функции, остальные реализованы аналогичным способом
/**
 * Получает название типа контракта по его идентификатору.
 * @param {number} typeContractId - Идентификатор типа контракта.
 * @param {Array} allTypeContracts - Массив всех доступных типов контрактов.
 * @returns {string} - Название типа контракта или строку "Неизвестный тип контракта", если не найдено.
 */

// Функция для получения названия типа контракта по его id
export function getTypeContractTitleById(typeContractId, allTypeContracts) {
  const typeContract = allTypeContracts.find(
    (contract) => contract.id === typeContractId
  );
  return typeContract ? typeContract.slug : "Неизвестный тип контракта";
}

// Функция для получения названия должности по её id
export function getPositionTitleByID(positionId, allPositions) {
  const position = allPositions.find((position) => position.id === positionId);
  return position ? position.title : "Неизвестный тип позиции";
}

// Функция для получения страны по её id
export function getCountryByID(countryId, allCountries) {
  const country = allCountries.find((country) => country.id === countryId);
  return country ? country : "Неизвестная страна";
}

// Функция для получения пола по id
export function getGenderByID(genderId, allGenders) {
  const gender = allGenders.find((gender) => gender.id === genderId);
  return gender ? gender.title : "Неизвестный пол";
}

// Функция для получения статуса по id
export function getStatusTag(staffId, allStatus) {
  const status = allStatus.find((status) => status.id === staffId);
  return status ? status : "Неизвестный статус";
}

// Функция для вычисления возраста по дате рождения
export function calculateAge(dateBirth) {
  const birthDate = new Date(dateBirth);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  const yearsString = age === 1 ? "год" : "лет";
  return `${age} ${yearsString}`;
}

//Форматирование даты для отображения DD.MM.YYYY
export function formatDate(Data) {
  const parts = Data.split("-");
  if (parts.length !== 3) {
    return Data;
  }

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return `${day}.${month}.${year}`;
}
