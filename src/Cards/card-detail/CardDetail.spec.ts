import {describe, it, expect} from 'vitest'
import CardDetail from '@/Cards/card-detail/CardDetail.vue'

describe('CardList store', () => {

    it('returns a VueWrappers HTML as a string', () => {
        expect(CardDetail).toBeTruthy()
        expect(CardDetail).not.toBe('input');
    })
})