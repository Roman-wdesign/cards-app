<script setup lang="ts">
import {ref} from 'vue'
import ButtonMain from "@/shared/components/buttons/ButtonMain.vue";

const props = defineProps<{
  //props from CardList.vue
  card__data: Object,
}>();


const emit = defineEmits<{
  (e: 'itemClick', name: string): string
}>()

// event to CardList.vue with argument data.name
const buttonClick = ref((name: string): string => emit('itemClick', name))

</script>

<template>
  <main>
    <!--    pass up event to CardList-->
    <div class="Card">

      <div
          class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ props.card__data.name }} </h5>
          <img class="rounded-t-lg" :src="props.card__data.image" alt=""/>

        <div class="flex flex-row justify-between">
          <ButtonMain
            class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mt-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="buttonClick(props.card__data.name)"
        >
          More
        </ButtonMain>
        <ButtonMain
            class="text-blue-600 bg-white border-2 border-blue-600 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mt-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="buttonClick(props.card__data.name)"
        >
          Add to Cart

        </ButtonMain>
        </div>
      </div>
      <hr/>
    </div>

  </main>
</template>
