import { describe, expect, it, beforeEach } from 'vitest';
import {useCardStore} from "@/Cards/cardState";

import {createPinia, setActivePinia} from "pinia";

describe('CardList store',()=>{

    beforeEach(() =>{
            setActivePinia(createPinia())
        })


    it('store ', function () {
        const store = useCardStore()
        expect(store.cards).toBeTypeOf('object')
    });
})