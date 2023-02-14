import {defineStore} from "pinia";

export const useCartStore:any = defineStore("cart",
{
    state: () => ({
        cart: [] as string[],
    }),
    getters: {
        getCart: (state) => state.cart
    },
})