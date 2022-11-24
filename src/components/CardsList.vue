<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";

import {computed, onMounted} from "vue";
import {useCardStore} from "@/stores/cards";

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
    <div><h2 class="flex justify-center text-4xl font-extrabold mb-8">Card List</h2></div>
    <div class="flex flex-row justify-center static flex-wrap mb-8">
      <CardItem class="my-3 mx-7 hover:shadow-2xl"
                v-for="card in cards"
                :key="card.id"
                :card__data="card"
      >List Rendering</CardItem>
    </div>
  </div>
</template>
