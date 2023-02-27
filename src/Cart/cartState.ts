import {defineStore} from "pinia";


export const useCartStore:any = defineStore("cart",
{
    state: () => ({
        cart: [] as string[],
    }),
    getters: {
        getCart: (state) => state.cart
    },
    actions:{
        addToCart(card:any){
         //this.cart = storeCards.cards.push(card)
         this.cart.push(card)
        }
    }
})