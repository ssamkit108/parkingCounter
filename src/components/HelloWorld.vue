<script setup lang="ts">
import { useCounter } from "../store/Counter";
import { storeToRefs } from "pinia";

import { onMounted } from "vue"

const { count } = storeToRefs(useCounter())
const { increment, decrement, getCount } = useCounter();


defineProps<{ msg: string }>()

onMounted(() => {
  getCount()
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">Add </button>
    <button type="button" @click="decrement">Remove</button>
  </div>
  <div class="count">
    Total count: {{ count }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.card {
  display: flex;
  place-content: center;
  column-gap: 2rem;
}
</style>
