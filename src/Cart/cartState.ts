import {defineStore} from "pinia";
import { useCardStore } from '@/Cards/cardState'
const storeCards = useCardStore()

export const useCartStore:any = defineStore("cart",
{
    state: () => ({
        cart: [] as string[],
    }),
    getters: {
        getCart: (state) => state.cart
    },
    actions:{
        async fetchToCart<T>(card): Promise<void>{
            try{
                this.cart=storeCards.cards.push
            } catch(err){err}
        }
    }
})