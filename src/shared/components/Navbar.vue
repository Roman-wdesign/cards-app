<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'


const isOpen = ref(false)
const view = reactive({

  topOfPage: true

})



const handleScroll = () => {
  if (window.pageYOffset > 0) {
    if (view.topOfPage) view.topOfPage = false
  } else {
    if (!view.topOfPage) view.topOfPage = true
  }
}

onBeforeMount(() => { window.addEventListener('scroll', handleScroll) })
</script>


<template>
  <div :class="{ 'opacity-20': !view.topOfPage }" class="bg-blue-600 opacity-90 fixed top-0 w-full">
    <header class=" sm:flex sm:justify-end sm:items-center sm:px-4 sm:py-3">
      <div class="flex  items-center justify-end px-4 py-3 sm:p-0">
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-gray-100" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path v-if="!isOpen" fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <RouterLink class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          to="/">Home
        </RouterLink>
        <RouterLink class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          to="/about">About
        </RouterLink>
        <RouterLink class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blue-400 sm:mt-0 sm:ml-2"
          to="/cards">Cards
        </RouterLink>
      </nav>
    </header>
  </div>
</template>