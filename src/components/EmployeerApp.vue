<template>
  <v-card>
    <div class="user-card">
      <div class="user-card-line">
        <h3 class="user-title">
          {{ formattedUser.full_name }}
        </h3>
        <span class="user-inn">ИНН {{ formattedUser.inn }}</span>
        <span class="user-contract">
          {{ formattedUser.type_contract }}
        </span>
        <span class="user-global user-position">
          {{ formattedUser.position }}
        </span>
      </div>

      <div class="user-card-line">
        <span class="user-country user-global">
          <img :src="formattedUser.country.icon" alt="icon" />
          <span>{{ formattedUser.country.slug }}</span>
          <span>{{ formattedUser.country.number }}</span>
        </span>
        <span class="vertical-line">|</span>
        <span class="user-global"> г. {{ formattedUser.address }} </span>
        <span class="vertical-line">|</span>
        <span class="user-global"
          >Дата рождения: {{ formattedUser.date_birth }}</span
        >
        <span class="vertical-line">|</span>
        <span class="user-global"> Возраст: {{ formattedUser.age }} </span>
        <span class="vertical-line">|</span>
        <span class="user-global"> Пол: {{ formattedUser.gender }} </span>
      </div>

      <div class="user-card-line">
        <CustomButton
          :label="formattedUser.status.title"
          :currentVariant="'tonal'"
          :backgroundColor="formattedUser.status.color"
          :textColor="'white'"
        />
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useEssenceStore } from "@/store/essence.js";
import { computed } from "vue";
import CustomButton from "./CustomButton.vue";

import {
  formatDate,
  getCountryByID,
  getGenderByID,
  getPositionTitleByID,
  getStatusTag,
  getTypeContractTitleById,
} from "@/FormatUser/format.js";

const essenceStore = useEssenceStore();

const props = defineProps({
  user: Object,
});

const formattedUser = computed(() => {
  return {
    full_name: props.user.full_name,
    inn: props.user.inn,
    type_contract: getTypeContractTitleById(
      props.user.type_contract.type_contract_id,
      essenceStore.getAllTypeContract
    ),
    position: getPositionTitleByID(
      props.user.position.position_id,
      essenceStore.getAllPosition
    ),
    country: getCountryByID(
      props.user.country.country_id,
      essenceStore.getAllCountries
    ),
    address: props.user.address,
    date_birth: formatDate(props.user.date_birth),
    age: props.user.age,
    gender: getGenderByID(
      props.user.gender.gender_id,
      essenceStore.getAllGender
    ),
    status: getStatusTag(props.user.status.tag_id, essenceStore.getAllStaffTag),
  };
});
</script>
