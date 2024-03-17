// app.js
import { defineStore } from "pinia";

export const useEssenceStore = defineStore("essence", {
  state: () => ({
    // Type Contract
    type_contract: {
      id: null,
      title: "",
      slug: "",
    },
    all_type_contract: [
      {
        id: 0,
        title: "Трудовой договор",
        slug: "ТД",
      },
      {
        id: 1,
        title: "ГПХ",
        slug: "ГПХ",
      },
      {
        id: 2,
        title: "Самозанятый",
        slug: "СЗ",
      },
      {
        id: 3,
        title: "Кандидат",
        slug: "Кандидат",
      },
    ],

    // Gender
    gender: {
      id: null,
      title: "",
      slug: "",
    },
    all_gender: [
      {
        id: 0,
        title: "Мужской",
        slug: "М",
      },
      {
        id: 1,
        title: "Женский",
        slug: "Ж",
      },
    ],
    // Country
    country: {
      id: null,
      icon: "", //path to svg
      title: "",
      slug: "",
      number: "",
    },
    all_countries: [
      {
        id: 0,
        icon: "src/assets/icons/flags/flag-rus.svg", //path to svg
        title: "Россия",
        slug: "RU",
        number: "4002 571654",
      },
      {
        id: 1,
        icon: "src/assets/icons/flags/flag-tj.svg", //path to svg
        title: "Таджикистан",
        slug: "TJ",
        number: "404020262",
      },
      {
        id: 2,
        icon: "src/assets/icons/flags/flag-tj.svg", //path to svg
        title: "Узбекистан",
        slug: "UZ",
        number: "1922 571654",
      },
    ],

    // Position
    position: {
      id: null,
      title: "",
    },

    all_position: [
      {
        id: 0,
        title: "Промышленный альпинист",
      },
      {
        id: 1,
        title: "Токарь",
      },
      {
        id: 2,
        title: "Пекарь",
      },
    ],

    // Staff Tag
    staff_tag: {
      id: null,
      title: "",
      slug: "",
      bg_color: "",
      text_color: ""

    },
    all_staff_tag: [
      {
        id: 0,
        title: "Весь список",
        slug: "Весь список",
        color: 'grey',
        bg_color: "grey-lighten-1",
        text_color: "white"
      },
      {
        id: 1,
        title: "Истекает патент",
        slug: "Проблемные",
        color: 'orange',
        bg_color: "yellow-lighten-5",
        text_color: "yellow-darken-3"
      },
      {
        id: 2,
        title: "Истекают все документы",
        slug: "Критические",
        color: 'red',
        bg_color: "red-lighten-5",
        text_color: "red-darken-1"
      },

      {
        id: 3,
        title: "Пропустил медосмотр",
        slug: "Есть замечания",
        color: "blue",
        bg_color: "blue-lighten-5",
        text_color: "blue-accent-1"
      },
      {
        id: 4,
        title: "Прошел все проверки",
        slug: "Выполнено",
        color: 'green',
        bg_color: "green-lighten-5",
        text_color: "green-darken-1"
      },

    ],
  }),

  getters: {
    // Type Contract
    getAllTypeContract(state) {
      return state.all_type_contract;
    },

    // Gender
    getAllGender(state) {
      return state.all_gender;
    },

    // Country
    getAllCountries(state) {
      return state.all_countries;
    },

    // Position
    getAllPosition(state) {
      return state.all_position;
    },

    // Staff Tag
    getAllStaffTag(state) {
      return state.all_staff_tag;
    },
  },
  actions: {},
});
