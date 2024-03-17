<template>
  <div>
    <v-text-field
      hint="Например: Иванов Иван"
      label="Поиск сотрудника"
      v-model="searchEmployer"
      append-inner-icon="mdi-magnify"
      @input="onInput"
    ></v-text-field>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();

// Input
let searchEmployer = ref("");
const onInput = () => {
  appStore.changeInputSearch(searchEmployer.value);
};
</script>
