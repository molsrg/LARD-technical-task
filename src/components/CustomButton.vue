<template>
  <v-btn
    :rounded="roundedButton"
    size="small"
    :variant="currentVariant"
    :class="`bg-${backgroundColor} text-${textColor}`"
    @click="handleClick"
    >{{ label }}</v-btn
  >
</template>

<script setup>
import { ref, defineProps } from "vue";

const isActive = ref(false);
const props = defineProps({
  label: String,
  currentVariant: String,
  backgroundColor: String,
  textColor: String,
  roundedButton: String,
});

const handleClick = () => {
  isActive.value = !isActive.value;
};

const computedVariant = ref(props.currentVariant);
if (isActive.value) {
  computedVariant.value =
    props.currentVariant === "outlined" ? "tonal" : "outlined";
}
</script>
