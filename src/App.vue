<script setup lang="ts">
import {RouterView} from "vue-router";
import Navbar from "@/shared/components/Navbar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar/>
    </div>
  </header>
  <RouterView/>
</template>
