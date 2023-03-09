<script setup lang="ts">
import CardItem from '@/Cards/card-item/CardItem.vue'
import { computed, onMounted } from 'vue'
import { useCardStore } from '@/Cards/cardState'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/Cart/cartState'
import type { IUseCartStore } from '@/shared/models/CartModel'

const storeCards = useCardStore()
const storeCart = useCartStore()
const router = useRouter()

const cards = computed(() => {
  return storeCards.cards
})

// render cards list

onMounted(() => {
  storeCards.fetchCards()
})

// every card has its own details page
const itemClick = (name: string) => {
  router.push({
    name: 'card',
    query: { card: name },
  })
}

//add to Cart

const addToCart = (card: IUseCartStore) => {
  storeCart.addToCart(card)
}
</script>

<template>
  <div>
    <div class="my-5">
      <h2 class="flex justify-center text-4xl font-extrabold mb-8">
        Card List
      </h2>
    </div>
    <div class="flex flex-row justify-center static flex-wrap mb-8">
      <CardItem
        class="my-3 mx-7 hover:shadow-2xl"
        v-for="card in cards"
        :key="card.id"
        :card__data="card"
        @itemClick="itemClick"
        @addToCart="addToCart"
        >List Rendering
      </CardItem>
    </div>
  </div>
</template>
