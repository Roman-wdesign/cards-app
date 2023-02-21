import {defineStore} from "pinia";
import getCardCall from '@/Cards/shared/api/getCards';


//GET all cards
export const useCardStore: any = defineStore("card", 
    {
    state: () => ({
        cards: [] as string[],
    }),
    getters: {
        getCards: (state) => state.cards
    },
    actions: {
        async fetchCards<T>(apiUrl: T[]): Promise <void>{
            try {
                const cardData = await getCardCall.getCards(apiUrl)
                this.cards = cardData.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
});