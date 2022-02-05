<script setup lang="ts">
import { RouterView } from "vue-router";
import ReloadVue from "./global/components/Reload.vue";
</script>

<template>
  <ReloadVue />
  <RouterView />
</template>

<style>
@import "@/static/tailwind.css";
</style>
