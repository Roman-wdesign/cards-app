<script setup lang="ts">
// export interface cartData {
//   name: string
//   image: string
//   id: number
// }

const props = defineProps<{ cart__item__data: {}, }>();



// export interface Props {
//   cart__data: cartData[]
// }
// const props = defineProps<Props>()
</script>


<template>
    <div>
        <img class="rounded-t-lg" :src="props.cart__item__data.image" alt="" />
    </div>
</template>