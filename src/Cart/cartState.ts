import { defineStore } from "pinia";
import type { IUseCartStore } from '@/shared/models/CartModel'

// interface State {
//     cart: IUseCartStore[]
// }



export const useCartStore = defineStore("cart",
    {
        state: () => ({
            cart: [] as string[],
        }),
        getters: {
            getCart: (state) => state.cart
        },
        actions: {
            addToCart(card: any) {
                this.cart.push(card)
            }
        }
    })