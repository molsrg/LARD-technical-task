<template>
  <CreateEmployee></CreateEmployee>
  <div class="home">
    <EmployeesApp class="employes-container"></EmployeesApp>
    <FilterApp></FilterApp>
  </div>
</template>

<script setup>
import CreateEmployee from "@/components/CreateEmployee.vue";
import EmployeesApp from "@/layouts/EmployeesApp";
import FilterApp from "@/components/FilterApp.vue";
</script>

<style>
.home {
  display: flex;
  gap: 30px;
  margin: 20px;
  justify-content: center;
}

.employes-container {
  width: 1203px;
  background-color: white;
  padding: 30px;
}

@media screen and (max-width: 867px) {
  .home {
    flex-wrap: wrap;
  }
}
</style>
