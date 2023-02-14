<script setup lang="ts">
import CardItem from "@/Cards/card-item/CardItem.vue";
import { computed, onMounted } from "vue";
import { useCardStore } from "@/Cards/cardState";
import { useRouter } from 'vue-router'
import { useCartStore } from '@/Cart/cartState'




//add to Cart
const storeCart = useCartStore();
const cart = computed(() => {
  return storeCart.cart
});
const addToCart = (cart: any) => {
  console.log(cart)
}
const storeCards = useCardStore();
const cards = computed(() => {
  return storeCards.cards;
});

// render cards list
onMounted(() => {
  storeCards.fetchCards();

});

const router = useRouter()

// every card has its own details page
const itemClick = (name: string) => {
  router.push({
    name: 'card',
    query: { 'card': name }
  })
}

</script>

<template>
  <div>

    <div class="my-5">
      <h2 class="flex justify-center text-4xl font-extrabold mb-8">Card List</h2>
    </div>
    <div class="flex flex-row justify-center static flex-wrap mb-8">
      <CardItem class="my-3 mx-7 hover:shadow-2xl" v-for="card in cards" :key="card.id" :card__data="card"
        @itemClick="itemClick" @addToCart="addToCart">List Rendering
      </CardItem>
    </div>
  </div>
</template>
