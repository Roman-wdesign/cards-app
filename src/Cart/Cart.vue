<script setup lang="ts">
import CartItem from "@/Cart/CartItem.vue"
import IconCart from "@/shared/components/icons/IconCart.vue";

const props = defineProps<{
  //props from CardList.vue
  cart__data: [],
}>();

// export interface cartData {
//   name: string
//   image: string
//   id: number
// }

// export interface Props {
//   cart__data: cartData[]
// }
// const props = defineProps<Props>()
</script>


<template>
  <div>
    <IconCart />
    <CartItem v-for="item in cart__data" :key="item" :cart__item__data="item" />
  </div>
</template>