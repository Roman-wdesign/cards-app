<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import type { Ref } from 'vue'
import Cart from "@/Cart/Cart.vue"

//open and close links of navbar
const isOpen: Ref<Boolean> = ref(false)


interface viewPosition {
  topOfPage: Boolean
}
const viewPosition: viewPosition = reactive({

  topOfPage: true

})
// change opacity of navbar, when scrolling
const handleScroll = () => {
  if (window.pageYOffset > 0) {
    if (viewPosition.topOfPage) viewPosition.topOfPage = false
  } else {
    if (!viewPosition.topOfPage) viewPosition.topOfPage = true
  }
}

onBeforeMount(() => { window.addEventListener('scroll', handleScroll) })
</script>


<template>
  <div :class="{ 'opacity-40': !viewPosition.topOfPage }" class="bg-blue-600 fixed top-0 w-full">
    <header class=" sm:flex sm:justify-end sm:items-center sm:px-4 sm:py-3">
      <div class="flex  items-center justify-end px-4 py-3 sm:p-0">
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-gray-100" viewPositionBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <RouterLink @click="isOpen = !isOpen"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2" to="/">Home
        </RouterLink>
        <RouterLink @click="isOpen = !isOpen"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2" to="/about">
          About
        </RouterLink>
        <RouterLink @click="isOpen = !isOpen"
          class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2" to="/cards">
          Cards
        </RouterLink>
        <Cart
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2" />
      </nav>
    </header>
  </div>
</template>