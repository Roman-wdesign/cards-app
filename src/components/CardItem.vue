<script setup>

// const props = defineProps<{
//   card__data :Object,
// }>();


const props = defineProps({
  card__data: {
    type: Object,
    default() {
      return;
    },
  },
});
</script>

<template>
  <main>
    <h3 class="text-blue-700 font-bold">Card Item</h3>
    <div class="Card">
      <div class="card__id">{{ card__data.id }}</div>

    </div>
  </main>
</template>
