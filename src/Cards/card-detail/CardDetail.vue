<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute()

import {useCardStore} from "@/Cards/cardState";
import {computed} from "vue";

const store = useCardStore();
const detailCard = computed(() => {
  //find overlaps in data.name
  let result = {}
  store.getCards.find(function (item: any) {
    if (item.name === route.query.card) {
      result = item
    }
  })
  return result
})

</script>


<template>
  <div>
    <div class="pt-8 z-20 flex flex-col text-center">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">status: {{ detailCard.status }}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">gender: {{ detailCard.gender }}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> species: {{ detailCard.species }}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        location: {{ detailCard.location.name }}</p>
    </div>
    <section class="bg-white dark:bg-gray-900">

      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Back to
            catalog</p>
          <router-link to="/cards">
            <button type="button"
                    class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              To Catalog
            </button>
          </router-link>
        </div>
      </div>

    </section>


  </div>
</template>


