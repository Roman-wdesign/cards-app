import {defineStore} from "pinia";
import { useCardStore } from '@/Cards/cardState'


export const useCartStore:any = defineStore("cart",
{
    state: () => ({
        cart: [] as string[],
    }),
    getters: {
        getCart: (state) => state.cart
    },
    actions:{
        addToCart(card){
         const storeCards = useCardStore()
         this.cart=storeCards.cards.push(card)
        }
    }
})