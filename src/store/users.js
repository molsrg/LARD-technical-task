// app.js
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    allEmployees: [
      {
        full_name: "Иванов Иван Иванович",
        inn: "1234567890",
        address: "Санкт-Петербург",
        date_birth: "2003-12-07",
        age: "20 лет",
        type_contract: {
          type_contract_id: 1,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 1,
        },
        position: {
          position_id: 2,
        },
        status: {
          tag_id: 1,
        },
      },
      {
        full_name: "Петров Андрей Сергеевич",
        inn: "1092812121",
        address: "Владивосток",
        date_birth: "2002-12-07",
        age: "21 год",
        type_contract: {
          type_contract_id: 0,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 0,
        },
        position: {
          position_id: 0,
        },
        status: {
          tag_id: 2,
        },
      },
      {
        full_name: "Устьянова Мария Викторовна",
        inn: "1234237890",
        address: "Москва",
        date_birth: "2005-12-07", // DD.MM.YYYY
        age: "18 лет",
        type_contract: {
          type_contract_id: 2,
        },
        gender: {
          gender_id: 1,
        },
        country: {
          country_id: 2,
        },
        position: {
          position_id: 1,
        },
        status: {
          tag_id: 3,
        },
      },
      {
        full_name: "Васильев Марк Викторович",
        inn: "1092849322",
        address: "Сокол",
        date_birth: "2001-12-07",
        age: "22 года",
        type_contract: {
          type_contract_id: 1,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 1,
        },
        position: {
          position_id: 0,
        },
        status: {
          tag_id: 4,
        },
      },

      {
        full_name: "Иванов Иван Иванович",
        inn: "09876654321",
        address: "Санкт-Петербург",
        date_birth: "2003-12-07",
        age: "20 лет",
        type_contract: {
          type_contract_id: 1,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 1,
        },
        position: {
          position_id: 2,
        },
        status: {
          tag_id: 4,
        },
      },
      {
        full_name: "Петрова Мария Фёдоровна",
        inn: "5748422102",
        address: "Минск",
        date_birth: "2002-12-07",
        age: "21 год",
        type_contract: {
          type_contract_id: 0,
        },
        gender: {
          gender_id: 1,
        },
        country: {
          country_id: 0,
        },
        position: {
          position_id: 0,
        },
        status: {
          tag_id: 3,
        },
      },
      {
        full_name: "Устьянова Мария Викторовна",
        inn: "0987654321",
        address: "Москва",
        date_birth: "2005-12-07", // DD.MM.YYYY
        age: "18 лет",
        type_contract: {
          type_contract_id: 2,
        },
        gender: {
          gender_id: 1,
        },
        country: {
          country_id: 2,
        },
        position: {
          position_id: 1,
        },
        status: {
          tag_id: 2,
        },
      },
      {
        full_name: "Васильев Марк Викторович",
        inn: "57483910463",
        address: "Сокол",
        date_birth: "2001-12-07",
        age: "22 года",
        type_contract: {
          type_contract_id: 1,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 1,
        },
        position: {
          position_id: 0,
        },
        status: {
          tag_id: 1,
        },
      },
      {
        full_name: "Андреев Пётр Семёнович",
        inn: "1234543211",
        address: "Ростов",
        date_birth: "2001-12-07",
        age: "23 года",
        type_contract: {
          type_contract_id: 0,
        },
        gender: {
          gender_id: 0,
        },
        country: {
          country_id: 0,
        },
        position: {
          position_id: 0,
        },
        status: {
          tag_id: 4,
        },
      },
    ],
    Employee: {
      full_name: "",
      inn: "",
      address: "",
      date_birth: "", // DD.MM.YYYY
      age: "",
      type_contract: {
        type_contract_id: null,
      },
      gender: {
        gender_id: null,
      },
      country: {
        country_id: null,
      },
      position: {
        position_id: null,
      },
      status: {
        tag_id: null,
      },
    },
  }),
  getters: {
    getAllEmployees(state) {
      return state.allEmployees;
    },
  },
  actions: {
    addEmployee(user) {
      this.allEmployees.unshift(user);
    },
  },
});
