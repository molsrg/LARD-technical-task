<template>
  <div class="employees-container">
    <SearchEmployes></SearchEmployes>
    <v-divider></v-divider>
    <EmployeesApp></EmployeesApp>
  </div>
</template>

<script setup>
import SearchEmployes from "@/components/SearchEmployes.vue";
import EmployeesApp from "@/components/EmployeesApp.vue";
</script>
