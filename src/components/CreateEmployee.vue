<template>
  <div>
    <v-dialog v-model="appStore.isOpenCreateModal" max-width="600">
      <v-form ref="createForm" @submit.prevent class="create-form">
        <h2 class="create-form-title">Создание сотрудника</h2>

        <v-text-field
          clearable
          hint="Введите данные в формате: Фамилия Имя Отчество"
          density="compact"
          v-model="createData.full_name"
          label="ФИО"
          :rules="rules.fullNameRules"
        ></v-text-field>

        <v-text-field
          clearable
          hint="Введите данные в формате: 1234567890"
          density="compact"
          v-model="createData.inn"
          label="ИНН"
          :rules="rules.innRules"
        ></v-text-field>

        <v-text-field
          density="compact"
          v-model="createData.address"
          label="Город"
          :rules="rules.addressRules"
        ></v-text-field>

        <v-text-field
          density="compact"
          v-model="createData.date_birth"
          type="date"
          label="Дата рождения"
          :rules="rules.dateBirthRules"
        ></v-text-field>

        <v-autocomplete
          density="compact"
          v-model="createData.type_contract.type_contract_id"
          label="Тип договора"
          :items="essenceStore.getAllTypeContract"
          item-value="id"
          :rules="rules.typeContractRules"
        ></v-autocomplete>

        <v-autocomplete
          density="compact"
          v-model="createData.gender.gender_id"
          label="Пол"
          :items="essenceStore.getAllGender"
          item-value="id"
          :rules="rules.genderRules"
        ></v-autocomplete>

        <v-autocomplete
          density="compact"
          v-model="createData.country.country_id"
          label="Гражданство"
          :items="essenceStore.getAllCountries"
          item-value="id"
          :rules="rules.countryRules"
        ></v-autocomplete>

        <v-autocomplete
          density="compact"
          v-model="createData.position.position_id"
          label="Должность"
          :items="essenceStore.getAllPosition"
          item-value="id"
          :rules="rules.positionRules"
        ></v-autocomplete>

        <v-autocomplete
          density="compact"
          v-model="createData.status.tag_id"
          label="Статус"
          :items="essenceStore.getAllStaffTag"
          item-value="id"
          :rules="rules.statusRules"
        ></v-autocomplete>

        <v-btn class="mb-4" type="submit" @click="submitForm">Создать</v-btn>
        <v-btn class="mb-4" type="submit" @click="resetForm">Очистить</v-btn>
        <v-btn class="mb-4" @click="appStore.changeOpenCreateModal"
          >Закрыть</v-btn
        >
      </v-form>
    </v-dialog>
  </div>
</template>

<script setup>
import { calculateAge } from "@/FormatUser/format.js";
import { useAppStore } from "@/store/app.js";
import { useEssenceStore } from "@/store/essence.js";
import { useUsersStore } from "@/store/users.js";
import { ref } from "vue";
const appStore = useAppStore();
const userStore = useUsersStore();
const essenceStore = useEssenceStore();

const rules = ref({
  fullNameRules: [
    (value) => !!value || "ФИО обязательно для заполнения",
    (value) =>
      (value && value.length >= 3) ||
      "ФИО должно содержать не менее 3 символов",
  ],
  innRules: [
    (value) => !!value || "ИНН обязателен для заполнения",
    (value) =>
      (value && /^\d{10}$/.test(value)) || "ИНН должен состоять из 10 цифр",
  ],
  addressRules: [(value) => !!value || "Город обязателен для заполнения"],
  dateBirthRules: [
    (value) => !!value || "Дата рождения обязательна для заполнения",
  ],
  typeContractRules: [
    (value) => value !== null || "Тип договора обязателен для выбора",
  ],
  genderRules: [(value) => value !== null || "Пол обязателен для выбора"],
  countryRules: [
    (value) => value !== null || "Гражданство обязательно для выбора",
  ],
  positionRules: [
    (value) => value !== null || "Должность обязательна для выбора",
  ],
  statusRules: [(value) => !!value || "Статус обязателен для выбора"],
});

const createData = ref({
  full_name: "",
  inn: "",
  address: "",
  date_birth: "",
  age: "",
  type_contract: {
    type_contract_id: "",
  },
  gender: {
    gender_id: "",
  },
  country: {
    country_id: "",
  },
  position: {
    position_id: "",
  },
  status: {
    tag_id: "",
  },
});
const createForm = ref(null);

// Сброс формы
const resetForm = () => {
  createData.value = {
    full_name: "",
    inn: "",
    address: "",
    date_birth: "",
    age: "",
    type_contract: {
      type_contract_id: "",
    },
    gender: {
      gender_id: "",
    },
    country: {
      country_id: "",
    },
    position: {
      position_id: "",
    },
    status: {
      tag_id: "",
    },
  };
};

// Создание юзера
const createUser = () => {
  appStore.changeOpenCreateModal();
  createData.value.age = calculateAge(createData.value.date_birth);
  userStore.addEmployee(createData.value);

  createData.value = {
    full_name: "",
    inn: "",
    address: "",
    date_birth: "",
    age: "",
    type_contract: {
      type_contract_id: "",
    },
    gender: {
      gender_id: "",
    },
    country: {
      country_id: "",
    },
    position: {
      position_id: "",
    },
    status: {
      tag_id: "",
    },
  };
};

// Валидация формы
const submitForm = () => {
  createForm.value.validate().then((valid) => {
    if (valid.valid == true) {
      createUser();
    } else {
      console.log("Form is not valid");
    }
  });
};
</script>

<style></style>
