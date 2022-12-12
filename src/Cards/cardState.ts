import {defineStore} from "pinia";
import axios from "axios";

//GET all cards
export const useCardStore = defineStore("card", {
    state: () => ({
        cards: [] as string[],
    }),
    getters: {
        getCards(state) {
            return state.cards;
        },
    },
    actions: {
        //get all Cards
        async fetchCards() {
            try {
                const data = await axios.get('https://rickandmortyapi.com/api/character')
                this.cards = data.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
});
