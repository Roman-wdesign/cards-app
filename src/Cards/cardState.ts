import {defineStore} from "pinia";
import axios from "axios";

//GET all cards
export const useCardStore = defineStore("card", {
    state: () => ({
        cards: [],
    }),
    getters: {
        getCards(state) {
            return state.cards;
        },
    },
    actions: {
        async fetchCards(){
            try{
            const data = await axios.get('https://rickandmortyapi.com/api/character')
                this.cards = data.data.results
            }catch(e){
              console.log(e)
            }
        }

        //same

        // fetchCards(){
        //     axios
        //     .get('https://rickandmortyapi.com/api/character')
        //     .then(res=>{
        //         (this.cards= res.data.results)
        //     })
        //          .catch (e=>{
        //             console.log(e);
        //          })
        // }
    }
});
