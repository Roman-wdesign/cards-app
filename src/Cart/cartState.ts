import {defineStore} from "pinia";
import {useCardStore} from "@/Cards/cardState";

export const useCartStore = defineStore("cart",
{
    const cards = useCardStore()
    state: () => ({
        cart: [] as string[],
    }),
    getters: {
        getCart: (state) => state.cart
    },
})