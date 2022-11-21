<script setup>
import CardItem from "@/components/CardItem.vue";

import { computed, onMounted } from "vue";
import { useCardStore } from "@/stores/cards";

const store = useCardStore();

const cards = computed(() => {
  return store.cards;
});

onMounted(() => {
  store.fetchCards();
});
</script>

<template>
  <div>
    <h3 class="text-red-700">Card List</h3>

    <div class="mb-3" v-for="card in cards" :key="card.id">
      <p>{{ card.id }}</p>
      {{ card.name }} | {{ card.gender }}
      <p>{{ card.origin.name }}</p>
      <img :src="card.image" alt="" />
      <p class="text-yellow-500">{{ card.status }}</p>

      <hr />
    </div>
  </div>
</template>
