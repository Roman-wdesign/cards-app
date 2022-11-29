<script setup lang="ts">

import {ref} from "vue"

const show = ref(false)

const props = defineProps<{
  //props from CardList.vue
  card__data: Object,
}>();


</script>

<template>
  <main>

    <div class="Card">
      <div
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ props.card__data.name }} </h5>
          <img class="rounded-t-lg" :src="props.card__data.image" alt=""/>
        </a>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown"
                @click="show = !show"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mt-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">More
          <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div v-if="show" class="pt-8 z-20">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.card__data.id }}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">status: {{ props.card__data.status }}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">gender: {{ props.card__data.gender }}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ props.card__data.origin.name }}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">location: {{
              props.card__data.location.name
            }}</p>
        </div>
      </div>
      <hr/>
    </div>

  </main>
</template>
