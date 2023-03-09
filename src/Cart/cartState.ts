import { defineStore } from "pinia";
import type { IUseCartStore } from '@/shared/models/CartModel'

interface State {
    cart: IUseCartStore[]
}



export const useCartStore = defineStore("cart",
    {
        state: (): State => ({
            cart: [],
        }),
        getters: {
            getCart: (state) => state.cart
        },
        actions: {
            addToCart(card: IUseCartStore) {
                this.cart.push(card)
            }
        }
    })