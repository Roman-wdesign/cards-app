import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import CardItem from '@/Cards/card-item/CardItem.vue'
    ;

describe('CardItem', () => {
    it('CardItem', () => {
        expect(CardItem).toBeTruthy()
    })
    it('CardItem', () => {
        expect({card__data: Object}).toBeDefined()
    })
})

