<template>
  <div class="employees">
    <h2>Список сотрудников</h2>
    <div class="btn-container">
      <CustomButton
        v-for="button in essenceStore.getAllStaffTag"
        :key="button.id"
        :label="button.slug"
        :roundedButton="'xl'"
        :currentVariant="
          selectedTagIds.includes(button.id) ? 'tonal' : 'outlined'
        "
        :backgroundColor="button.bg_color"
        :textColor="button.text_color"
        @click="filterUser(button.id)"
      />
    </div>
    <div class="employes-wrapper" v-if='filterEmployees.value.length > 0'>
      <EmployeerApp
        v-for="employee in filterEmployees.value.slice(0, visibleEmployees)"
        :key="employee.inn"
        :user="employee"
      />
    </div>
    <div v-else>Сотрудников не найдено</div>

    <v-btn
      v-if="visibleEmployees < filterEmployees.value.length"
      @click="showMoreEmployees"
      class="button-chunk"
      max-width="200px"
      prepend-icon="mdi-sync"
      variant="outlined"
      color="#2A358C"
      >Показать ещё</v-btn
    >
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useAppStore } from "@/store/app";
import { useEssenceStore } from "@/store/essence.js";
import { useUsersStore } from "@/store/users.js";

import EmployeerApp from "./EmployeerApp.vue";
import CustomButton from "./CustomButton.vue";
import { useEmployeeFilter } from "@/assets/FilterUser/filter";
const userStore = useUsersStore();
const appStore = useAppStore();
const essenceStore = useEssenceStore();

// Количество видимых юзеров
const visibleEmployees = ref(4);

const showMoreEmployees = () => {
  visibleEmployees.value += 4;
};

// Отбор юзеров по тегу
const selectedTagIds = ref([]);
const filterUser = (filterByTag) => {
  visibleEmployees.value = 4;
  if (filterByTag === 0) {
    selectedTagIds.value = [];
  } else if (selectedTagIds.value.includes(filterByTag)) {
    selectedTagIds.value = selectedTagIds.value.filter(
      (tagId) => tagId !== filterByTag
    );
  } else {
    selectedTagIds.value.push(filterByTag);
  }
};

const filterEmployees = computed(() => {
  return useEmployeeFilter(
    userStore.getAllEmployees,
    selectedTagIds.value,
    appStore.getInputSearch,
    appStore.getFilterValue
  );
});
</script>
