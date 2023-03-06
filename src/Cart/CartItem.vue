<script setup lang="ts">
import type { ICartItemData } from '@/shared/models/CartModel'

export interface Props {
  cart__item__data: ICartItemData<string, number>
}
const props = defineProps<Props>()
</script>

<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <img class="rounded-lg" :src="props.cart__item__data.image" alt="" />
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ props.cart__item__data.name }}
    </h5>
    <div class="quantity-block flex justify-evenly">
      <ButtonMain
        class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mt-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        -
      </ButtonMain>
      <ButtonMain
        class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mt-5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        +
      </ButtonMain>
    </div>
  </div>
</template>
