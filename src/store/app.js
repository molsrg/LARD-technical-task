// app.js
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    openCreateModal: false,
    inputSearch: "",
    filterValue: {
      countries: "",
      gender: "",
      position: "",
      contract: [],
    },
  }),
  getters: {
    isOpenCreateModal(state) {
      return state.openCreateModal;
    },
    getInputSearch(state) {
      return state.inputSearch;
    },
    getFilterValue(state) {
      return state.filterValue;
    },
  },
  actions: {
    changeOpenCreateModal() {
      this.openCreateModal = !this.openCreateModal;
    },
    openAdditionally() {
      this.showRecords += 4;
    },
    changeInputSearch(value) {
      this.inputSearch = value;
    },
    changeFilterValue(value) {
      this.filterValue = value;
    },
  },
});
