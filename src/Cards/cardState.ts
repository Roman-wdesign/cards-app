import { defineStore } from "pinia";
import getCardCall from '@/Cards/shared/api/getCards';
import type { IUseCardStore } from '@/shared/models/CardsModel'

interface State {
    cards: IUseCardStore<number, string>[]
}
//GET all cards
export const useCardStore = defineStore("cards",
    {
        state: (): State => ({
            cards: [],
        }),
        getters: {
            getCards: (state) => state.cards
        },
        actions: {
            async fetchCards(apiUrl: string): Promise<void> {
                try {
                    const cardData = await getCardCall.getCards(apiUrl)
                    this.cards = cardData.data.results
                } catch (e) {
                    console.log(e)
                }
            }
        }
    });