import {defineStore} from "pinia";
import getCardCall from '@/Cards/shared/api/getCards';


//GET all cards
export const useCardStore: any = defineStore("cards", 
    {
    state: () => ({
        cards: [] as string[],
    }),
    getters: {
        getCards: (state) => state.cards
    },
    actions: {
        async fetchCards(apiUrl: string): Promise<void>{
            try {
                const cardData = await getCardCall.getCards(apiUrl)
                this.cards = cardData.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
});