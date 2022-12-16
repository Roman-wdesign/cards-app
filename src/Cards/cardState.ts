import {defineStore} from "pinia";
import getCardCall from '@/Cards/shared/api/getCards';


//GET all cards
export const useCardStore: any = defineStore("card", {
    state: () => ({
        cards: [] as string[],
    }),
    getters: {
        getCards(state) {
            return state.cards;
        },
    },
    actions: {
        // fetchCards(apiUrl:any){
        //     getCardCall
        //     .getCards(apiUrl)
        //     .then(res=>{
        //         (this.cards= res.data.results)
        //     })
        //          .catch (e=>{
        //             console.log(e);
        //          })
        // }

        async fetchCards(apiUrl: string): Promise<any> {
            try {
                const data = await getCardCall.getCards(apiUrl)
                this.cards = data.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
});

