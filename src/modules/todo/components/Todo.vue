<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

const incre = () => counter.increment();
</script>

<template>
  <div>{{ counter.doubleCount }} {{ counter.counter }}</div>

  <button @click="incre" class="bg-blue-500 rounded-md text-white px-5 py-3">
    vuamosss
  </button>
</template>
