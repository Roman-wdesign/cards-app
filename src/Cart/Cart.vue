<script setup lang="ts">
import CartItem from '@/Cart/CartItem.vue'
import IconCart from '@/shared/components/icons/IconCart.vue'
import type { ICartItemData } from '@/shared/models/CartModel'

export interface Props {
  cart__data: string[]
}
const props = withDefaults(defineProps<Props>(), {
  cart__data: () => [],
})
</script>

<template>
  <div>
    <IconCart />
    <div class="flex flex-row justify-center static flex-wrap mb-8">
      <CartItem
        v-for="item in cart__data"
        :key="item"
        :cart__item__data="item"
      />
    </div>
  </div>
</template>
