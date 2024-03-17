<template>
  <div class="filter">
    <v-btn
      prepend-icon="mdi-account-plus-outline"
      variant="tonal"
      class="bg-light-blue-lighten-1 text-white mb-5 mt-1"
      height="44"
      @click="appStore.changeOpenCreateModal()"
    >
      Добавить нового сотрудника
    </v-btn>
    <v-divider></v-divider>
    <div>
      <h3>Фильтр</h3>
      <v-form ref="filterForm">
        <div class="filter-container">
          <div class="filter-container-item">
            Гражданство
            <v-select
              v-model="filter.countries"
              :items="essenceStore.getAllCountries"
              item-value="id"
              placeholder="Все страны"
              density="compact"
            ></v-select>
          </div>

          <div class="filter-container-item">
            Пол
            <v-select
              v-model="filter.gender"
              :items="essenceStore.getAllGender"
              item-value="id"
              placeholder="Без разницы"
              density="compact"
            ></v-select>
          </div>
        </div>

        <div>
          Должность
          <v-select
            v-model="filter.position"
            :items="essenceStore.getAllPosition"
            placeholder="Все должности"
            density="compact"
            item-value="id"
          ></v-select>
        </div>

        <div class="filter-checkbox">
          Тип договора
          <v-checkbox
            v-for="contract in essenceStore.getAllTypeContract"
            :key="contract.id"
            v-model="filter.contract"
            :label="contract.slug"
            :value="contract.id"
            hide-details
          ></v-checkbox>
        </div>

        <v-divider></v-divider>

        <div class="filter-btn-container">
          <v-btn class="bg-green-darken-1" width="48%" @click="searchFilter"
            >Применить</v-btn
          >
          <v-btn class="bg-grey-darken-2" width="48%" @click="resetFilter"
            >Очистить</v-btn
          >
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app.js";
import { useEssenceStore } from "@/store/essence.js";

const appStore = useAppStore();
const essenceStore = useEssenceStore();

const filter = ref({ countries: "", gender: "", position: "", contract: [] });

// Очистка формы
const resetFilter = () => {
  filter.value = { countries: "", gender: "", position: "", contract: [] };
  searchFilter();
};

const searchFilter = () => {
  applyFilter();
};

const applyFilter = () => {
  const stringifiedFilter = {
    countries: filter.value.countries.toString(),
    gender: filter.value.gender.toString(),
    position: filter.value.position.toString(),
    contract: filter.value.contract.map((value) => value.toString()),
  };
  appStore.changeFilterValue(stringifiedFilter);
};
</script>

<style></style>
